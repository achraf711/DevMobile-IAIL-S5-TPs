// 02. Données de départ
const produits = [
  { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
];

// 05. Défi supplémentaire : Validation des données
const estValide = (produit) => {
  return Number.isFinite(produit.prix) && produit.prix >= 0 &&
         Number.isFinite(produit.stock) && produit.stock >= 0;
};

// 03. Travail demandé

// 1. Affichage du catalogue
console.log("--- 1. Catalogue ---");
produits.forEach(p => console.log(`${p.nom} : ${p.prix} MAD`));

// 2. Disponibilité
const produitsDisponibles = produits.filter(p => p.stock > 0 && estValide(p));
console.log(`\n--- 2. Disponibilité ---`);
console.log(`Nombre de produits disponibles : ${produitsDisponibles.length}`);

// 3. Valeur du stock
const valeurStock = produits.reduce((total, p) => total + (p.prix * p.stock), 0);
console.log(`\n--- 3. Valeur du stock ---`);
console.log(`Valeur totale du stock : ${valeurStock} MAD`);

// 4. Prix minimal (avec gestion de liste vide et déstructuration pour le défi)
console.log(`\n--- 4. Prix minimal ---`);
if (produitsDisponibles.length > 0) {
  const produitMoinsCher = produitsDisponibles.reduce((min, p) => (p.prix < min.prix ? p : min), produitsDisponibles[0]);
  const { nom, prix } = produitMoinsCher; // Déstructuration
  console.log(`Produit disponible le moins cher : ${nom} (${prix} MAD)`);
} else {
  console.log("Aucun produit disponible pour le moment.");
}

// 5. Résumé
console.log(`\n--- 5. Résumé ---`);
const resume = produits.map(p => `${p.nom} - ${p.prix} MAD - ${p.stock} unités`);
resume.forEach(ligne => console.log(ligne));