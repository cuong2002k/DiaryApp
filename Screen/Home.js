import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Appbar, Button, Card } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { STYLE } from '../Style/style';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig '


const Home = ({ navigation }) => {
    const [files, setFiles] = useState([]);
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "diary"), (snapshot) => {
            var arr = []
            snapshot.forEach((item) => {
                const { title, content, createdAt, url, user } = item.data();
                arr.push({
                    id: item.id,
                    title: title,
                    content: content,
                    createdAt: createdAt,
                    url: url,
                    user: user
                })
            })
            setFiles(arr);
        });

        return () => unsubscribe();
    }, []);

    const renderItem = ({ item }) => {
        const { id, title, content, createdAt, url, user } = item;

        return (
            <View style={{ flex: 1 }}>
                <Card
                    onPress={() => navigation.navigate("DetailsDiary", { item })}
                    style={{ margin: 20 }}
                >
                    <Card.Cover source={{ uri: url }} />
                    <Card.Title
                        title={"Tiêu đề: " + title}
                        subtitle={"Ngày tạo: " + createdAt}
                    />
                </Card>
            </View>

        );
    }

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Trang chủ" />
                <Appbar.Action icon="check" onPress={() => {

                }} />
            </Appbar.Header>
            <FlatList
                data={files}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default Home