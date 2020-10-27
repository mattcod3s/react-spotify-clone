export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    /*token: 'BQCcaZWwI_osUeomFigHmLxv6sSg7Q_2qfcW-Ht8x_8aboMi3zoWoOOZ5O-JL4uhEiQAqEYE6bCqIRzZSCqTOS7YJt8gTxJCbXpZPl7TNj_izWcQ_K0sDulft4w5EwqBrBsWjgOi8r-cqu4kpiHKCf6Wt9jmA9bjkaUhlf0U4evl41h7QOeY'*/
    token: ''
}

export const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER' : 
            return{
                ...state,
                user: action.user
            }
        case 'SET_TOKEN' :
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS' : 
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY' :
            return {
                ...state,
                discoverWeekly: action.discoverWeekly
            }
        default : 
            return state
    }
}

export default reducer;