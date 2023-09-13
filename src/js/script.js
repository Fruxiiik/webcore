import '../scss/style.scss';

let moreTextBtn = document.querySelector('.button__more-text');
let moreTextImage = document.querySelector('.button-img__more-text');
let moreInfoText = document.querySelector('.more-text');
let someText = document.querySelector('.info__more-text');
let moreBrandBtn = document.querySelector('.button__more-brands');
let moreBrandImage = document.querySelector('.button-img__more-brands');
let moreBrandText = document.querySelector('.more-brands');
const contentCards = document.getElementsByClassName('hide');
let moreServicesBtn = document.querySelector('.button__more-services');
let moreServicesImage = document.querySelector('.button-img__more-services');
let moreServicesText = document.querySelector('.more-services');
const serviceCards = document.getElementsByClassName('services-hide')


moreTextBtn.addEventListener('click', function (event) {
    moreTextImage.classList.toggle('rotate');
    someText.classList.toggle('info__more-text--active');
    if(moreInfoText.textContent === 'Читать далее') {
        moreInfoText.textContent = 'Скрыть';
    } else {
        moreInfoText.textContent = 'Читать далее';
    }
})

moreServicesBtn.addEventListener('click', function (event) {
    moreServicesImage.classList.toggle('rotate');
    if(moreServicesText.textContent === 'Показать все') {
        moreServicesText.textContent = 'Скрыть';
    } else {
        moreServicesText.textContent = 'Показать все';
    }
    for (let i = 0; i < serviceCards.length; i++) {
        serviceCards[i].classList.toggle('hide-active');
    }
})

moreBrandBtn.addEventListener('click', function (event) {
    moreBrandImage.classList.toggle('rotate');
    if(moreBrandText.textContent === 'Показать все') {
        moreBrandText.textContent = 'Скрыть';
    } else {
        moreBrandText.textContent = 'Показать все';
    }
    for (let i = 0; i < contentCards.length; i++) {
        contentCards[i].classList.toggle('hide-active');
    }
})

