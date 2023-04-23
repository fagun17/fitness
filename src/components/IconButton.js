import { StyleSheet, Pressable, Image } from "react-native"


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
            <div style={styles.iconButtonRoot}>
                <Image source={{uri: src, height: 40}} />
            </div>
        </Pressable>
    );
}

export default IconButton;