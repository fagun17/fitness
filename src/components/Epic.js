import { StyleSheet } from "react-native";

import IconButton from './IconButton';

const styles = StyleSheet.create({
    epicRoot: {
        height: 70,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: 0,
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderStyle: 'solid'
    }
});

const Epic = ({ buttons, onClick }) => {
    return (
        <div style={styles.epicRoot}>
            {buttons.map(btn => (
                <IconButton onClick={() => onClick(btn)} src={btn.image} />
            ))}
        </div>
    );
}

export default Epic;