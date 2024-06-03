import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextInputComponent from '../Component/TextInputComponent'
import ButtonComponent from '../Component/ButtonComponent';
import { ActivityIndicator, Appbar, Card } from 'react-native-paper';
import { updateDiary } from '../Store/DiaryStore';
import { pickImage } from '../Store/UploadImage';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig ';
import { STYLE } from '../Style/style';


const EditDiary = ({ route, navigation }) => {

    const { id, title, content, url, direction, user, createdAt } = route.params;
    const [titles, setTitle] = useState(title);
    const [contents, setcontent] = useState(content);
    const [urls, setUrl] = useState(url);
    const [isChangeImage, setIsChangeImage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const HandlerUpdateDiary = () => {
        setIsLoading(true)
        if (isChangeImage) {
            updateDiary(id, titles, contents, direction, user, createdAt, urls)
                .then(() => { navigation.goBack(), setIsLoading(false) })
                .catch((e) => console.log(e))
        }
        else {
            updateDiary(id, titles, contents, direction, user, createdAt)
                .then(() => { navigation.goBack(), setIsLoading(false) })
                .catch((e) => console.log(e));
        }

    }

    const selectImage = () => {
        pickImage().then((data) => {
            setUrl(data);
            setIsChangeImage(true)
        })
            .catch((e) => console.log(e))
    }

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Sửa nhật ký" />
                <Appbar.Action icon="check" onPress={() => { HandlerUpdateDiary() }} />
            </Appbar.Header>

            <>
                {
                    isLoading ? <> <ActivityIndicator size="large" color={STYLE.blue} /> </> :
                        <View style={styles.container}>
                            <TextInputComponent
                                holder={"Tiêu đề"}
                                value={titles}
                                onchangeValue={setTitle}
                            />
                            <TextInputComponent
                                holder={"Nội dung"}
                                value={contents}
                                onchangeValue={setcontent}
                                multiline={true}
                                style={styles.textarea}
                            />

                            <Card style={{ marginTop: 10 }}>
                                <Card.Cover source={{ uri: urls }} />
                            </Card>
                            <ButtonComponent
                                title={"Chọn hình ảnh"}
                                style={{ marginTop: 10, marginBottom: 10 }}
                                onPress={() => { selectImage() }}
                            />
                        </View>
                }
            </>

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