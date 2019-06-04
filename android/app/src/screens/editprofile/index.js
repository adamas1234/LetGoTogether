import React,{Component} from 'react'
import {View,Text,Image,Alert,AsyncStorage} from 'react-native'
import {Button,Input,Item,Icon} from 'native-base'
import styles from './styles'


class Editprofile extends Component{
    componentDidMount=()=>{
        AsyncStorage.getItem('username').then((value)=>this.setState({'username':value}));
        AsyncStorage.getItem('completename').then((value)=>this.setState({'completename':value}));
        AsyncStorage.getItem('password').then((value)=>this.setState({'password':value}));
        AsyncStorage.getItem('completeNumber').then((value)=>this.setState({'completeNumber':value}));

    }

    saveEditProfile =()=>{
        this.props.navigation.navigate("Profile")
    }

    setUsername = (value)=>{
        AsyncStorage.setItem('username',value);
        this.setState({'username':value})
    }

    setCompletename = (value)=>{
        AsyncStorage.setItem('completename',value);
        this.setState({'completename':value})
    }

    setCompletenumber = (value)=>{
        AsyncStorage.setItem('completeNumber',value);
        this.setState({'completeNumber':value})
    }  

    setPassword = (value)=>{
        AsyncStorage.setItem('password',value);
        this.setState({'password':value})
    }


    constructor(prop){
        super(prop);

        this.state={
            username:"",
            password:"",
            completename:"",
            completeNumber:"",

        }
    }
    

    render(){
        return(
            <View style={{height:1000,backgroundColor:"#192879"}}>
                 <View style = {styles.mainbody}>
                 <Text style={styles.name}>
                    Edit profile
                    </Text>
                 <View style={{marginBottom:16}}>
                        <Text style={styles.labeluser}>
                                Username
                        </Text>
                        
                        <Item regular style={styles.inputuser}>
                            <Input
                             value={this.state.completename}
                            onChangeText={this.setCompletename}
                            autoCapitalize="none" style={{color:"#B392E0"}}>  
                            </Input>
                            <Icon  name="person" style={{color:'white'}} />
                        </Item>
                    </View> 
                    
                    <View style={{marginBottom:16}}>
                        <Text style={styles.labeluser}>
                                Facebook Name
                        </Text>
                        
                        <Item regular style={styles.inputuser}>

                            <Input
                             value={this.state.username}
                            onChangeText={this.setUsername}
                             autoCapitalize="none" style={{color:"#B392E0"}}>  
                            </Input>
                            <Icon  name="person" style={{color:'white'}} />

                        </Item>
                    </View> 
                    <View style={{marginBottom:16}}>
                        <Text style={styles.labeluser}>
                                 Phone Number
                        </Text>
                        
                        <Item regular style={styles.inputuser}>
                            <Input
                             value={this.state.completeNumber}
                            onChangeText={this.setCompletenumber}
                            autoCapitalize="none" style={{color:"#B392E0"}}>  
                            </Input>
                            <Icon  name="call" style={{color:'white'}} />
                        </Item>
                    </View> 
                    <View style={{marginBottom:16}}>
                        <Text style={styles.labeluser}>
                                Password
                        </Text>
                        <Item regular style={styles.inputuser}>
                            <Input 
                            value={this.state.password}
                            onChangeText={this.setPassword}
                             secureTextEntry={true} autoCapitalize="none" style={{color:"#B392E0"}}>
     
                            </Input>
                            <Icon  name="lock" style={{color:'white'}}/>
                        </Item>
                    </View>         
                        <Button onPress={this.saveEditProfile} style={styles.btnsignin}block>
                            <Text style={styles.labelbtn}>
                                Save update
                            </Text>
                        </Button>

                        <Button  onPress = {()=>this.props.navigation.navigate("Profile")}
                         style={styles.btnsignout} block>
                        <Text style={styles.labelbtnsignout}>
                            Cancle
                        </Text>

                    </Button>
                        
                 </View>
            </View>
        )
    } 
}

export default Editprofile
