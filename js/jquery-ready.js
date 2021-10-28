$(document).ready(function() {
    //===========Мобильное меню
    let body = $('body')
    let windowWidth = window.innerWidth;
    let header = $('.header');
    let headerWrap = $('.header__wrap');
    let nav = header.find('.nav');
    let phone = header.find('.phone');
    let lang = header.find('.lang')
    let burger = $('.burger');
    let windowHeight = $(window).height();

    if (windowWidth <= 992) {
        //создаем контейнер для менюшки
        let mobileMenu = $(document.createElement('div'));
        mobileMenu.addClass('mobile-menu');

        headerWrap.append(mobileMenu)

        //клонируем элементы хедера
        let mobileNav = nav.clone();
        let mobilePhone = phone.clone();
        let mobileLang = lang.clone();

        mobileMenu.append(mobileNav);
        mobileMenu.append(mobilePhone);  
        mobileMenu.append(mobileLang);        
    }

    function showMenu() {
        let mobileMenu = $('.mobile-menu');

        burger.toggleClass('active');
        body.toggleClass('no-scroll');
        mobileMenu.toggleClass('active');
    }

    burger.click(showMenu);

    //============Мобильное меню (КОНЕЦ)

    //всплывашка
    $('.layout__item .close').click(function() {
        //подставляем текст
        let text = $(this).closest('.layout__item').find('.name h2').text();
        $('.popup').find('.text span').text(text);
        $('.popup').fadeIn();
    })

    $('.popup .close, .popup .btn').click(function() {
        $(this).closest('.popup').fadeOut();
    });
});
