
import React, { useState, useRef, } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ActivityIndicator, Alert } from 'react-native'
import { connect } from 'react-redux'
import { signin } from '../api/action'


const Login = ({ dispatch, }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [buttonLoader, setButtonLoader] = useState(false)


  /*********** L O G I N    A P I    C A L L I N G ***********/
  const loginFx = () => {
    setButtonLoader(true)


    if (username && password) {
      let form_body = new FormData()
      form_body.append('email', username)
      form_body.append('password', password)
      form_body.append('lang_id', "en")
      form_body.append('device_token', "en")
      const success = (response) => {
        setButtonLoader(false)

      }
      const failed = (response) => {
        setButtonLoader(false)

        Alert.alert("Invalid Login")
      }
      dispatch(signin(form_body, success, failed))

    

    }
  }

  /*********** L O G I N    A P I    C A L L I N G ***********/




  //enable and  disable login button
  let button_opacity = 0.6
  let button_disable = true
  username && password ? button_opacity = 1 : button_opacity = 0.6
  username && password ? button_disable = false : button_disable = true

  const ref_loginButton = useRef()





  return (
    <>

      <View style={styles.container}>

        <View style={styles.subContainer}>
          <Text style={styles.logo}>Sign In</Text>
          <Text style={styles.forgot}>Enter Your Details</Text>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="User Name"
              placeholderTextColor="#B6B7B7"
              onChangeText={txt => setUsername(txt)}

            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor="#B6B7B7"
              onSubmitEditing={() => loginFx()}
              onChangeText={txt => setPassword(txt)}
            />
          </View>
          <TouchableOpacity onPress={() => loginFx()}
            ref={ref_loginButton} disabled={button_disable}
            style={{
              opacity: button_opacity,
              width: '80%',
              backgroundColor: '#5DA7A3',
              borderRadius: 25,
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
            }}>
            {
              buttonLoader ? (<ActivityIndicator size="small" color="white" />) :
                (<Text style={styles.loginText}>Sign In</Text>)}
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotpassword}>Forgot your password?</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Text style={styles.dontpassword}>Don't have an Account? </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: '#5DA7A3', fontWeight: 'bold' }}>Sign Up</Text>
            </TouchableOpacity>
          </View>


        </View>
      </View>
    </>

  )
}



//add styles to all fields 

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginBottom: 10,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#F2F2F2',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'grey',
    fontSize: 12
  },
  forgot: {
    color: 'grey',
    fontSize: 14,
    marginBottom: 20,

  },
  forgotpassword: {
    marginTop: 10,
    color: '#444444',
    fontSize: 14,
    marginBottom: 15,

  },
  dontpassword: {
    color: '#7C7D7E',
    fontSize: 14,
    marginBottom: 10,

  },

  loginBtn: {
    width: '80%',
    backgroundColor: '#5DA7A3',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 14
  },
});



const mapsStateProps = (state, ownprops) => {
  const { isLoading, errorLoginMessage, user, authToken } = state.userLogin

  return {

    isLoading: isLoading,
  }
}


export default connect(mapsStateProps)(Login)
