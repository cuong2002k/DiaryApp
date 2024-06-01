import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TextInputComponent from '../Component/TextInputComponent'
import ButtonComponent from '../Component/ButtonComponent';
import { Appbar, Card } from 'react-native-paper';


const EditDiary = () => {
    const [title, setTitle] = useState('');
    const [content, setcontent] = useState('');
    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title="Sửa nhật ký" />
                <Appbar.Action icon="check" onPress={() => { }} />
            </Appbar.Header>
            <View style={styles.container}>
                <TextInputComponent
                    holder={"Tiêu đề"}
                    value={title}
                    onchangeValue={setTitle}
                />
                <TextInputComponent
                    holder={"Nội dung"}
                    value={content}
                    onchangeValue={setcontent}
                    multiline={true}
                    style={styles.textarea}
                />

                <Card style={{ marginTop: 10 }}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                </Card>
                <ButtonComponent
                    title={"Chọn hình ảnh"}
                    style={{ marginTop: 10, marginBottom: 10 }}
                />
            </View>


        </View>
    )
}

export default EditDiary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    textarea: {
        flex: 1,
        marginTop: 10
    }
})