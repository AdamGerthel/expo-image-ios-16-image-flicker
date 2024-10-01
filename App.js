import { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Image } from 'expo-image';

const IMG_A = 'https://picsum.photos/seed/696/3000/2000';
const IMG_B = 'https://picsum.photos/seed/232/3000/2000';

export default function App() {
  const [currentImage, setCurrentImage] = useState(IMG_A);

  return (
    <SafeAreaView style={styles.container}>
      <View
        accessibilityElementsHidden
        importantForAccessibility
        pointerEvents="box-none"
        style={[
          {
            transform: [{ translateX: 0 }, { translateY: 0 }, { scale: 1 }],
            opacity: 0.7,
          },
          styles.imageContainer,
        ]}>
        <Image
          style={styles.image}
          source={currentImage}
          contentFit="cover"
          cachePolicy="memory"
          transition={{
            duration: 500,
            effect: 'cross-dissolve',
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCurrentImage(currentImage === IMG_A ? IMG_B : IMG_A)}>
        <Text style={styles.buttonText}>Change image</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  buttonText: {
    color: 'white',
  },
  imageContainer: {
    width: 250,
    height: 250,
  },
  image: {
    flex: 1,
    zIndex: 1,
  },
});
