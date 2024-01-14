import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: 48,
      backgroundColor: '#fafafa',
    },
    logo: {
      width: 96,
      height: 96,
      marginTop:25,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    title: {
      marginTop: 10,
      paddingVertical: 8,
      color: 'black',
      textAlign: 'left',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign:'center',
    },
    description: {
      color: 'grey',
      textAlign:'center',
    },
    input: {
      height: 40,
      marginTop: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius:8,
    },
    reset: {
      textAlign: 'right',
      marginTop: 5,
      marginBottom: 30,
    },
    btnRegister: {
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
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
    btnSecondaryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop:25,
    },
    btnSecondary: {
      borderWidth:1,
      padding: 5,
      borderRadius:8,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnSecondaryImage:{
      width: 25,
      height:25,
    },
    btnmedsos:{
      flexDirection: 'row',
      justifyContent:'center',
      marginTop:80,
    }
  
  });
  
  export default styles