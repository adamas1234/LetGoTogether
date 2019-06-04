import React, { Component } from 'react'
import { Text, StyleSheet,ScrollView, View,Alert,KeyboardAvoidingView, TextInput, ImageBackground, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import SQLite from 'react-native-sqlite-storage'
var db = SQLite.openDatabase({ name: 'Falz.db' });

export default class Register extends Component {
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
                          that.props.navigation.navigate('Login'),
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
          alert('Please fill email');
        }
      } else {
        alert('Please fill password');
      }
    } else {
      alert('Please fill Username');
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: '#192879', flex: 1 }}>
         <ScrollView keyboardShouldPersistTaps="handled">
         <Text style={{fontSize:40,textAlign:'center',margin:30,color:'black'}}>Register</Text>
         <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Enter Username"
              onChangeText={username => this.setState({ username })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Enter Password"
              onChangeText={password => this.setState({ password })}
              maxLength={10}
              keyboardType="numeric"
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Enter email"
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
        marginTop: 20,
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
    backgroundColor: '#f05555',
    color: '#ffffff',
    padding: 10,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    height:45,
  },
  text: {
    color: '#ffffff',
  },
});
