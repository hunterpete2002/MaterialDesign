import React, { useState } from "react";
import { Appbar, Button, TextInput } from 'react-native-paper';
import MainAppbar from "../components/mainAppbarComponent";
import { StyleSheet, View } from "react-native";

export default function Login() {

    const [loginInfo, setLoginInfo] = useState({username: '', password: ''})
    const [loginError, setLoginError] = useState(false)

    const loginFunction = () => {
        setLoginError(true)
        if (loginInfo.username.length > 0 && loginInfo.password.length > 8) {

            setLoginInfo({username: '', password:''})
            setLoginError(false);
        }
    }

    return (
        <>
            <MainAppbar title="Login"/>
            <View style={styles.container}>
                <TextInput 
                    label="Username" 
                    style={styles.input_field} 
                    value={loginInfo.username} 
                    onChangeText={text => setLoginInfo({...loginInfo, username: text})} 
                    error={loginInfo.username.length=== 0 && loginError} 
                />
                <TextInput 
                    label="Password" 
                    style={styles.input_field} 
                    keyboardType='visible-password' 
                    value={loginInfo.password} 
                    onChangeText={text => setLoginInfo({...loginInfo, password: text})} 
                    error={loginInfo.password.length <8 && loginError}
                />
                <Button mode="contained" style={styles.button} onPress={loginFunction}>Submit</Button>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center'
    },
    input_field: {
        backgroundColor: '#fcfcfc',
        margin:(16,8,16,8)

    },
    button: {
        margin:(16,8,0,8)
    }
})