
import Api from '../../../store/api'
import { AUTHENTICATION } from '../../../store/endpoint'
import AsyncStorage from '@react-native-community/async-storage'



/*********** L O G I N    A P I    C A L L I N G ***********/


export const signin = (user_data, success, failed) => {
    return function (dispatch) {
        Api('post-form1', AUTHENTICATION, user_data, success, failed)
            .then(async response => {
                console.log("response" + JSON.stringify(response))
                if (response.status >= 400) {
                    failed(response)
                } else if (response.status === 200) {
                    await AsyncStorage.setItem('enviro-token', "test")
                    dispatch({ type: 'AUTH_FETCHING_SUCCESS', token: "test" })

                    success(response)


                }

            })
            .catch(err => {
                // failed(response)
            })
    }

}
  /*********** L O G I N    A P I    C A L L I N G ***********/





