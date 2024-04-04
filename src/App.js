import 'bootstrap/dist/css/bootstrap.css'; 
import git_logo from './logos/github-mark-white.svg';
import linkedin_logo from './logos/linkedin.svg';
import bootstrap_logo from './logos/bootstrap.svg';
import c_logo from './logos/c.svg';
import cplus_logo from './logos/cplus.svg';
import csharp_logo from './logos/csharp.svg';
import css3_logo from './logos/css3.svg';
import html5_logo from './logos/html5.svg';
import java_logo from './logos/java.svg';
import javascript_logo from './logos/javascript.svg';
import nodejs_logo from './logos/nodejs.svg';
import php_logo from './logos/php.svg';
import react_logo from './logos/react.svg';
import { GaleriaProyectos } from './componentes/GaleriaProyectos';
import Tooltip from 'react-bootstrap/Tooltip'; 
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FormularioContacto } from './componentes/FormularioContacto';

function App () {

  return (
    <div className="contenedor m-auto h-100 justify-content-center text-white d-flex p-3 p-md-3">

      <main className="w-100 p-3 p-md-5">
        <div className='cabecera'>
          <div className="row m-auto w-100 h-100">
            <div className="col-12 col-md-4 order-first order-md-last text-center my-5 my-md-0">
              <img className="rounded-circle shadow img-fluid" src="img/perfil.webp"/>
            </div>
            <div className="col-12 col-md-8 p-0 order-last order-md-first text-center text-md-start">
              <h3>Hola, soy</h3>
              <h1><strong>Jonathan Ruiz Olvera</strong></h1>
              <h3 className="texto-resaltar">Desarrollador de Software</h3>
              <div className="row w-100 text-center text-md-start m-auto">
                <div className="col-12">
                  <a href='http://jrodev.x10.mx/recursos/CV%20%Jonathan%20%Ruiz.pdf' target='_blank' download="CV_Jonathan_Ruiz.pdf">
                    <button className="btn btn-primary me-3 px-3 rounded-pill">Descargar CV</button>
                  </a>
                  <OverlayTrigger overlay={ tooltip('Perfil de GitHub') } placement="bottom">
                    <a href="https://github.com/Jruizdev" target='_blank'>
                      <img className='me-3 img-btn' src={git_logo} width='40' height='40'></img>
                    </a>
                  </OverlayTrigger>
                  <OverlayTrigger overlay={ tooltip('Perfil de LinkedIn') } placement="bottom">
                    <a href='https://www.linkedin.com/in/jonathan-ruiz-abab91199/' target='_blank'>
                      <img className='img-btn' src={linkedin_logo} width='40' height='40'></img>
                    </a>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='contenido'>
          <div className="mt-5 mb-5 mt-md-4 mb-md-5 pt-3 pt-md-0 text-center text-md-start">
            <h3>Acerca de mí</h3>
            <p className="my-3 texto-silenciado">
              Desarrollador junior con habilidades de autoaprendizaje y experiencia en el uso de tecnologías frontend y backend. Me apasiona el mundo de la tecnología y el desarrollo de soluciones robustas. </p>
            <p className="my-3 texto-silenciado">El aprendizaje constante es mi filosofía, y considero que cada nuevo problema es una oportunidad para aprender algo nuevo, así que siempre estoy dispuesto a asumir nuevos desafíos.
            </p>
          </div>
          <div className="row m-auto text-center text-md-start">
            <div className="dark col-12 col-md-5 p-4 me-auto mb-4 mb-md-0 rounded">
              <h4 className="mb-4 texto-secundario">Educación</h4>
              <h6><strong>Ing. Desarrollo de Software</strong></h6>
              <p>UnADM | 2020 - Presente</p>
            </div>
            <div className="dark col-12 col-md-6 p-4 ms-auto rounded">
              <h4 className="texto-secundario">Habilidades</h4>
              <div className='habilidades'>
                  <div className='scroll py-3'>
                    <ul>
                      <OverlayTrigger overlay={ tooltip('Bootstrap') } placement="bottom">
                        <li><img src={bootstrap_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('Lenguaje C') } placement="bottom">
                        <li><img src={c_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('Lenguaje C++') } placement="bottom">
                        <li><img src={cplus_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('Lenguaje C#') } placement="bottom">
                        <li><img src={csharp_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('CSS 3') } placement="bottom">
                        <li><img src={css3_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('HTML 5') } placement="bottom">
                        <li><img src={html5_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('Java') } placement="bottom">
                        <li><img src={java_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('JavaScript') } placement="bottom">
                        <li><img src={javascript_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('Node.js') } placement="bottom">
                        <li><img src={nodejs_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('PHP') } placement="bottom">
                        <li><img src={php_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('React') } placement="bottom">
                        <li><img src={react_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                    </ul>
                    <ul aria-hidden="true">
                      <OverlayTrigger overlay={ tooltip('Bootstrap') } placement="bottom">
                        <li><img src={bootstrap_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('Lenguaje C') } placement="bottom">
                        <li><img src={c_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('Lenguaje C++') } placement="bottom">
                        <li><img src={cplus_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('Lenguaje C#') } placement="bottom">
                        <li><img src={csharp_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('CSS 3') } placement="bottom">
                        <li><img src={css3_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('HTML 5') } placement="bottom">
                        <li><img src={html5_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('Java') } placement="bottom"> 
                        <li><img src={java_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('JavaScript') } placement="bottom">
                        <li><img src={javascript_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('Node.js') } placement="bottom">
                        <li><img src={nodejs_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('PHP') } placement="bottom">
                        <li><img src={php_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                      <OverlayTrigger overlay={ tooltip('React') } placement="bottom">
                        <li><img src={react_logo} width='48px' height='48px'></img></li>
                      </OverlayTrigger>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
          <div className="row my-5 mx-auto">
            <h3 className='p-0 text-center text-md-start'><strong>Proyectos realizados</strong></h3>

            <GaleriaProyectos/>

          </div>
          <div className="dark row m-auto rounded text-center px-3 px-md-5 pt-4 pb-5" data-bs-theme="dark">
            <div className="col-12">

              <FormularioContacto/>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function tooltip (mensaje) { 
  return <Tooltip>{ mensaje }</Tooltip> 
}

export default App;