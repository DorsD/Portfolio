import {renderHome} from './home.js';
import {renderAbout} from './about.js';
import {renderPortfolio} from './portfolio.js';
import {renderContact} from './contact.js';

export const router = (route) =>{
    console.log(route)
    switch(route){
      case 'about':
        renderAbout();
        return;
      case 'portfolio':
        renderPortfolio();
        return;
        case 'contact':
        renderContact();
        return;
      default:
        renderHome();
        return;
    }
}

const deselect = () => {
  let menuOptionList = document.querySelectorAll('.menu-option');
  menuOptionList.forEach( e =>{
    e.classList.remove("selected");
  });
}

let homeBtn = document.querySelector('#home');
let aboutBtn = document.querySelector('#about');
let portfolioBtn = document.querySelector('#portfolio');
let contactBtn = document.querySelector('#contact');

homeBtn.addEventListener('click', () => {
  deselect();
  document.querySelector('#home').classList.add('selected');
  router();
});
aboutBtn.addEventListener('click', () => {
  deselect();
  document.querySelector('#about').classList.add('selected');
  
  router('about')
});
portfolioBtn.addEventListener('click', () => {
  deselect();
  document.querySelector('#portfolio').classList.add('selected');
  router('portfolio')
});
contactBtn.addEventListener('click', () => {
  deselect();
  document.querySelector('#contact').classList.add('selected');
  router('contact')
});

router();