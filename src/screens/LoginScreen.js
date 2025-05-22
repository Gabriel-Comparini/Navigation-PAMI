import React, {useState} from "react";
import { View, Text, Button, StyleSheet, Dimensions, TextInput } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LoginScreen({ navigation }){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <View style = {styles.mainContainer}>
            <View style = {styles.formContainer}>
                <Text style = {styles.title}>Tela de Login</Text>

                <TextInput 
                    style = {styles.input}
                    placeholder = "Digite seu E-Mail..."
                    keyboardType = "email-address"
                    value = {email}
                    onChangeText = {setEmail}
                />

                <TextInput 
                    style = {styles.input}
                    placeholder = "Digite sua senha..."
                    keyboardType = "default"
                    secureTextEntry = {true}
                    value = {senha}
                    onChangeText = {setSenha}
                />

                <View style = {styles.buttonContainer}>
                    <Button
                        //Descrição do Botão
                        title = "Login"
                        //Definição dos dados
                        //Email = Jorge@
                        //Senha = 1234
                        onPress = {() => {
                                if (senha == "1234" && email == "Jorge@") {
                                    navigation.navigate('Home');
                                } else {
                                    console.log('Incluir dados');    
                                }
                            }
                        }
                    />
                </View>
            </View>
        </View>
    );
}


//Estilização do site
const styles = StyleSheet.create({
    mainContainer: {
        width: windowWidth,
        height: windowHeight * 1.1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
    },

    formContainer: {
        backgroundColor:'#f0f0f0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 8,
        gap: 10,
        padding: 20,
        width: windowWidth * 0.7,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
        width: 150,
    },

    buttonContainer: {
        backgroundColor: '#add8e6',
        margin: 10, 
        width: windowWidth * 0.5,
        borderRadius: 5,
    },

});