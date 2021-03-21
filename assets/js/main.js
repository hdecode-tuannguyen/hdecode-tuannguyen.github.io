// Mobile menu click 
const header = document.getElementById('header');
const mobileMenu = header.querySelector('.mobile-menu');
const headerHeight = header.clientHeight;

// Close open menu
mobileMenu.onclick = function(e) {
    if(header.clientHeight === headerHeight) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// hide menu when click pagemenu
const menuItems = header.querySelectorAll('#nav li a');
menuItems.forEach(menuItem => {
    // if(!isParentMenu){
       
    // } else {
    //     menuItem.onclick = function(e) {
    //         header.style.overflow = 'visible';
    //     }
    // }

    menuItem.onclick = function(e) {
        const isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) {
            e.preventDefault();
        } else {
            header.style.height = null;

        }
    }
})

