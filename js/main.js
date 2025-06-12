(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Enable WOW animations
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Enable smooth scrolling animation
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Désactiver l'animation Typed
    // if ($('.hero .hero-text h2').length == 1) {
    //     var typed_strings = $('.hero .hero-text .typed-text').text();
    //     var typed = new Typed('.hero .hero-text h2', {
    //         strings: typed_strings.split(', '),
    //         typeSpeed: 500,
    //         backSpeed: 2,
    //         smartBackspace: false,
    //         loop: true,
    //         startDelay: 2000,
    //         backDelay: 10000,
    //         showCursor: true,
    //         cursorChar: '|'
    //     });
    // }

    // Afficher directement le texte sans animation
    $(document).ready(function() {
        if ($('.hero .hero-text h2').length == 1) {
            // S'assurer que le texte est visible
            $('.hero .hero-text h2').css({
                'display': 'block',
                'visibility': 'visible',
                'opacity': '1'
            });
        }
    });
    
    
    // Enable Skills animation
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Enable Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

$(document).ready(function() {
    // Fonction pour ajouter des flèches personnalisées au lightbox
    function addCustomArrows() {
        // Vérifier si le lightbox est visible
        if ($('#lightbox').length && $('#lightbox').is(':visible')) {
            // Supprimer les flèches existantes si elles existent déjà
            $('.custom-lb-prev, .custom-lb-next').remove();
            
            // Ajouter des flèches personnalisées
            var $container = $('.lb-container');
            $('<div class="custom-lb-prev"><i class="fas fa-chevron-left"></i></div>').appendTo($container);
            $('<div class="custom-lb-next"><i class="fas fa-chevron-right"></i></div>').appendTo($container);
            
            // Ajouter des gestionnaires d'événements pour les flèches personnalisées
            $('.custom-lb-prev').on('click', function() {
                $('.lb-prev').click();
            });
            
            $('.custom-lb-next').on('click', function() {
                $('.lb-next').click();
            });
        }
    }
    
    // Ajouter des flèches personnalisées lorsqu'une image est cliquée
    $(document).on('click', '[data-lightbox]', function() {
        setTimeout(addCustomArrows, 500);
    });
    
    // Ajouter des flèches personnalisées lorsqu'une image change
    $(document).on('click', '.lb-prev, .lb-next', function() {
        setTimeout(addCustomArrows, 300);
    });
});

$(document).ready(function() {
    // Animation pour le bouton de galerie
    $('.portfolio-gallery-button').hover(
        function() {
            $(this).find('i').addClass('fa-bounce');
        },
        function() {
            $(this).find('i').removeClass('fa-bounce');
        }
    );
    
    // Amélioration de l'expérience utilisateur pour les galeries
    $('.portfolio-gallery-button').click(function(e) {
        e.preventDefault();
        
        // Trouver le premier lien de galerie (qui est caché) et le cliquer
        $(this).siblings('a[data-lightbox]:first').click();
    });
    
    // Ajouter une animation au survol des projets
    $('.portfolio-item').hover(
        function() {
            $(this).find('.portfolio-overlay').css('opacity', '1');
        },
        function() {
            $(this).find('.portfolio-overlay').css('opacity', '0');
        }
    );
});

// Fonction pour ouvrir une image dans un nouvel onglet
function openImageInNewTab(imageUrl) {
    window.open(imageUrl, '_blank');
}
