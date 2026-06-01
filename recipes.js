// ─── UI Translations ────────────────────────────────────────────────────────
const ui = {
  en: {
    searchPlaceholder: "Search recipes, ingredients, or hadith…",
    noResults: "No recipes found. Try a different search.",
    hadithRef: "📖 Hadith Reference",
    ingredients: "Ingredients",
    instructions: "Instructions",
    historicalNote: "📝 Historical Note",
    prep: "Prep",
    cook: "Cook",
    serves: "Serves",
    headerSubtitle: "Authentic recipes from the beloved foods of the Prophet Muhammad ﷺ, sourced from trusted hadith of the Sunnah.",
    footerTagline: "Recipes sourced from authentic hadith collections.",
    footerSources: "All hadith references are from Sahih al-Bukhari, Sahih Muslim, Sunan Abu Dawud, and Sunan Ibn Majah.",
    footerDua: "May Allah bless us in following the Sunnah of His Messenger ﷺ",
    filterAll: "All",
    categories: {
      "Porridge":          "Porridge",
      "Stew":              "Stew",
      "Main Dish":         "Main Dish",
      "Breakfast":         "Breakfast",
      "Drink":             "Drink",
      "Drink / Snack":     "Drink / Snack",
      "Condiment / Snack": "Condiment / Snack",
      "Dessert / Snack":   "Dessert / Snack"
    }
  },
  fr: {
    searchPlaceholder: "Rechercher des recettes, ingrédients ou hadiths…",
    noResults: "Aucune recette trouvée. Essayez une autre recherche.",
    hadithRef: "📖 Référence Hadith",
    ingredients: "Ingrédients",
    instructions: "Instructions",
    historicalNote: "📝 Note Historique",
    prep: "Prép.",
    cook: "Cuisson",
    serves: "Portions",
    headerSubtitle: "Recettes authentiques tirées des aliments bien-aimés du Prophète Muhammad ﷺ, issues des hadiths fiables de la Sunnah.",
    footerTagline: "Recettes tirées de collections de hadiths authentiques.",
    footerSources: "Toutes les références de hadiths proviennent du Sahih al-Bukhari, du Sahih Muslim, du Sunan Abu Dawud et du Sunan Ibn Majah.",
    footerDua: "Qu'Allah nous bénisse en suivant la Sunnah de Son Messager ﷺ",
    filterAll: "Tout",
    categories: {
      "Porridge":          "Bouillie",
      "Stew":              "Ragoût",
      "Main Dish":         "Plat Principal",
      "Breakfast":         "Petit-déjeuner",
      "Drink":             "Boisson",
      "Drink / Snack":     "Boisson / Collation",
      "Condiment / Snack": "Condiment / Collation",
      "Dessert / Snack":   "Dessert / Collation"
    }
  }
};

