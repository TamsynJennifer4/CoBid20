import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { Large2 } from '../../../Components/Common/Text';
import { colors } from '../../../Components/Common/Colors';

function InstructionScreen() {
    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
            <Large2>Instruction</Large2>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
});

export default InstructionScreen;
