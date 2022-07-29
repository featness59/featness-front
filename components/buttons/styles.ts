import { StyleSheet } from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {Hue} from "../../constants/color";

const createStyles = () =>
    StyleSheet.create({
        button: {
            width: RFValue(250),
            alignSelf: 'center',
            padding: RFValue(8),
            alignItems: 'center',
            borderRadius: RFValue(35),
            marginBottom: RFValue(10), 
            bottom: -100,
            

        },
        text: {
            color: Hue.WHITE,
            fontSize: RFValue(22),
            justifyContent: 'center',
            
        },
        
    })

export default createStyles;