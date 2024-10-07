document.querySelectorAll('.menu li').forEach(menuItem => {
    menuItem.addEventListener('mouseover', () => {
        let submenu = menuItem.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'block';
        }
    });
    menuItem.addEventListener('mouseout', () => {
        let submenu = menuItem.querySelector('.submenu');
        if (submenu) {
            submenu.style.display = 'none';
        }
    });
});
