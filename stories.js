import { Image, StyleSheet, View, Text } from 'react-native';

const Story = ({ pic, name }) => {
    return (
        <View style={styles.window}>
            <Image style={styles.pic} source={ {uri: pic} } />
                <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    window: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    pic: {
        width: 72,
        height: 72,
        borderRadius: 36,
        resizeMode: 'contain'
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})
export default Story;