import React from 'react'

export const ElementoProyecto = (props) => {
    
  return (
    <div className='card bg-black text-white h-100 overflow-hidden'>
        <img loading="lazy" className='card-img rounded' src={ props.portada }></img>
        <div className="card-img-overlay overflow-hidden d-flex flex-column justify-content-end p-4">
            <h5 className="card-title mb-3"><strong>{ props.nombre }</strong></h5>
            <p className="card-text">{ props.descripcion }</p>
            <div className='tags-wrapper w-100'>
            <div className='scroll-tags ps-3'>
                <ul className='w-100 p-0 m-auto'>{ props.etiquetas }</ul>
            </div>
            </div>
        </div>
    </div>
  )
}
