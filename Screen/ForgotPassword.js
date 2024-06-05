import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { sendPassword } from '../Store'
import { Button, Dialog, Portal } from 'react-native-paper'
import { STYLE } from '../Style/style'
import TextInputComponent from '../Component/TextInputComponent'
import ButtonComponent from '../Component/ButtonComponent'


const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = React.useState('')
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const HandleForgotPassword = () => {
        sendPassword(email)
            .then(() => { showDialog(), setEmail('') });
    }
    return (
        <View style={styles.container}>
            <Text
                style={styles.header}
            >Lấy lại mật khẩu</Text>
            <Text
                style={{ alignSelf: 'center' }}
            >
                Vui lòng nhập đúng email để lấy lại mật khẩu
            </Text>
            
            <TextInputComponent
                holder={"Email"}
                value={email}
                onchangeValue={setEmail}
                style={styles.margin}
            />

            <ButtonComponent
                title={"Gửi mã xác thực"}
                style={styles.margin}
                // disabled={disabled}
                onPress={() => HandleForgotPassword()}
            />

            <Button
                style={[styles.margin]}
                onPress={() => navigation.goBack()}
            >
                Quay về đăng nhập
            </Button>

            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Thông báo</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">Gửi mã xác nhận thành công</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog}>Oke</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
}

export default ForgotPassword

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