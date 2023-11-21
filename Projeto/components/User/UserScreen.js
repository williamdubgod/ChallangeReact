import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Certifique-se de ter o pacote instalado
import { auth } from '../../config/firebase';
import estilos from './estilos';
import Footer from '../Rodape/Footer';

export default function UserScreen({ navigation }) {
    const usuario = auth.currentUser;

    const handleLogout = async () => {
        try {
            await auth.signOut();
            // Redirecionar para a tela de login ou qualquer outra tela desejada após o logout
            navigation.navigate('InicialPage'); // Certifique-se de ter uma rota chamada 'InicialPage' configurada
        } catch (error) {
            console.error('Erro ao fazer logout:', error);
        }
    };

    return (
        <View style={estilos.container}>
            {/* Cabeçalho */}
            <View style={estilos.header}>
                <Image source={require('../../assets/user.png')} style={estilos.userIcon} />
                <Text style={estilos.headerText}>{usuario.email}</Text>
                <TouchableOpacity onPress={handleLogout}>
                    <Ionicons name="log-out" style={estilos.logoutButtonIcon} />
                </TouchableOpacity>
            </View>

            <Footer />
        </View>
    );
}