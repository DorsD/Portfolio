
export const renderHome = () => {
  console.log('You are here, at home.js');
  let main = document.querySelector('#main');

  let homeView =  `
  <div class="home-container">
    <div class="language-menu">
        <p class="language" id="spanish">SP</p>
        <p>|</p>
        <p class="language" id="english" >EN</p>
    </div>
    <div class="content">
        <div class="description-container">
            <p>Hi!, I'm</p>
            <img src="images/name.png" alt="name" class="name">
            <p class="description"> I'm a front-end web developer, passionate about science and technology. 
            I love learning and be part of creative and disruptive solutions. 
            I deeply believe in humans being's potential to change the world.
            </p>
        </div>    
        <img src="images/logo.png" alt="logo" class="logo">
    </div>
    <div class="social-networks">
        <a href="https://github.com/DorsD" target="_blank"><i class="fab fa-github fa-2x"></i></a>
        <a href="https://mx.linkedin.com/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
        <!--<a href=""><i id ="share" class="fas fa-share-alt fa-lg"></i></a>--> 
    </div>
  </div>  
  `
  main.innerHTML = homeView;
}