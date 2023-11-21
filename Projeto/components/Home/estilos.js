import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 0.05 * width, 
  },
  logo: {
    width: 0.25 * width, 
    height: 0.2 * width, 
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 0.04 * width, 
  },
  button: {
    width: 0.45 * width, 
    height: 0.20 * width, 
    borderRadius: 0.025 * width, 
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0.05 * width, 
  },
  buttonText: {
    color: 'black',
    marginRight: 0.01 * width, 
  },
  title: {
    fontSize: 0.06 * width, 
    fontWeight: 'bold',
    margin: 0.05 * width, 
    marginTop: 0.075 * width, 
  },
  rectangleContainer: {
    padding: 0.05 * width, 
  },
});