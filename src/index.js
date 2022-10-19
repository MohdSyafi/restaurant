import './style.css';
import {loadHome} from './home';
import {loadMenu} from './menu';
import {loadContact} from './contact';

function resetPage(){

    const body = document.querySelector("body");
    body.innerHTML = '';
    body.classList.add('body');

    const header =  document.createElement("div");
    header.classList.add('header');
    
    const content = document.createElement("div");
    content.classList.add('content');

    const footer = document.createElement("div");
    footer.classList.add('footer');
    
    body.appendChild(header);
    body.appendChild(content);
    body.appendChild(footer);
}

function createNavbar(){
    const header = document.querySelector('.header');

    const home = document.createElement("div");
    home.classList.add('navbarItem');
    home.classList.add('navbarSelected');
    home.textContent= 'Home';
    home.setAttribute('data-name','home');

    const menu = document.createElement("div");
    menu.classList.add('navbarItem');
    menu.textContent = 'Menu';
    menu.setAttribute('data-name','menu');

    const contact = document.createElement("div");
    contact.classList.add('navbarItem');
    contact.textContent = 'Contact';
    contact.setAttribute('data-name','contact');

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);
}

function addEventListener(){
    const menu = document.querySelector('[data-name="menu"]'); 
    const home = document.querySelector('[data-name="home"]');
    const contact = document.querySelector('[data-name="contact"]'); 

    menu.addEventListener('click', e=> changePage(e.target.getAttribute('data-name')));
    home.addEventListener('click', e=> changePage(e.target.getAttribute('data-name')));
    contact.addEventListener('click', e=> changePage(e.target.getAttribute('data-name')));
}

function changePage(page){

    const menu = document.querySelector('[data-name="menu"]'); 
    const home = document.querySelector('[data-name="home"]');
    const contact = document.querySelector('[data-name="contact"]'); 

    switch(page){
        case 'home':
            selectTab(home);
            unselectTab(menu);
            unselectTab(contact);
            loadHome();
            break;
        case 'menu':
            selectTab(menu);
            unselectTab(home);
            unselectTab(contact);
            loadMenu();
            break;
        case 'contact':
            selectTab(contact);
            unselectTab(menu);
            unselectTab(home);
            loadContact();
            break;
    }
}

function selectTab(page){
    page.classList.add('navbarSelected');
}

function unselectTab(page){
    page.classList.remove('navbarSelected');
}

resetPage();
createNavbar();
addEventListener();
loadHome();



    














