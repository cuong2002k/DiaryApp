import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { STYLE } from '../Style/style'
import TextInputComponent from '../Component/TextInputComponent'
import ButtonComponent from '../Component/ButtonComponent'
import { ActivityIndicator, Button, Dialog, HelperText, Portal, TextInput } from 'react-native-paper'
import { CreateAccount, LoginAccount, useMycontextProvider } from '../Store'

const Login = ({ navigation }) => {
    const [email, onChangeEmail] = useState('admin@gmail.com');
    const [password, onChangePassword] = useState('123456789');
    const [disabled, setDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const hasEmailErrors = () => {
        return email.includes('@');
    }
    const hasPasswordErrors = () => {
        return password.length < 6;
    }

    useEffect(() => {
        setDisabled(hasEmailErrors() && hasPasswordErrors());
    }, [email, password])
    const [controller, dispatch] = useMycontextProvider();
    const { userLogin } = controller;
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false); 
    const HandleLogin = () => {
        setIsLoading(true);
        LoginAccount(dispatch, email, password).then(() => {
            setIsLoading(false);
        }).catch((e) => {
            setIsLoading(false);
            showDialog();
            console.log(e);
        });
    }

    useEffect(() => {
        if (userLogin) {
            if (userLogin.role == 'user') navigation.navigate('userRouter')
            if (userLogin.role == 'admin') navigation.navigate('adminRouter')
        }
    }, [userLogin])

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size={'large'} color={STYLE.blue} />
                : <View>
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
                        <HelperText type="error" visible={!hasEmailErrors()}>
                            Email không hợp lệ
                        </HelperText>
                    </View>
                    <View>
                        <TextInputComponent
                            holder={"password"}
                            value={password}
                            onchangeValue={onChangePassword}
                            secureTextEntry={true}
                            style={styles.margin}
                        />
                        <HelperText type="error" visible={hasPasswordErrors()}>
                            Mật khẩu phải từ 6 ký tự
                        </HelperText>
                    </View>
                    <Button
                        style={[{ alignSelf: 'flex-end' }]}
                        onPress={() => navigation.navigate('forgotPassword')}
                    >
                        Quên mật khẩu ?
                    </Button>
                    <ButtonComponent
                        title={"Đăng Nhập"}
                        style={styles.margin}
                        disabled={disabled}
                        onPress={() => HandleLogin()}
                    />

                    <Button
                        style={[styles.margin]}
                        onPress={() => navigation.navigate('register')}
                    >
                        Tạo tài khoản mới?
                    </Button>

                </View>
            }
            <Portal>

                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>{'Thông báo'}</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">{'Đăng nhập không thành công'}</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setVisible(false)}>{'Xác Nhận'}</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
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
        marginTop: 10
    }
})