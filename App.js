import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Bai01 from './layout/Bai01/index';
import Bai02 from './layout/Bai02/index';
import Bai03 from "./layout/Bai03/index";
import Bai04 from "./layout/Bai04/index";



export default function App() {
   return (
      <View style={styles.container}>
        <Bai04/>
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });

