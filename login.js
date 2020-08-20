// var React = require('react-native'); // Yup, this older syntax breaks it !!!
// var Text = React.Text;
'use strict';
import React, {Fragment} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native'; // see older syntax below

export class Login extends React.Component {
  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('./myImages/octocat.png')}
          />
          <Text style={styles.heading}>Github browser</Text>
          <TextInput style={styles.input} placeholder="Github username" />
          <TextInput
            style={styles.input}
            placeholder="Github password"
            secureTextEntry="true"
          />
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableHighlight>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b9e2f5',
    flex: 1, // so that the div takes up space
    paddingTop: 40,
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 66,
    height: 55,
  },
  heading: {
    fontSize: 30,
    marginTop: 10,
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec',
    alignSelf: 'stretch',
  },
  button: {
    height: 50,
    backgroundColor: '#48bbec',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center',
  },
});
