import { View, Text, StyleSheet} from 'react-native'

function Subtitle({children}) {
    return <View style={styles.subtitleContainer}>
        <Text style={styles.subtitleText}>
            {children}
        </Text>
    </View>
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2
    },

    subtitleText: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight:"bold",
        textAlign: 'center',
    }
})