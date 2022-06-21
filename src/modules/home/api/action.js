
import Api from '../../../store/api'
import { HOME } from '../../../store/endpoint'


/*********** H O M E   A P I    C A L L I N G ***********/


export const team_list_current = () => {
    return function (dispatch) {

        dispatch({ type: 'TEAM_FETCHING' })
        Api('get', HOME)
            .then(response => {
                console.log("gdsfg" + JSON.stringify(response))
                dispatch({ type: 'TEAM_FETCHING_SUCCESS', teams: response })


            })
            .catch(error => {
                dispatch({ type: 'TEAM_FETCHING_FAILED' })
            })
    }
}
  /*********** H O M E    A P I    C A L L I N G ***********/





