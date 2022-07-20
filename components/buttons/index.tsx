import React, { FC, useMemo} from "react";
import { Pressable, PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";
import {Hue} from "../../constants/color";
import createStyles from "./styles";
import {Text} from "../../components/Themed";

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
            style={[
                styles.button,
                {
                    backgroundColor: disabled ? Hue.GRAY : Hue.ORANGE,
                },
                buttonStyle
                ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.text, textStyle]}>
                {title}
            </Text>
        </Pressable>
    )
}

export default LetsStart;