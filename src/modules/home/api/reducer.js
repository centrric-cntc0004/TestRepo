
let initialState = {
    team_list: [],
    isLoading: false,
    error: false,
    loading: false,



}

const team = (state = initialState, actions) => {
    switch (actions.type) {

        case "TEAM_FETCHING":
            return {
                ...state,
                isLoading: true,
            }

        case "TEAM_FETCHING_SUCCESS":
            return {
                ...state,
                isLoading: false,
                error: false,
                team_list: actions.teams,
            }





        default:
            return state

    }
}

export default team