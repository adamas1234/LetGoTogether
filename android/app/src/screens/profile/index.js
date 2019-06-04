import React,{Component} from 'react'
import {View,Text,Image,Alert,AsyncStorage} from 'react-native'
import {Button,Input,Item,Footer,FooterTab,Content,Icon,Header,Left,Body,Title} from 'native-base'
import styles from './styles'

class Profile extends Component{

    constructor(prop){
        super(prop);

        this.state={
            username:"",
            completename:"",

        }
    }
    componentDidMount=()=>{
        AsyncStorage.getItem('username').then((value)=>this.setState({'username':value}));
        AsyncStorage.getItem('completename').then((value)=>this.setState({'completename':value}));
        AsyncStorage.getItem('completeNumber').then((value)=>this.setState({'completeNumber':value}));
    } 

    logoutProfile=()=>{
        this.props.navigation.navigate("Login")
    }
    render (){
        return(
            <View style={{height:960,backgroundColor:"#192879"}}>
                        <Header style={{backgroundColor: "#333399" }}>
                            <Body>
                                <Title style={{marginLeft:15,fontWeight:"bold"}}>Profile</Title>
                            </Body>
                            <Button  onPress = {()=>this.props.navigation.navigate("Editprofile")}
                                style={styles.btnsmall}block>
                            <Text style={styles.labelbtnsmall}>
                                Edit
                            </Text>
                
                             </Button>
                        </Header> 
                        <Content>
                                <Image style={styles.imgprofile} source={require("../../assets/fal.jpg")}/>
                                <Text style={styles.name}>
                                     {this.state.completename}
                                </Text>
                                <Text style={styles.username}>
                                     Facebook : {this.state.username}
                                </Text>

                                <View style={styles.itemprofile}>
                                <Image   style={{width:36,height:36,marginLeft:5}} 
                                        source={require("../../assets/profile.png")}/> 
                                <Text style={styles.labelitem}>
                                    Username
                                </Text>
                                <Text style={styles.sublabelitem}>
                                    {this.state.completename}
                                </Text>
                                </View>

                                <View 
                                    style={styles.itemprofile}>
                                    <Image  style={styles.imgitem} source={require("../../assets/icphone.png")}/> 
                                    <Text style={styles.labelitem}>
                                    Phone Number
                                    </Text>
                                    <Text style={styles.sublabelitem}>
                                    {this.state.completeNumber}
                                    </Text>
                                </View> 
                            
                                <View style={styles.itemprofile}>
                                <Image  style={styles.imgitem} source={require("../../assets/icbadge.png")}/> 
                                <Text style={styles.labelitem}>
                                    Credit
                                </Text>
                                <Text style={styles.sublabelitem}>
                                    183,569 
                                </Text>
                                </View>

                            <Button    
                                 onPress={this.logoutProfile} 
                                 style= {styles.btnsignout} block>
                                <Text style={styles.labelbtn}>
                                     Log Out
                                </Text>

                            </Button>
                     </Content>
                    <Footer style={{marginTop:70,marginLeft:0}}>
                        <FooterTab style={{backgroundColor: "#333399" }}>
                            <Button  onPress = {()=>this.props.navigation.navigate("Profile")} >
                                <Icon style={{color:'white'}} name="person" />
                                <Text style={{color:'white'}}>Profile</Text>
                            </Button>

                            <Button onPress = {()=>this.props.navigation.navigate("Together")}>
                                <Icon style={{color:'black'}} name="car" />
                                <Text style={{color:'black'}}>Together</Text>
                            </Button>

                            <Button onPress = {()=>this.props.navigation.navigate("Notification")}>
                                <Icon style={{color:'black'}} name="alarm" />
                                <Text style={{color:'black'}}>Notification</Text>
                            </Button>

                            <Button onPress = {()=>this.props.navigation.navigate("Location")}>
                                <Icon style={{color:'black'}} name="navigate" />
                                <Text style={{color:'black'}}>Location</Text>
                            </Button>
                            </FooterTab>
                    </Footer>
                    <View style = {styles.mainbody}>
                </View>
            </View>
        )
    }
} 
export default Profile  
