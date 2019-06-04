import React from 'react';
import { Image,FlatList, Text, View,TouchableOpacity,StyleSheet,Button } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'timeline.db' });
 
export default class Allpost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%' }} />
    );
  };
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#192879',paddingLeft:25,paddingRight:25,paddingTop:10}}>
      <FlatList
        data={this.state.FlatListItems}
        ItemSeparatorComponent={this.ListViewItemSeparator}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flex:1,flexDirection:'column',margin:10,backgroundColor:'white',borderRadius:5,backgroundColor: 'white', padding: 20 }}>
                <View style={{flexDirection:'row',margin:10}}>
                <Image source={require("../../assets/fal.jpg")} style={{width:55,height:55,borderRadius:55/2}}/>
                <View style={{flexDirection:'column',marginLeft:8,marginTop:3}}>
                      <Text style={{color:'black',fontWeight:'bold',fontSize:20,marginTop:5,marginLeft:10}}>
                              Fal waedeng                         
                      </Text>
                </View>
             </View>
            <View>
            <Text>Post_id:{item.user_id}</Text>
            <Text style={{color:'black',fontSize:22}}>โพสต์: {item.username}</Text>
            <Text style={{color:'black',fontSize:22}}>เวลาเดินทาง: {item.password}</Text>
            <Text style={{color:'black',fontSize:22}}>สถานที่ปลายทาง: {item.email}</Text>
            </View>
          </View> 
        )}
      />
    </View>
    );
  }
}
const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    color: '#ffffff',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    borderRadius: 5,
  },
  text: {
    color: '#ffffff',
  },
});