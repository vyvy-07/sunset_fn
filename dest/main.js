function loading() {
    let loading = document.querySelector(".loading");
    if (document.contains(loading)) {
        window.addEventListener("load", function() {
            loading.classList.remove("active");
            let lang = document.querySelector(".header__left-lang");
            if (document.contains(lang)) {
                lang.style.display = "block";
            }
            let popup = document.querySelector(".popupvideo");
            if (document.contains(popup)) {
                popup.style.display = "block";
            }
            // console.log("object");
        })
        loading.classList.add("active");

    }
}
loading()

function menuSmall() {
    let header = document.querySelector(".header");
    let icon = document.querySelector(".header .container-fluid .iconmenu");
    let menu = document.querySelector(".header .menu");
    icon.addEventListener("click", function() {
        icon.classList.toggle("active")
        menu.classList.toggle("active")

    })
    window.addEventListener("resize", function() {
        if (window.pageXOffset > 992) {
            icon.classList.remove("active")
            menu.classList.remove("active")
        } else {
            icon.classList.remove("active")
            menu.classList.remove("active")
        }
    })
}
menuSmall()




function language() {
    let lang = document.querySelector(".header__left-lang")
    lang.addEventListener("click", function(e) {
        e.stopPropagation();
        lang.classList.toggle("active");
        console.log("object");
    })
    window.addEventListener("click", function() {
        lang.classList.remove("active");
    })
}
language();

function menu() {
    let menuItem = document.querySelectorAll(".header .menu li a")
    menuItem.forEach(function(item) {

        item.addEventListener("click", function() {
            menuItem.forEach(function(itemclear) {
                itemclear.classList.remove("active");
            });
            item.classList.add("active");
        })

    })

}
menu()

function subMenu() {
    let menu = document.querySelector(".submenu");
    let subMenu = document.querySelector(".menudown");
    menu.addEventListener("click", function(e) {
        e.stopPropagation()
        menu.classList.toggle("active");
        console.log("?");
    })
    window.addEventListener("click", function() {
        menu.classList.remove("active");

    })
}
subMenu()

function scrollToTop() {
    let btnTop = document.querySelector(".top");
    let slider = document.querySelector(".scslider");
    let sliderEvent = document.querySelector(".--eventslider")
    if (document.contains(slider)) {
        heightSlider = slider.offsetHeight;
        btnTop.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        })
        window.addEventListener("scroll", function() {
            if (window.pageYOffset < heightSlider) {
                btnTop.classList.remove("active")
            } else {
                btnTop.classList.add("active")
            }
        })

    }
    let heroSlider = document.querySelector(".hero");
    if (document.contains(heroSlider)) {
        let heightHero = heroSlider.offsetHeight;
        btnTop.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        })
        window.addEventListener("scroll", function() {
            if (window.pageYOffset < heightHero) {
                btnTop.classList.remove("active")
            } else {
                btnTop.classList.add("active")
            }
        })
    }
}
scrollToTop();

function popUp() {
    let scvideo = document.querySelector(".video")
    let btnclose = document.querySelector(".btnclose")
    let popup = document.querySelector(".popupvideo");
    let popupiframe = document.querySelector(".popupvideo .popupvideo__item-iframe iframe")
    let img = document.querySelector(".video .img")
    if (document.contains(scvideo)) {
        scvideo.addEventListener("click", function(e) {
            e.stopPropagation()
            popup.classList.add("active")
            let dataID = img.getAttribute("data-id")
            let iframeLink = popupiframe.setAttribute("src", `https://www.youtube.com/embed/${dataID}?autoplay=1`)

        })
        window.addEventListener("click", function() {
            popup.classList.remove("active");

            popupiframe.setAttribute("src", '')

        })
        btnclose.addEventListener("click", function() {
            popup.classList.remove("active")
            popupiframe.setAttribute("src", '')
        })

    }
    let boxVideo = document.querySelector(".boxs__item-img .img-video")

    if (document.contains(boxVideo)) {
        boxVideo.addEventListener("click", function(e) {
            e.stopPropagation()
            popup.classList.add("active")
            let dataID = boxVideo.getAttribute("data-id")
            let iframeLink = popupiframe.setAttribute("src", `https://www.youtube.com/embed/${dataID}?autoplay=1`)

        })

        window.addEventListener("click", function() {
            popup.classList.remove("active")
            popupiframe.setAttribute("src", '')

        })
        btnclose.addEventListener("click", function() {
            popup.classList.remove("active")
            popupiframe.setAttribute("src", '')
        })

    }


}
popUp()

function sliderTop() {
    let listSlider = document.querySelector('.scslider .scslider__list');
    if (document.contains(listSlider)) {
        let slider = new Flickity(listSlider, {
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            pageDots: false,
            // freeScroll: true,
            // autoPlay: 3000,
            imgLoaded: true,
            lazyLoad: 3,
            fade: true,
            prevNextButtons: false,

        });
        let btnNext = document.querySelector(".--next")
        let btnPre = document.querySelector(".--pre")
        btnPre.addEventListener("click", function() {
            slider.previous()
        })
        btnNext.addEventListener("click", function() {
            slider.previous()
        })
    }
}
sliderTop()

