
export const renderPortfolio = () => {
    console.log('You are here, at home.js');
    let main = document.querySelector('#main');
  
    let potfolioView =  `
    <h1>Selected projects</h1>
        <div class="projects-container">
            <div class="project-card">
                <div class="project-image-container">
                    <img src="images/login_mobile.png" alt="triplife" class="triplife">
                </div>
                <div class="project-skills">
                    <img src="images/html.png" alt="HTML" class="skill">
                    <img src="images/css.png" alt="css" class="skill">
                    <img src="images/js.png" alt="js" class="skill">
                    <img src="images/firebase.png" alt="firebase" class="skill">
                </div>
                <div class="project-info">
                    <p> <span>Proyecto:</span> Red social para viajeros. 
                        Permite registro a través de facebook o google, 
                        editar información personal, crear, editar y 
                        reaccionar a un post, así como elegir la 
                        privacidad de los mismos.</p>
                </div>
                <div class="project-links">
                    <a href="https://github.com/DorsD/CDMX009-Social-Network/tree/snFabiola" target="_blank">
                        <img src="images/github.png" alt="github" class="skill">
                    </a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image-container">
                    <img src="images/mimuvi.png" alt="mimuvi" class="mimuvi">
                </div>
                <div class="project-skills">
                    <img src="images/html.png" alt="HTML" class="skill">
                    <img src="images/css.png" alt="css" class="skill">
                    <img src="images/js.png" alt="js" class="skill">
                </div>
                <div class="project-info">
                    <p> <span>Proyecto:</span> Aplicación web para encontrar 
                        películas que muestra los resultados en un catálogo 
                        con información de cada una.</p>
                </div>
                <div class="project-links">
                    <a href="https://dorsd.github.io/CDMX009-Movie-Challenge/" target="_blank">
                        <img src="images/github.png" alt="github" class="skill">
                    </a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image-container">
                    <img src="images/dataLovers.png" alt="dataLovers" class="dataLovers">
                </div>
                <div class="project-skills">
                    <img src="images/html.png" alt="HTML" class="skill">
                    <img src="images/css.png" alt="css" class="skill">
                    <img src="images/js.png" alt="js" class="skill">
                </div>
                <div class="project-info">
                    <p> <span>Proyecto:</span> Aplicación web que muestra en un 
                        formato amigable para todo usuario datos del banco mundial 
                        para cuatro países: México, Chile, Perú y Brasil.</p>
                </div>
                <div class="project-links">
                    <a href="https://dorsd.github.io/CDMX009-Data-Lovers/" target="_blank">
                        <img src="images/github.png" alt="github" class="skill">        
                    </a>
                </div>
            </div>
        </div>      
    `
    main.innerHTML = potfolioView;
  }