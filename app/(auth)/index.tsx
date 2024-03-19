import { useRouter } from 'expo-router';
import { ImageBackground, View, Text, Pressable, StyleSheet } from 'react-native';

const index = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.replace('/login');
  };

  const image = require('../../assets/img.png');

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignSelf: 'center' }}>
        <Text style={styles.logo}>Moodies</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>Write about how you feel, share....</Text>
        <Text> Others decided to take this trip, how is it gonna be</Text>
        <Text>for you ?</Text>
      </View>

      <ImageBackground source={image} style={{ flex: 2 }}>
        <Pressable onPress={goToLogin}>
          <Text>Start writting....</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    fontFamily: 'Nunito',
    marginTop: '35%',
    fontSize: 32,
    width: '40%',
    padding: 10,
    color: 'white',
    backgroundColor: '#DD6677',
  },
});

export default index;
