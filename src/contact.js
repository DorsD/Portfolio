export const renderContact = () => {
    console.log('You are here, at home.js');
    let main = document.querySelector('#main');
  
    let contactView =  `
    <div class="form-container">
            <p>Hey, I'm glad you are here. Write me about your project 
                and I will be in contact with you as soon as possible. </p> 
            <div class="form">
                <input type="text" placeholder="Name">
                <input type="email" name="" id="" placeholder="Mail">
                <textarea name="" id="" cols="30" rows="10" placeholder="Tell me about your project"></textarea> 
                <input type="button" value="Send">
            </div>
            <p>Or take a look at my social networks. </p> 
            <div class="social-networks">
                <a href="https://github.com/DorsD" target="_blank"><i class="fab fa-github fa-3x"></i></a>
                <a href="https://mx.linkedin.com/" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
                <!--<a href=""><i id ="share" class="fas fa-share-alt fa-lg"></i></a>--> 
            </div>     
        </div>
        <div class="back-image-container">
            <img src="images/rocket.png" alt="skills-image" class="">   
        </div>
        <div class="first-back-image-container">
            <img src="images/rocketFront.png" alt="skills-image" class="">   
        </div>
    `
    main.innerHTML = contactView;
  }