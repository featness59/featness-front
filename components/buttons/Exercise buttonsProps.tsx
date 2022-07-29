import React, {FC, useMemo} from "react";
import { Pressable, StyleProp, TextStyle, ViewStyle } from "react-native";
import {Hue} from "../../constants/color";
import {Text} from "../../components/Themed";
import { pushUpStyle, crunchStyle, squatsStyle, pushStyle, placeStyle } from "./Exercise buttonsStyles";
import {LinearGradient } from 'expo-linear-gradient'

interface IProps{
    title: string
    onPress?: () => void
    disabled?: boolean
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle> 
}

const PushUp: FC<IProps> = ({title, onPress, disabled, buttonStyle, textStyle}) => {
    const styles = useMemo(() => pushUpStyle(), []);
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
        >
        <LinearGradient
                colors={['#6C7AFC', '#68F8EF']}
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

const Crunches: FC<IProps> = ({title, onPress, disabled, buttonStyle, textStyle}) => {
    const styles = useMemo(() => crunchStyle(), []);
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
        >
        <LinearGradient
                colors={['#C56CFC', '#68F8EF']}
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

const Squats: FC<IProps> = ({title, onPress, disabled, buttonStyle, textStyle}) => {
    const styles = useMemo(() => squatsStyle(), []);
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
        >
        <LinearGradient
                colors={['#FC6CA0', '#F5F868']}
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


const Push: FC<IProps> = ({title, onPress, disabled, buttonStyle, textStyle}) => {
    const styles = useMemo(() => pushStyle(), []);
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={[styles.button, {backgroundColor: disabled ? Hue.GRAY: Hue.pushup}, buttonStyle]}
        >
            <Text style={[styles.text, textStyle]}>
                {title}
            </Text>
        
    </Pressable>
    )
}

const Crunch: FC<IProps> = ({title, onPress, disabled, buttonStyle, textStyle}) => {
    const styles = useMemo(() => pushStyle(), []);
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={[styles.button, {backgroundColor: disabled ? Hue.GRAY: Hue.crunch}, buttonStyle]}
        >
            <Text style={[styles.text, textStyle]}>
                {title}
            </Text>
        
    </Pressable>
    )
}

const Sit: FC<IProps> = ({title, onPress, disabled, buttonStyle, textStyle}) => {
    const styles = useMemo(() => pushStyle(), []);
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={[styles.button, {backgroundColor: disabled ? Hue.GRAY: Hue.sit}, buttonStyle]}
        >
            <Text style={[styles.text, textStyle]}>
                {title}
            </Text>
        
    </Pressable>
    )
}

const Placeholder: FC<IProps> = ({title, onPress, disabled, buttonStyle, textStyle}) => {
    const styles = useMemo(() => placeStyle(), []);
    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={[styles.button, {backgroundColor: 'transparent'}, buttonStyle]}
        >
            <Text style={[styles.text, textStyle]}>
                {title}
            </Text>
        
    </Pressable>
    )
}

export {PushUp, Crunches, Squats, Push, Sit, Crunch, Placeholder};