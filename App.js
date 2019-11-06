/**
 * Vídeo #6:Slider - Módulo 11 - React Native Intermediário - B7Web
 * Link para a documentação oficial: https://facebook.github.io/react-native/docs/slider
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Slider from '@react-native-community/slider'; //Slider no pacote padrão está deprecated, deve usar esse segudundo a recomendação

export default class SliderExemplo extends Component{

  constructor(props){
    super(props);
    this.state={
      valor:50
    };
  }

  render(){
    return(
        <View style={styles.body}>
          <Slider style={{height: 40}}
                  value={this.state.valor}
                  minimumValue={0}
                  maximumValue={100}
                  onValueChange={(v)=>this.setState({valor:v})}/>
          <Text style={styles.texto}>{this.state.valor.toFixed(0)}%</Text>
        </View>
    );
  }

}//fim classe

const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex:1,
    //backgroundColor:'#222222'
  },
  texto:{
    textAlign:'center'
  }
});
