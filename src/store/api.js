

import axios from 'axios'
import { store } from './store'
import AsyncStorage from '@react-native-community/async-storage'


export default async function request(type, url, params, success, failed) {

    let state = store.getState()
    // let token = state.userLogin.authToken
    const token = await AsyncStorage.getItem('enviro-token')
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token



    /**************************P O S T    F O R M****************************** */

    switch (type) {
        case 'post-form1':
            return axios.post(url, params, { headers: { "Content-Type": "multipart/form-data" } })
                .then(response => {

                    if (success) {
                        success()
                    }
                    return response
                })
                .catch(error => {

                    console.log("Server Error", error)
                    console.log("server Response", error.response)
                    if (failed) { failed(error.response) }
                    return error.response
                })






        default:
            break;
    }
}