// ─── Recipe Data ─────────────────────────────────────────────────────────────
const recipes = [
  {
    id: 1,
    name: "Talbina",
    arabic: "التلبينة",
    category: "Porridge",
    description: "A soothing barley-based porridge mixed with milk and honey, praised by the Prophet ﷺ for healing the heart of the sick.",
    prepTime: "5 min",
    cookTime: "15 min",
    servings: 2,
    image: "🌾",
    hadith: {
      text: "Talbina gives rest to the heart of the patient and makes it active and relieves some of his sorrow and grief.",
      source: "Sahih al-Bukhari",
      number: "5417",
      narrator: "Narrated by Aisha (RA)"
    },
    ingredients: [
      "2 tablespoons barley flour (finely ground)",
      "2 cups whole milk",
      "1 tablespoon pure honey",
      "Pinch of salt",
      "Optional: a few dates for serving"
    ],
    instructions: [
      "Mix the barley flour with a small amount of cold milk in a saucepan to form a smooth lump-free paste.",
      "Gradually pour in the remaining milk while stirring continuously over medium-low heat.",
      "Continue to stir gently as the mixture heats up, preventing lumps from forming.",
      "Simmer on low heat for 10–15 minutes, stirring frequently, until the porridge thickens to a creamy, smooth consistency.",
      "Remove from heat and allow to cool slightly.",
      "Stir in the honey — do not add honey while boiling, as heat reduces its benefits.",
      "Serve warm in a bowl, optionally garnished with pitted dates on the side."
    ],
    notes: "Aisha (RA) used to recommend Talbina for the sick and the grieving, saying it was what the Prophet ﷺ recommended.",
    fr: {
      name: "Talbina",
      description: "Une bouillie d'orge apaisante mélangée avec du lait et du miel, louée par le Prophète ﷺ pour réconforter le cœur du malade.",
      hadith_text: "La talbina procure du repos au cœur du malade, le réconforte et dissipe une partie de sa tristesse et de son chagrin.",
      ingredients: [
        "2 cuillères à soupe de farine d'orge (finement moulue)",
        "2 tasses de lait entier",
        "1 cuillère à soupe de miel pur",
        "Une pincée de sel",
        "Facultatif : quelques dattes pour servir"
      ],
      instructions: [
        "Dans une casserole, mélanger la farine d'orge avec un peu de lait froid pour obtenir une pâte lisse sans grumeaux.",
        "Incorporer progressivement le reste du lait en remuant continuellement à feu moyen-doux.",
        "Continuer à remuer doucement pendant que le mélange chauffe, pour éviter la formation de grumeaux.",
        "Laisser mijoter à feu doux pendant 10 à 15 minutes, en remuant fréquemment, jusqu'à ce que la bouillie épaississe et soit onctueuse.",
        "Retirer du feu et laisser refroidir légèrement.",
        "Incorporer le miel — ne pas l'ajouter pendant l'ébullition, car la chaleur réduit ses bienfaits.",
        "Servir chaud dans un bol, éventuellement garni de dattes dénoyautées sur le côté."
      ],
      notes: "Aïcha (RA) recommandait la Talbina aux malades et aux personnes en deuil, affirmant que c'était ce que le Prophète ﷺ prescrivait."
    }
  },
  {
    id: 2,
    name: "Tharid",
    arabic: "الثريد",
    category: "Stew",
    description: "A hearty meat and vegetable stew poured over crumbled flatbread — described by the Prophet ﷺ as the best of all foods.",
    prepTime: "20 min",
    cookTime: "60 min",
    servings: 4,
    image: "🍖",
    hadith: {
      text: "The superiority of Aisha over all other women is like the superiority of Tharid over all other foods.",
      source: "Sahih al-Bukhari",
      number: "5419",
      narrator: "Narrated by Abu Musa al-Ashari (RA)"
    },
    ingredients: [
      "500g lamb or mutton, bone-in pieces",
      "2 large onions, roughly chopped",
      "3 garlic cloves, minced",
      "2 medium tomatoes, diced",
      "2 medium carrots, cut into chunks",
      "2 medium potatoes, cut into chunks",
      "1 teaspoon cumin",
      "1 teaspoon coriander",
      "½ teaspoon turmeric",
      "½ teaspoon black pepper",
      "Salt to taste",
      "3 tablespoons olive oil",
      "4 cups water or lamb broth",
      "4 pieces Arabic flatbread (khubz) or pita bread"
    ],
    instructions: [
      "Heat olive oil in a large heavy pot over medium-high heat. Brown the lamb pieces on all sides until golden, then remove and set aside.",
      "In the same pot, sauté the onions until soft and translucent, about 5 minutes.",
      "Add garlic, cumin, coriander, turmeric, and black pepper. Stir for 1 minute until fragrant.",
      "Return the lamb to the pot. Add tomatoes and stir to combine, cooking for 3 minutes.",
      "Pour in the water or broth and bring to a boil. Reduce heat, cover, and simmer for 30 minutes.",
      "Add the carrots and potatoes and continue simmering for another 25–30 minutes until the meat is tender and falling off the bone.",
      "Adjust seasoning with salt.",
      "Tear or crumble the flatbread into a large deep serving dish or bowl.",
      "Ladle the hot stew generously over the bread, ensuring the bread soaks up the broth.",
      "Serve immediately while hot, traditionally eaten communally from one large dish."
    ],
    notes: "Tharid was known in Arabia as the king of foods. The bread soaks the flavorful broth, creating a dish that is nourishing and deeply satisfying.",
    fr: {
      name: "Tharid",
      description: "Un copieux ragoût de viande et légumes versé sur du pain azyme émietté — décrit par le Prophète ﷺ comme le meilleur de tous les aliments.",
      hadith_text: "La supériorité de Aïcha sur toutes les autres femmes est comme la supériorité du Tharid sur tous les autres aliments.",
      ingredients: [
        "500 g d'agneau ou de mouton, morceaux avec os",
        "2 grands oignons, grossièrement hachés",
        "3 gousses d'ail, émincées",
        "2 tomates moyennes, coupées en dés",
        "2 carottes moyennes, coupées en morceaux",
        "2 pommes de terre moyennes, coupées en morceaux",
        "1 cuillère à café de cumin",
        "1 cuillère à café de coriandre moulue",
        "½ cuillère à café de curcuma",
        "½ cuillère à café de poivre noir",
        "Sel selon le goût",
        "3 cuillères à soupe d'huile d'olive",
        "4 tasses d'eau ou de bouillon d'agneau",
        "4 pains plats arabes (khubz) ou pains pita"
      ],
      instructions: [
        "Chauffer l'huile d'olive dans une grande cocotte à feu vif. Faire dorer les morceaux d'agneau de tous les côtés jusqu'à ce qu'ils soient bien colorés, puis les réserver.",
        "Dans la même cocotte, faire revenir les oignons jusqu'à ce qu'ils soient translucides, environ 5 minutes.",
        "Ajouter l'ail, le cumin, la coriandre, le curcuma et le poivre noir. Remuer pendant 1 minute jusqu'à ce que les épices embaument.",
        "Remettre l'agneau dans la cocotte. Ajouter les tomates et mélanger en cuisant pendant 3 minutes.",
        "Verser l'eau ou le bouillon et porter à ébullition. Réduire le feu, couvrir et laisser mijoter 30 minutes.",
        "Ajouter les carottes et les pommes de terre, et continuer à mijoter pendant encore 25 à 30 minutes jusqu'à ce que la viande soit tendre.",
        "Ajuster l'assaisonnement avec du sel.",
        "Déchirer ou émietter le pain plat dans un grand plat creux ou un bol.",
        "Verser généreusement le ragoût chaud sur le pain pour qu'il absorbe le bouillon.",
        "Servir immédiatement pendant que c'est chaud, traditionnellement partagé communautairement dans un grand plat."
      ],
      notes: "Le Tharid était connu en Arabie comme le roi des aliments. Le pain imbibe le savoureux bouillon, créant un plat nourrissant et profondément satisfaisant."
    }
  },
  {
    id: 3,
    name: "Dubbaa (Pumpkin) with Dried Meat",
    arabic: "الدُّبَّاء",
    category: "Main Dish",
    description: "A simple gourd and dried meat dish. The Prophet ﷺ was seen picking out pieces of pumpkin with delight from his bowl.",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: 3,
    image: "🎃",
    hadith: {
      text: "I saw the Prophet ﷺ being served soup containing gourd and dried meat, and I saw him picking up the pieces of gourd and eating them.",
      source: "Sahih al-Bukhari",
      number: "5379",
      narrator: "Narrated by Anas ibn Malik (RA)"
    },
    ingredients: [
      "400g pumpkin or yellow gourd, peeled and cubed",
      "200g dried or cured lamb/beef, thinly sliced",
      "1 large onion, sliced",
      "2 garlic cloves, minced",
      "2 tablespoons olive oil",
      "½ teaspoon black pepper",
      "½ teaspoon coriander",
      "Salt to taste",
      "2 cups water",
      "Fresh coriander leaves to garnish"
    ],
    instructions: [
      "Heat olive oil in a pot over medium heat. Add onions and cook until lightly golden.",
      "Add garlic and dried meat slices, stirring for 2–3 minutes.",
      "Add the pumpkin cubes and stir to coat with the oil and spices.",
      "Season with black pepper, coriander, and salt.",
      "Pour in water, bring to a boil, then reduce heat and simmer covered for 20–25 minutes until the pumpkin is tender.",
      "The broth should be flavorful and slightly thickened from the pumpkin.",
      "Serve in bowls garnished with fresh coriander, with flatbread on the side."
    ],
    notes: "Anas ibn Malik (RA) noted that the Prophet ﷺ particularly loved pumpkin (dubbaa). This love was so well-known that companions would add pumpkin to dishes when hosting him.",
    fr: {
      name: "Dubbaa (Citrouille) à la Viande Séchée",
      description: "Un plat simple de gourde et viande séchée. Le Prophète ﷺ fut observé en train de ramasser avec délice des morceaux de citrouille dans son bol.",
      hadith_text: "J'ai vu le Prophète ﷺ servi d'une soupe contenant de la courge et de la viande séchée, et je l'ai vu ramasser les morceaux de courge et les manger.",
      ingredients: [
        "400 g de citrouille ou gourde jaune, pelée et coupée en cubes",
        "200 g de viande séchée d'agneau ou de bœuf, finement tranchée",
        "1 grand oignon, émincé",
        "2 gousses d'ail, émincées",
        "2 cuillères à soupe d'huile d'olive",
        "½ cuillère à café de poivre noir",
        "½ cuillère à café de coriandre moulue",
        "Sel selon le goût",
        "2 tasses d'eau",
        "Feuilles de coriandre fraîche pour garnir"
      ],
      instructions: [
        "Chauffer l'huile d'olive dans une casserole à feu moyen. Ajouter les oignons et les faire revenir jusqu'à ce qu'ils soient légèrement dorés.",
        "Ajouter l'ail et la viande séchée, en remuant pendant 2 à 3 minutes.",
        "Ajouter les cubes de citrouille et mélanger pour les enrober d'huile et d'épices.",
        "Assaisonner avec le poivre noir, la coriandre et le sel.",
        "Verser l'eau, porter à ébullition, puis réduire le feu et laisser mijoter à couvert pendant 20 à 25 minutes jusqu'à ce que la citrouille soit tendre.",
        "Le bouillon doit être savoureux et légèrement épaissi grâce à la citrouille.",
        "Servir dans des bols garnis de coriandre fraîche, avec du pain plat en accompagnement."
      ],
      notes: "Anas ibn Malik (RA) a noté que le Prophète ﷺ aimait particulièrement la citrouille (dubbaa). Cet amour était si connu que les compagnons en ajoutaient aux plats lorsqu'ils le recevaient."
    }
  },
  {
    id: 4,
    name: "Dates with Butter & Bread",
    arabic: "التمر مع الزبد",
    category: "Breakfast",
    description: "A simple blessed breakfast combining Ajwa dates with butter, the way the Prophet ﷺ would begin his day.",
    prepTime: "5 min",
    cookTime: "0 min",
    servings: 1,
    image: "🌴",
    hadith: {
      text: "Whoever has seven Ajwa dates every morning will not be harmed by poison or magic on that day until evening.",
      source: "Sahih al-Bukhari",
      number: "5445",
      narrator: "Narrated by Sad ibn Abi Waqqas (RA)"
    },
    ingredients: [
      "7 Ajwa dates (or Medjool dates as an alternative)",
      "2 tablespoons pure unsalted butter or ghee",
      "2 slices of barley bread or whole wheat flatbread",
      "Optional: a small drizzle of pure black seed oil"
    ],
    instructions: [
      "Select seven ripe, plump Ajwa dates. If using other varieties, choose the finest quality available.",
      "Allow the butter or ghee to soften at room temperature.",
      "Lightly warm the barley bread if desired.",
      "Spread a generous layer of butter or ghee over the bread.",
      "Arrange the dates alongside or on top of the bread.",
      "Consume in the morning before eating anything else, as per the Sunnah practice.",
      "Optionally, a small amount of black seed oil can be added for additional blessing."
    ],
    notes: "The Prophet ﷺ would often break his fast with odd numbers of dates. Ajwa dates from Al-Madinah are specifically mentioned in authentic narrations for their protective qualities.",
    fr: {
      name: "Dattes avec Beurre et Pain",
      description: "Un petit-déjeuner simple et béni combinant des dattes Ajwa avec du beurre, de la façon dont le Prophète ﷺ commençait sa journée.",
      hadith_text: "Quiconque mange sept dattes Ajwa chaque matin ne sera pas atteint par un poison ni par la magie ce jour-là jusqu'au soir.",
      ingredients: [
        "7 dattes Ajwa (ou dattes Medjool en alternative)",
        "2 cuillères à soupe de beurre non salé pur ou de ghee",
        "2 tranches de pain d'orge ou de galette de blé complet",
        "Facultatif : un léger filet d'huile de nigelle pure"
      ],
      instructions: [
        "Sélectionner sept dattes Ajwa mûres et charnues. Si vous utilisez d'autres variétés, choisissez la meilleure qualité disponible.",
        "Laisser ramollir le beurre ou le ghee à température ambiante.",
        "Réchauffer légèrement le pain d'orge si désiré.",
        "Étaler une généreuse couche de beurre ou de ghee sur le pain.",
        "Disposer les dattes à côté ou sur le pain.",
        "Consommer le matin avant de manger autre chose, conformément à la pratique de la Sunnah.",
        "Éventuellement, une petite quantité d'huile de nigelle peut être ajoutée pour une bénédiction supplémentaire."
      ],
      notes: "Le Prophète ﷺ rompait souvent son jeûne avec un nombre impair de dattes. Les dattes Ajwa de Al-Madinah sont spécifiquement mentionnées dans les narrations authentiques pour leurs propriétés protectrices."
    }
  },
  {
    id: 5,
    name: "Honey Drink",
    arabic: "شراب العسل",
    category: "Drink",
    description: "A warm honey-based drink. The Prophet ﷺ loved sweetness and honey, and it is mentioned as a cure in both the Quran and the Sunnah.",
    prepTime: "5 min",
    cookTime: "5 min",
    servings: 1,
    image: "🍯",
    hadith: {
      text: "Make use of the two cures: honey and the Quran.",
      source: "Sunan Ibn Majah",
      number: "3452",
      narrator: "Narrated by Ibn Masud (RA)"
    },
    ingredients: [
      "1–2 tablespoons raw, unfiltered honey (Sidr or Manuka preferred)",
      "1 cup warm water (not boiling — to preserve honey's properties)",
      "Optional: a small pinch of ground black seed (Nigella sativa)",
      "Optional: a few saffron strands steeped in warm water"
    ],
    instructions: [
      "Heat water until warm — around 40°C (104°F). Do not bring to a full boil as this destroys beneficial enzymes in honey.",
      "Pour the warm water into a cup.",
      "Add one to two tablespoons of honey and stir gently until fully dissolved.",
      "If using black seed, add a small pinch and stir in.",
      "If using saffron, steep a few strands in a teaspoon of warm water for 2 minutes, then add to the cup.",
      "Drink slowly, ideally in the morning on an empty stomach or before sleep."
    ],
    notes: "Allah mentions honey in Surah An-Nahl (16:69): 'There comes forth from their bellies a drink of varying colours wherein is healing for people.' The Prophet ﷺ himself used honey medicinally and consumed it regularly.",
    fr: {
      name: "Boisson au Miel",
      description: "Une boisson chaude à base de miel. Le Prophète ﷺ aimait les aliments sucrés et le miel, mentionné comme remède dans le Coran et la Sunnah.",
      hadith_text: "Utilisez les deux remèdes : le miel et le Coran.",
      ingredients: [
        "1 à 2 cuillères à soupe de miel cru non filtré (Sidr ou Manuka de préférence)",
        "1 tasse d'eau chaude (non bouillante — pour préserver les propriétés du miel)",
        "Facultatif : une petite pincée de nigelle moulue (Nigella sativa)",
        "Facultatif : quelques fils de safran infusés dans de l'eau chaude"
      ],
      instructions: [
        "Chauffer l'eau jusqu'à ce qu'elle soit tiède — environ 40°C (104°F). Ne pas porter à pleine ébullition car cela détruit les enzymes bénéfiques du miel.",
        "Verser l'eau tiède dans une tasse.",
        "Ajouter une à deux cuillères à soupe de miel et remuer doucement jusqu'à dissolution complète.",
        "Si vous utilisez de la nigelle, ajouter une petite pincée et mélanger.",
        "Si vous utilisez du safran, laisser infuser quelques fils dans une cuillère à café d'eau chaude pendant 2 minutes, puis ajouter à la tasse.",
        "Boire lentement, idéalement le matin à jeun ou avant le sommeil."
      ],
      notes: "Allah mentionne le miel dans la Sourate An-Nahl (16:69) : « Il en sort une boisson de couleurs variées, contenant une guérison pour les hommes. » Le Prophète ﷺ utilisait lui-même le miel comme remède et en consommait régulièrement."
    }
  },
  {
    id: 6,
    name: "Sawiq (Roasted Barley Drink)",
    arabic: "السويق",
    category: "Drink / Snack",
    description: "A nourishing roasted barley flour preparation, consumed by the Prophet ﷺ and his companions as a quick, sustaining food during travel.",
    prepTime: "5 min",
    cookTime: "10 min",
    servings: 2,
    image: "🌿",
    hadith: {
      text: "The Prophet ﷺ and his companions set out in a state of Ihram and they had nothing with them but Sawiq and dates.",
      source: "Sahih al-Bukhari",
      number: "1568",
      narrator: "Narrated by Jabir ibn Abdullah (RA)"
    },
    ingredients: [
      "4 tablespoons barley flour",
      "1½ cups water or milk",
      "1 tablespoon honey or dates (for sweetening)",
      "Pinch of salt",
      "Optional: a few drops of rose water"
    ],
    instructions: [
      "Dry-roast the barley flour in a pan over low-medium heat, stirring constantly, for 5–8 minutes until golden and fragrant. Watch carefully to prevent burning.",
      "Remove from heat and allow to cool slightly.",
      "In a cup or bowl, combine the roasted barley flour with water or milk.",
      "Stir well until smooth. The mixture should be drinkable — thin it with more liquid if needed.",
      "Sweeten with honey or blend in soft pitted dates.",
      "Add a pinch of salt and optional rose water.",
      "Drink immediately or allow to thicken slightly and eat with a spoon."
    ],
    notes: "Sawiq was a staple of the Prophet's ﷺ diet, particularly during journeys. It was valued for being lightweight, long-lasting, and highly nutritious — a perfect travel food.",
    fr: {
      name: "Sawiq (Boisson à l'Orge Grillée)",
      description: "Une préparation nourrissante à base de farine d'orge grillée, consommée par le Prophète ﷺ et ses compagnons comme aliment rapide et sustentant lors des voyages.",
      hadith_text: "Le Prophète ﷺ et ses compagnons partirent en état d'Ihram et ils n'avaient avec eux que du Sawiq et des dattes.",
      ingredients: [
        "4 cuillères à soupe de farine d'orge",
        "1,5 tasse d'eau ou de lait",
        "1 cuillère à soupe de miel ou de dattes (pour sucrer)",
        "Une pincée de sel",
        "Facultatif : quelques gouttes d'eau de rose"
      ],
      instructions: [
        "Faire griller la farine d'orge à sec dans une poêle à feu moyen-doux, en remuant constamment, pendant 5 à 8 minutes jusqu'à ce qu'elle soit dorée et parfumée. Surveiller attentivement pour éviter de brûler.",
        "Retirer du feu et laisser refroidir légèrement.",
        "Dans une tasse ou un bol, mélanger la farine d'orge grillée avec de l'eau ou du lait.",
        "Bien remuer jusqu'à obtenir un mélange lisse. La consistance doit être buvable — rallonger avec plus de liquide si nécessaire.",
        "Sucrer avec du miel ou incorporer des dattes molles dénoyautées.",
        "Ajouter une pincée de sel et éventuellement de l'eau de rose.",
        "Boire immédiatement ou laisser légèrement épaissir et manger à la cuillère."
      ],
      notes: "Le Sawiq était un aliment de base du régime du Prophète ﷺ, notamment lors des voyages. Il était apprécié pour être léger, durable et très nutritif — un aliment de voyage idéal."
    }
  },
  {
    id: 7,
    name: "Vinegar & Olive Oil Bread Dip",
    arabic: "الخل والزيت",
    category: "Condiment / Snack",
    description: "A humble but blessed dip of vinegar and olive oil for bread — two foods the Prophet ﷺ specifically praised.",
    prepTime: "3 min",
    cookTime: "0 min",
    servings: 2,
    image: "🫒",
    hadith: {
      text: "What a good condiment vinegar is. O Allah, bless the olive oil and the olive tree.",
      source: "Sahih Muslim",
      number: "2051",
      narrator: "Narrated by Jabir ibn Abdullah (RA)"
    },
    ingredients: [
      "3 tablespoons extra-virgin olive oil",
      "1 tablespoon apple cider vinegar or white wine vinegar",
      "Pinch of coarse salt",
      "Pinch of dried thyme or za'atar (optional)",
      "Barley bread or whole wheat flatbread for dipping"
    ],
    instructions: [
      "Pour the olive oil into a small shallow bowl.",
      "Drizzle the vinegar over the olive oil — they will not emulsify fully, which is normal.",
      "Sprinkle with a pinch of coarse salt.",
      "Add dried thyme or za'atar if desired.",
      "Tear the bread into pieces and dip directly into the mixture.",
      "Consume as a light meal or accompaniment, as the Prophet ﷺ and his companions would."
    ],
    notes: "This simple combination reflects the blessed frugality of the Prophet's ﷺ table. Both olive oil and vinegar were readily available in the Arabian Peninsula and surrounding regions.",
    fr: {
      name: "Trempette Pain au Vinaigre et Huile d'Olive",
      description: "Une trempette humble mais bénie de vinaigre et d'huile d'olive pour le pain — deux aliments que le Prophète ﷺ a spécifiquement loués.",
      hadith_text: "Quel bon condiment que le vinaigre. Ô Allah, bénis l'huile d'olive et l'olivier.",
      ingredients: [
        "3 cuillères à soupe d'huile d'olive extra vierge",
        "1 cuillère à soupe de vinaigre de cidre de pomme ou de vinaigre de vin blanc",
        "Une pincée de sel grossier",
        "Une pincée de thym séché ou de za'atar (facultatif)",
        "Pain d'orge ou galette de blé complet pour tremper"
      ],
      instructions: [
        "Verser l'huile d'olive dans un petit bol peu profond.",
        "Verser le vinaigre sur l'huile d'olive — ils ne s'émulsionneront pas complètement, ce qui est normal.",
        "Saupoudrer d'une pincée de sel grossier.",
        "Ajouter du thym séché ou du za'atar si désiré.",
        "Déchirer le pain en morceaux et tremper directement dans le mélange.",
        "Consommer comme repas léger ou accompagnement, comme le faisaient le Prophète ﷺ et ses compagnons."
      ],
      notes: "Cette simple combinaison reflète la frugalité bénie de la table du Prophète ﷺ. L'huile d'olive et le vinaigre étaient facilement disponibles dans la péninsule arabique et les régions environnantes."
    }
  },
  {
    id: 9,
    name: "Cucumber with Fresh Dates",
    arabic: "القثاء مع الرطب",
    category: "Dessert / Snack",
    description: "A simple and blessed pairing of cool fresh cucumber eaten with ripe dates — directly observed and narrated by the companion Abdullah ibn Ja'far (RA) from the Prophet ﷺ.",
    prepTime: "5 min",
    cookTime: "0 min",
    servings: 2,
    image: "🥒",
    hadith: {
      text: "I saw the Prophet ﷺ eating fresh dates with snake cucumbers.",
      source: "Sahih al-Bukhari",
      number: "5447",
      narrator: "Narrated by Abdullah ibn Ja'far (RA)"
    },
    ingredients: [
      "1 large fresh cucumber, chilled",
      "10–12 fresh ripe dates (rutab — soft stage)",
      "Pinch of coarse salt (optional)",
      "A few fresh mint leaves (optional)"
    ],
    instructions: [
      "Chill the cucumber in the refrigerator for at least 30 minutes before serving.",
      "Wash the cucumber thoroughly. Slice into thick rounds or halve lengthwise and cut into spears.",
      "Select fresh ripe dates in the rutab stage — they should be soft, moist, and naturally sweet.",
      "Arrange the cucumber slices and dates together on a plate.",
      "Optionally sprinkle a small pinch of coarse salt over the cucumber to enhance its flavour.",
      "Garnish with mint leaves if desired.",
      "Eat a piece of cucumber together with a date in the same bite, as the Prophet ﷺ was observed doing."
    ],
    notes: "Ibn al-Qayyim al-Jawziyya commented on this pairing in Zad al-Ma'ad: 'The cucumber is cold and moist... so it is proper to combine it with something that corrects its coldness and moisture, as the Messenger of Allah ﷺ did when he ate it with fresh dates.' The same pairing is confirmed in Sahih Muslim #2043, also narrated by Abdullah ibn Ja'far (RA).",
    fr: {
      name: "Concombre aux Dattes Fraîches",
      description: "Une association simple et bénie de concombre frais et croquant avec des dattes mûres — directement observée et rapportée par le compagnon Abdullah ibn Ja'far (RA) du Prophète ﷺ.",
      hadith_text: "J'ai vu le Prophète ﷺ manger des dattes fraîches avec des concombres.",
      ingredients: [
        "1 grand concombre frais, réfrigéré",
        "10 à 12 dattes fraîches mûres (rutab — stade mou)",
        "Une pincée de sel grossier (facultatif)",
        "Quelques feuilles de menthe fraîche (facultatif)"
      ],
      instructions: [
        "Réfrigérer le concombre pendant au moins 30 minutes avant de servir.",
        "Laver soigneusement le concombre. Le couper en rondelles épaisses ou en deux dans la longueur puis en bâtonnets.",
        "Sélectionner des dattes fraîches mûres au stade rutab — elles doivent être molles, humides et naturellement sucrées.",
        "Disposer les tranches de concombre et les dattes ensemble sur une assiette.",
        "Saupoudrer éventuellement d'une petite pincée de sel grossier sur le concombre pour rehausser sa saveur.",
        "Garnir de feuilles de menthe si désiré.",
        "Manger un morceau de concombre avec une datte en même temps, comme le Prophète ﷺ a été observé le faire."
      ],
      notes: "Ibn al-Qayyim al-Jawziyya a commenté cette association dans Zad al-Ma'ad : « Le concombre est froid et humide... il convient donc de l'associer à quelque chose qui corrige sa froideur et son humidité, comme le faisait le Messager d'Allah ﷺ en le mangeant avec des dattes fraîches. » La même association est confirmée dans le Sahih Muslim #2043, également narré par Abdullah ibn Ja'far (RA)."
    }
  },
  {
    id: 8,
    name: "Watermelon with Fresh Dates",
    arabic: "البطيخ مع الرطب",
    category: "Dessert / Snack",
    description: "A refreshing combination of cool watermelon eaten together with fresh ripe dates — a pairing the Prophet ﷺ himself practised.",
    prepTime: "10 min",
    cookTime: "0 min",
    servings: 2,
    image: "🍉",
    hadith: {
      text: "The Prophet ﷺ used to eat watermelon with fresh dates.",
      source: "Sunan Abu Dawud",
      number: "3836",
      narrator: "Narrated by Aisha (RA)"
    },
    ingredients: [
      "4 thick slices of ripe, chilled watermelon",
      "10–12 fresh ripe dates (rutab — soft stage)",
      "Optional: a drizzle of honey",
      "Optional: a few fresh mint leaves"
    ],
    instructions: [
      "Chill the watermelon in the refrigerator for at least one hour before serving.",
      "Select fresh, ripe dates in the rutab stage (soft, partially ripened) — they should be soft and sweet.",
      "Cut the watermelon into thick, manageable slices and arrange on a plate.",
      "Place the fresh dates alongside or on top of the watermelon.",
      "Optionally add a very light drizzle of honey and garnish with mint leaves.",
      "Eat by taking a bite of watermelon and a bite of date together to experience the flavour combination the Prophet ﷺ enjoyed."
    ],
    notes: "Aisha (RA) reported this pairing. It reflects the wisdom of the Sunnah: the cooling nature of watermelon is balanced by the warming, energy-rich quality of dates — a combination modern nutrition confirms as complementary.",
    fr: {
      name: "Pastèque aux Dattes Fraîches",
      description: "Une combinaison rafraîchissante de pastèque fraîche consommée avec des dattes mûres — un accord que le Prophète ﷺ lui-même pratiquait.",
      hadith_text: "Le Prophète ﷺ avait l'habitude de manger de la pastèque avec des dattes fraîches.",
      ingredients: [
        "4 épaisses tranches de pastèque mûre et fraîche",
        "10 à 12 dattes fraîches mûres (rutab — stade mou)",
        "Facultatif : un filet de miel",
        "Facultatif : quelques feuilles de menthe fraîche"
      ],
      instructions: [
        "Réfrigérer la pastèque pendant au moins une heure avant de servir.",
        "Sélectionner des dattes fraîches mûres au stade rutab (molles, partiellement mûries) — elles doivent être douces et sucrées.",
        "Couper la pastèque en tranches épaisses et les disposer sur une assiette.",
        "Placer les dattes fraîches à côté ou sur la pastèque.",
        "Éventuellement, ajouter un très léger filet de miel et garnir de feuilles de menthe.",
        "Manger en prenant une bouchée de pastèque et une bouchée de datte ensemble pour reproduire la combinaison de saveurs appréciée par le Prophète ﷺ."
      ],
      notes: "Aïcha (RA) a rapporté cette combinaison. Elle reflète la sagesse de la Sunnah : la nature rafraîchissante de la pastèque est équilibrée par les qualités réchauffantes et énergétiques des dattes — une combinaison que la nutrition moderne confirme comme complémentaire."
    }
  }
];

