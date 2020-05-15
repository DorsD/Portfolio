import {renderHome} from './home.js';
import {renderAbout} from './about.js';
import {renderPortfolio} from './portfolio.js';
import {renderContact} from './contact.js';

const appendStyleSheet = (nameSheet) => {
    let link = document.querySelector('[title="styleSheet"]');
    link.removeAttribute('href');
    link.setAttribute('href',nameSheet);
    console.log(link);
}

export const router = (route) =>{
    console.log(route)
    switch(route){
      case 'about':
        appendStyleSheet('aboutStyle.css');
        renderAbout();
        return;
      case 'portfolio':
        appendStyleSheet('portfolioStyle.css');
        renderPortfolio();
        return;
        case 'contact':
        appendStyleSheet('contactStyle.css');
        renderContact();
        return;
      default:
        appendStyleSheet('homeStyle.css');
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