import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';



const DetailsListItem = ({ icon, title, subtitle }) => {
    return (
        <View style={styles.container}>
            <MaterialIcons name={icon} size={24} style={styles.icon} />
            <View>
                <Text>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        margin: 20,
        color: "black",
    },
    subtitle: {
        color: "blue"
    }

})

export default DetailsListItem