// ─── State ───────────────────────────────────────────────────────────────────
let currentLang  = "en";
let activeFilter = "All";
let searchQuery  = "";

// ─── Helpers ─────────────────────────────────────────────────────────────────
function t(key) {
  return ui[currentLang][key];
}

function localField(recipe, field) {
  if (currentLang === "fr" && recipe.fr && recipe.fr[field] !== undefined) {
    return recipe.fr[field];
  }
  return recipe[field];
}

function getCategories() {
  return ["All", ...new Set(recipes.map(r => r.category))];
}

function displayCategory(cat) {
  if (cat === "All") return t("filterAll");
  return t("categories")[cat] || cat;
}

// ─── Filtering ────────────────────────────────────────────────────────────────
function filterRecipes() {
  return recipes.filter(r => {
    const matchCat = activeFilter === "All" || r.category === activeFilter;
    const q = searchQuery.toLowerCase();
    if (!q) return matchCat;
    const name  = localField(r, "name").toLowerCase();
    const desc  = localField(r, "description").toLowerCase();
    const hText = (currentLang === "fr" && r.fr?.hadith_text
      ? r.fr.hadith_text
      : r.hadith.text).toLowerCase();
    return matchCat && (name.includes(q) || r.arabic.includes(q) || desc.includes(q) || hText.includes(q));
  });
}

