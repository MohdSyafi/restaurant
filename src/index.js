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
            home.classList.add('navbarSelected');
            menu.classList.remove('navbarSelected');
            contact.classList.remove('navbarSelected');
            break;
        case 'menu':
            home.classList.remove('navbarSelected');
            menu.classList.add('navbarSelected');
            contact.classList.remove('navbarSelected');
            break;
        case 'contact':
            home.classList.remove('navbarSelected');
            menu.classList.remove('navbarSelected');
            contact.classList.add('navbarSelected');
            break;
    }
}

resetPage();
createNavbar();
addEventListener();



    














