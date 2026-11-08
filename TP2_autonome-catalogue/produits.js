const produits = [
  { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 }
];

const estValide = (produit) => {
  return Number.isFinite(produit.prix) && produit.prix >= 0 &&
         Number.isFinite(produit.stock) && produit.stock >= 0;
};


console.log("--- 1. Catalogue ---");
produits.forEach(p => console.log(`${p.nom} : ${p.prix} MAD`));

const produitsDisponibles = produits.filter(p => p.stock > 0 && estValide(p));
console.log(`\n--- 2. Disponibilité ---`);
console.log(`Nombre de produits disponibles : ${produitsDisponibles.length}`);

const valeurStock = produits.reduce((total, p) => total + (p.prix * p.stock), 0);
console.log(`\n--- 3. Valeur du stock ---`);
console.log(`Valeur totale du stock : ${valeurStock} MAD`);

console.log(`\n--- 4. Prix minimal ---`);
if (produitsDisponibles.length > 0) {
  const produitMoinsCher = produitsDisponibles.reduce((min, p) => (p.prix < min.prix ? p : min), produitsDisponibles[0]);
  const { nom, prix } = produitMoinsCher; 
  console.log(`Produit disponible le moins cher : ${nom} (${prix} MAD)`);
} else {
  console.log("Aucun produit disponible pour le moment.");
}

console.log(`\n--- 5. Résumé ---`);
const resume = produits.map(p => `${p.nom} - ${p.prix} MAD - ${p.stock} unités`);
resume.forEach(ligne => console.log(ligne));
