import { useRouter } from 'expo-router';
import { ImageBackground, View, Text, Pressable, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
  const router = useRouter();

  const goToLogin = () => {
    router.replace('/login');
  };

  const image = require('../../assets/img.png');

  return (
    <SafeAreaView>
      <View style={{ flex: 2 }}>
        <View style={{ flex: 1, alignSelf: 'center' }}>
          <Text style={styles.logo}>Moodies</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.paragraph}>
            Write about your feelings, share... Others have decided to embark on this journey! How
            will it be
            <Text style={styles.underline}> for you ? 🧙‍♂️</Text>
          </Text>
        </View>

        <ImageBackground source={image} style={{ flex: 2 }}>
          <Pressable style={styles.button} onPress={goToLogin}>
            <Text style={styles.buttonText}>
              Start writting.... <FontAwesomeIcon icon={faPen} color="#fff" />
            </Text>
          </Pressable>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  paragraph: {
    fontFamily: 'Nunito',
    width: '75%',
    paddingTop: 80,
    fontSize: 24,
    alignSelf: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  logo: {
    fontFamily: 'Nunito',
    marginTop: '35%',
    fontSize: 32,
    width: '40%',
    padding: 10,
    color: 'white',
    backgroundColor: '#DD6677',
  },
  button: {
    backgroundColor: '#3CB17E',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginRight: 35,
    padding: 15,
    color: '#fff',
    borderRadius: 10,
    width: '45%',
    position: 'relative',
    top: 120,
  },
  buttonText: {
    fontFamily: 'Nunito',
    fontSize: 18,
    color: '#fff',
  },
});

export default index;
