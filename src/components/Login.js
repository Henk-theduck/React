import React from "react"
import { TextInput, View,StyleSheet,Text, TouchableOpacity, Image, SafeAreaView } from "react-native"

export default function Login() {
    return (<SafeAreaView>
        <View style = {styles.container}>
           <Image source={require('../../assets/react-icon.png')}/>
           <TextBox place = 'Digite o usuario' name = "Login"/>
           <TextBox place = 'Digite a sennha' name = "Senha" />
           <Button name = "Login"/>
           </View>
    </SafeAreaView>);
}

function TextBox(props){
    return (<View>
        <Text style = {styles.textStyle} placeholder={props.place}>{props.name}</Text>
        <TextInput style = {styles.input}/>
    </View>);
}
function Button(props){
    return(<View>
        <TouchableOpacity style = {styles.buttonLogin}>
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
        height: 45,
        borderRadius: 100,
        backgroundColor: '#DCDCDC',
        shadowColor: '#000000',
        shadowOpacity: 15,
        alignItems: 'center',
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

