import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Alert, Image, StyleSheet, View, Text } from 'react-native';

const handleClose = () => {
    Alert.alert(
      'Delete',
      ' Are you sure to delete Post?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: true }
    );
}

const Post = ({ pic, name, content }) => {
    return (
        <View style={styles.post}>
            <View style={styles.topBar}>
                <View style={styles.user}>
                    <Image source={{ uri:pic}} style={styles.pic} alt='profile picture'/>
                    <Text style={styles.txt}>{name}</Text>
                </View>
                <MaterialCommunityIcons.Button
                name="dots-vertical"
                size={28}
                color='#222'
                backgroundColor="transparent" 
                underlayColor="transparent"
                onPress={handleClose}
                />
            </View>
            <Image style={styles.img} source={ { uri:content } } alt='nature image'/>
            <View style={styles.icons}>
                <MaterialCommunityIcons.Button name="heart-outline"
                size={26}
                color='#222'
                backgroundColor="transparent"
                underlayColor="transparent"
                onPress={() => console.log('Like clicked')}
                >
                Like
                </MaterialCommunityIcons.Button>
                <FontAwesome.Button name="comment-o" 
                size={23} 
                color='#222'
                backgroundColor="transparent"
                underlayColor="transparent"
                onPress={() => console.log('Comment clicked')}
                >
                Comment
                </FontAwesome.Button>
                <FontAwesome.Button name="share-square-o"
                size={21}
                color='#222'
                backgroundColor="transparent"
                underlayColor="transparent"
                onPress={() => console.log('Share clicked')}
                >
                Share
                </FontAwesome.Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    post: {
        marginTop: 10,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
    },
    user: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
    },
    pic: {
        height: 32,
        width: 32,
        borderRadius: 16,
        resizeMode: 'contain'
    },
    txt: {
        padding: 4,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#222'
    },
    img: {
      width: 'auto',
      height: 300,
      marginTop: 8,
      marginBottom: 2
    },
    icons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingHorizontal: 15
    }
  });
  
export default Post;