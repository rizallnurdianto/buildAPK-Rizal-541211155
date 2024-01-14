import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: 48,
      backgroundColor: '#fafafa',
    },
    logo: {
      width: 96,
      height: 96,
      marginTop:70,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    title: {
      marginTop: 10,
      paddingVertical: 8,
      color: 'black',
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
    description: {
      color: 'grey',
      textAlign: 'center',
    },
   
    reset: {
      fontWeight: "500",
      color: "#000000"
    },
    registerBtnGroup: {
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
      marginTop: 120,
      paddingBottom: 75,
    },
    btnLogin: {
      flexDirection: 'row',
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
      fontSize: 14,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
   
    lupaPw: {
      marginVertical: 15,
      textAlign: "right"
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
    }
  });

  export default styles