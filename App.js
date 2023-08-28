import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import Post from './Posts';
import Story from './stories';

const data = [
  { pic: 'https://th.bing.com/th/id/OIP.wNpgl-5vuGkvc-tSU_J1JwHaHa?w=213&h=213&c=7&r=0&o=5&dpr=1.6&pid=1.7', name: 'Ammar_Ahmed',
  content: 'https://th.bing.com/th/id/OIP.k8eJseS3y7NBRorO3jxxtQHaFL?w=244&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7' },
  { pic: 'https://th.bing.com/th/id/OIP.5B32u3TZFcCYVWD4dN968wHaJ4?pid=ImgDet&w=192&h=255&c=7&dpr=1.6', name: 'Zyad_Tarek',
  content: 'https://th.bing.com/th/id/OIP.yL4S6cJ2e6O8lxzLXPe8sgHaEo?w=280&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7' },
  { pic: 'https://th.bing.com/th/id/OIP.0ODeGdgc5pa0W8FwbO7YUwHaJ3?w=146&h=195&c=7&r=0&o=5&dpr=1.6&pid=1.7', name: 'Amr_Megahed',
  content: 'https://th.bing.com/th/id/OIP.SyX8YXvn6SQ3kDT5OeTgzwHaEo?w=280&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7' },
  { pic: 'https://th.bing.com/th/id/OIP.91uTH0G7H1CZxsuSUx_sLQHaHa?w=148&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7', name: 'Marwan_Adel',
  content: 'https://th.bing.com/th/id/OIP.VncwNOD5bmvOtxVreAyQAgHaEj?w=283&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7' },
];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" backgroundColor="#eee" />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.stories} >
        {data.map((user, index) => (
          <Story key={index} pic={user.pic} name={user.name} />
        ))}
      </ScrollView>
      <View style={{ marginBottom: 70}}>
        {data.map((user, index) => <Post key={index} name={ user.name } pic={user.pic} content={user.content}/>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#eee'
  },
  stories: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

});
