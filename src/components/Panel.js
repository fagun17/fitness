import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    panelRoot: {
        height: '100%',
        width: '100%'
    }
});

const Panel = (props) => {
    return (
        <div style={styles.panelRoot}>
            {props.children}
        </div>
    );
}

export default Panel;