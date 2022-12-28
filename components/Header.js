import { StyleSheet, Text, View, } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                TechTack Technologies
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: "#2d3748"
    },
    title: {
        padding: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        color: 'white'
    }
});