// ─── Render ───────────────────────────────────────────────────────────────────
function applyUI() {
  document.getElementById("search-input").placeholder        = t("searchPlaceholder");
  document.getElementById("header-subtitle").textContent     = t("headerSubtitle");
  document.getElementById("section-hadith-label").textContent= t("hadithRef");
  document.getElementById("section-ingredients").textContent = t("ingredients");
  document.getElementById("section-instructions").textContent= t("instructions");
  document.getElementById("section-notes-label").textContent = t("historicalNote");
  document.getElementById("footer-tagline").textContent      = t("footerTagline");
  document.getElementById("footer-sources").textContent      = t("footerSources");
  document.getElementById("footer-dua").textContent          = t("footerDua");
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function renderFilters() {
  const container = document.getElementById("filters");
  container.innerHTML = getCategories()
    .map(cat => `<button class="filter-btn ${cat === activeFilter ? "active" : ""}"
        onclick="setFilter('${cat}')">${displayCategory(cat)}</button>`)
    .join("");
}

function renderCards() {
  const grid = document.getElementById("recipe-grid");
  const list = filterRecipes();
  if (list.length === 0) {
    grid.innerHTML = `<div class="no-results">${t("noResults")}</div>`;
    return;
  }
  grid.innerHTML = list.map(r => `
    <article class="recipe-card" onclick="openRecipe(${r.id})">
      <div class="card-emoji">${r.image}</div>
      <div class="card-body">
        <span class="category-tag">${displayCategory(r.category)}</span>
        <h3 class="card-name">${localField(r, "name")}</h3>
        <p class="card-arabic">${r.arabic}</p>
        <p class="card-desc">${localField(r, "description")}</p>
        <div class="card-meta">
          <span>⏱ ${t("prep")}: ${r.prepTime}</span>
          <span>🔥 ${t("cook")}: ${r.cookTime}</span>
          <span>🍽 ${t("serves")}: ${r.servings}</span>
        </div>
        <div class="card-hadith-preview">
          <span class="hadith-source">${r.hadith.source} #${r.hadith.number}</span>
        </div>
      </div>
    </article>`).join("");
}

function openRecipe(id) {
  const r = recipes.find(x => x.id === id);
  if (!r) return;

  const hadithText = currentLang === "fr" && r.fr?.hadith_text ? r.fr.hadith_text : r.hadith.text;

  document.getElementById("modal-emoji").textContent    = r.image;
  document.getElementById("modal-name").textContent     = localField(r, "name");
  document.getElementById("modal-arabic").textContent   = r.arabic;
  document.getElementById("modal-category").textContent = displayCategory(r.category);
  document.getElementById("modal-desc").textContent     = localField(r, "description");
  document.getElementById("modal-prep").textContent     = r.prepTime;
  document.getElementById("modal-cook").textContent     = r.cookTime;
  document.getElementById("modal-servings").textContent = r.servings;

  document.getElementById("modal-hadith-text").textContent = `"${hadithText}"`;
  document.getElementById("modal-hadith-meta").textContent =
    `${r.hadith.narrator} — ${r.hadith.source}, Hadith No. ${r.hadith.number}`;

  document.getElementById("modal-ingredients").innerHTML =
    localField(r, "ingredients").map(i => `<li>${i}</li>`).join("");

  document.getElementById("modal-instructions").innerHTML =
    localField(r, "instructions")
      .map((step, idx) => `<li><span class="step-num">${idx + 1}</span>${step}</li>`)
      .join("");

  document.getElementById("modal-notes").textContent = localField(r, "notes");

  document.getElementById("recipe-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("recipe-modal").classList.remove("open");
  document.body.style.overflow = "";
}

// ─── Actions ──────────────────────────────────────────────────────────────────
function setFilter(cat) {
  activeFilter = cat;
  renderFilters();
  renderCards();
}

function setLanguage(lang) {
  currentLang = lang;
  applyUI();
  renderFilters();
  renderCards();
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  applyUI();
  renderFilters();
  renderCards();

  document.getElementById("search-input").addEventListener("input", e => {
    searchQuery = e.target.value;
    renderCards();
  });

  document.getElementById("recipe-modal").addEventListener("click", e => {
    if (e.target === document.getElementById("recipe-modal")) closeModal();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
});
