import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
    return (
      <View style={styles.container}>
        <View style={ styles.style1}>
           <Image source={require('./assets/Ellipse8.png')}
                style= {{width : '150px' , height : '150px'}}
          >         
          </Image>
  
        </View>
        <View style={ styles.style2}>
  
            <Text style={styles.tile1}> GROW</Text>
            <Text style={ styles.tile2}>YOUR BUSINESS </Text>
            
        </View>
  
        <View style={styles.style3}>
        </View>
        <View style={styles.style4}>
  
        </View>
      </View>
  
  
  
  
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#00CCF9",
    },
    style1:{
      flex : 3,
      justifyContent: "center",
      alignItems: 'center',
    },
  
    style2: {
      alignItems: 'center',
  
    },
  
    style3:{
      flex: 1,
    },
  
    style4: {
      flex : 1,
    },
  
    tile1:{
      fontSize: '38px',
      fontWeight: 'bold',
      width : '70%px',
      textAlign: 'center',
    },
  
    tile2: {
      fontSize: '38px',
      fontWeight: 'bold',
      width : '70%px',
      textAlign: 'center',
    }
  });