import { View, Text } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { STYLE } from '../Style/style';

const renderItem = ({ title, subTitle }) => {
    return (
        <Card 
            onPress={() => console.log("hoo")}
        >
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Title
                title={title}
                subtitle={subTitle}
            />
        </Card>

    );
}
const card = { title: "card", subTitle: "subtile" };
const Home = () => {
    return (
        <View style={styles.container}>
            {renderItem(card)}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,


    }
})
export default Home