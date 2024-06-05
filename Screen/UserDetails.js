import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { ActivityIndicator, Appbar, Avatar, Button, Icon } from 'react-native-paper';
import DetailsListItem from '../Component/DetailsListItem';

const UserDetails = ({ navigation, route }) => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const { id, email, password, name, role, phone, address } = route.params.item;
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Thông tin người dùng" />
                <Appbar.Action icon="lead-pencil" onPress={() => { }} />
            </Appbar.Header>
            <View
                style={styles.topView}
            >
                <Image source={{ uri: 'https://picsum.photos/700' }} style={styles.image} size={100} />
                <Text style={[styles.text, { fontSize: 18 }]}>{name}</Text>
                <Text style={styles.text}>
                    <Icon source={"phone"} color="white" size={16} />
                    {phone}
                </Text>
            </View>
            <View style={styles.bottomView}>
                <DetailsListItem icon={'email'} title={"Email"} subtitle={email} />
                <DetailsListItem icon={'phone'} title={"Số điện thoại"} subtitle={phone} />
                <DetailsListItem icon={'location-on'} title={"Địa chỉ"} subtitle={address} />
                <DetailsListItem icon={'account-circle'} title={"Vai trò"} subtitle={role} />

            </View>
        </View>
    )
}

export default UserDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#4793AF",
    },
    bottomView: {
        flex: 1,
    },
    image: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "white",
        padding: 3,
        borderRadius: '50%',
        height: 100,
        width: 100
    },
    text: {
        fontSize: 16,
        color: "white"
    }
})