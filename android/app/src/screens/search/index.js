import React from 'react';
import {TextInput,TouchableOpacity, StyleSheet,FlatList, Text, View } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'timeline.db' });

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_user_name: '',
      userData: '',
    };
  }
  searchUser = () => {
    const { input_user_name } = this.state;
    console.log(this.state.input_user_name);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user where email = ?',
        [input_user_name],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            this.setState({
              userData: results.rows.item(0),
            });
          } else {
            alert('กรุณาระบุสถานที่ปลายทาง');
            this.setState({
              userData: '',
            });
          }
        }
      );
    });
  };
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#192879',paddingTop:20}}>
      <Text style={{textAlign:'center',fontSize:30,margin:40,color:'white',fontWeight:'bold'}}>ค้นหาสถานที่ปลายทาง</Text>
      <Mytextinput
        placeholder="ระบุสถานที่ปลายทาง"
        onChangeText={input_user_name => this.setState({ input_user_name })}
        style={{ padding:10 }}
      />
      <Mybutton
        title ="ค้นหา"
        customClick={this.searchUser.bind(this)}
      />
      <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
        <View style={{margin:20}}>
        <Text style={{textAlign:'center',color:'white',fontSize:22,fontWeight:'bold',marginTop:20}}>โพสต์</Text>
        <Text style={{textAlign:'center',color:'#66FFFF',fontSize:30}}> {this.state.userData.username} </Text>
        </View>
        <View style={{margin:20}}>
        <Text style={{textAlign:'center',color:'white',fontSize:22,fontWeight:'bold'}}>เวลาเดินทาง</Text>
        <Text style={{textAlign:'center',color:'#66FFFF',fontSize:30}}> {this.state.userData.password} </Text>
        </View>
        <View style={{margin:20}}>
        <Text style={{textAlign:'center',color:'white',fontSize:22,fontWeight:'bold'}}>สถานที่ปลายทาง</Text>
        <Text style={{textAlign:'center',color:'#66FFFF',fontSize:30}}> {this.state.userData.email} </Text>
        </View>
      </View>
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

const Mytextinput = props => {
  return (
    <View
      style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1,
        marginBottom:10,
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="white"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
        
      />
    </View>
  );
};