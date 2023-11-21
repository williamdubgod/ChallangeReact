import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import Cadastro from '../../assets/cadastro.png';
import Pedidos from '../../assets/pedidos.png';
import Rectangle from '../Rectangle';
import Footer from '../Rodape/Footer';
import estilos from './estilos';

const HomeScreen = () => {
  const numberOfRectangles = 3; 

  return (
    <View style={estilos.container}>
      <View style={estilos.header}>
        <Image source={require('../../assets/miniLogo.png')} style={estilos.logo} />
        <TouchableOpacity>
          <Icon name="notifications" type="material-icons" size={24} color="grey" />
        </TouchableOpacity>
      </View>

      <View style={estilos.buttonsContainer}>
        <TouchableOpacity style={estilos.button}>
          <Text style={estilos.buttonText}>
            Cadastrar Pedido
          </Text>
          <Image source={Cadastro} size={24} />
        </TouchableOpacity>

        <TouchableOpacity style={estilos.button}>
          <Text style={estilos.buttonText}>Meus Pedidos</Text>
          <Image source={Pedidos} size={24} />
        </TouchableOpacity>
      </View>

      <Text style={estilos.title}>Recomendações</Text>

      <ScrollView>
        <View style={estilos.rectangleContainer}>
          {Array.from({ length: numberOfRectangles }).map((_, index) => (
            <Rectangle key={index} />
          ))}
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
};



export default HomeScreen;
