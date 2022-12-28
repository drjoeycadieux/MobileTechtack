import { Text, StyleSheet, View } from 'react-native'

export default function Boxes() {
    return (
        <View style={styles.boxes}>
            <Text style={styles.title}>
                Our Apps For TeamLitho Worker.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    boxes: {
        padding: 50,
    },
    title: {
        padding: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        color: 'black'
    }
});