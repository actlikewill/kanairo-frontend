export const openMenu = item => ({
    type: 'OPEN_MENU',
    payload: {
        clickedButton: item,
        showMenu: true
    }
})

export const closeMenu = item => ({
    type: 'CLOSE_MENU',
    payload: {
        clickedButton: null,
        showMenu: false
    }
})