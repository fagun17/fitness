import { StyleSheet, Pressable, Text, View, SafeAreaView, Image, FlatList } from "react-native";
import React from "react";

import ScreenManager from '../src/components/ScreenManager';
import Screen from '../src/components/Screen';

const styles = StyleSheet.create({
  img: {
    height: 350
  }
});

const MainScreen = ({ openScreen }) => {

  return (
    <Pressable onPress={() => openScreen("train-screen")}>
      <View>
        <Image style={styles.img} source={{uri: "https://img3.akspic.ru/previews/7/4/2/8/6/168247/168247-kosti_3d-igra_v_kosti_3d-azartnaya_igra-pitevaya_igra-kazino-500x.jpg"}} />
      </View>
    </Pressable>
  );
};
export default MainScreen;
