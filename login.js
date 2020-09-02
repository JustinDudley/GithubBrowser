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
  ActivityIndicator,
} from 'react-native'; // see older syntax below

import buffer from 'buffer';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showProgress: false};
  }

  onLoginPressed() {
    console.log('Attempting to log in with username ' + this.state.username);
    this.setState({showProgress: true});

    // simple get request:
    // fetch('https://api.github.com/search/repositories?q=react')
    //   .then((resp) => {
    //     return resp.json();
    //   })
    //   .then((results) => {
    //     console.log(results);
    //     this.setState({showProgress: false});
    //   });

    //
    // const buff = new buffer.Buffer('hello');
    // console.log(buff.toString());
    // console.log(buff.toString('base64'));

    //
    // I am not using this buffer object anymore. username and password are deprecated. I am using a personal access token instead. It didn't need to be base64-encoded, so I didn't do that.
    const buff = new buffer.Buffer(
      this.state.username + ':' + this.state.password,
    );
    const encodedAuth = buff.toString('base64');

    fetch('https://api.github.com/user', {
      headers: {
        Authorization: 'token ' + this.state.token,
        // Authorization: 'Basic ' + encodedAuth,  //the old way, with base64-encoded username and password
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((results) => {
        console.log(results);
        this.setState({showProgress: false});
      });
  }

  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('./myImages/octocat.png')}
          />
          <Text style={styles.heading}>Github browser</Text>
          <TextInput
            style={styles.inputDeprecated}
            placeholder="Github username- deprecated, no functionality"
            onChangeText={(text) => this.setState({username: text})}
          />
          <TextInput
            style={styles.inputDeprecated}
            placeholder="Github password- deprecated, no functionality"
            secureTextEntry="true"
            onChangeText={(text) => this.setState({password: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="Github personal access token (Homer)"
            secureTextEntry="true"
            onChangeText={(text) => this.setState({token: text})}
          />
          <TouchableHighlight style={styles.button}>
            <Text
              onPress={this.onLoginPressed.bind(this)} //must use bind function, so points to component, and not its own scope
              style={styles.buttonText}>
              Log in
            </Text>
          </TouchableHighlight>
          <ActivityIndicator
            animating={this.state.showProgress}
            size="large"
            color="purple"
            style={styles.loader}
          />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edf7fc',
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
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#48bbec',
    alignSelf: 'stretch',
  },
  inputDeprecated: {
    height: 45,
    marginTop: 10,
    padding: 4,
    fontSize: 14,
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
  loader: {
    marginTop: 30,
  },
});
