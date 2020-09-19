import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const LogoMenu = () => (
    <FontAwesome name={'bars'} style={styles.imageBars} size={35} />
);

const styles = StyleSheet.create({
    imageBars: {
        width: "35%",
        height: "100%",

    },
});

export default memo(LogoMenu);