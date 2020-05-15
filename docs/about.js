export const renderAbout = () => {
    
    console.log('You are here, at home.js');
    let main = document.querySelector('#main');
  
    let aboutView =  `
         
    <h1 class="title">Skills</h1>
    <p> Learning to code has been a challenging and incredible experience. What I enjoy the most, it's the creative process. 
   <br> Every project it's a new opportunity to dare myself and impact others with all I'm capable to do. </p>
    <div class="skills-container">
       
        <div class="skills-box tech-skills-container">
           
            <div class="skill-icon">
                <img src="images/html.png" alt="HTML" class="skill">
                <p>HTML5</p>
            </div>
            <div class="skill-icon">
                <img src="images/css.png" alt="css" class="skill">
                <p>CSS3</p>
            </div>
            <div class="skill-icon">
                <img src="images/js.png" alt="js" class="skill">
                <p>Javascript</p>
            </div>
            <div class="skill-icon">
                <img src="images/node.png" alt="node" class="skill">
                <p>Node</p>
            </div>
            <div class="skill-icon">
                <img src="images/firebase.png" alt="firebase" class="skill">
                <p>Firebase</p>
            </div>
            <div class="skill-icon">
                <img src="images/python.png" alt="python" class="skill">
                <p>Python3</p>
            </div>
            <div class="skill-icon">
                <img src="images/github.png" alt="github" class="skill">
                <p>Github</p>
            </div>
            <div class="skill-icon">
                <img src="images/figma.png" alt="figma" class="skill">
                <p>Figma</p>
            </div>
            <div class="skill-icon">
                <img src="images/trello.png" alt="trello" class="skill">
                <p>Trello</p>
            </div>
            <div class="skill-icon">
                <img src="images/miro.png" alt="miro" class="skill">
                <p>Miro</p>
            </div>            
            <div class="skill-icon">
                <img src="images/overleaf.png" alt="overleaf" class="skill">
                <p>Overleaf</p>
            </div>
            <div class="skill-icon">
                <img src="images/canva.png" alt="canva" class="skill">
                <p>Canva</p>
            </div>

        </div>
    
        <div class="skills-box method-skills-container">
            <div class="skill-icon">
                <img src="images/scrum.png" alt="scrum" class="skill">
                <p>Scrum</p>
            </div>
            <div class="skill-icon">
                <img src="images/kanban.png" alt="kanban" class="skill">
                <p>Kanban</p>
            </div>
            <div class="skill-icon">
                <img src="images/lean.png" alt="lean" class="skill">
                <p>Lean Startup</p>
            </div>
        </div>
    <div class="back-image-container">
        <img src="images/skills-image.png" alt="skills-image" class="">   
    </div>
    `
    main.innerHTML = aboutView;
  }