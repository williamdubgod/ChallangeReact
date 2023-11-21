import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      alignItems: 'center',
    },
    image: {
      width: 310,
      height: 310,
    },
    text: {
      fontSize: 22,
      fontWeight: 'bold', 
      textAlign: 'center',
    },
    slideShow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    slideDotContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    slideDot: {
      width: 20,
      height: 20,
      borderRadius: 10,
      margin: 8,
      marginTop: 50
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 80,
    },
    button: {
      backgroundColor: 'black',
      borderRadius: 30,
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: 'white',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });