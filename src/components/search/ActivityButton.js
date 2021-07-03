import React from 'react';
import {View, TouchableHighlight, Text} from 'react-native';
import styles from './ActivityButton.styles';

const ActivityButton = ({style, text, icon, onPress}) => {
  return (
    <TouchableHighlight
      underlayColor="#e0e0e0"
      style={[styles.btn, styles[style]]}
      onPress={onPress}>
      <View style={styles.btnView}>
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ActivityButton;
