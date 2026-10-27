# 🍽️ Cantina — Gestion des recettes et planning hebdomadaire

## 📌 Présentation du projet

**Cantina** est une application web interactive permettant de gérer des recettes et d'organiser un planning de repas pour les cinq jours de la semaine, du lundi au vendredi.

L'application permet aux utilisateurs d'ajouter, de modifier et de supprimer des recettes, de composer leurs menus quotidiens et de suivre le coût des repas avec un budget de référence de **50 DH par jour**.

Ce projet a été développé dans le cadre de la formation **Développement Web à YouCode**, afin de mettre en pratique la manipulation du DOM et les fondamentaux de JavaScript.

## 🚀 Fonctionnalités

### 1. Gestion des recettes (CRUD)

- **Ajouter** une recette avec un nom, un prix, une catégorie, une qualité et une image.
- **Afficher** les recettes sous forme de cartes dynamiques.
- **Modifier** les informations d'une recette existante.
- **Supprimer** une recette à l'aide d'une fenêtre de confirmation.

### 2. Planning hebdomadaire

- Organisation des repas du lundi au vendredi.
- Trois catégories de repas par jour :
  - Entrée
  - Plat principal
  - Dessert
- Sélection des recettes à partir de listes déroulantes.
- Filtrage automatique des recettes selon leur catégorie.
- Actualisation des listes après l'ajout, la modification ou la suppression d'une recette.

### 3. Suivi du budget

- Calcul automatique du coût total des recettes sélectionnées pour chaque jour.
- Affichage du total par rapport au budget de référence de **50 DH**.
- Affichage du montant en rouge lorsque le budget est dépassé.

### 4. Statut des repas

- **Complet** : les trois catégories de repas ont été sélectionnées.
- **Incomplet** : au moins une catégorie n'a pas encore été sélectionnée.

Le statut est actualisé automatiquement lorsque l'utilisateur modifie ses choix.

## 🛠️ Technologies utilisées

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure des pages |
| Tailwind CSS | Mise en page et styles |
| JavaScript (Vanilla JS) | Interactivité et logique de l'application |
| DOM API | Manipulation dynamique des éléments HTML |
| Git & GitHub | Versionnement et gestion du code |

## 🧠 Concepts JavaScript appliqués

Ce projet met en pratique plusieurs concepts fondamentaux :

- Variables et constantes (`let`, `const`)
- Tableaux et objets JavaScript
- Fonctions et conditions (`if`, `else`)
- Boucles `forEach()`
- Méthodes de tableaux : `push()`, `splice()`, `find()`, `findIndex()`, `filter()`
- Sélection des éléments avec `querySelector()` et `querySelectorAll()`
- Gestion des événements avec `addEventListener()`
- Manipulation du DOM avec `createElement()`, `appendChild()`, `textContent` et `innerHTML`
- Gestion des formulaires avec `preventDefault()`
- Création d'identifiants uniques avec `crypto.randomUUID()`
- Prévisualisation des images avec `URL.createObjectURL()`

## 📂 Structure du projet

```text
Cantina/
├── index.html
├── css/
│   ├── style.css
│   └── output.css
├── js/
│   └── app.js
├── assets/
└── README.md
```

*La structure peut varier selon l'organisation des fichiers du projet.*

## 💻 Installation et utilisation

1. Cloner le dépôt :

```bash
git clone https://github.com/VOTRE-USERNAME/Cantina.git
```

2. Ouvrir le dossier du projet :

```bash
cd Cantina
```

3. Ouvrir `index.html` dans un navigateur, ou lancer le projet avec l'extension Live Server de VS Code.

## ⚠️ Limitations actuelles

- Les recettes sont conservées en mémoire pendant l'utilisation de l'application et sont perdues après un rechargement de la page.
- Les images chargées à l'aide de `URL.createObjectURL()` ne sont pas conservées après un rechargement.
- Le dépassement du budget est signalé visuellement, mais n'empêche pas la sélection des recettes.
- La prévention des répétitions de recettes entre deux jours consécutifs n'est pas implémentée.

## 🔮 Améliorations futures

- Sauvegarde des recettes et des choix du planning avec `localStorage`.
- Conservation des images après rechargement.
- Prévention de la répétition des recettes sur deux jours consécutifs.
- Amélioration du design des listes déroulantes.
- Ajout de statistiques hebdomadaires dynamiques.

## 👨‍💻 Auteur

**Houssen Doudli**

Projet réalisé dans le cadre de la formation en développement web à **YouCode**.
