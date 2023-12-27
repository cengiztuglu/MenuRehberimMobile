import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function RegisterButton (props) {
    return (
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={props.onPress}>
        <View style={styles.container}>
            <Text style={styles.text}>Hesabınız yok mu ? Şimdi kayıt olun.</Text> 
        </View>
      </TouchableHighlight>
    );
}

RegisterButton.propTypes = {
  onPress: PropTypes.func,
};
