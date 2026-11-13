import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

type Evenement = {
  id: string;
  titre: string;
  categorie: string;
  capacite: number;
  inscrits: number;
};

const evenements: Evenement[] = [
  { id: 'E01', titre: 'Atelier React', categorie: 'Atelier', capacite: 25, inscrits: 25 },
  { id: 'E02', titre: 'Conférence IA', categorie: 'Conférence', capacite: 70, inscrits: 52 },
  { id: 'E03', titre: 'Sécurité mobile', categorie: 'Atelier', capacite: 20, inscrits: 17 },
  { id: 'E04', titre: 'Design UI', categorie: 'Atelier', capacite: 18, inscrits: 9 },
  { id: 'E05', titre: 'Forum projets', categorie: 'Rencontre', capacite: 50, inscrits: 49 },
  { id: 'E06', titre: 'Découverte Git', categorie: 'Atelier', capacite: 24, inscrits: 24 },
];

const placesRestantes = (e: Evenement) => Math.max(0, e.capacite - e.inscrits);

const statutEvenement = (e: Evenement) => {
  const r = placesRestantes(e);
  if (r === 0) return 'Complet';
  if (r >= 1 && r <= 3) return 'Presque complet';
  return 'Ouvert';
};

type StatProps = { label: string; valeur: number | string };

function BlocStatistique({ label, valeur }: StatProps) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValeur}>{valeur}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

type BadgeProps = { statut: string };

function BadgeEtat({ statut }: BadgeProps) {
  let badgeStyle = styles.badgeOuvert;
  if (statut === 'Complet') badgeStyle = styles.badgeComplet;
  else if (statut === 'Presque complet') badgeStyle = styles.badgePresque;

  return (
    <View style={[styles.badge, badgeStyle]}>
      <Text style={styles.badgeText}>{statut}</Text>
    </View>
  );
}

type CarteProps = { evenement: Evenement };

function CarteEvenement({ evenement }: CarteProps) {
  const places = placesRestantes(evenement);
  const statut = statutEvenement(evenement);

  return (
    <View style={styles.carte}>
      <View style={styles.carteHeader}>
        <Text style={styles.carteTitre}>{evenement.titre}</Text>
        <BadgeEtat statut={statut} />
      </View>
      <Text style={styles.carteCategorie}>{evenement.categorie}</Text>
      <Text style={styles.cartePlaces}>
        {places} {places <= 1 ? 'place libre' : 'places libres'}
      </Text>
    </View>
  );
}

export default function App() {
  const MODE: string = 'ateliers';

  const totalEvenements = evenements.length;
  const complets = evenements.filter(e => placesRestantes(e) === 0).length;
  const avecPlaces = totalEvenements - complets;
  const totalPlaces = evenements.reduce((somme, e) => somme + placesRestantes(e), 0);

  const donneesAffichees = MODE === 'tous' 
    ? evenements 
    : evenements.filter(e => e.categorie === 'Atelier' && placesRestantes(e) > 0);

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitre}>Campus Agenda</Text>
      <Text style={styles.headerSousTitre}>Événements du campus</Text>

      <View style={styles.statsContainer}>
        <BlocStatistique valeur={totalEvenements} label="événements" />
        <BlocStatistique valeur={totalPlaces} label="places libres" />
      </View>

      <Text style={styles.sectionTitre}>
        {MODE === 'tous' ? 'Tous les événements' : 'Ateliers disponibles'}
      </Text>

      <FlatList
        data={donneesAffichees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CarteEvenement evenement={item} />}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Aucun événement disponible pour ce filtre.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', paddingTop: 56, paddingHorizontal: 16 },
  headerTitre: { fontSize: 26, fontWeight: 'bold', color: '#00235C' },
  headerSousTitre: { fontSize: 16, color: '#4C5360', marginBottom: 16 },
  
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statBox: { flex: 1, backgroundColor: '#DCEBFF', padding: 12, borderRadius: 12, marginHorizontal: 4, alignItems: 'center' },
  statValeur: { fontSize: 22, fontWeight: 'bold', color: '#00235C' },
  statLabel: { fontSize: 12, color: '#00235C', textAlign: 'center', marginTop: 4 },
  
  sectionTitre: { fontSize: 18, fontWeight: '600', color: '#00235C', marginBottom: 12 },
  listContainer: { paddingBottom: 30 },
  emptyText: { textAlign: 'center', color: '#829AB1', marginTop: 20, fontStyle: 'italic' },

  carte: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 12, marginBottom: 12, borderWidth: 1, borderColor: '#E9ECEF' },
  carteHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  carteTitre: { fontSize: 17, fontWeight: 'bold', color: '#00235C', flex: 1, marginRight: 8 },
  carteCategorie: { fontSize: 14, color: '#4C5360', marginBottom: 4 },
  cartePlaces: { fontSize: 14, color: '#00235C', fontWeight: '600' },
  
  badge: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8 },
  badgeText: { fontSize: 12, fontWeight: 'bold', color: '#00235C' },
  badgeComplet: { backgroundColor: '#FFE5E5' },
  badgePresque: { backgroundColor: '#FFE6B3' },
  badgeOuvert: { backgroundColor: '#D6F5E7' },
});