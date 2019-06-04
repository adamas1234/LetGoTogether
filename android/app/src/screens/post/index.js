import React from 'react';
import { TextInput,KeyboardAvoidingView,ScrollView,FlatList, Text, View,StyleSheet,TouchableOpacity,Alert,Button } from 'react-native';
import SQLite from 'react-native-sqlite-storage'
var db = SQLite.openDatabase({ name: 'timeline.db' });
 
export default class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
     
    };
  }
  register_user = () => {
    var that = this;
    const { username } = this.state;
    const { password } = this.state;
    const { email } = this.state;

    if (username) {
      if (password) {
        if (email) {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO table_user (username, password,email) VALUES (?,?,?)',
              [username, password, email],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'You are Registered Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate("Allpost"),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('Registration Failed');
                }
              }
            );
          });
        } else {
          alert('กรุณาระบุสถานที่ปลายทาง');
        }
      } else {
        alert('กรุณาระบุเวลาเดินทาง');
      }
    } else {
      alert('ไม่สามารถโพสได้เนื่องจากคุณไม่ได้ทำการเขียนโพสต์');
    }
  };
  render() {
    return (
      <View style={{ backgroundColor: '#192879', flex: 1 }}>
      <ScrollView keyboardShouldPersistTaps="handled">
      <Text style={{fontSize:35,textAlign:'center',margin:30,fontWeight:'bold',color:'white'}}>Together</Text>
      <KeyboardAvoidingView
         behavior="padding"
         style={{ flex: 1, justifyContent: 'space-between' }}>
         <Mytextinput
           placeholder="โพสต์"
           onChangeText={username => this.setState({ username })}
           style={{ padding:10 }}
         />
         <Mytextinput
           placeholder="เวลาเดินทาง"
           onChangeText={password => this.setState({ password })}
           maxLength={10}
           keyboardType="numeric"
           style={{ padding:10 }}
         />
         <Mytextinput
           placeholder="สถานที่ปลาย"
           onChangeText={email => this.setState({ email })}
           maxLength={50}
           multiline={true}
           style={{ textAlignVertical: 'top',padding:10 }}
         />
         <Mybutton
           title="Submit"
           customClick={this.register_user.bind(this)}
         />
         
           
           
         
      
         
       </KeyboardAvoidingView>
      </ScrollView>
   </View>
    );
  }
}
const Mytextinput = props => {
  return (
    <View
      style={{
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        borderColor: '#007FFF',
        borderWidth: 1,
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#007FFF"
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
    height:45,
    borderRadius:5

  },
  text: {
    color: '#ffffff',
  },
});