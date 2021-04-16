import './css/style.css';
import './App.css';

import aboutextra1 from './img/about-extra-1.svg';
import aboutextra2 from './img/about-extra-2.svg';
import aboutimg from './img/about-img.svg';
import bb from './img/bb.jpg';
//import introbg from './img/intro-bg.png';
import introimg from './img/intro-img.svg';
import logo3 from './img/logo3.png';
import oscar from './img/oscar.jpg';
import team1 from './img/team-1.jpg';
import will1 from './img/will1.jpg';
import React from 'react';
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault()

  emailjs.sendForm('service_39ikwdg', 'template_ue69c6t', e.target, 'user_Zk3NLO0IXzZXjxGtK5hTl').then(
      (result) => {
          alert('Correo enviado correctamente');
      },
      (error) => {
          alert( 'Ocurrio un error, intente nuevamente')
          });
      e.target.reset()
}


function App() {


  
  return (
    <> 
 
 

{/*<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid container-md">
          <a class="navbar-brand" href="/">DIRECCIÓN DE TI <img src={logo3} href="/" alt="" width="60" height="48" class="d-inline-block align-text-top"></img></a>
          <div class="" >
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link active" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">Nosotros</a>
              </li>
              <li class="nav-item " >
                <a class="nav-link" href="#services">Servicios</a>
              </li>
              <li class="nav-item " >
                <a class="nav-link" href="#contact">Contáctanos</a>
              </li>
              <li class="nav-item " >
                <a class="nav-link" href="http://helpdesk.uisek.edu.ec/glpi">GLPI</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  */}


      <header id="header" class="fixed-top">
    <div class="container">

      <div class="logo float-left">
        
        <h1><a href="/">Direcci&oacute;n de TI</a>
        <a href="/"><img src={logo3} alt="" class=""></img></a></h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleXxl" aria-controls="navbarsExampleXxl" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      </div>

      <nav class="main-nav float-right d-none d-lg-block">
        <ul>
          <li class="nav-item active"><a href="/">Home</a></li>
          <li ><a href="#about">Nosotros</a></li>
          <li ><a href="#services">Servicios</a></li>
          <li ><a href="#contact">Cont&aacute;ctanos</a></li>
          <li ><a href="http://helpdesk.uisek.edu.ec/glpi">GLPI</a></li>
        </ul>
      </nav>
 
    </div>
  </header>



      <section id="intro" class="clearfix">
    <div class="container" data-aos="fade-up">

      <div class="intro-img" data-aos="zoom-out" data-aos-delay="200">
        <img src={introimg} alt="" class="img-fluid"></img>
      </div>

      <div class="intro-info" data-aos="zoom-in" data-aos-delay="100">
        <h2>Para crear un <span>TICKET</span>, por favor, envia un correo a <br></br><span>helpdesk@uisek.edu.ec</span><br></br></h2>
        <div>
          <a href="#contact" class="btn-get-started scrollto">Notificar Problema</a>
        </div>
      </div>

    </div>
  </section>




  

  <main id="main">

    <section id="about">
      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h3>Nosotros</h3>
          <p>
            La Direcci&oacute;n de Tecnolog&iacute;a de la UISEK es la encargada de establecer la estrategia de TI
            para la instituci&oacute;n, garantizando su aporte a los procesos sustantivos institucionales como son la
            docencia,
            investigaci&oacute;n y vinculaci&oacute;n con la sociedad.
          </p>
          <center>
            <div class="col-lg-8 background order-lg-2" data-aos="zoom-in">
              <img src={aboutimg} class="img-fluid" alt=""></img>
            </div>
          </center>
        </header>

        <div class="row about-container">

          <div class="col-lg-12 content order-lg-1 order-2">
            <p>
              Desarrollamos y mantenemos servicios inform&aacute;ticos de calidad para toda la comunidad universitaria,
              garantizando su continuidad, y proponiendo proyectos de innovaci&oacute;n tecnol&oacute;gica ya que
              contamos
              con un equipo
              humano profesional, con experiencia y comprometido con los objetivos institucionales..
            </p>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><i class="fa fa-shopping-bag"></i></div>
              <h4 class="title"><a href="/">Misi&oacute;n</a></h4>
              <p class="description">La Direcci&oacute;n de Tecnolog&iacute;a de la UISEK es la encargada de establecer la estrategia
                de
                TI para la instituci&oacute;n, garantizando su aporte a los procesos sustantivos institucionales
                como son la docencia, investigaci&oacute;n y vinculaci&oacute;n con la sociedad. Desarrollamos y
                mantenemos servicios inform&aacute;ticos de calidad para toda la comunidad universitaria,
                garantizando su continuidad, y proponiendo proyectos de innovaci&oacute;n tecnol&oacute;gica ya que
                contamos con un equipo humano profesional, con experiencia y comprometido con los
                objetivos institucionales.</p>
              <center>
                <div class="col-lg-6" data-aos="fade-right" >
                  <img src={aboutextra1} class="img-fluid" alt=""></img>
                </div>
              </center>
            </div>

            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><i class="fa fa-bar-chart"></i></div>
              <h4 class="title"><a href="/">Visi&oacute;n</a></h4>
              <p class="description">En 2023, ser una direcci&oacute;n consolidada, que brinda servicios de TI de calidad a
                toda la
                comunidad de la UISEK, dentro de un proceso de mejoramiento continuo e innovaci&oacute;n
                tecnol&oacute;gica.</p>
              <center>
                <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                  <img src={aboutextra2} class="img-fluid" alt=""></img>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>





   <section id="services" class="section-bg">
      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h3>Servicios</h3>
          <p>Nuestro cat&aacute;logo de servicios a su disposici&oacute;n.</p>
        </header>

        <div class="row justify-content-center">

          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
              <div class="icon"><i class="ion-ios-analytics-outline" ></i></div>
              <h4 class="title"><a href="/">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
              <div class="icon"><i class="ion-ios-bookmarks-outline" ></i></div>
              <h4 class="title"><a href="/">Dolor Sitema</a></h4>
              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat tarad limino ata</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
              <div class="icon"><i class="ion-ios-paper-outline" ></i></div>
              <h4 class="title"><a href="/">Sed ut perspiciatis</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
              <div class="icon"><i class="ion-ios-speedometer-outline" ></i></div>
              <h4 class="title"><a href="/">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="100">
            <div class="box">
              <div class="icon"><i class="ion-ios-world-outline" ></i></div>
              <h4 class="title"><a href="/">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-5" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
              <div class="icon"><i class="ion-ios-clock-outline" ></i></div>
              <h4 class="title"><a href="/">Eiusmod Tempor</a></h4>
              <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                soluta nobis est eligendi</p>
            </div>
          </div>

        </div>

      </div>
    </section>

   <section id="team">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h3>Team</h3>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
        </div>

        <div class="row">


	<div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="100">
            <div class="member">
              <img src={team1} class="img-fluid" alt=""></img>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div class="social">
                    <a href="/"><i class="fa fa-twitter"></i></a>
                    <a href="/"><i class="fa fa-facebook"></i></a>
                    <a href="/"><i class="fa fa-google-plus"></i></a>
                    <a href="/"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>


	<div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="100">
            <div class="member">
              <img src={team1} class="img-fluid" alt=""></img>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div class="social">
                    <a href="/"><i class="fa fa-twitter"></i></a>
                    <a href="/"><i class="fa fa-facebook"></i></a>
                    <a href="/"><i class="fa fa-google-plus"></i></a>
                    <a href="/"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

	<div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="100">
            <div class="member">
              <img src={team1} class="img-fluid" alt=""></img>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div class="social">
                    <a href="/"><i class="fa fa-twitter"></i></a>
                    <a href="/"><i class="fa fa-facebook"></i></a>
                    <a href="/"><i class="fa fa-google-plus"></i></a>
                    <a href="/"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>


	<div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="100">
            <div class="member">
              <img src={team1} class="img-fluid" alt=""></img>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div class="social">
                    <a href="/"><i class="fa fa-twitter"></i></a>
                    <a href="/"><i class="fa fa-facebook"></i></a>
                    <a href="/"><i class="fa fa-google-plus"></i></a>
                    <a href="/"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="100">
            <div class="member">
              <img src={team1} class="img-fluid" alt=""></img>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <div class="social">
                    <a href="/"><i class="fa fa-twitter"></i></a>
                    <a href="/"><i class="fa fa-facebook"></i></a>
                    <a href="/"><i class="fa fa-google-plus"></i></a>
                    <a href="/"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="200">
            <div class="member">
              <img src={bb} class="img-fluid" alt=""></img>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>BABY Jhonson</h4>
                  <span>Jr Developer</span>
                  <div class="social">
                    <a href="/"><i class="fa fa-twitter"></i></a>
                    <a href="/"><i class="fa fa-facebook"></i></a>
                    <a href="/"><i class="fa fa-google-plus"></i></a>
                    <a href="/"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="300">
            <div class="member">
              <img src={will1} class="img-fluid" alt=""></img>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Wilson Castro</h4>
                  <span>Software Architect</span>
                  <div class="social">
                    <a href="/"><i class="fa fa-twitter"></i></a>
                    <a href="/"><i class="fa fa-facebook"></i></a>
                    <a href="/"><i class="fa fa-google-plus"></i></a>
                    <a href="/"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-delay="400">
            <div class="member">
              <img src={oscar} class="img-fluid" alt=""></img>
              <div class="member-info">
                <div class="member-info-content">
                  <h4>Oscarete Llive</h4>
                  <span>Lider de Soporte</span>
                  <div class="social">
                    <a href="/"><i class="fa fa-twitter"></i></a>
                    <a href="/"><i class="fa fa-facebook"></i></a>
                    <a href="/"><i class="fa fa-google-plus"></i></a>
                    <a href="/"><i class="fa fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

      <section id="contact" class="section-bg">
      <div class="container-fluid" data-aos="fade-up">

        <div class="section-header">
          <h3>Cont&aacute;ctanos</h3>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <div class="map mb-4 mb-lg-0">
           <iframe title="title" src="https://www.google.com/maps/embed?pb=!1m25!1m12!1m3!1d3989.8132705854327!2d-78.48461233421175!3d-0.09115833551818227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m10!3e0!4m3!3m2!1d-0.0931188!2d-78.4792892!4m4!1s0x0%3A0xf6c279ab6ff59c23!3m2!1d-0.0911357!2d-78.4837546!5e0!3m2!1ses!2s!4v1481636447721" width="100%" height="300" ></iframe>   
	    </div>
          </div>

          <div class="col-lg-6">
            <div class="row">
              <div class="col-md-4 info">
                <i class="ion-ios-location-outline"></i>
                <p>Quito 170134, Ecuador</p>
              </div>
              <div class="col-md-4 info">
                <i class="ion-ios-email-outline"></i>
                <p>helpdesk@uisek.edu.ec</p>
              </div>
              <div class="col-md-4 info">
                <i class="ion-social-whatsapp-outline"></i>
                <p>+593 98 451 3549</p>
              </div>
            </div>

            <div class="form">
              <form action="forms/contact.php" onSubmit = {sendEmail} method="post" class="php-email-form" >
                <div class="form-row">
                  <div class="form-group col-lg-6">
                    <input type="text" name="name" class="form-control" required="required" id="name" placeholder="Nombre y Apellido" data-rule="minlen:2" data-msg="Por favor, ingrese su nombre" />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group col-lg-6">
                    <input type="email" class="form-control" name="email" required="required" id="email" placeholder="Email" data-rule="email" data-msg="Por favor, ingrese un email v&aacute;lido" />
                    <div class="validate"></div>
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" required="required" id="subject" placeholder="Asunto" data-rule="minlen:1" data-msg="Por favor, ingrese un asunto" />
                  <div class="validate"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" required="required" rows="5" data-rule="required" data-msg="Por favor, desccribir su inconveniente" placeholder="Mensaje"></textarea>
                  <div class="validate"></div>
                </div>
                <div class="mb-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit" title="Envia Mensaje">Enviar</button></div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>

  <footer id="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong>UISEK</strong>. All Rights Reserved
      </div>
      <div class="credits">

        Dise&ntilde;ado por: <a href="/">Direcci&oacute;n Tecnolog&iacute;a</a>
      </div>
    </div>
  </footer>
  </main>


  
    </>
  );
}

export default App;