function eventSlider() {
    let sliderEvent = document.querySelector('.eventslider .eventslider__list');
    if (document.contains(sliderEvent)) {
        let slider = new Flickity(sliderEvent, {
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            pageDots: false,
            // freeScroll: true,
            autoPlay: 3000,
            imgLoaded: true,
            lazyLoad: 3,
            fade: true,
            prevNextButtons: false,

        });
        let btnNext = document.querySelector(".--next")
        let btnPre = document.querySelector(".--pre")
        btnPre.addEventListener("click", function() {
            slider.previous()
        })
        btnNext.addEventListener("click", function() {
            slider.previous()
        })
    }
}
eventSlider()

function company() {
    let sliderCompany = document.querySelector('.sccompany');
    if (document.contains(sliderCompany)) {
        let sliderflik = new Flickity(sliderCompany, {
            cellAlign: 'center',
            contain: true,
            prevNextButtons: false,
            wrapAround: true,
            pageDots: false,
            imagesLoaded: true,
            autoPlay: 1500,
            groupCells: 4,
        });
    }
}
company()

function contentSlider() {
    let sliderTD = document.querySelector('.contentSlider');
    if (document.contains(sliderTD)) {
        let sliderflik = new Flickity(sliderTD, {
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            pageDots: false,
            lazyLoad: 3,
            fade: true,
            prevNextButtons: false,

        });
        let btnNext = document.querySelector(".info__btn .next")
        let btnPre = document.querySelector(".info__btn .pre")
        btnPre.addEventListener("click", function() {
            sliderflik.previous()
            console.log("...")
        })
        btnNext.addEventListener("click", function() {
            sliderflik.previous()
        })
    }
}
contentSlider()


function sliderservices() {
    let slider = document.querySelector('.bestservices__sliderservices');
    if (document.contains(slider)) {
        let sliderflic = new Flickity(slider, {
            cellAlign: 'center',
            contain: true,
            wrapAround: true,
            pageDots: true,
            hash: true,
            prevNextButtons: false,
            imagesLoaded: true

        });
    }

}
sliderservices()


function galaryFancybox() {
    let list = document.querySelector(".--listimgabout")
    if (document.contains(list)) {
        Fancybox.bind("[data-fancybox]", {

        });
    }
}
galaryFancybox()


function library() {
    let list = document.querySelector(".sclibrary")
    let navItem = document.querySelectorAll(".sclibrary__nav-item")
    let boxsItem = document.querySelectorAll(".boxs")
    if (document.contains(list)) {
        console.log("object");
        navItem.forEach(function(item, index) {
            item.addEventListener("click", function(e) {
                e.stopPropagation();
                navItem.forEach(function(item_active) {
                    item_active.classList.remove("active");
                })
                item.classList.add("active");
                boxsItem.forEach(function(box_active) {
                    box_active.classList.remove("active");
                })
                boxsItem[index].classList.add("active")
            })
        })
    }
}
library()

function runTarget() {
    let number = document.querySelectorAll(".listnumber__item-number span");
    let section = document.querySelector(".scsign");
    let sccountnumber = document.querySelector(".countnumber")
    let interval = 1000;
    let start = false;
    if (document.contains(section)) {
        let a = 0;
        window.addEventListener("scroll", function(e) {
            e.stopPropagation();
            e.preventDefault();
            let hBeach = section.offsetTop;
            let heightE = hBeach + section.clientHeight;
            let wH = window.pageYOffset;
            let wInner = wH + window.innerHeight;
            if (wInner > hBeach && wH < heightE && a == 0) {
                countNber();
                a = 1;
            }
        })

        function countNber(e) {
            // e.stopPropagation();
            number.forEach(function(item_number) {
                let target = item_number.dataset.target;
                let valueStart = 0;
                let dur = Math.floor(interval / target);
                let count = setInterval(function() {
                    valueStart += 1;
                    item_number.textContent = valueStart;
                    if (item_number.textContent === target) {
                        clearInterval(count)
                    }
                }, dur)
            });
        }

    }
    if (document.contains(sccountnumber)) {
        let a = 0;
        window.addEventListener("scroll", function(e) {
            e.stopPropagation();
            e.preventDefault();
            let hBeach = sccountnumber.offsetTop;
            let heightE = hBeach + sccountnumber.clientHeight;
            let wH = window.pageYOffset;
            let wInner = wH + window.innerHeight;
            if (wInner > hBeach && wH < heightE && a == 0) {
                countNber();
                a = 1;
            }
        })

        function countNber(e) {
            // e.stopPropagation();
            number.forEach(function(item_number) {
                let target = item_number.dataset.target;
                let valueStart = 0;
                let dur = Math.floor(interval / target);
                let count = setInterval(function() {
                    valueStart += 1;
                    item_number.textContent = valueStart;
                    if (item_number.textContent === target) {
                        clearInterval(count)
                    }
                }, dur)
            });
        }
    }
}
runTarget()

function contactMap() {
    let scmap = document.querySelector(".map");
    let map = document.querySelector(".map .map__iframe iframe");
    if (document.contains(scmap)) {
        let dataid = map.getAttribute('data-id')
        map.setAttribute('src', `https://www.google.com/maps/embed?pb= + ${dataid}`);
    }
}
contactMap()