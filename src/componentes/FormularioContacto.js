import React, { useRef, useState } from 'react';
import { ModalEmailEnviado } from './ModalEmailEnviado';
import { Overlay, Popover } from 'react-bootstrap';

function mostrarPopover (msj) {
    return (
        <Popover className='px-3 py-2 z-0'>{ msj }</Popover>
    );
};

export const FormularioContacto = () => {

    const useForm = (camposIniciales, onValidate) => {
        const [formulario, setForm] = useState (camposIniciales);
        const [cargando, setLoading] = useState (false);
        const [errores, setErrors] = useState ({});
        const [mostrarModal, setShowModal] = useState (false);
        const [nombre, setNombre] = useState ("");

        const handleChange = (e) => {
            const {name, value} = e.target;
            setForm ({...formulario, [name]: value});
        }

        const handleSubmit = (e) => {

            e.preventDefault();
            const error = onValidate (formulario);
            setErrors (error);

            if(Object.keys(error).length === 0) {
                setLoading (true);

                // Enviar correo electrónico mediante servicio de FormSubmit
                fetch ("https://formsubmit.co/ajax/c9fd497aa42ff2b8b25ada1db5755781", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify (formulario)
                    })
                    .then (response => response.json())
                    .then (data => {
                        if(data.success === "true") {

                            // Email enviado correctamente
                            setNombre (formulario.name);
                            setForm (camposIniciales);
                            setShowModal (true);
                        }
                    })
                    .catch (error => console.log (error))
                    .finally (() => {
                        setLoading (false);
                    });
            } 
        }
        return {
            formulario, cargando, errores, mostrarModal, nombre, 
            setShowModal, handleChange, handleSubmit
        };
    }

    const camposIniciales = {
        name: '',
        email: '',
        message: ''
    }

    const onValidate = (formulario) => {
        let errores = {}
        let regexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexCorreo = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        setVisible (true);

        if(!formulario.name.trim()) {
            errores.name = 'Es necesario llenar este campo';
        } else if (!regexNombre.test (formulario.name)) {
            errores.name = 'El nombre solo puede contener letras y espacios';
        }
        if(!formulario.email.trim()) {
            errores.email = 'Es necesario llenar este campo';
        } else if (!regexCorreo.test(formulario.email)) {
            errores.email = 'El correo ingresado no es válido';
        }
        if(!formulario.message.trim()) {
            errores.message = 'Es necesario llenar este campo';
        }
        if (errores != null) {

            // Ocultar mensaje de error después de 5 segundos
            setTimeout(function () {
                setVisible(false);
            }, 5000);
        }
        
        return errores;
    }

    const {
        formulario, cargando, mostrarModal, errores, nombre,
        setShowModal, handleChange, handleSubmit } = useForm (camposIniciales, onValidate);

    const campo_nombre = useRef(null);
    const campo_email = useRef(null);
    const campo_msg = useRef(null);
    const [msg_visible, setVisible] = useState (true);

    return (
        <form onSubmit = { handleSubmit }>

            <ModalEmailEnviado nombre={ nombre } show={ mostrarModal } onHide={() => setShowModal (false) }/>

            <h3>Contacto</h3>
            <div className="my-3">
                <input ref={campo_nombre} className="campo form-control w-100" type="text" name="name" placeholder="Nombre" 
                       value={formulario.name} onChange={ handleChange } disabled = { cargando }>
                </input>
                <Overlay target={campo_nombre.current} show={errores.name && msg_visible} placement='bottom'>
                    { mostrarPopover (errores.name) }
                </Overlay>
            </div>
            <div className="mb-3">
                <input ref={campo_email} className="campo form-control w-100" type="email" name="email" placeholder="Correo" 
                       value={formulario.email} onChange={ handleChange } disabled = { cargando }>
                </input>
                <Overlay target={campo_email.current} show={errores.email && !errores.name && msg_visible} placement='bottom'>
                    { mostrarPopover (errores.email) }
                </Overlay>
            </div>
            <div className="mb-3">
                <textarea ref={ campo_msg } className="campo form-control w-100" type="text" name="message" placeholder="Mensaje" 
                          value={formulario.message} onChange={ handleChange } disabled = { cargando }>
                </textarea>
                {(errores.message && !errores.email) && <div className='m-4 p-1'></div>}
                <Overlay target={campo_msg.current} show={errores.message && !errores.email && msg_visible} placement='bottom'>
                    { mostrarPopover (errores.message) }
                </Overlay>
            </div>
            <input type="hidden" name="_captcha" value="false"></input>
            <div className="row m-0">
                <button className="btn btn-primary w-100" type='submit' disabled={cargando}>{cargando ? "Enviando..." : "Enviar"}</button>
            </div>
        </form>
    )
}
