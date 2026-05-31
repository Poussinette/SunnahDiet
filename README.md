# Sunnah Diet 🌿

> Authentic recipes from the beloved foods of the Prophet Muhammad ﷺ, sourced from trusted hadith of the Sunnah.

**🌐 Live site: [poussinette.github.io/SunnahDiet](https://poussinette.github.io/SunnahDiet/)**

A static website presenting detailed recipes of meals mentioned in authenticated hadith collections, with full bilingual support (English / French).

---

## Features

- **8 authentic recipes** — each traced to a specific hadith with source, number, and narrator
- **Bilingual** — full English and French translations, switchable live with an EN/FR toggle
- **Category filter** — browse by Porridge, Stew, Main Dish, Breakfast, Drink, Snack, etc.
- **Live search** — searches recipe names, descriptions, and hadith text in the active language
- **Detailed modal** — ingredients, step-by-step instructions, hadith reference block, and a historical note
- **No dependencies** — pure HTML, CSS, and vanilla JavaScript; opens directly in a browser

---

## Recipes

| Recipe | Arabic | Source | Hadith |
|---|---|---|---|
| Talbina | التلبينة | Sahih al-Bukhari | #5417 |
| Tharid | الثريد | Sahih al-Bukhari | #5419 |
| Dubbaa (Pumpkin) with Dried Meat | الدُّبَّاء | Sahih al-Bukhari | #5379 |
| Dates with Butter & Bread | التمر مع الزبد | Sahih al-Bukhari | #5445 |
| Honey Drink | شراب العسل | Sunan Ibn Majah | #3452 |
| Sawiq (Roasted Barley Drink) | السويق | Sahih al-Bukhari | #1568 |
| Vinegar & Olive Oil Bread Dip | الخل والزيت | Sahih Muslim | #2051 |
| Watermelon with Fresh Dates | البطيخ مع الرطب | Sunan Abu Dawud | #3836 |

---

## Hadith Sources

All recipes reference narrations from the following authenticated collections:

- **Sahih al-Bukhari** — compiled by Imam Muhammad ibn Ismail al-Bukhari
- **Sahih Muslim** — compiled by Imam Muslim ibn al-Hajjaj
- **Sunan Abu Dawud** — compiled by Imam Abu Dawud al-Sijistani
- **Sunan Ibn Majah** — compiled by Imam Ibn Majah al-Qazwini

---

## Getting Started

No build step or server required. Clone the repo and open `index.html` in any modern browser:

```bash
git clone <repo-url>
cd SunnahDiet
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

---

## Project Structure

```
SunnahDiet/
├── index.html     # Page structure and modal markup
├── styles.css     # All styling (Islamic green & gold theme, responsive)
└── recipes.js     # Recipe data (EN + FR), UI translations, render logic
```

All recipe data and translations live in `recipes.js`. To add a recipe, append an object to the `recipes` array following the existing structure — include a `fr` sub-object for the French translation.

---

## Adding a Recipe

Each recipe object in `recipes.js` follows this shape:

```js
{
  id: 9,
  name: "Recipe Name",
  arabic: "الاسم بالعربية",
  category: "Main Dish",       // must match a key in ui.en.categories
  description: "...",
  prepTime: "10 min",
  cookTime: "20 min",
  servings: 2,
  image: "🍲",                 // emoji used as the card illustration
  hadith: {
    text: "...",
    source: "Sahih al-Bukhari",
    number: "1234",
    narrator: "Narrated by ..."
  },
  ingredients: ["..."],
  instructions: ["..."],
  notes: "...",
  fr: {
    name: "Nom de la recette",
    description: "...",
    hadith_text: "...",
    ingredients: ["..."],
    instructions: ["..."],
    notes: "..."
  }
}
```

---

## License

This project is open source. The hadith texts are from the public domain translations of the classical hadith collections. Please verify all religious content against authoritative scholarly sources before relying on it for religious practice.

---

*اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّد*
