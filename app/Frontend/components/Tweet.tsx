import {View, Text, Image, StyleSheet} from 'react-native'
import { TweetType } from '../types';


type TweetProps = {
    tweet: TweetType;
}

const Tweet = ({tweet}: TweetProps) => {
    return (
        <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
        {tweet.image && <Image src={tweet.image} style={styles.image} />}
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      padding: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: "lightgrey",
      backgroundColor:"white"
    },
    userImage: {
      width: 50,
      height: 50,
      borderRadius: 30,
    },
    mainContainer: {
      marginLeft: 10,
      flex: 1,
    },
    name: {
      fontWeight: "bold",
    },
    content: {
      lineHeight: 20,
      marginTop: 5,
    },
    image: {
        width: '100%',
        aspectRatio: 16/9,
        marginTop: 10,
        borderRadius: 15,
    }
  });
  

export default Tweet;