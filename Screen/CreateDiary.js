import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import * as ImagePicker from "expo-image-picker";
import { Appbar, Card } from 'react-native-paper';
import ButtonComponent from '../Component/ButtonComponent';
import TextInputComponent from '../Component/TextInputComponent';

const CreateDiary = () => {
    const [title, setTitle] = useState('');
    const [content, setcontent] = useState('');
    const [image, setImage] = useState('https://picsum.photos/700');

    async function pickImage() {
        const [image, setImage] = useState("");

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            // upload the image
            // await uploadImage(result.assets[0].uri, "image");
        }
    }

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
                    <Card.Cover source={{ uri: image }} />
                </Card>
                <ButtonComponent
                    title={"Chọn hình ảnh"}
                    style={{ marginTop: 10, marginBottom: 10 }}
                    onPress={pickImage}
                />
            </View>
        </View>
    )
}

export default CreateDiary

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