// var React = require('react-native'); // Yup, this older syntax breaks it !!!
// var Text = React.Text;
'use strict';
import React from 'react';
import {Text} from 'react-native'; // see older syntax below

export class Login extends React.Component {
  render() {
    return <Text style={{color: 'green'}}>Hello Justin!</Text>;
  }
}
