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
        <View style={styles.iconButtonRoot}>
            <Pressable onPress={(...args) => onClick(...args)}>
                <Image source={{uri: src, height: 40}} />
            </Pressable>
        </View>
    );
}

export default IconButton;