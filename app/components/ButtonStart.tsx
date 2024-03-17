import { faPencil } from '@fortawesome/free-solid-svg-icons/faPencil';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button } from 'tamagui';

const ButtonStart = () => {
  return (
    <View style={styles.container}>
      <Link href={{ pathname: '/overview', params: { name: 'Dan' } }} asChild>
        <Button size="$5" backgroundColor="#B4D0FA">
          Start writting ...
          <FontAwesomeIcon icon={faPencil} color="white" />
        </Button>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    width: '50%',
    marginTop: '10%',
  },
});

export default ButtonStart;
