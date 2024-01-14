import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#eaeaea',
    },
    title: {
      marginTop: 20,
      paddingVertical: 8,
      color: 'black',
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
    },
    paragraph: {
      fontSize: 12,
      margin: 10,
      color: 'grey',
      textAlign: 'center',
      justifyContent: 'center',
    },
    profile: {
      width: 156,
      height: 156,
      marginTop: 50,
      borderRadius: 10,
      marginLeft: '28%'
    },
    btnLogin: {
      flexDirection: 'row',
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: 'black',
    },
    btntext: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
  
export default styles  