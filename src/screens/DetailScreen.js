//Importando os recursos
import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

//Função para pegar o tamanho da janela
const windowWidth = Dimensions.get('window').width;

//Função pricipal
export default function DetailScreen({ navigation }) {
    return (
        <View style = {styles.container}>
            {/* Título */}
            <Text style = {styles.title}>Details Screen</Text>
            <View style = {styles.buttonContainer}>
                {/* Botão para voltar para HOME */}
                <Button
                    title = "Go to Home"
                    onPress = {() => navigation.navigate('Home')}
                />
            </View>

            <View style = {styles.buttonContainer}>
                {/* Botão para voltar para PROFILE */}
                <Button
                    title = "Go to Profile"
                    onPress = {() => navigation.navigate('Profile')}
                />
            </View>
        </View>
    );
}
//Estilização
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf0e6',
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
    },

    buttonContainer: {
        backgroundColor: '#ffebcd',
        margin: 10, 
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
});