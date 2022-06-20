let initialState = {
    user: null,
    authToken: null,
    error: false,
    isLoading: false,
    errorLoginMessage: null,
    isLoggedIn: false,

}

const user = (state = initialState, actions) => {
    switch (actions.type) {
        case "AUTH_FETCHING":
            return {
                ...state,
                isLoading: true,
                user: null,
                errorLoginMessage: null,
            }


        case "AUTH_FETCHING_SUCCESS":
            return {
                ...state,
                isLoading: false,
                error: false,
                isLoggedIn: true,
                authToken: actions.token,
                errorLoginMessage: null
            }


        case "SIGNIN_FETCHING_SUCCESS":
            return {
                ...state,
                isLoading: false,
                error: false,
                isLoggedIn: true,
                user: actions.user,
                errorLoginMessage: null
            }






        default:
            return state

    }
}

export default user