const hambugBtn = document.querySelector('.tabletGnb__trigger');
const submenu = document.querySelector('.tabletSubmenu');
const closeBtn = document.querySelector('.search__closeBtn');
const topMenu = document.querySelector('.utilmenu__top');
const dep_2 = document.querySelector('.utilmenu_2dep');
const dep_3 = document.querySelector('.utilmenu_3dep');

const SHOW_CN = 'show';
const ON = 'on'

const showSubmenu = () => {
    submenu.classList.add(SHOW_CN);
}

const hideSubmenu = () => {
    submenu.classList.remove(SHOW_CN);
}

const show2DepMenu = (event) => {
    const target = event.target.parentNode;
    target.classList.add(ON);

}

function init(){
    hambugBtn.addEventListener('click', showSubmenu);
    closeBtn.addEventListener('click', hideSubmenu);
    topMenu.addEventListener('click', show2DepMenu);
    dep_2.addEventListener('click', show2DepMenu);

}
init();