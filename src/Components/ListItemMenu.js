import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Large1 } from '../Components/Common/Text';
import { colors } from '../Components/Common/Colors';

function ListItemMenu(props) {
    return (
        <View style={styles.container}>
            <Large1>{props.title}</Large1>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.midGrey,
        height: 100,
        width: '100%',
    },
});

export default ListItemMenu;
