import {StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Hue } from "../../constants/color";

const pushUpStyle = () =>
    StyleSheet.create({
        button: {
            width: RFValue(240),
            alignSelf: 'center',
            padding: RFValue(15),
            alignItems: 'flex-start',
            borderRadius: RFValue(15),
            paddingLeft: RFValue(15)
        },
        text: {
            color: Hue.WHITE,
            fontSize: RFValue(18),
        }
    });

const crunchStyle = () =>
    StyleSheet.create({
        button: {
            width: RFValue(240),
            alignSelf: 'center',
            padding: RFValue(15),
            alignItems: 'flex-start',
            borderRadius: RFValue(15),
            paddingLeft: RFValue(15),

        },
        text: {
            color: Hue.WHITE,
            fontSize: RFValue(18),
            
        }
    });

const squatsStyle = () =>
    StyleSheet.create({
        button: {
            width: RFValue(240),
            alignSelf: 'center',
            padding: RFValue(15),
            alignItems: 'flex-start',
            borderRadius: RFValue(15),
            paddingLeft: RFValue(15),
        },
        text: {
            color: Hue.WHITE,
            fontSize: RFValue(18),
            justifyContent: 'flex-start'
        }
    });

const pushStyle = () =>
    StyleSheet.create({
        button: {
            width: RFValue(125),
            alignSelf: 'center',
            padding: RFValue(15),
            alignItems: 'center',
            borderRadius: RFValue(15),
            paddingLeft: RFValue(15),
            
        },
        text: {
            color: Hue.BLACK,
            fontSize: RFValue(18),
            justifyContent: 'flex-start',
            fontWeight: 'bold'
        }
});

const situpStyle = () =>
    StyleSheet.create({
        button: {
            width: RFValue(125),
            alignSelf: 'center',
            padding: RFValue(15),
            alignItems: 'center',
            borderRadius: RFValue(15),
            paddingLeft: RFValue(15),
            
        },
        text: {
            color: Hue.BLACK,
            fontSize: RFValue(18),
            justifyContent: 'flex-start',
            fontWeight: 'bold'
        }
});

const crunchsStyle = () =>
    StyleSheet.create({
        button: {
            width: RFValue(125),
            alignSelf: 'center',
            padding: RFValue(15),
            alignItems: 'center',
            borderRadius: RFValue(15),
            paddingLeft: RFValue(15),
            
        },
        text: {
            color: Hue.BLACK,
            fontSize: RFValue(18),
            justifyContent: 'flex-start',
            fontWeight: 'bold'
        }
});

const placeStyle = () =>
    StyleSheet.create({
        button: {
            width: RFValue(125),
            height: RFValue(50),
            alignSelf: 'center',
            padding: RFValue(5),
            borderRadius: RFValue(15),
            paddingLeft: RFValue(15),
            borderColor: Hue.GRAY,
            borderStyle: 'dashed',
            borderWidth: 1,
            
        },
        text: {
            color: Hue.GRAY,
            fontSize: RFValue(25),
            left: RFValue(40),
            fontWeight: 'bold'
        }
});

export {
    pushUpStyle, 
    crunchStyle,
    squatsStyle, 
    pushStyle,
    situpStyle,
    crunchsStyle,
    placeStyle,
};