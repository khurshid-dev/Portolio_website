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
// const navItems = document.querySelectorAll('.header-navigation__item');
// const navLink = document.querySelectorAll('#link');


// function navHide() {
//     navItems.forEach((item) => {
//         item.classList.remove('activ');
//     });
// }

// function navShow(i = 0) {
//     navItems[i].classList.add('activ');
// }
// navHide();
// navShow();

// navItems.forEach((item) => {
//     item.addEventListener('click', (event) => {
//         const target = event.target;
//         if(target && target.classList.contains('#link')) {
//             navLink.forEach((item, index) => {
//                 if(target === item) {
//                     navHide();
//                     navShow(index);
//                 }
//             });
//     }
//     });
// })










