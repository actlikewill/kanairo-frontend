const initialState = {
    showMenu: false
}

export default function (state = initialState, action) {
    switch(action.type) { 
        case 'OPEN_MENU': {
            const { showMenu, clickedButton } = action.payload;
            return {...state, showMenu, clickedButton}
        }
        case 'CLOSE_MENU': {
            const { showMenu, clickedButton } = action.payload;
            return {...state, showMenu, clickedButton}
        }
        default: 
            return state;

    }

}