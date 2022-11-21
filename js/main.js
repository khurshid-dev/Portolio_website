function burgerMenu() {
    const burgerList = document.querySelector('.burger-menu-list');
    const burger = document.querySelector('.burger');
    const burgerLink = document.querySelectorAll('.burger-menu-list ul li a');


    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        burgerList.classList.toggle('active');
    });

    burgerLink.forEach((item) => {
        item.addEventListener('click', () => {
            burger.classList.toggle('active');
            burgerList.classList.toggle('active');
        })
    })

}

burgerMenu();





// // Navbar section 
// const navBar = document.querySelector('.header-navigation__items');
// const navItems = document.querySelectorAll('.header-navigation__item a');


// function navHide() {
//     navItems.forEach((item) => {
//         item.classList.remove('active');
//     });
// }

// function navShow(i = 0) {
//     navItems[i].classList.add('active');
// }

// navHide();
// navShow();


// navBar.addEventListener('click', (event) => {
//     const target = event.target;
//     if(target && target.classList.contains('header-navigation__item item-content-link')) {
//         navItems.forEach((itm, index) => {
//             if(target === itm) {
//                 navHide();
//                 navShow(index);
//             }
//         });
// }
// });










