import {StyleSheet, Text, View} from 'react-native'

function List({data}) {
    return data.map((dataPoint) => 
        <View key={dataPoint} style={styles.listItem}>
            <Text style={styles.itemTxt}>{dataPoint}</Text>
        </View>
        
    )
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },

    itemTxt: {
        color: '#351401',
        textAlign: 'center'
    }
})