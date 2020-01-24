const gnbSearch = document.querySelector('.gnb__search');
const btn = gnbSearch.querySelector('.btn');
const input = gnbSearch.querySelector('input');


const SEARCH_CL = 'd_inline_bl';

const handleSearch = () => {
    input.classList.add(SEARCH_CL);
}

function init(){
    btn.addEventListener('click', handleSearch);
}
init();