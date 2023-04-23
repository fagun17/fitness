import { StyleSheet, Pressable, Image, View } from "react-native"


const styles = StyleSheet.create({
    iconButtonRoot: {
        width: 40,
        height: 40
    }
});

const IconButton = ({ src, onClick, size }) => {
    // size = [small | medium | large]
    return (
        <Pressable onPress={(...args) => onClick(...args)}>
            <View style={styles.iconButtonRoot}>
                <Image source={{uri: src, height: 40}} />
            </View>
        </Pressable>
    );
}

export default IconButton;