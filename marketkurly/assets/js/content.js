
/* ******************************* */
/* ********** close btn ********** */
/* ******************************* */

const bnr = document.querySelector('.bnr');
const closeBtn = bnr.querySelector('.jsCloseBtn');

const handleRemove = () => {
    bnr.remove();
}

if(bnr) {
    closeBtn.addEventListener('click', handleRemove);
}

/* ******************************* */
/* ********** timer ********** */
/* ******************************* */

const timer = document.querySelector('.timeRemaining');

function counter(){
    const dday = new Date("2020-02-15 20:00:00").getTime(); //디데이

    setInterval(function(){
        
        const now = new Date(); //현재 날짜 가져오기
        const distance = dday - now;
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        const timeRemaining = `${h < 10 ? `0${h}` : `${h}`}: ${m < 10 ? `0${m}` : `${m}`}: ${s < 10 ? `0${s}` : `${s}`} 남음`;

        timer.innerText = timeRemaining;
    }, 1000);
}
counter();


/* ******************************* */
/* ********** scroll ********** */
/* ******************************* */

function scrollMove() {
    const gnb = document.querySelector('.gnb');
    const offsetY = window.pageYOffset;

    const FIXED = 'fixed'

    if(offsetY >= 135) {
        gnb.classList.add(FIXED);
    } else {
        gnb.classList.remove(FIXED);
    }
}

window.addEventListener('scroll', scrollMove);


/* ******************************* */
/* ********** slick ********** */
/* ******************************* */


$(document).ready(function(){
    $('.main-slide').slick({
        infinite: true,
        autoplay: true,
        speed:300,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

$(document).ready(function(){
    $('.main-product').slick({
        infinite: false,
        autoplay: false,
        speed:300,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });
});

$(document).ready(function(){
    $('.main-product-three').slick({
        infinite: false,
        autoplay: false,
        speed:300,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});

$(document).ready(function(){
    $('.insta').slick({
        infinite: false,
        autoplay: false,
        speed:300,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 6
    });
});