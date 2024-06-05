import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Appbar, Avatar, Button, Card, Dialog, Portal } from 'react-native-paper'
import { deleteDiary } from '../Store/DiaryStore'
import { db } from '../firebaseConfig '
import { doc, getDoc } from 'firebase/firestore'
import { useFocusEffect } from '@react-navigation/native'
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const DetailsDiary = ({ route, navigation }) => {
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    const { id } = route.params.item;

    const handlerDeleteDiary = () => {
        deleteDiary(id).then(() => navigation.navigate("Home")).catch((e) => console.log(e));
    }

    const [visible, setVisible] = React.useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [url, setUrl] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [direction, setDirection] = useState('');
    const [user, setUser] = useState('');

    useFocusEffect(
        useCallback(() => {
            const getDirary = async () => {
                const docRef = doc(db, 'diary', id);
                const docSnap = await getDoc(docRef);
                const { title, content, createdAt, url, user, direction } = docSnap.data();
                setTitle(title);
                setContent(content)
                setUrl(url)
                setCreatedAt(createdAt)
                setUser(user);
                setDirection(direction);
            }
            getDirary();
        }, [id])
    )
    return (
        <View
            style={styles.container}
        >
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.navigate("Home") }} />
                <Appbar.Content title="Thông tin" />
                <Appbar.Action icon="lead-pencil" onPress={() => { navigation.navigate("EditDiary", { id, title, content, createdAt, url, user }) }} />
                <Appbar.Action icon="trash-can" onPress={() => { showDialog() }} />
            </Appbar.Header>
            <Card
                mode='elevated'
                style={{ padding: 10, flex: 1 }}
            >
                <Card.Title title={title} subtitle={createdAt} left={LeftContent} />
                <Card.Cover source={{ uri: url }} />
                <Card.Content
                    style={{ marginTop: 10 }}
                >
                    <Text variant="bodyMedium"> {content} </Text>
                </Card.Content>

            </Card>


            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>{'Thông báo'}</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">{'Bạn có muốn xóa nhật ký này không ?'}</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog}>{'Không'}</Button>
                        <Button onPress={handlerDeleteDiary}>{'Có'}</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>


        </View>
    )
}

export default DetailsDiary

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})