document.addEventListener('DOMContentLoaded', function(){
    loadContactList();
    setupNavigation();
});

function loadContactList(){
    const contactList = document.getElementById('contactList');

    const contactsData = [
        {id: 1, name: 'Contacto 1'},
        {id: 2, name: 'Contacto 2'},
        {id: 3, name: 'Contacto 3'},
        {id: 4, name: 'Contacto 4'},
        {id: 5, name: 'Contacto 5'},

    ];

    contactsData.forEach(function (contact){
        const li = document.createElement('li');
        li.innerHTML = `<a href="contact-details.html?id=${contact.id}">${contact.name}</a>`;
        contactList.appendChild(li);
    })
}

function redirectToNewContact(){
    window.location.href = 'new-contact.html';
}

function setupNavigation(){
    const navigationContainer = document.getElementById('navigationContainer');
    const profileLink = createNavigationLink('Perfil', 'user-profile.html');
    const favoritesLink = createNavigationLink('Favoritos', 'favorites.html');
    const todoLink = createNavigationLink('Lista de Tareas', 'todo-list.html');

    navigationContainer.appendChild(profileLink);
    navigationContainer.appendChild(favoritesLink);
    navigationContainer.appendChild(todoLink);
}

function createNavigationLink(label, href){
    const link = document.createElement('a');
    link.textContent = label;
    link.href = href;
    link.classList.add('navigation-link');
    return link;
}