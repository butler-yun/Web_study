/************************/
/*** mobile util menu ***/
/************************/

const SHOW = 'showing';
const HIDDEN = 'hidden';
const MAX_HEIGHT = 'max-height';
const TRANSFORM_ROTATE = 'transform-rotate';

const body = document.querySelector('body');
const utilBtn = document.querySelector('.util-btn');
const closeBtn = document.querySelector('.close-btn');
const utilPage = document.querySelector('.mobile-utilpage');

const showUtilPage = () => {
    utilPage.classList.add(SHOW);
    activeScroll();
}

const hideUtilPage = () => {
    utilPage.classList.remove(SHOW);
    activeScroll();
}

utilBtn.addEventListener('click', showUtilPage);
closeBtn.addEventListener('click', hideUtilPage);



/************************/
/*** mobile gnb menu ***/
/************************/

const mobileGnbBtn = document.querySelector('.m-gnb-btn');
const gnbMenu = document.querySelector('.gnb');
const gnbList = gnbMenu.querySelector('.gnb__list');
const gnbCloseBtn = document.querySelector('.gnb-close-btn');
const gnbMenuIcon = document.querySelector('.gnb__list__link--icon');

const showGnb = () => {
    gnbMenu.classList.add(SHOW);
    activeScroll();
}

const hideGnb = () => {
    gnbMenu.classList.remove(SHOW);
    activeScroll();
}

const activeSubMenu = (event) => {
    const target = event.target;
    const subMenu = target.nextElementSibling;
    const icon = target.firstElementChild;
    const className = 'gnb__list__link';

    if(target.classList.contains(className) && subMenu) {
        subMenu.classList.toggle(MAX_HEIGHT);
        icon.classList.toggle(TRANSFORM_ROTATE);
    }
}

mobileGnbBtn.addEventListener('click', showGnb);
gnbCloseBtn.addEventListener('click', hideGnb);
gnbMenu.addEventListener('click', activeSubMenu);


const activeScroll = () => {
    if(utilPage.classList.contains(SHOW)) {
        body.classList.add(HIDDEN);
    } else if (gnbMenu.classList.contains(SHOW)) {
        body.classList.add(HIDDEN);
    } else {
        body.classList.remove(HIDDEN);
    }
}