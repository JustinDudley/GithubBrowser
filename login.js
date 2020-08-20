// var React = require('react-native'); // Yup, this older syntax breaks it !!!
// var Text = React.Text;
'use strict';
import React, {Fragment} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native'; // see older syntax below

export class Login extends React.Component {
  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('./myImages/octocat.png')}
          />
          {/* <Text style={{color: 'red'}}>Hello there Justin!</Text> */}
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b9e2f5',
    flex: 1, // so that the div takes up space
  },
  logo: {
    width: 66,
    height: 55,
  },
});
