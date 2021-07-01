import React from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import styles from './ActivityButton.styles';

const ActivityButton = ({style, text, icon}) => {
  return (
    <TouchableHighlight
      underlayColor="#e0e0e0"
      onPress={() => console.log('press')}
      style={[styles.btn, styles[style]]}>
      <View style={styles.btnView}>
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ActivityButton;
