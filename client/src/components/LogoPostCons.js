import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';


const LogoPostCons = () => (
    <Image source={require('../assets/logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
    image: {
        width: "35%",
        height: "85%",
        borderRadius: 10,
    },
});

export default memo(LogoPostCons);