window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function(className, settings) {
            swiper = new Swiper(className, settings);

            if (callback) {
                callback(swiper);
            }
        }

        const checker = function() {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined)
                    swiper.destroy(true, true);
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    }

    resizableSwiper(
        '(max-width: 767px)',
        '.brands__swiper',
        {
            loop: true,
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                310: {
                    slidesPerView: 1.25,
                },
                320: {
                    slidesPerView: 1.25,
                },
                330: {
                    slidesPerView: 1.30,
                },
                340: {
                    slidesPerView: 1.35,
                },
                350: {
                    slidesPerView: 1.40,
                },
                360: {
                    slidesPerView: 1.43,
                },
                370: {
                    slidesPerView: 1.47,
                },
                380: {
                    slidesPerView: 1.5,
                },
                390: {
                    slidesPerView: 1.54,
                },
                400: {
                    slidesPerView: 1.58,
                },
                410: {
                    slidesPerView: 1.62,
                },
                420: {
                    slidesPerView: 1.66,
                },
                430: {
                    slidesPerView: 1.70,
                },
                440: {
                    slidesPerView: 1.74,
                },
                450: {
                    slidesPerView: 1.78,
                },
                460: {
                    slidesPerView: 1.82,
                },
                470: {
                    slidesPerView: 1.86,
                },
                480: {
                    slidesPerView: 1.90,
                },
                490: {
                    slidesPerView: 1.94,
                },
                500: {
                    slidesPerView: 1.98,
                },
                520: {
                    slidesPerView: 2.02,
                },
                530: {
                    slidesPerView: 2.06,
                },
                540: {
                    slidesPerView: 2.1,
                },
                550: {
                    slidesPerView: 2.14,
                },
                560: {
                    slidesPerView: 2.18,
                },
                570: {
                    slidesPerView: 2.22,
                },
                580: {
                    slidesPerView: 2.26,
                },
                590: {
                    slidesPerView: 2.3,
                },
                600: {
                    slidesPerView: 2.34,
                },
                610: {
                    slidesPerView: 2.38,
                },
                620: {
                    slidesPerView: 2.42,
                },
                630: {
                    slidesPerView: 2.46,
                },
                640: {
                    slidesPerView: 2.5,
                },
                650: {
                    slidesPerView: 2.54,
                },
                660: {
                    slidesPerView: 2.58,
                },
                670: {
                    slidesPerView: 2.62,
                },
                680: {
                    slidesPerView: 2.66,
                },
                690: {
                    slidesPerView: 2.70,
                },
                700: {
                    slidesPerView: 2.74,
                },
                710: {
                    slidesPerView: 2.78,
                },
                720: {
                    slidesPerView: 2.82,
                },
                730: {
                    slidesPerView: 2.86,
                },
                740: {
                    slidesPerView: 2.9,
                },
                750: {
                    slidesPerView: 2.94,
                },
                760: {
                    slidesPerView: 2.98,
                },
                767: {
                    slidesPerView: 3.02,
                },
            }
        },
    );
    resizableSwiper(
        '(max-width: 767px)',
        '.services__swiper',
        {
            loop: true,
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                310: {
                    slidesPerView: 1.25,
                },
                320: {
                    slidesPerView: 1.25,
                },
                330: {
                    slidesPerView: 1.30,
                },
                340: {
                    slidesPerView: 1.35,
                },
                350: {
                    slidesPerView: 1.40,
                },
                360: {
                    slidesPerView: 1.43,
                },
                370: {
                    slidesPerView: 1.47,
                },
                380: {
                    slidesPerView: 1.5,
                },
                390: {
                    slidesPerView: 1.54,
                },
                400: {
                    slidesPerView: 1.58,
                },
                410: {
                    slidesPerView: 1.62,
                },
                420: {
                    slidesPerView: 1.66,
                },
                430: {
                    slidesPerView: 1.70,
                },
                440: {
                    slidesPerView: 1.74,
                },
                450: {
                    slidesPerView: 1.78,
                },
                460: {
                    slidesPerView: 1.82,
                },
                470: {
                    slidesPerView: 1.86,
                },
                480: {
                    slidesPerView: 1.90,
                },
                490: {
                    slidesPerView: 1.94,
                },
                500: {
                    slidesPerView: 1.98,
                },
                520: {
                    slidesPerView: 2.02,
                },
                530: {
                    slidesPerView: 2.06,
                },
                540: {
                    slidesPerView: 2.1,
                },
                550: {
                    slidesPerView: 2.14,
                },
                560: {
                    slidesPerView: 2.18,
                },
                570: {
                    slidesPerView: 2.22,
                },
                580: {
                    slidesPerView: 2.26,
                },
                590: {
                    slidesPerView: 2.3,
                },
                600: {
                    slidesPerView: 2.34,
                },
                610: {
                    slidesPerView: 2.38,
                },
                620: {
                    slidesPerView: 2.42,
                },
                630: {
                    slidesPerView: 2.46,
                },
                640: {
                    slidesPerView: 2.5,
                },
                650: {
                    slidesPerView: 2.54,
                },
                660: {
                    slidesPerView: 2.58,
                },
                670: {
                    slidesPerView: 2.62,
                },
                680: {
                    slidesPerView: 2.66,
                },
                690: {
                    slidesPerView: 2.70,
                },
                700: {
                    slidesPerView: 2.74,
                },
                710: {
                    slidesPerView: 2.78,
                },
                720: {
                    slidesPerView: 2.82,
                },
                730: {
                    slidesPerView: 2.86,
                },
                740: {
                    slidesPerView: 2.9,
                },
                750: {
                    slidesPerView: 2.94,
                },
                760: {
                    slidesPerView: 2.98,
                },
                767: {
                    slidesPerView: 3.02,
                },
            }
        },
    );
    resizableSwiper(
        '(max-width: 767px)',
        '.prices__swiper',
        {
            loop: true,
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                310: {
                    slidesPerView: 1.1,
                },
                320: {
                    slidesPerView: 1.22,
                },
                330: {
                    slidesPerView: 1.25,
                },
                360: {
                    slidesPerView: 1.35,
                },
                390: {
                    slidesPerView: 1.45,
                },
                420: {
                    slidesPerView: 1.55,
                },
                450: {
                    slidesPerView: 1.65,
                },
                480: {
                    slidesPerView: 1.75,
                },
                510: {
                    slidesPerView: 1.85,
                },
                540: {
                    slidesPerView: 1.95,
                },
                570: {
                    slidesPerView: 2.05,
                },
                600: {
                    slidesPerView: 2.15,
                },
                630: {
                    slidesPerView: 2.25,
                },
                660: {
                    slidesPerView: 2.35,
                },
                690: {
                    slidesPerView: 2.45,
                },
                720: {
                    slidesPerView: 2.55,
                },
                750: {
                    slidesPerView: 2.65,
                },
            }
        },
    );
});