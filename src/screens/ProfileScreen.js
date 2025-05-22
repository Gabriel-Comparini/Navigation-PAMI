//Importando os recursos
import React from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";

//Função para pegar o tamanho da janela
const windowWidth = Dimensions.get('window').width;

//Função principal
export default function ProfileScreen({ navigation }) {
    return (    
        <View style = {styles.container}>
            {/* Título */}
            <Text style = {styles.title}>Profile Screen</Text>
            <View style = {styles.buttonContainer}>
                {/* Botão para voltar para HOME */}
                <Button
                    title = "Go to Home"
                    onPress = {() => navigation.navigate('Home')}
                />
            </View>

            <View style = {styles.buttonContainer}>
                {/* Botão para voltar para DETAILS */}
                <Button
                    title = "Go to Details"
                    onPress = {() => navigation.navigate('Details')}
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
        backgroundColor: '#e6e6fa',
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
    },

    buttonContainer: {
        backgroundColor: '#dda0dd',
        margin: 10, 
        width: windowWidth * 0.5,
        borderRadius: 5,
    },
});