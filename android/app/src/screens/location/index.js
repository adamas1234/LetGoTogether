import React,{Component} from 'react'
import {View,Text,Image,Alert,AsyncStorage,StyleSheet} from 'react-native'
import {Button,Input,Item,Footer,FooterTab,Content,Icon,Header,Left,Body,Title} from 'native-base'
import styles from './styles'
class Location extends Component{

   render (){
        return(
            <View style={{height:960,backgroundColor:"#192879"}}>
                        <Header style={{backgroundColor: "#333399" }}>
                            <Body>
                                <Title style={{marginLeft:15,fontWeight:"bold"}}>Location</Title>
                            </Body>
                        </Header> 
                <Content> 
               
                       
                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor: "#333399" }}>
                    
                    <Button  onPress = {()=>this.props.navigation.navigate("Profile")} >
                        <Icon style={{color:'black'}} name="person" />
                        <Text style={{color:'black'}}>Profile</Text>
                    </Button>

                    <Button onPress = {()=>this.props.navigation.navigate("Together")}>
                        <Icon style={{color:'black'}} name="car" />
                        <Text style={{color:'black'}}>Together</Text>
                    </Button>

                    <Button onPress = {()=>this.props.navigation.navigate("Notification")}>
                        <Icon style={{color:'black'}} name="alarm" />
                        <Text style={{color:'black'}} >Notification</Text>
                    </Button>

                    <Button onPress = {()=>this.props.navigation.navigate("Location")}>
                        <Icon style={{color:'white'}} name="navigate" />
                        <Text style={{color:'white'}} >Location</Text>
                    </Button>
                    </FooterTab>
                    </Footer>
                <View style = {styles.mainbody}>
                
                
                   
                </View>
            </View>
        )
    
    }

    

} 
export default Location  
