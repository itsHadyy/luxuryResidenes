$(document).ready(function () {

    $('header').animate({ opacity: 0 }, 0);
    $('.home01').animate({ opacity: 0 }, 0);
    $('.home02').animate({ opacity: 0 }, 0);

    $('.home03Main').css({ position: 'relative' });
    $('.home03Side').css({ position: 'relative' });
    $('.home03Main').animate({ right: '+=600px' }, 0);
    $('.home03Side').animate({ left: '+=1200px' }, 0);

    $('.home04').css({ position: 'relative' });
    $('.home04').animate({ top: '+=1000px' }, 0);

    $('footer').css({ position: 'relative' });
    $('footer').animate({ top: '+=500px' }, 0);

    $('.home05').animate({ opacity: 0 }, 0);

    $('.home06').animate({ opacity: 0 }, 0);

    $('header').animate({ opacity: 1 }, 1500);
    $('.home01').animate({ opacity: 1 }, 3000);
    $('.home02').animate({ opacity: 1 }, 3500);

    $(window).on('load resize scroll', function () {

        if ($(window).scrollTop() >= 380) {
            $('.home03Main').animate({ right: '0px' }, 2000);
            $('.home03Side').animate({ left: '0px' }, 2200);

        }


        if ($(window).scrollTop() >= 950) {
            $('.home04').animate({ top: '0px' }, 4000);
        }

        if ($(window).scrollTop() >= 1950) {
            $('.home05').animate({ opacity: 1 }, 3000);
        }

        if ($(window).scrollTop() >= 2550) {
            $('.home06').animate({ opacity: 1 }, 3000);
        }

        if ($(window).scrollTop() >= 3000) {
            $('footer').animate({ top: '0px' }, 4000);
        }

    });
});