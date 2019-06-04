import React,{Component} from 'react'
import {View,Text,Image,Alert,AsyncStorage,FlatList,ImageBackground} from 'react-native'
import {Button,Input,Item,Footer,FooterTab,Content,Icon,Header,Left,Body,Title} from 'native-base'
import styles from './styles'
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'timeline.db' });
class Together extends Component{
    constructor(props) {
        super(props);
        db.transaction(function(txn) {
          txn.executeSql(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
            [],
            function(tx, res) {
              console.log('item:', res.rows.length);
              if (res.rows.length == 0) {
                txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                txn.executeSql(
                  'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, username VARCHAR(100), password INT(10), email VARCHAR(50))',
                  []
                );
              }
            }
          );
        });
      }
    render (){
        return(
            <View style={{height:960,backgroundColor:"#192879"}}>
                        <Header style={{backgroundColor: "#333399" }}>
                            <Body>
                                <Title style={{marginLeft:15,fontWeight:"bold"}}>Together</Title>
                            </Body>
                        </Header> 
             <Content>
                 <View style={{padding:20}}>

                    <Button style={{marginLeft:75,backgroundColor:'green',margin:15,width:300,height:50,borderRadius:5}} onPress = {()=>this.props.navigation.navigate("Post")} >
                        
                        <Text style={{marginLeft:77,color:"white",fontWeight:'bold',fontSize:15}}>โพสต์หาเพื่อนร่วมทาง</Text>
                    </Button>
                    <Button style={{marginLeft:75,backgroundColor:'red',margin:15,width:300,height:50,borderRadius:5}} onPress = {()=>this.props.navigation.navigate("Allpost")} >
                        
                        <Text style={{marginLeft:100,color:"white",fontWeight:'bold',fontSize:15}}>หาเพื่อนร่วมทาง</Text>
                    </Button>
                    <Button style={{marginLeft:75,backgroundColor:'black',margin:15,width:300,height:50,borderRadius:5}} onPress = {()=>this.props.navigation.navigate("Search")} >
                        
                        <Text style={{marginLeft:77,color:"white",fontWeight:'bold',fontSize:15}}>ค้นหาสถานที่ปลายทาง</Text>
                    </Button>
                       
                    </View>
                
            </Content>
                <Footer>
                    <FooterTab style={{backgroundColor: "#333399" }}>
                    
                     <Button  onPress = {()=>this.props.navigation.navigate("Profile")} >
                        <Icon style={{color:'black'}} name="person" />
                        <Text style={{color:"black"}}>Profile</Text>
                    </Button>

                    <Button onPress = {()=>this.props.navigation.navigate("Together")}>
                        <Icon style={{color:'white'}} name="car" />
                        <Text style={{color:"white"}}>Together</Text>
                    </Button>

                    <Button onPress = {()=>this.props.navigation.navigate("Notification")}>
                        <Icon style={{color:'black'}} name="alarm" />
                        <Text style={{color:"black"}}>Notification</Text>
                    </Button>

                    <Button onPress = {()=>this.props.navigation.navigate("Location")}>
                        <Icon style={{color:'black'}} name="navigate" />
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
export default Together  
