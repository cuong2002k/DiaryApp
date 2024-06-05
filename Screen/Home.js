import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Appbar, Button, Card, Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { STYLE } from '../Style/style';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig '
import { useMycontextProvider } from '../Store'


const Home = ({ navigation }) => {
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [diary, setDiary] = useState([]);

    const [controller, dispatch] = useMycontextProvider();
    const { userLogin } = controller;
    useEffect(() => {
        if (userLogin == null) {
            navigation.navigate('login')
        }
    }, [userLogin])

    const HandlerSearch = (text) => {
        setSearchQuery(text);
        if (text == '') {
            setDiary(files);
        }
        else {
            const filtered = files.filter(diary =>
                diary.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setDiary(filtered);
        }
    }

    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = onSnapshot(collection(db, "diary"), (snapshot) => {
            var arr = []
            snapshot.forEach((item) => {
                const { title, content, createdAt, url, user } = item.data();
                if (user == userLogin.email) {
                    arr.push({
                        id: item.id,
                        title: title,
                        content: content,
                        createdAt: createdAt,
                        url: url,
                        user: user
                    })
                }
            })
            setFiles(arr);
            setDiary(arr)
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const renderItem = ({ item }) => {
        const { id, title, content, createdAt, url, user } = item;

        return (
            <View style={{ flex: 1 }}>
                <Card
                    onPress={() => navigation.navigate("DetailsDiary", { item })}
                    style={{ margin: 5 }}
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
            <>
                {
                    isLoading ?
                        <><ActivityIndicator size={'large'} color={STYLE.blue} /></>
                        :
                        <>
                            <Searchbar
                                placeholder="Search"
                                onChangeText={(text) => HandlerSearch(text)}
                                value={searchQuery}
                                style={styles.searchbar}
                            />
                            <FlatList
                                data={diary}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                numColumns={2}
                            />
                        </>

                }
            </>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchbar: {
        borderWidth: 0.2,
        borderColor: STYLE.blue,
        margin: 10
    }
})
export default Home