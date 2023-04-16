import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from "react-native";
import React from "react";
import ExerciseBlock from "../src/components/ExerciseBlock";


export default function TrainBlockScreen(props) {
    const trainBlock = props.trainBlock;

    if (trainBlock == null) return null;

    return (
        <SafeAreaView>
            <Image
                source={{uri: trainBlock.image}}
            ></Image>


            <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                <FlatList
                    data={trainBlock.exercises}
                    renderItem={({item}) => (
                        <ExerciseBlock data={item} />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}