import React,{Component} from 'react'
import {View,Text,Image,Alert,AsyncStorage} from 'react-native'
import {Button,Input,Item,Footer,FooterTab,Content,Icon,Header,Left,Body,Title} from 'native-base'
import styles from './styles'

class Notification extends Component{

    render (){
        return(
            <View style={{height:960,backgroundColor:"#192879"}}>
                        <Header style={{backgroundColor: "#333399" }}>
                            <Body>
                                <Title style={{marginLeft:15,fontWeight:"bold"}}>Notification</Title>
                            </Body>
                        </Header> 
                        <Content style={{paddingTop:10,paddingLeft:10,paddingRight:10}}>
                        <View style={{flex:1,flexDirection:'column',margin:5,backgroundColor:'white',borderRadius:5}}>
                            <View style={{flexDirection:'row',margin:10}}>
                            <Image source={require("../../assets/icprofile.png")} style={{width:55,height:55,borderRadius:55/2}}/>
                            <View style={{flexDirection:'column',marginLeft:8,marginTop:3}}>
                                <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>
                                    ทองดี ทองเค                                               <Icon name="settings" style={{fontSize:20,color:"gray"}}> </Icon>   
                                </Text>
                                <Text style={{color:'#000000AA'}}>24 July 2562  04:50 PM.</Text>
                            </View>
                            </View>
                                <Text style={{color:'#000000AA',fontSize:15,marginLeft:20}}>
                                    นาย ทองดี ทองเค ได้ส่งคำขอเป็นเพื่อนร่วมทางถึงคุณ 
                                </Text>
                                <View style={{flexDirection:'row',margin:10}} >
                                <Button  style={{backgroundColor:'#669933',width:130,marginTop:10,marginLeft:82,margin:15,borderRadius:5,}}>
                                        
                                    <Text style={{color:'white',marginLeft:25,fontWeight:'bold'}}>
                                        ตอบรับคำขอ  
                                    </Text>
                                    
                                </Button>
                    
                                <Button style={{backgroundColor:'red',width:130,marginTop:10,marginLeft:10,margin:10,borderRadius:5}}>
                                    <Text style={{color:'white',marginLeft:25,fontWeight:'bold'}} >
                                        ปฏิเสธคำขอ
                                    </Text>
                                </Button>
                                </View>
                        </View>



                        <View style={{flex:1,flexDirection:'column',margin:5,backgroundColor:'white',borderRadius:5}}>
                            <View style={{flexDirection:'row',margin:10}}>
                            <Image source={require("../../assets/somchai.jpg")} style={{width:55,height:55,borderRadius:55/2}}/>
                            <View style={{flexDirection:'column',marginLeft:8,marginTop:3}}>
                                <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>
                                     สมชาย คล้ายจะเป็นลม                             <Icon name="settings" style={{fontSize:20,color:"gray"}}> </Icon>   
                                </Text>
                                <Text style={{color:'#000000AA'}}>24 July 2562  04:58 PM.</Text>
                            </View>
                            </View>
                                <Text style={{color:'#000000AA',fontSize:17,marginLeft:20,marginBottom:20}}>
                                    นาย สมชาย คล้ายจะเป็นลม ได้โพสต์ถึงสถานที่ปลายทางเดียวกับคุณ
                                </Text>
                        </View>



                        <View style={{flex:1,flexDirection:'column',margin:5,backgroundColor:'white',borderRadius:5}}>
                            <View style={{flexDirection:'row',margin:10}}>
                            <Image source={require("../../assets/prayuth.jpg")} style={{width:55,height:55,borderRadius:55/2}}/>
                            <View style={{flexDirection:'column',marginLeft:8,marginTop:3}}>
                                <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>
                                     อุสมาน บินลาดิน                                        <Icon name="settings" style={{fontSize:20,color:"gray"}}> </Icon>   
                                </Text>
                                <Text style={{color:'#000000AA'}}>24 July 2562  04:58 PM.</Text>
                            </View>
                            </View>
                                <Text style={{color:'#000000AA',fontSize:15,marginLeft:20}}>
                                    นาย อุสมาน บินลาดิน ได้ส่งคำขอเป็นเพื่อนร่วมทางถึงคุณ 
                                </Text>
                                <View style={{flexDirection:'row',margin:10}}>

                                <Button style={{backgroundColor:'#669933',width:130,marginTop:10,marginLeft:82,margin:15,borderRadius:5}}>
                                    <Text style={{color:'white',marginLeft:25,fontWeight:'bold'}} >
                                        ตอบรับคำขอ
                                    </Text>
                                </Button>
                    
                                <Button style={{backgroundColor:'red',width:130,marginTop:10,marginLeft:10,margin:10,borderRadius:5}}>
                                    <Text style={{color:'white',marginLeft:25,fontWeight:'bold'}} >
                                        ปฏิเสธคำขอ
                                    </Text>
                                </Button>
                                </View>
                        </View>

                        <View style={{flex:1,flexDirection:'column',margin:5,backgroundColor:'white',borderRadius:5}}>
                            <View style={{flexDirection:'row',margin:10}}>
                            <Image source={require("../../assets/Po.jpg")} style={{width:55,height:55,borderRadius:55/2}}/>
                            <View style={{flexDirection:'column',marginLeft:8,marginTop:3}}>
                                <Text style={{color:'black',fontWeight:'bold',fontSize:20}}>
                                     เสี่ยโป้ อานนท์                                            <Icon name="settings" style={{fontSize:20,color:"gray"}}> </Icon>   
                                </Text>
                                <Text style={{color:'#000000AA'}}>24 July 2562  04:58 PM.</Text>
                            </View>
                            </View>
                                <Text style={{color:'#000000AA',fontSize:15,marginLeft:20}}>
                                     เสี่ยโป้ อานนท์ ได้ส่งคำขอเป็นเพื่อนร่วมทางถึงคุณ 
                                </Text>
                                <View style={{flexDirection:'row',margin:10}}>

                                <Button style={{backgroundColor:'#669933',width:130,marginTop:10,marginLeft:82,margin:15,borderRadius:5}}>
                                    <Text style={{color:'white',marginLeft:25,fontWeight:'bold'}} >
                                        ตอบรับคำขอ
                                    </Text>
                                </Button>
                    
                                <Button style={{backgroundColor:'red',width:130,marginTop:10,marginLeft:10,margin:10,borderRadius:5}}>
                                    <Text style={{color:'white',marginLeft:25,fontWeight:'bold'}} >
                                        ปฏิเสธคำขอ
                                    </Text>
                                </Button>
                                </View>
                        </View>
                            
                         </Content>
                <Footer>
                    <FooterTab style={{backgroundColor: "#333399" }}>
                    
                    <Button  onPress = {()=>this.props.navigation.navigate("Profile")} >
                        <Icon style={{color:"black"}} name="person" />
                        <Text style={{color:"black"}}>Profile</Text>
                    </Button>

                    <Button onPress = {()=>this.props.navigation.navigate("Together")}>
                        <Icon style={{color:"black"}} name="car" />
                        <Text style={{color:"black"}}>Together</Text>
                    </Button>

                    <Button onPress = {()=>this.props.navigation.navigate("Notification")}>
                        <Icon style={{color:"white"}} name="alarm" />
                        <Text style={{color:"white"}}>Notification</Text>
                    </Button>

                    <Button onPress = {()=>this.props.navigation.navigate("Location")}>
                        <Icon  style={{color:"black"}} name="navigate" />
                        <Text style={{color:"black"}}>Location</Text>
                    </Button>
                    </FooterTab>
                    </Footer>
                <View style = {styles.mainbody}>
                
                
                   
                </View>
            </View>
        )
    }
} 
export default Notification  
