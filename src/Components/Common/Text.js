import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from './Colors';

const Large1 = props => (
  <Text style={[styles.large1, props.style]}>{props.children}</Text>
);

const Large2 = props => (
  <Text style={[styles.large2, props.style]}>{props.children}</Text>
);

const styles = StyleSheet.create({
  large1: {
    fontSize: 20,
    color: colors.darKGrey,
  },
  large2: {
    fontSize: 18,
    color: colors.darKGrey,
  },
});

export {
  Large1,
  Large2,
};
