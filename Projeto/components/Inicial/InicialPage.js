import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import Image1 from '../../assets/Image1.png';
import Image2 from '../../assets/Image2.png';
import Image3 from '../../assets/Image3.png';
import estilos from './estilos';

const slides = [
  {
    image: Image1,
    backgroundColor: '#97D8BA',
  },
  {
    image: Image2,
    backgroundColor: '#9F88F2',
  },
  {
    image: Image3,
    backgroundColor: '#FFF2C6',
  },
];

const InicialPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation(); 

  const changeSlide = (index) => {
    setActiveIndex(index);
  };

  const handleLoginPress = () => {
    navigation.navigate('LoginScreen'); 
  };

  const handleRegisterPress = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={[estilos.container, { backgroundColor: slides[activeIndex].backgroundColor }]}>
      <View style={estilos.imageContainer}>
        <Image source={slides[activeIndex].image} style={estilos.image} />
        <Text style={estilos.text}>
          BUSQUE AS MELHORES{'\n'}OPÇÕES DISPONÍVEIS
        </Text>
      </View>
      <View style={estilos.slideShow}>
        <FlatList
          data={slides}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                estilos.slideDot,
                {
                  backgroundColor: activeIndex === index ? 'black' : 'white',
                  borderWidth: activeIndex === index ? 0 : 2,
                  borderColor: 'white',
                },
              ]}
              onPress={() => changeSlide(index)}
            />
          )}
          contentContainerStyle={estilos.slideDotContainer}
        />
      </View>
      <View style={estilos.buttonContainer}>
        <TouchableOpacity onPress={handleLoginPress} style={[estilos.button, { width: 160, height: 60, opacity: 0.5 }]}>
          <Text style={estilos.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegisterPress} style={[estilos.button, { width: 160, height: 60 }]}>
          <Text style={estilos.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InicialPage;
