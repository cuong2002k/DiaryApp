import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { ActivityIndicator, Appbar, Card } from 'react-native-paper';
import ButtonComponent from '../Component/ButtonComponent';
import TextInputComponent from '../Component/TextInputComponent';
import { pickImage, uploadImage } from '../Store/UploadImage';
import { STYLE } from '../Style/style';
import { saveRecord } from '../Store/DiaryStore';


const CreateDiary = () => {
    const [title, setTitle] = useState('');
    const [content, setcontent] = useState('');
    const [image, setImage] = useState('https://picsum.photos/700');
    const [isLoading, setIsLoading] = useState(false);

    const UploadImageToFirebase = () => {
        setIsLoading(true)
        uploadImage(image, "image").then((data) => {
            const { downloadURL, fileDirection } = data;
            setTitle("");
            setcontent("");
            setImage("");
            setIsLoading(false);
            saveRecord(title, content, downloadURL, fileDirection, "masenkogl@gmail.com", new Date().toLocaleDateString());
        }).catch((e) => console.log(e))

    }

    const pickUpImage = () => {
        pickImage().then((data) => setImage(data)).catch(e => console.log(e));
    }



    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.Content title="Thêm nhật ký" />
                <Appbar.Action icon="check" onPress={() => {
                    UploadImageToFirebase()
                }} />
            </Appbar.Header>

            <View style={styles.container}>
                {
                    isLoading ? <><ActivityIndicator animating={true} color={STYLE.blue} /></> :
                        <>
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
                                onPress={pickUpImage}
                            />
                        </>
                }
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