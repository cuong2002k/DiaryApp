import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { STYLE } from '../Style/style'

const TextInputComponent = ({ holder, value, onchangeValue, style, secureTextEntry, multiline }) => {
    return (
        <TextInput
            mode='outlined'
            placeholder={holder}
            value={value}
            onChangeText={onchangeValue}
            secureTextEntry={secureTextEntry}
            style={[styles.textInput, style]}
            multiline={multiline}
        />
    )
}

export default TextInputComponent

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 10,
        borderColor: STYLE.blue
    }
})