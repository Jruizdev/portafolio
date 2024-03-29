import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export const ModalEmailEnviado = (props) => {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title><strong>Email enviado</strong></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='row'>
                    <div className='col-3 text-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="green" className="bi bi-envelope-check" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686"/>
                    </svg>
                    </div>
                    <div className='col-9'>
                    <p>Hola, { props.nombre }</p>
                    <p>
                        Agradezco que te pongas en contacto conmigo. Atenderé tu mensaje tan pronto como me sea posible.</p>
                    <p>Saludos!</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className='m-auto px-5' variant="primary" onClick={props.onHide}>
                    Aceptar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
