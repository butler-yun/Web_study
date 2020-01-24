const body = document.querySelector('body');
const submenu = document.querySelector('.tabletSubmenu');
const hambugBtn = document.querySelector('.tabletGnb__trigger');
const closeBtn = document.querySelector('.search__closeBtn');

const SHOW_CN = 'show';
const OVERFLOW_HIDDEN = 'overflow_hidden';
const ON = 'd_block';
const ROTATE_CN = 'rotate_arrow';

const showSubmenu = () => {
    submenu.classList.add(SHOW_CN);
    body.classList.add(OVERFLOW_HIDDEN);
}

const hideSubmenu = () => {
    submenu.classList.remove(SHOW_CN);
    body.classList.remove(OVERFLOW_HIDDEN);
}

const isActiveSubmenu = (event) => {
    const target = event.target;
    const sibling = target.nextElementSibling;
    const childArrow = target.children[0];
    sibling.classList.toggle(ON);
    childArrow.classList.toggle(ROTATE_CN)
}

function init(){
    hambugBtn.addEventListener('click', showSubmenu);
    closeBtn.addEventListener('click', hideSubmenu);
    submenu.addEventListener('click', isActiveSubmenu);
}
init();