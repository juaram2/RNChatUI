/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.chatListContainer}>
              <Image
                style={styles.profileImg}
                source={{
                  uri: 'https://chblob.blob.core.windows.net/imagecontainer/logo_143-bfa09352-8789-48b1-a6f1-161e2eb032a3.jpg',
                }}
              />
              <View style={styles.txtWrap}>
                <Text style={styles.userName}>User Name</Text>
                <Text style={styles.msgContent}>message</Text>
                <Text style={styles.msgTime}>7:30 PM</Text>
              </View>
            </View>
            <View style={styles.chatListContainer}>
              <Image
                style={styles.profileImg}
                source={{
                  uri: 'https://chblob.blob.core.windows.net/imagecontainer/logo_143-bfa09352-8789-48b1-a6f1-161e2eb032a3.jpg',
                }}
              />
              <View style={styles.txtWrap}>
                <Text style={styles.userName} numberOfLines={1}>UserName UserName UserName UserName</Text>
                <Text style={styles.msgContent} numberOfLines={2}>message message message message message message message message message message message</Text>
                <Text style={styles.msgTime}>Jun 4</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  chatListContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#f1f3f5'
  },
  profileImg:{
    width: 42, height: 42, marginRight: 16,
    borderWidth: 1, borderColor: '#f1f3f5',
    borderRadius: 21
  },
  txtWrap:{
    flex: 1,
    position: 'relative'
  },
  userName:{
    fontSize: 14,
    fontWeight: 'bold',
    maxWidth: 250
  },
  msgContent:{
    fontSize: 13
  },
  msgTime:{
    fontSize: 11,
    color: '#868e96',
    position: 'absolute',
    top: 0,
    right: 0
  },
});

export default App;
