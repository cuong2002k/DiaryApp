import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { STYLE } from '../Style/style'
import TextInputComponent from '../Component/TextInputComponent'
import ButtonComponent from '../Component/ButtonComponent'
import { Button } from 'react-native-paper'

const Register = () => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [fullName, onChangeFullName] = useState('');
    return (
        <View style={styles.container}>
            <Text
                style={styles.header}
            >Đăng ký tài khoản</Text>
            <Text
                style={{ alignSelf: 'center' }}
            >
                Tạo một tài khoản để bạn có thể lưu trữ nhật ký
            </Text>
            <View>
                <TextInputComponent
                    holder={"Tên đầy đủ"}
                    value={fullName}
                    onchangeValue={onChangeFullName}
                    style={styles.margin}
                    secureTextEntry={true}
                />
                <TextInputComponent
                    holder={"Email"}
                    value={email}
                    onchangeValue={onChangeEmail}
                    style={styles.margin}
                />
                <TextInputComponent
                    holder={"Mật khẩu"}
                    value={password}
                    onchangeValue={onChangePassword}
                    style={styles.margin}
                    secureTextEntry={true}
                />

                <TextInputComponent
                    holder={"Nhập lại mật khẩu"}
                    value={password}
                    onchangeValue={onChangePassword}
                    style={styles.margin}
                    secureTextEntry={true}
                />

                <ButtonComponent
                    title={"Đăng ký"}
                    style={styles.margin}
                />

                <Button
                    style={[styles.margin]}
                >
                    Bạn đã có tài khoản
                </Button>

            </View>
        </View>
    );
}

export default Register
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