import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Université Ibn Zohr</Text>
      <Text style={styles.sousTitre}>
        IAIL S5 - Developpement mobile
      </Text>

      <Pressable
        style={styles.bouton}
        onPress={() => Alert.alert(
          'Bienvenue',
          'Votre premiere application IAIL S5 fonctionne !'
        )}
      >
        <Text style={styles.texteBouton}>Bienvenue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F7FD',
  },
  titre: {
    padding: 20,
    color: '#003796',
    fontSize: 26,
    fontWeight: 'bold',
  },
  sousTitre: {
    marginTop: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  bouton: {
    marginTop: 24,
    backgroundColor: '#ec091c',
    paddingVertical: 13,
    paddingHorizontal: 28,
    borderRadius: 9,
  },
  texteBouton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});