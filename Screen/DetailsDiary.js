import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar, Avatar, Button, Card, Dialog, Portal } from 'react-native-paper'
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const DetailsDiary = () => {
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    const [visible, setVisible] = React.useState(false);
    return (
        <View
            style={styles.container}
        >
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Thông tin" />
                <Appbar.Action icon="lead-pencil" onPress={() => { }} />
                <Appbar.Action icon="trash-can" onPress={() => { showDialog() }} />
            </Appbar.Header>
            <Card
                mode='elevated'
                style={{ padding: 10, flex: 1 }}
            >
                <Card.Title title="Tên nhật ký" subtitle="ngày" left={LeftContent} />
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content
                    style={{ marginTop: 10 }}
                >
                    <Text variant="bodyMedium"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </Text>
                </Card.Content>

            </Card>

            <View>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Thông báo</Dialog.Title>
                        <Dialog.Content>
                            <Text variant="bodyMedium">Bạn có muốn xóa không ?</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideDialog}>Không</Button>
                            <Button onPress={hideDialog}>Có</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>

        </View>
    )
}

export default DetailsDiary

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})