import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Données
  const produits = [
    { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
    { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
    { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
    { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
  ];

  // Logique métier intégrée
  const produitsDisponibles = produits.filter(p => p.stock > 0);
  const valeurStock = produits.reduce((total, p) => total + (p.prix * p.stock), 0);

  // Interface utilisateur
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CampusStock</Text>
      <Text style={styles.subtitle}>Catalogue produits</Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          Produits disponibles : <Text style={styles.bold}>{produitsDisponibles.length}</Text>
        </Text>
        <Text style={styles.text}>
          Valeur du stock : <Text style={styles.bold}>{valeurStock} MAD</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F7FD', // Repris du TP1 pour cohérence
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003796',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginVertical: 5,
  },
  bold: {
    fontWeight: 'bold',
    color: '#003796',
  }
});