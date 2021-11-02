const header = {
    init: function() {
        this.clickShowMenu('.humbeger', '.overlay', 'show');
        this.clickShowMenu('.humbeger', '.mobi__wrap', 'showMenu');
    },
    clickShowMenu: function(button, menu, ClassShowMenu) {
        var btn = document.querySelector(button);
        var NavMenu = document.querySelector(menu);
        btn.addEventListener('click', () => {
            NavMenu.classList.add(ClassShowMenu);
        });
    }
}
header.init()


$(window).on('load', function(event) {
    $('body').removeClass('perloading');
    $('.loader').delay(1000).fadeOut('fast');
});

const keader = {
    init: function() {
        this.clickShowMenu('.over', '.overlay', 'show');
        this.clickShowMenu('.over', '.mobi__wrap', 'showMenu');
    },
    clickShowMenu: function(button, menu, ClassShowMenu) {
        var btn = document.querySelector(button);
        var NavMenu = document.querySelector(menu);
        btn.addEventListener('click', () => {
            NavMenu.classList.remove(ClassShowMenu);
        });
    }
}
keader.init()

const tabcontent = {
    init: function() {
        this.clickTab('.pofo', '.tabcontent', '.tablinks');
        this.clickTab('.pofolio', '.tabcontent', '.tablinks');
    },
    clickTab: function(wrapper, tabs, buttons) {
        let self = document.querySelector(wrapper);
        if (self === null) return false;
        else {
            let items = self.querySelectorAll(tabs);
            let btns = self.querySelectorAll(buttons);
            btns.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    btns.forEach(btn => btn.classList.remove('active'));
                    items.forEach(item => item.classList.remove('active'));
                    btns[index].classList.add('active');
                    items[index].classList.add('active');
                })
            })
        }


    }
}
tabcontent.init();
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})



// const gallery = {
//     init: function() {
//         gallery.clickFilter();
//     },
//     clickFilter: function() {
//         $('.gallery_masonry').isotope({
//             itemSelector: '.gallery__item',
//             // layoutMode: 'fitRows'
//         });
//         $('.gallery-section .gallery__list li').click(function() {
//             $('.gallery-section .gallery__list li').removeClass('gallery-active');
//             $(this).addClass('gallery-active');
//             var selector = $(this).attr('data-filter');
//             $('.gallery_masonry').isotope({
//                 filter: selector
//             });
//             return false;
//         });

//     }
// }
// gallery.init();




function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();