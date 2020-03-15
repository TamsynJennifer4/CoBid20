import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import ListItemMenu from '../../Components/ListItemMenu';
import { colors } from '../../Components/Common/Colors';

function SettingsScreen() {
    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
            >
                <ListItemMenu
                    title='About'
                />
                <ListItemMenu
                    title='Instructions'
                />
                <ListItemMenu
                    title='Account'
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.white,
    },
});

export default SettingsScreen;
