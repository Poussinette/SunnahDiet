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
    notes: "Aisha (RA) used to recommend Talbina for the sick and the grieving, saying it was what the Prophet ﷺ recommended."
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
    notes: "Tharid was known in Arabia as the king of foods. The bread soaks the flavorful broth, creating a dish that is nourishing and deeply satisfying."
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
    notes: "Anas ibn Malik (RA) noted that the Prophet ﷺ particularly loved pumpkin (dubbaa). This love was so well-known that companions would add pumpkin to dishes when hosting him."
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
    notes: "The Prophet ﷺ would often break his fast with odd numbers of dates. Ajwa dates from Al-Madinah are specifically mentioned in authentic narrations for their protective qualities."
  },
  {
    id: 5,
    name: "Honey Drink (Nabeeth)",
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
    notes: "Allah mentions honey in Surah An-Nahl (16:69): 'There comes forth from their bellies a drink of varying colours wherein is healing for people.' The Prophet ﷺ himself used honey medicinally and consumed it regularly."
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
    notes: "Sawiq was a staple of the Prophet's ﷺ diet, particularly during journeys. It was valued for being lightweight, long-lasting, and highly nutritious — a perfect travel food."
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
    notes: "This simple combination reflects the blessed frugality of the Prophet's ﷺ table. Both olive oil and vinegar were readily available in the Arabian Peninsula and surrounding regions."
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
    notes: "Aisha (RA) reported this pairing. It reflects the wisdom of the Sunnah: the cooling nature of watermelon is balanced by the warming, energy-rich quality of dates — a combination modern nutrition confirms as complementary."
  }
];

let activeFilter = "All";
let searchQuery = "";

function getCategories() {
  const cats = ["All", ...new Set(recipes.map(r => r.category))];
  return cats;
}

function filterRecipes() {
  return recipes.filter(r => {
    const matchCat = activeFilter === "All" || r.category === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      r.name.toLowerCase().includes(q) ||
      r.arabic.includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.hadith.text.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });
}

function renderFilters() {
  const container = document.getElementById("filters");
  container.innerHTML = getCategories()
    .map(
      cat => `<button class="filter-btn ${cat === activeFilter ? "active" : ""}"
        onclick="setFilter('${cat}')">${cat}</button>`
    )
    .join("");
}

function renderCards() {
  const grid = document.getElementById("recipe-grid");
  const list = filterRecipes();
  if (list.length === 0) {
    grid.innerHTML = `<div class="no-results">No recipes found. Try a different search.</div>`;
    return;
  }
  grid.innerHTML = list
    .map(
      r => `
    <article class="recipe-card" onclick="openRecipe(${r.id})">
      <div class="card-emoji">${r.image}</div>
      <div class="card-body">
        <span class="category-tag">${r.category}</span>
        <h3 class="card-name">${r.name}</h3>
        <p class="card-arabic">${r.arabic}</p>
        <p class="card-desc">${r.description}</p>
        <div class="card-meta">
          <span>⏱ Prep: ${r.prepTime}</span>
          <span>🔥 Cook: ${r.cookTime}</span>
          <span>🍽 Serves: ${r.servings}</span>
        </div>
        <div class="card-hadith-preview">
          <span class="hadith-source">${r.hadith.source} #${r.hadith.number}</span>
        </div>
      </div>
    </article>`
    )
    .join("");
}

function setFilter(cat) {
  activeFilter = cat;
  renderFilters();
  renderCards();
}

function openRecipe(id) {
  const r = recipes.find(x => x.id === id);
  if (!r) return;

  document.getElementById("modal-emoji").textContent = r.image;
  document.getElementById("modal-name").textContent = r.name;
  document.getElementById("modal-arabic").textContent = r.arabic;
  document.getElementById("modal-category").textContent = r.category;
  document.getElementById("modal-desc").textContent = r.description;
  document.getElementById("modal-prep").textContent = r.prepTime;
  document.getElementById("modal-cook").textContent = r.cookTime;
  document.getElementById("modal-servings").textContent = r.servings;

  document.getElementById("modal-hadith-text").textContent = `"${r.hadith.text}"`;
  document.getElementById("modal-hadith-meta").textContent =
    `${r.hadith.narrator} — ${r.hadith.source}, Hadith No. ${r.hadith.number}`;

  document.getElementById("modal-ingredients").innerHTML = r.ingredients
    .map(i => `<li>${i}</li>`)
    .join("");

  document.getElementById("modal-instructions").innerHTML = r.instructions
    .map((step, idx) => `<li><span class="step-num">${idx + 1}</span>${step}</li>`)
    .join("");

  document.getElementById("modal-notes").textContent = r.notes;

  document.getElementById("recipe-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("recipe-modal").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
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
