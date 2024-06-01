import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { STYLE } from '../Style/style'
import TextInputComponent from '../Component/TextInputComponent'
import ButtonComponent from '../Component/ButtonComponent'
import { Button, TextInput } from 'react-native-paper'

const Login = () => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <View style={styles.container}>
            <Text
                style={styles.header}
            >Đăng nhập</Text>
            <Text
                style={{ alignSelf: 'center' }}
            >
                Chào mừng bạn đã quay trở lại
            </Text>
            <View>
                <TextInputComponent
                    holder={"Email"}
                    value={email}
                    onchangeValue={onChangeEmail}
                    style={styles.margin}
                />
                <TextInputComponent
                    holder={"password"}
                    value={password}
                    onchangeValue={onChangePassword}
                    style={styles.margin}
                />
                <Button
                    style={[styles.margin, { alignSelf: 'flex-end' }]}
                >
                    Quên mật khẩu ?
                </Button>
                <ButtonComponent
                    title={"Đăng Nhập"}
                    style={styles.margin}
                />

                <Button
                    style={[styles.margin]}
                >
                    Tạo tài khoản mới?
                </Button>

            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: STYLE.blue,
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    margin: {
        marginTop: 20
    }
})