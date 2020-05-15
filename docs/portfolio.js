
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
                    <img src="images/html.png" alt="HTML" class="p-skill">
                    <img src="images/css.png" alt="css" class="p-skill">
                    <img src="images/js.png" alt="js" class="p-skill">
                    <img src="images/firebase.png" alt="firebase" class="p-skill">
                </div>
                <div class="project-info">
                    <p> <span>Project:</span> TripLife. <br>
                        <span>Features:</span> Social network for travellers. Login with a Google or Facebook account, profile edition, 
                        create, edit, and react to a post, as well as choose post privacy status.  
                        <!--Red social para viajeros. 
                        Permite registro a través de facebook o google, 
                        editar información personal, crear, editar y 
                        reaccionar a un post, así como elegir la 
                        privacidad de los mismos.--></p>
                </div>
                <div class="project-links">
                    <a href="https://github.com/DorsD/CDMX009-Social-Network/tree/snFabiola" target="_blank">
                        <img src="images/github.png" alt="github" class="p-skill">
                    </a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image-container">
                    <img src="images/mimuvi.png" alt="mimuvi" class="mimuvi">
                </div>
                <div class="project-skills">
                    <img src="images/html.png" alt="HTML" class="p-skill">
                    <img src="images/css.png" alt="css" class="p-skill">
                    <img src="images/js.png" alt="js" class="p-skill">
                </div>
                <div class="project-info">
                    <p> <span>Project:</span> MiMuvi. <br>
                        <span>Features:</span> Search a movie by keywords.
                        Display of the selected movie poster and information by using APIs.  
                        
                        <!--Aplicación web para encontrar 
                        películas que muestra los resultados en un catálogo 
                        con información de cada una.--></p>
                </div>
                <div class="project-links">
                    <a href="https://dorsd.github.io/CDMX009-Movie-Challenge/" target="_blank">
                        <img src="images/github.png" alt="github" class="p-skill">
                    </a>
                </div>
            </div>

            <div class="project-card">
                <div class="project-image-container">
                    <img src="images/dataLovers.png" alt="dataLovers" class="dataLovers">
                </div>
                <div class="project-skills">
                    <img src="images/html.png" alt="HTML" class="p-skill">
                    <img src="images/css.png" alt="css" class="p-skill">
                    <img src="images/js.png" alt="js" class="p-skill">
                </div>
                <div class="project-info">
                    <p> <span>Project:</span> Bars and dots. <br>
                        <span>Features:</span> Display data from world bank open data in a friendly interface 
                        for four Latin countries: Mexico, Chile, Peru, and Brazil. 
                        Shows every indicator graphics and lets the user compare them.  


                        <!-- Aplicación web que muestra en un 
                        formato amigable para todo usuario datos del banco mundial 
                        para cuatro países: México, Chile, Perú y Brasil.--></p>
                </div>
                <div class="project-links">
                    <a href="https://dorsd.github.io/CDMX009-Data-Lovers/" target="_blank">
                        <img src="images/github.png" alt="github" class="p-skill">        
                    </a>
                </div>
            </div>
        </div>      
    `
    main.innerHTML = potfolioView;
  }