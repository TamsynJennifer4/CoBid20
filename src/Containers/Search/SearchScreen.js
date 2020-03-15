import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { Large2 } from '../../Components/Common/Text';
import { colors } from '../../Components/Common/Colors';

function SearchScreen() {
    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
            >
                <Large2>Search</Large2>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.white,
    },
});

export default SearchScreen;
