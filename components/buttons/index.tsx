import React, { FC, useMemo} from "react";
import { Pressable, PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";
import {Hue} from "../../constants/color";
import createStyles from "./styles";
import {Text} from "../../components/Themed";
import { LinearGradient } from 'expo-linear-gradient';

interface IProps{
    title: string
    onPress?: () => void
    disabled?: boolean
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
}

const LetsStart: FC<IProps> = ({title, onPress, disabled, buttonStyle, textStyle}) => {
    const styles = useMemo(() => createStyles(), []);
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
        >
            <LinearGradient
                colors={['#FF6CBC', '#1DE8F5']}
                start={{x: 1, y: 3}}
                end={{x: 0, y: 0.5}}
                style={[styles.button, buttonStyle]}
            >
                <Text style={[styles.text, textStyle]}>
                {title}
            </Text>
            </LinearGradient>
            
        </Pressable>
    )
}

export default LetsStart;