import Data from './data.xml';
import './style.css';

const loadMenu = ()=>{

  function importAll(r) {
    let images = {};
    r.keys().map(item => { images[item.replace('./', '')] = r(item); });
    return images;
  }

    const images = importAll(require.context('./images', false, /\.jpg$/));
    console.log(images);
    
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    
    const menuTitle = document.createElement('div');
    const menuTitleSpan = document.createElement('span');
    menuTitleSpan.textContent = 'Menu';
    menuTitle.appendChild(menuTitleSpan);
    menuTitle.classList.add('menuTitleDiv');
    menuTitleSpan.classList.add('menuTitle');

    const menuBody = document.createElement('div');
    menuBody.classList.add('menuBody');

    const menuBodyCont = document.createElement('div');
    menuBodyCont.classList.add('menuBodyContainer');
    
    const menulist = Data.menulist.menu;

    menulist.forEach(element => {
      const menuItem = document.createElement('div');

      const picContainer = document.createElement('div');
      const picHolder = document.createElement('img');
      const picSource = images[element.pic];
      picHolder.setAttribute('src',picSource);
      picHolder.classList.add('pic-container-img');
      picContainer.appendChild(picHolder);
      picContainer.classList.add('pic-container');

      const detailContainer = document.createElement('div');
      const detailContainerFlex = document.createElement('div');
      detailContainerFlex.classList.add('menuTitleDescCont');

      const detailTitle = document.createElement('div');
      detailTitle.textContent = element.name;
      detailTitle.classList.add('menuTitleText');

      const detailDesc = document.createElement('div');
      detailDesc.textContent = element.desc;
      detailDesc.classList.add('menuDescText');

      const detailprice = document.createElement('div');
      detailprice.textContent = element.price;
      detailprice.classList.add('menuDescPrice');
  
      detailContainerFlex.appendChild(detailTitle);
      detailContainerFlex.appendChild(detailDesc);

      detailContainer.appendChild(detailContainerFlex);
      detailContainer.appendChild(detailprice);
      detailContainer.classList.add('menu-detail-container');

      menuItem.appendChild(picContainer);
      menuItem.appendChild(detailContainer);
      menuItem.classList.add('menu-container');

      menuBodyCont.appendChild(menuItem);
    });

    menuBody.appendChild(menuBodyCont);
    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(menuBody);

    content.appendChild(menuContainer);

}
    
export {loadMenu};