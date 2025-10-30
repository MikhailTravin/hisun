if (document.querySelector('.block-gallery__sliders')) {
    const thumbsSwiper = new Swiper('.block-gallery__thumb', {
        observer: true,
        observeParents: true,
        slidesPerView: 2.2,
        spaceBetween: 10,
        speed: 400,
        preloadImages: true,
        direction: "horizontal",
        navigation: {
            prevEl: '.block-gallery__arrow-prev',
            nextEl: '.block-gallery__arrow-next',
        },
        breakpoints: {
            480: {
                slidesPerView: 2.5,
                spaceBetween: 10,
                direction: "horizontal",
            },
            768: {
                slidesPerView: 2.8,
                direction: "horizontal",
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
                direction: "vertical",
            },
        },
    });

    const mainThumbsSwiper = new Swiper('.block-gallery__slider', {
        thumbs: {
            swiper: thumbsSwiper
        },
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 400,
        preloadImages: true,
        navigation: {
            prevEl: '.block-gallery__arrow-prev',
            nextEl: '.block-gallery__arrow-next',
        },
    });
}

Fancybox.bind("[data-fancybox]", {
    // опции
});

const popup = document.querySelector('.block-popup');
if (popup) {
    const closeButton = popup.querySelector('.block-popup__close');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            popup.classList.add('hidden');
        });
    }

    popup.addEventListener('click', function (e) {
        if (!e.target.closest('.block-popup__body')) {
            popup.classList.add('hidden');
        }
    });

    const popupBody = popup.querySelector('.block-popup__body');
    if (popupBody) {
        popupBody.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }
}