import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';


const LogoPostCons = () => (
    <Image resizeMode="contain" source={require('../assets/logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
    },
});

export default memo(LogoPostCons);
