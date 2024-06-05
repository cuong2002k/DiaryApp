import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { STYLE } from '../Style/style'
import TextInputComponent from '../Component/TextInputComponent'
import ButtonComponent from '../Component/ButtonComponent'
import { Button, Dialog, HelperText, Portal } from 'react-native-paper'
import { CreateAccount } from '../Store'

const Register = ({ navigation }) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeconfirmPassword] = useState('');

    const [name, onChangeFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [disabled, setDisabled] = useState(false)
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    const HandlerRegister = () => {
        CreateAccount(email, password, name, "user", phone, address)
            .then(() => {
                onChangeEmail('');
                onChangePassword('');
                onChangeconfirmPassword('');
                onChangeFullName('');
                setPhone('');
                setAddress('');
                setDisabled('');
                showDialog();
            }).catch((e) => {
                console.log(e);
            })
    }

    const checkName = () => {
        return name.trim().length > 6;
    }

    const checkEmail = () => {
        return email.trim().includes('@gmail.com');
    }

    const checkPhone = () => {
        return phone.trim().length > 9;
    }

    const checkAddress = () => {
        return address.trim().length > 5;
    }

    const checkPassword = () => {
        return password.trim().length > 6;
    }

    const checkConfirmPassword = () => {
        return confirmPassword.trim().length > 6 && confirmPassword === password;
    }

    useEffect(() => {
        let check = checkName() && checkPassword() && checkEmail() && checkAddress() && checkPassword() && checkConfirmPassword();
        setDisabled(!check);
    }, [email, password, confirmPassword, address, phone, name])

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text
                    style={styles.header}
                >Đăng ký tài khoản</Text>
                <Text
                    style={{ alignSelf: 'center' }}
                >
                    Tạo một tài khoản để bạn có thể lưu trữ nhật ký
                </Text>
                <View style={{ padding: 20 }}>
                    <View>
                        <TextInputComponent
                            holder={"Tên đầy đủ"}
                            value={name}
                            onchangeValue={onChangeFullName}
                            style={styles.margin}
                        />
                        <HelperText type="error" visible={!checkName()}>
                            Tên không hợp lệ
                        </HelperText>
                    </View>
                    <View>
                        <TextInputComponent
                            holder={"Email"}
                            value={email}
                            onchangeValue={onChangeEmail}
                            style={styles.margin}
                        />
                        <HelperText type="error" visible={!checkEmail()}>
                            Email không hợp lệ
                        </HelperText>
                    </View>

                    <View>
                        <TextInputComponent
                            holder={"Số điện thoại"}
                            value={phone}
                            onchangeValue={setPhone}
                            style={styles.margin}
                        />
                        <HelperText type="error" visible={!checkPhone()}>
                            Số điện thoại không hợp lệ
                        </HelperText>
                    </View>
                    <View>
                        <TextInputComponent
                            holder={"Địa chỉ"}
                            value={address}
                            onchangeValue={setAddress}
                            style={styles.margin}
                        />
                        <HelperText type="error" visible={!checkAddress()}>
                            Địa chỉ không hợp lệ
                        </HelperText>
                    </View>
                    <View>
                        <TextInputComponent
                            holder={"Mật khẩu"}
                            value={password}
                            onchangeValue={onChangePassword}
                            style={styles.margin}
                            secureTextEntry={true}
                        />
                        <HelperText type="error" visible={!checkPassword()}>
                            Mật khẩu phải từ 6 ký tự
                        </HelperText>
                    </View>
                    <View>
                        <TextInputComponent
                            holder={"Nhập lại mật khẩu"}
                            value={confirmPassword}
                            onchangeValue={onChangeconfirmPassword}
                            style={styles.margin}
                            secureTextEntry={true}
                        />
                        <HelperText type="error" visible={!checkConfirmPassword()}>
                            Mật khẩu không khớp
                        </HelperText>
                    </View>

                    <ButtonComponent
                        title={"Đăng ký"}
                        style={styles.margin}
                        onPress={() => HandlerRegister()}
                        disabled={disabled}
                    />

                    <Button
                        style={[styles.margin]}
                        onPress={() => { navigation.goBack() }}
                    >
                        Bạn đã có tài khoản
                    </Button>

                </View>
            </ScrollView>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>{'Thông báo'}</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">{'Tạo tài khoản thành công'}</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setVisible(false)}>{'Xác Nhận'}</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
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

    },
    margin: {
        marginTop: 5,

    }
})