import React,{Component} from 'react'
import {View,Text,Image,Alert,TouchableOpacity} from 'react-native'
import {Button,Input,Item,Icon} from 'native-base'
import styles from './styles'
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'Falz.db' });

class Login extends Component{
    constructor(prop){
        super(prop);
        this.state={
            username:"",
            password:""
        }

        db.transaction(function(txn) {
            txn.executeSql(
              "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
              [],
              function(tx, res) {
                console.log('item:', res.rows.length);
                if (res.rows.length == 0) {
                  txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                  txn.executeSql(
                    'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(20), password INT(10), email VARCHAR(50))',
                    []
                  );
                }
              }
            );
          });
        }

    myValidate=()=>{
        const{username,password}=this.state;
        if(username == "" && password == ""){
            Alert.alert('Please fill  The username  and  Password');
            }
             else if(username!="Affal@gmail.com" && password != "0894471275"){
              Alert.alert('Acount not found');
            }
            else if(username =="Affal@gmail.com" && password == ""){
            Alert.alert('Password empty');
            } 
            else if(username =="" && password == "0894471275"){
            Alert.alert('Username empty');
            } 
            else if(username =="Affal@gmail.com" && password == "0894471275"){
             //Alert.alert('Success !');
              this.props.navigation.navigate("Profile")
            }
            else{
                Alert.alert('Data Not Found');
            }
    }

    render(){
        return(
            <View style={{height:1000,backgroundColor:"#192879"}}>
                 <View style = {styles.mainbody}>
                    <Image style={styles.imglogin} source={require("../../assets/logo.png")}/>  
                    
                    <View style={{marginBottom:16}}>
                        <Text style={styles.labeluser}>
                                Username
                        </Text>
                        
                        <Item regular style={styles.inputuser}>
                            <Input onChangeText={username =>this.setState({username})}
                            placeholder="Email" autoCapitalize="none" style={{color:"black"}}>  
                            </Input>
                            <Icon  name="person" />
                        </Item>
                    </View> 
                    <View style={{marginBottom:16}}>
                        <Text style={styles.labeluser}>
                                Password
                        </Text>
                        <Item regular style={styles.inputuser}>
                            <Input onChangeText={password =>this.setState({password})}
                            placeholder="Password" secureTextEntry={true} autoCapitalize="none" style={{color:"black"}}>
     
                            </Input>
                            <Icon  name="lock" />
                        </Item>
                    </View>       
                        <Button onPress={this.myValidate} style={styles.btnsignin}block>
                            <Text style={styles.labelbtn}>
                                Sign In
                            </Text>
                        </Button>
                        <Button onPress = {()=>this.props.navigation.navigate("Register")} 
                                style={{width:300, height:50, marginLeft:65, marginTop:30, backgroundColor:'red', borderRadius:8,}} block>
                                    <Text style={styles.labelbtn}>
                                        Register
                                    </Text>
                        </Button>
                        <Button onPress = {()=>this.props.navigation.navigate("Viewuser")} 
                                style={{width:300, height:50, marginLeft:65, marginTop:30, backgroundColor:'black', borderRadius:8,}} block>
                                    <Text style={styles.labelbtn}>
                                        View User
                                    </Text>
                        </Button>
                        
                 </View>
            </View>
        )
    } 

}


export default Login
