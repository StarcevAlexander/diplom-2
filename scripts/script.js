$(document).ready(function () {
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animate__animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        }
    });


    //Скроллы начало
    $('#button-to-up').click(function () {
        $('#section-header')[0].scrollIntoView({behavior: "smooth"});
    });

    $('.main-button').click(function () {
        $('#section-promotion')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#menu-item-menu').click(function () {
        $('#section-menu')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#menu-item-contents').click(function () {
        $('#section-contents')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#menu-item-promotion').click(function () {
        $('#section-promotion')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#menu-item-reviews').click(function () {
        $('#section-reviews')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#menu-item-gallery').click(function () {
        $('#section-gallery')[0].scrollIntoView({behavior: "smooth"});
    });

    $('#menu-item-contacts').click(function () {
        $('#section-contacts')[0].scrollIntoView({behavior: "smooth"});
    });


    // Скроллы конец


    //Кнопка подробнее в продуктах начало
    let products = $('.products-item')
    let productsShowMore = $('#products-show-more');
    let hiddenProductsItem = $('.hidden-products-item');
    let productsType = $('.products-type');


    productsShowMore.click(function (event) {

        if (products.hasClass('hidden-products-item')) {
            products.css('display', 'flex')
            hiddenProductsItem.removeClass('hidden-products-item').addClass('active-hidden-products-item')
            productsShowMore.eq(0).text('Свернуть').removeClass('products-show-more').addClass('products-show-less')
        } else if (products.hasClass('active-hidden-products-item')) {
            products.css('display', 'none')
            $('.active-products-item').css('display', 'flex')
            hiddenProductsItem.removeClass('active-hidden-products-item').addClass('hidden-products-item')
            productsShowMore.eq(0).text('Показать еще').removeClass('products-show-less').addClass('products-show-more')
        }
        event.preventDefault();
    })
    //Кнопка подробнее в продуктах конец
    //Сортировка типов бургеров начало
    let productsTypeAll = $('#products-type-all')

    productsTypeAll.click(function () {
        productsType.css('border-color', 'rgb(253, 202, 22)')
        productsTypeAll.css('border-color', 'rgb(254, 252, 250)')
        products.css('display', 'none')
        $('.active-products-item').css({
            display: 'flex',
            visibility: 'visible',
        })
        productsShowMore.css('display', 'flex')
    });

    let productsTypePopular = $('#products-type-popular')

    productsTypePopular.click(function () {
        productsType.css('border-color', 'rgb(253, 202, 22)')
        productsTypePopular.css('border-color', 'rgb(254, 252, 250)')
        products.css('display', 'none')
        $('.popular').css({
            display: 'flex',
            visibility: 'visible',
        })
        productsShowMore.css('display', 'none')
    });

    let productsTypeHot = $('#products-type-hot')

    productsTypeHot.click(function () {
        productsType.css('border-color', 'rgb(253, 202, 22)')
        productsTypeHot.css('border-color', 'rgb(254, 252, 250)')
        products.css('display', 'none')
        $('.hot').css({
            display: 'flex',
            visibility: 'visible',
        })
        productsShowMore.css('display', 'none')

    });

    let productsTypeVegan = $('#products-type-vegan')

    productsTypeVegan.click(function () {
        productsType.css('border-color', 'rgb(253, 202, 22)')
        productsTypeVegan.css('border-color', 'rgb(254, 252, 250)')
        products.css('display', 'none')
        $('.vegan').css({
            display: 'flex',
            visibility: 'visible',
        })
        productsShowMore.css('display', 'none')

    });

    //Сортировка типов бургеров конец


    $('.center').slick({
        arrows: true,
        dots: true,
        centerMode: true,
        slidesToShow: 3,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    let list = $('.slick-dots').find('li');
    for (let i = 0; i < list.length; i++) {
        let element = list.eq(i).children();
        element.html(element.text() + '<span>' + '/' + list.length + '</span>');
    }

    $('.slick-arrow').click(function (event) {
        $('.slick-slide').removeClass('next')
        $('.slick-slide').removeClass('prev')

        $('.slick-active').eq(2).next('div').addClass('next')
        $('.slick-active').eq(0).prev('div').addClass('prev')

        event.preventDefault()
    })


    //Кнопка подробнее в галерее начало


    let galleryShowMore = $('#gallery-show-more');
    let galleryBlock = $('.gallery-block');


    galleryShowMore.click(function (event) {

        if (galleryBlock.hasClass('gallery-hidden')) {
            $('.gallery-hidden').removeClass('gallery-hidden').addClass('gallery-hidden-active')
            galleryShowMore.eq(0).text('Свернуть').removeClass('gallery-show-more').addClass('show-less')
        } else if (galleryBlock.hasClass('gallery-hidden-active')) {
            $('.gallery-hidden-active').removeClass('gallery-hidden-active').addClass('gallery-hidden')
            galleryShowMore.eq(0).text('Показать еще').removeClass('show-less').addClass('gallery-show-more')
        }
        event.preventDefault();
    })
    //Кнопка подробнее в галерее конец

    // Дата в футуре начало
    $('.rights span').text((new Date()).getFullYear())
    //Дата в футуре конец

    //Заказать звонок начало
    let popup = $('.popup')
    $('.button').click(function () {
        popup.css('display', 'block')

    })

    let loader = $('.loader')
    $('#button-call-request').click(function (event) {
        let name = $('#name');
        let lastName = $('#last-name');
        let phone = $('#phone-input');
        let hasError = false

        $('.error-input').hide();
        $('.form-input').css('border-color', 'rgb(253, 202, 22)');
        if (!name.val()) {
            name.next().show();
            name.css('border-color', 'red');
            hasError = true;
        }
        if (!lastName.val()) {
            lastName.next().show();
            lastName.css('border-color', 'red');
            hasError = true;
        }
        if (!phone.val()) {
            phone.next().show();
            phone.css('border-color', 'red');
            hasError = true;
        }

        if (!hasError) {

            loader.css('display', 'flex');
            $.ajax({
                method: "POST",
                url: "https://testologia.site/checkout",
                data: {name: name.val(), lastName: lastName.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        $('.call-request-form').hide();

                        $('.call-request-form-title').css('padding-top', '30px').text('Спасибо, мы свяжемся с вами в ближайшее время!');
                    } else {
                        alert("Возникла ошибка, позвоните нам и сделайте заказ")
                    }
                });

        }
        event.preventDefault()

    })

    //Заказать звонок конец

    $('.popup-close').click(function () {
        popup.css('display', 'none')
    })

});

/*


*/
