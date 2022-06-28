import React from "react"
import { TextInput, View,StyleSheet,Text, TouchableOpacity, Image, SafeAreaView } from "react-native"

export default function Login({navigation}) {
    function proxima(){
        navigation.navigate('Home');
    }

    return (<SafeAreaView style = {styles.container}>
        <View style = {styles.container}>
           <Image source={require('../../assets/react-icon.png')}/>
           <TextBox place = 'Digite o usuario' name = "Login"/>
           <TextBox place = 'Digite a senha' name = "Senha" />
           <Button name = "Fazer Login" function = {proxima}/>
           </View>
    </SafeAreaView>);
}

function TextBox(props){
    return (<View>
        <Text style = {styles.textStyle}>{props.name}</Text>
        <TextInput  placeholder={props.place} style = {styles.input }/>
    </View>);
}
function Button(props){
    return(<View>
        <TouchableOpacity style = {styles.buttonLogin} onPress = {props.function} >
            <Text style = {styles.textStyle}>{props.name}</Text>
        </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
        flexDirection: 'row',
        width: 332,
        textDecorationColor: '#000000',
        height: 45,
        borderRadius: 100,
        backgroundColor: '#DCDCDC',
        shadowColor: '#000000',
        shadowOpacity: 15,
        paddingLeft: 20,
        paddingRight:20,
        margin: 15       
    },
    buttonLogin:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 256,
        height: 53,
        borderRadius: 100,
        backgroundColor: '#14aaf5',
        shadowColor: '#000000',
        shadowOpacity: 15,
        elevation: 5,
        marginHorizontal: 50,
        marginTop: 50,
        marginBottom:32      
    },
    textStyle:{
        margin: 8
    }
  });

