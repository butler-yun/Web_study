const bnr = document.querySelector('.bnr');
const closeBtn = bnr.querySelector('.jsCloseBtn');

const handleRemove = () => {
    bnr.remove();
}

if(bnr) {
    closeBtn.addEventListener('click', handleRemove);
}