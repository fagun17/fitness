import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";

const TrainScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#20B2AA",
          padding: 15,
          height: 200,
          width: "100%",
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          МОИ ТРЕНИРОВКИ
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              0
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              ТРЕНИРОВКИ
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              0
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              КАЛОРИИ
            </Text>
          </View>

          <View>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: 18,
              }}
            >
              0
            </Text>
            <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
              МИНУТЫ
            </Text>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              borderRadius: 7,
            }}
            source={{
              uri: "https://sportishka.com/uploads/posts/2022-11/1667677543_19-sportishka-com-p-sportivnaya-odezhda-dlya-bega-letom-oboi-23.jpg",
            }}
          />
          
        </View>
      </View>
    </SafeAreaView>
  );
};
export default TrainScreen;
const styles = StyleSheet.create({});
