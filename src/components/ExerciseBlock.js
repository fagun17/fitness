import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from "react-native";
import React from "react";

import "./ExerciseBlock.css";

export default function ExerciseBlock(props) {
    console.log(props);
    return (
        <div className="exercise-block">
            <div className="exercise-image">
                <Image
                    style={{
                        width: 120,
                        height: 120,
                        marginTop: 20,
                        borderRadius: 7,
                    }}
                    source={{uri: props.data.image}}
                />
            </div>
        </div>
    );
}