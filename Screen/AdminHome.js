import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper'
import { STYLE } from '../Style/style';

import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig ';
import ContactListItem from '../Component/ContactListItem'

const AdminHome = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [userData, setUserData] = React.useState([])
  const [userfilter, setuserfilter] = React.useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "USERS"),
      (querySnapshot) => {
        const arrAccount = [];
        querySnapshot.forEach((item) => {
          const { email, password, name, role, phone, address } = item.data();
          if (role == 'user') {
            arrAccount.push({
              id: item.id,
              email,
              password,
              name,
              role,
              phone,
              address
            });
          }
        });
        setUserData(arrAccount);
        setuserfilter(arrAccount);
      }
    );
    // Cleanup subscription on unmount
    return () => unsubscribe();

  }, []);





  const HandlerSearch = (text) => {
    setSearchQuery(text);
    if (text == '') {
      setuserfilter(userData);
    }
    else {
      const filtered = userData.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
        ||
        user.phone.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setuserfilter(filtered);
    }
  }

  const renderItem = ({ item }) => {

    return (
      <ContactListItem item={item} onPress={() => navigation.navigate('userDetails', { item: item })} />
    )
  }

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => HandlerSearch(text)}
        value={searchQuery}
        style={styles.searchBar}
      />
      <FlatList
        data={userfilter}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => item.id}

      />
      {/* <ContactListItem item={data} /> */}
    </View>
  )
}

export default AdminHome

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBar: {
    margin: 10,
    borderWidth: 0.2,
    borderColor: STYLE.blue,

  }
})