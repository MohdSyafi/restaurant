import './style.css';

const loadHome = ()=>{
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const homeContent = document.createElement('div');
    homeContent.classList.add('homeContent');

    const shopPic = document.createElement('div');
    shopPic.classList.add('home-shopPic');

    const shopPicTitle = document.createElement('div');
    shopPicTitle.textContent = 'The Restaurant';
    shopPicTitle.classList.add('home-shopPicTitle');

    const desc = document.createElement('div');
    desc.classList.add('home-desc');

    const descTitle = document.createElement('div');
    descTitle.textContent = 'Everyday : 8 a.m. to 3 p.m.';
    descTitle.classList.add('home-descTitle');

    const descBody = document.createElement('p');
    descBody.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur interdum vehicula. Maecenas elit tortor, gravida fermentum pharetra at, sagittis sed justo. Aliquam non nisl congue, volutpat purus at, vulputate nibh. Donec egestas dictum justo, ut porta lacus varius id. Nulla sodales, magna et placerat faucibus, mauris nisi fringilla magna, ut fermentum ante quam et est. In in massa congue, pretium metus vel, convallis erat. Curabitur felis erat, ultricies eget tincidunt vel, aliquet eu turpis. Nam tempus et diam a faucibus. Aliquam metus lorem, tincidunt sit amet iaculis non, luctus nec purus. In at sagittis magna. Etiam consequat vulputate bibendum.";
    descBody.classList.add('home-descBody');

    shopPic.appendChild(shopPicTitle);
    desc.appendChild(descTitle);
    desc.appendChild(descBody);

    homeContent.appendChild(shopPic);
    homeContent.appendChild(desc);

    content.appendChild(homeContent);
}
    
export {loadHome};