import Data from './data.xml';
import './style.css';

const loadContact = ()=>{

    function importAll(r) {
        let images = {};
        r.keys().map(item => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('./images', false, /\.jpg$/));

    const content = document.querySelector('.content');
    content.innerHTML = '';

    const contactBody = document.createElement('div');
    contactBody.classList.add('contactBody');

    const contactTitle = document.createElement('div');
    contactTitle.classList.add('contactTitle');

    const contactTitleSpan = document.createElement('span');
    contactTitleSpan.classList.add('contactTitleSpan');    
    contactTitleSpan.textContent = 'Contact us';

    const contactListDiv = document.createElement('div');
    contactListDiv.classList.add('contactListDiv');

    const contactList = Data.datalist.contact;

    contactList.forEach(element => {

        const contactBox = document.createElement('div');

        const contactProfile = document.createElement('div');
        const contactNameDiv = document.createElement('div');

        const contactName = document.createElement('span');
        contactName.textContent = element.name;

        const contactPic = document.createElement('img');
        const picSource = images[element.pic];
        contactPic.setAttribute('src',picSource);

        const contactEmail = document.createElement('div');
        contactEmail.textContent = element.email; 

        const contactPhone = document.createElement('div');
        contactPhone.textContent = element.phone;

        contactNameDiv.appendChild(contactName);

        contactProfile.appendChild(contactPic);
        contactProfile.appendChild(contactEmail);
        contactProfile.appendChild(contactPhone);

        contactBox.appendChild(contactNameDiv);
        contactBox.appendChild(contactProfile);

        contactListDiv.appendChild(contactBox);
    });

    contactTitle.appendChild(contactTitleSpan);
    contactBody.appendChild(contactTitle);
    contactBody.appendChild(contactListDiv);
    content.appendChild(contactBody);
}
    
export {loadContact};