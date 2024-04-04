import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export const ModalProyecto = (props) => {

  return (
    <Modal 
    {...props}
    size="lg"
    className='modal-proyecto' 
    data-bs-theme="dark" 
    centered
    >
        <Modal.Header className='modal-proyecto-header' closeButton>
            <Modal.Title>{ props.titulo }</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-proyecto-body p-0'>
            <img loading='lazy' src={ props.portada }></img>
            <div className='contenido px-3 py-3 py-md-4'>
                <div className='row px-4'>
                    <div className='col-12 col-lg-7'>
                        <p className='text-center text-md-start'>
                            { props.descripcion }
                        </p>
                        <div className='tags-wrapper w-100'>
                            <div className='scroll-tags'>
                                <ul className='w-100 p-0 m-auto'>{ props.habilidades }</ul>
                            </div>
                        </div>
                    </div>
                    <div className='col col-lg-5'>
                        <div className='py-0'>
                            <div className='row w-100 justify-content-center m-auto'>
                                {(props.enlace !== '') && 
                                    <Button 
                                    className='col-12 col-lg-10 m-2 rounded-pill' 
                                    variant='primary' 
                                    href = { props.enlace } 
                                    target='blank'>
                                        Abrir
                                    </Button>
                                }
                                {(props.repositorio !== '' && props.repositorio != null) && 
                                    <Button 
                                    className='col-12 col-lg-10 m-2 rounded-pill' 
                                    variant='secondary' 
                                    href = { props.repositorio } 
                                    target='blank'>
                                        GitHub
                                    </Button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer className='modal-proyecto-footer p-4'/>
    </Modal>
  )
}
