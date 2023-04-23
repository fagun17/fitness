import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    exerciseBlock: {
        height: 200
    },
    exerciseImage: {
        height: 200
    }
});

export default function ExerciseBlock(props) {
    console.log(props);
    return (
        <div style={styles.exerciseBlock}>
            <div style={styles.exerciseImage}>
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