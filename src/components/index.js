import React from "react"
import {Text, View, SafeAreaView} from "react-native"

export default function Index({navigation}) {
    return (<SafeAreaView style = {{alignItems: 'center', justifyContent:'center'}}>
        <View style = {{alignItems: 'center', justifyContent:'center'}}>
           <Text>Bem Vindo</Text>
           </View>
    </SafeAreaView>);
}