import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Avatar, Divider } from "react-native-paper"
const ContactListItem = ({ item, onPress }) => {

    const { id,
        email,
        password,
        name,
        role,
        phone,
        address } = item;
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.row}>
                <Avatar.Image size={40} source={{ uri: 'https://picsum.photos/700' }} />
                <View style={styles.info}>
                    <Text>{name}</Text>
                    <Text>{phone}</Text>
                </View>
            </View>
            <Divider />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'

    },
    row: {
        flexDirection: 'row',
        padding: 10,
        flex: 1,
    },
    info: {
        marginLeft: 30
    }
})
export default ContactListItem;