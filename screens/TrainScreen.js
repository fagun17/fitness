import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from "react-native";
import React from "react";

import ScreenManager from '../src/components/ScreenManager';
import Screen from '../src/components/Screen';
import TrainBlockScreen from "./TrainBlockScreen";

const trainBlocks = [
  {
    image: "https://sportishka.com/uploads/posts/2022-11/1667677543_19-sportishka-com-p-sportivnaya-odezhda-dlya-bega-letom-oboi-23.jpg",
    exercises: [
      {
        image: "https://fitnessprogramer.com/wp-content/uploads/2022/06/Dumbbell-Single-Arm-Lateral-Raise.gif",
        header: "Arm raises",
        description: "x10"
      }
    ]
  },
  {
    image: "https://sportishka.com/uploads/posts/2022-11/1667677543_19-sportishka-com-p-sportivnaya-odezhda-dlya-bega-letom-oboi-23.jpg",
  },
  {
    image: "https://sportishka.com/uploads/posts/2022-11/1667677543_19-sportishka-com-p-sportivnaya-odezhda-dlya-bega-letom-oboi-23.jpg",
  },
  {
    image: "https://sportishka.com/uploads/posts/2022-11/1667677543_19-sportishka-com-p-sportivnaya-odezhda-dlya-bega-letom-oboi-23.jpg",
  },
  {
    image: "https://sportishka.com/uploads/posts/2022-11/1667677543_19-sportishka-com-p-sportivnaya-odezhda-dlya-bega-letom-oboi-23.jpg",
  }
];

const TrainScreen = () => {
  const [state, setState] = React.useState({
    activeScreenId: "main",
    activeTrainBlock: null,
  });

  const openScreen = (activeScreenId, addProps={}) => {
    setState({...state, ...addProps, activeScreenId});
  }

  return (
    <ScreenManager activeId={state.activeScreenId}>
      <Screen id="main">
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
              { trainBlocks.map((block, id) => (
                <Image
                  onClick={() => openScreen("train-block", {activeTrainBlock: block})}
                  key={id}
                  style={{
                    width: "90%",
                    height: 120,
                    marginTop: 20,
                    marginBottom: (id == trainBlocks.length - 1 ? 20 : 0),
                    borderRadius: 7,
                  }}
                  source={{
                    uri: block.image,
                  }}
                  
                />
              ))

              }
              
            </View>
          </View>
        </SafeAreaView>
      </Screen>

      <Screen id="train-block">
        <TrainBlockScreen trainBlock={state.activeTrainBlock} />
      </Screen>
    </ScreenManager>

    
  );
};
export default TrainScreen;
const styles = StyleSheet.create({});
