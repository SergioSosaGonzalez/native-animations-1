import React from 'react'
import {View, StyleSheet, Image} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const Header = ({section}) => {
    const colors = [section.leftColor, section.rightColor];
    return (
        <View style={styles.container}>
            <Image source={section.image} style={styles.image} />
            <LinearGradient
                style={styles.gradient}
                start={[0, 0]}
                end={[1, 0]}
                {...{ colors }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:"100%",
    },
    image:{
        ...StyleSheet.absoluteFillObject,
        width:null,
        height:null
    },
    gradient:{
        ...StyleSheet.absoluteFillObject,
        opacity:0.9
    }
})
export default Header;