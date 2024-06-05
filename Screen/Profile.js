import React from 'react';
import { View, StyleSheet, ScrollView, Switch } from 'react-native';
import { Avatar, Title, Caption, List, Divider } from 'react-native-paper';
import { Logout, useMycontextProvider } from '../Store';

const Profile = () => {

  const [controller, dispatch] = useMycontextProvider();
  const { userLogin } = controller;
  const logout = () => {
    Logout(dispatch);
  }

  return (
    userLogin && <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar.Image
          size={80}
          source={{
            uri: 'https://picsum.photos/700',
          }}
        />
        <View style={styles.profileInfo}>
          <Title style={styles.title}>{userLogin.name}</Title>
          <Caption style={styles.caption}>{userLogin.email}</Caption>
        </View>
      </View>

      <Divider style={styles.divider} />

      <List.Section style={{ padding: 10 }}>
        <List.Subheader>Tài khoản</List.Subheader>
        <List.Item
          title="Họ và tên"
          description={userLogin.name}
          left={() => <List.Icon icon="account" />}
          right={() => <List.Icon icon="chevron-right" />}
        />
        <List.Item
          title="Email"
          description={userLogin.email}
          left={() => <List.Icon icon="email" />}
          right={() => <List.Icon icon="chevron-right" />}
        />
        <List.Item
          title="Số điện thoại"
          description={userLogin.phone}
          left={() => <List.Icon icon="cellphone" />}
          right={() => <List.Icon icon="chevron-right" />}
        />
        <List.Item
          title="Địa chỉ"
          description={userLogin.address}
          left={() => <List.Icon icon="map-marker-outline" />}
          right={() => <List.Icon icon="chevron-right" />}
        />

      </List.Section>

      <Divider style={styles.divider} />

      <List.Section style={{ padding: 10 }}>
        <List.Item
          title="Đăng xuất"
          onPress={() => logout()}
          left={() => {
            <List.Icon icon="arrow-left-bold" />

          }}
          right={() => <List.Icon icon="chevron-right" />}
        />
      </List.Section>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  profileInfo: {
    marginLeft: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    color: '#888',
  },
  divider: {
    marginVertical: 8,
  },
});
export default Profile


