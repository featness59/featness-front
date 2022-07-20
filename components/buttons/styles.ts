import { StyleSheet } from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import {Hue} from "../../constants/color";
const createStyles = () =>
    StyleSheet.create({
        button: {
            width: '70%',
            alignSelf: 'center',
            padding: RFValue(10),
            alignItems: 'center',
            borderRadius: RFValue(5),
        },
        text: {
            color: Hue.WHITE,
            fontSize: RFValue(22),
            
        },
        
    })

export default createStyles;