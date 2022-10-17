import './style.css'

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

    const menu = document.createElement("div");
    menu.classList.add('navbarItem');
    menu.textContent = 'Menu';
    menu.setAttribute('data-name','menu');

    const contact = document.createElement("div");
    contact.classList.add('navbarItem');
    contact.textContent = 'Contact';

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);
}

function addEventListener(){
    const menu = document.querySelector('[data-name="menu"]');
    
    menu.addEventListener('click', ()=> {
        console.log('click');
        menu.classList.add('navbarSelected');
    });
}

resetPage();
createNavbar();
addEventListener();



    














