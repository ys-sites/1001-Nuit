const fs = require('fs');
const path = require('path');

const menuDataPath = path.resolve('src/data/menuData.ts');
let content = fs.readFileSync(menuDataPath, 'utf8');

// Replacements for À La Carte to use the newly optimized authentic images
const replacements = [
  ['/menu/optimized/alacarte/boat-1.webp', '/menu/optimized/lunch-express/boat-1.webp'],
  ['/menu/optimized/alacarte/boat2.webp', '/menu/optimized/lunch-express/boat-2.webp'],
  ['/menu/optimized/alacarte/veg-stir-vermicelli.webp', '/menu/optimized/lunch-express/veg-stir-vermicelli.webp'],
  ['/menu/optimized/alacarte/veg-fried-rice.webp', '/menu/optimized/lunch-express/veg-fried-rice.webp'],
  ['/menu/optimized/alacarte/braised-tofu-in-soy-sauce.webp', '/menu/optimized/lunch-express/braised-tofu-in-soy-sauce.webp'],
  ['/menu/optimized/alacarte/fried-mixed-vegetables.webp', '/menu/optimized/lunch-express/stir-fried-mixed-vegetables.webp'],
  ['/menu/optimized/alacarte/vegetables-dumpling.webp', '/menu/optimized/lunch-express/vegetables-dumpling.webp'],
  ['/menu/optimized/alacarte/coconut-water.webp', '/menu/optimized/lunch-express/coconut-water.webp'],
  ['/menu/optimized/alacarte/oolong-teano-sugar.webp', '/menu/optimized/lunch-express/oolong-tea.webp'],
  ['/menu/optimized/alacarte/coca-cola-mexican-bottled.webp', '/menu/optimized/lunch-express/coca-cola-mexican-bottled.webp'],
  ['/menu/optimized/alacarte/diet-coke.webp', '/menu/optimized/lunch-express/diet-coke.webp'],
  ['/menu/optimized/alacarte/milkis.webp', '/menu/optimized/lunch-express/milkis.webp'],
  ['/menu/optimized/alacarte/sparkling-water.webp', '/menu/optimized/lunch-express/sparkling-water.webp'],
  ['/menu/optimized/alacarte/cheese-cake-yuzu.webp', '/menu/optimized/lunch-express/cheese-cake-yuzu.webp'],
  ['/menu/optimized/alacarte/mango-mochi.webp', '/menu/optimized/lunch-express/mango-mochi.webp'],
  ['/menu/optimized/alacarte/matcha-mochi.webp', '/menu/optimized/lunch-express/matcha-mochi.webp'],
  ['/menu/optimized/alacarte/strawberry-mochi.webp', '/menu/optimized/lunch-express/strawberry-mochi.webp']
];

for (const [oldPath, newPath] of replacements) {
  content = content.split(oldPath).join(newPath);
}

// Now define the comprehensive LUNCH_EXPRESS_MENU_CATEGORIES
const LUNCH_EXPRESS_MENU_CATEGORIES = [
  {
    title_en: "POKE BOWL",
    title_fr: "BOLS POKE",
    items: [
      {
        name_en: "Sashimi Poke Bowl",
        name_fr: "Bol Poke au Sashimi",
        desc_en: "Fresh assorted sashimi cuts over seasoned sushi rice with avocado, edamame, and house poke dressing",
        desc_fr: "Assortiment de sashimis frais du chef sur riz vinaigré, avocat crémeux, edamame et marinade poke maison",
        price: "$21.99",
        image: "/menu/optimized/lunch-express/sashimi-poke-bowl.webp"
      },
      {
        name_en: "Eel Poke Bowl",
        name_fr: "Bol Poke à l'Anguille Grillée",
        desc_en: "Tender glazed Japanese barbecue unagi eel over seasoned sushi rice with avocado and cucumber",
        desc_fr: "Anguille grillée laquée à la sauce unagi sur lit de riz vinaigré avec avocat et lamelles de concombre",
        price: "$19.99",
        image: "/menu/optimized/lunch-express/eel-poke-bowl.webp"
      },
      {
        name_en: "Spicy Salmon Poke Bowl",
        name_fr: "Bol Poke au Saumon Épicé",
        desc_en: "Fresh Atlantic salmon tossed with sriracha spicy mayo, avocado, edamame, and masago",
        desc_fr: "Dés de saumon frais relevés à la mayonnaise épicée sriracha, avocat, edamame et masago",
        price: "$20.99",
        image: "/menu/optimized/lunch-express/spicy-salmon-poke-bowl.webp"
      },
      {
        name_en: "Tuna Poke Bowl",
        name_fr: "Bol Poke au Thon Rouge",
        desc_en: "High-grade ruby red tuna slices with avocado, crisp cucumber, sesame, and signature poke glaze",
        desc_fr: "Lamelles de thon rouge de première fraîcheur, avocat mûr, concombre croquant et sésame grillé",
        price: "$20.99",
        image: "/menu/optimized/lunch-express/tuna-poke-bowl.webp"
      },
      {
        name_en: "Vegetarian Poke Bowl",
        name_fr: "Bol Poke Végétarien",
        desc_en: "Silken tofu squares, Haas avocado, edamame, seasoned seaweed salad, and cucumber over sushi rice",
        desc_fr: "Cubes de tofu soyeux, avocat Haas, fèves d'edamame, salade d'algues et concombre sur riz vinaigré",
        price: "$16.99",
        image: "/menu/optimized/lunch-express/vegetarian-poke-bowl.webp"
      }
    ]
  },
  {
    title_en: "SNACKS & SIDES",
    title_fr: "SNACKS & EN-CAS",
    items: [
      {
        name_en: "Takoyaki (4 pcs)",
        name_fr: "Takoyaki (4 mcx)",
        desc_en: "Traditional Japanese crispy octopus balls drizzled with sweet savory sauce and Japanese mayo",
        desc_fr: "Bouchées croustillantes japonaises traditionnelles au poulpe avec mayonnaise japonaise",
        price: "$5.99",
        image: "/menu/optimized/ayce/takoyaki.webp"
      },
      {
        name_en: "Salted Edamame",
        name_fr: "Edamame Salé",
        desc_en: "Warm steamed young soybeans sprinkled with coarse mineral sea salt",
        desc_fr: "Fèves de soya fraîches à la vapeur saupoudrées de gros sel marin",
        price: "$4.99",
        image: "/menu/optimized/ayce/salted-edamame.webp"
      },
      {
        name_en: "Popcorn Chicken",
        name_fr: "Bouchées de Poulet Popcorn",
        desc_en: "Taiwanese style crispy bite-sized fried chicken bites tossed in five-spice seasoning",
        desc_fr: "Morceaux de poulet croustillants frits au style taïwanais parfumés aux cinq épices",
        price: "$14.99",
        image: "/menu/optimized/alacarte/popcorn-chicken.webp"
      },
      {
        name_en: "Chicken Skewers",
        name_fr: "Brochettes de Poulet Grillées",
        desc_en: "Tender flame-grilled chicken skewers seasoned with roasted cumin and Asian spices",
        desc_fr: "Brochettes de poulet tendre grillées aux épices parfumées et cumin",
        price: "$13.99",
        image: "/menu/optimized/ayce/curry-chicken-skewers.webp"
      },
      {
        name_en: "Beef Skewers",
        name_fr: "Brochettes de Bœuf Grillées",
        desc_en: "Tender grilled beef skewers marinated in aromatic cumin and Asian spices",
        desc_fr: "Brochettes de bœuf mariné grillées au parfum de cumin et épices d'Asie",
        price: "$14.99",
        image: "/menu/optimized/ayce/curry-chicken-skewers.webp"
      },
      {
        name_en: "Lamb Skewers",
        name_fr: "Brochettes d'Agneau Grillées",
        desc_en: "Succulent Xinjiang-style spiced lamb skewers seared with roasted cumin and chili",
        desc_fr: "Tendres brochettes d'agneau grillées relevées au cumin torréfié et piment",
        price: "$16.99",
        image: "/menu/optimized/ayce/curry-chicken-skewers.webp"
      },
      {
        name_en: "Mixed Meat Skewers",
        name_fr: "Brochettes Mixtes Assorties",
        desc_en: "Trio of grilled spiced meat skewers bursting with savory barbecue flavors",
        desc_fr: "Trio de brochettes de viandes marinées grillées aux saveurs barbecue d'Asie",
        price: "$15.99",
        image: "/menu/optimized/ayce/curry-chicken-skewers.webp"
      },
      {
        name_en: "Chicken Wings with Fries",
        name_fr: "Ailes de Poulet & Frites",
        desc_en: "Crispy fried seasoned chicken wings served with golden salted fries",
        desc_fr: "Ailes de poulet croustillantes accompagnées de frites dorées au sel marin",
        price: "$14.99",
        image: "/menu/optimized/alacarte/chicken-wing-with-fries.webp"
      },
      {
        name_en: "Sesame Balls (B04)",
        name_fr: "Boules de Sésame Croustillantes (B04)",
        desc_en: "Chewy glutinous rice balls coated in fragrant sesame seeds with sweet filling",
        desc_fr: "Boules de riz gluant dorées au sésame croustillant avec cœur sucré fondant",
        price: "$5.99",
        image: "/menu/optimized/alacarte/sesame-balls.webp"
      },
      {
        name_en: "Spicy Chili Beef (B09)",
        name_fr: "Bœuf Pimenté Sauté Maison (B09)",
        desc_en: "Tender sliced beef tossed with hot chilies, sweet onions, and savory garlic glaze",
        desc_fr: "Émincé de bœuf mariné sauté au wok avec piments frais et oignons doux",
        price: "$13.99",
        image: "/menu/optimized/alacarte/spicy-chill-beef.webp"
      },
      {
        name_en: "Deep Fried Calamari (B17)",
        name_fr: "Calmars Frits Croustillants (B17)",
        desc_en: "Tender seasoned calamari rings flash-fried until crispy and golden",
        desc_fr: "Anneaux de calmar marinés dorés et frits à la perfection",
        price: "$14.99",
        image: "/menu/optimized/alacarte/deep-fried-calamari.webp"
      },
      {
        name_en: "Crispy Spring Rolls (B18)",
        name_fr: "Rouleaux Impériaux Croustillants (B18)",
        desc_en: "Vegetarian crispy fried spring rolls packed with shredded garden vegetables",
        desc_fr: "Rouleaux croustillants dorés farcis de légumes frais finement émincés",
        price: "$6.99",
        image: "/menu/optimized/alacarte/spring-rolls.webp"
      },
      {
        name_en: "Fried Scallops (B19)",
        name_fr: "Pétoncles Frits Croustillants (B19)",
        desc_en: "Plump tender scallops breaded in light golden Japanese panko",
        desc_fr: "Pétoncles tendres panés à la chapelure japonaise panko dorée",
        price: "$5.99",
        image: "/menu/optimized/alacarte/fried-scallops.webp"
      },
      {
        name_en: "Condensed Milk Toast",
        name_fr: "Pain Doré au Lait Concentré",
        desc_en: "Hong Kong style thick golden toast generously drizzled with creamy sweet condensed milk",
        desc_fr: "Épaisse tranche de pain brioché doré arrosée de lait concentré sucré",
        price: "$7.99",
        image: "/menu/optimized/alacarte/condensed-milk-toast.webp"
      },
      {
        name_en: "French Fries",
        name_fr: "Frites Dorées Classiques",
        desc_en: "Crispy golden potato fries lightly seasoned with fine sea salt",
        desc_fr: "Frites de pommes de terre classiques croustillantes et salées au sel de mer",
        price: "$4.99",
        image: "/menu/optimized/ayce/french-fries.webp"
      },
      {
        name_en: "Sweet Potato Fries",
        name_fr: "Frites de Patate Douce",
        desc_en: "Crispy battered sweet potato fries served hot and lightly seasoned",
        desc_fr: "Frites de patates douces croustillantes et savoureuses",
        price: "$6.99",
        image: "/menu/optimized/ayce/tempura-sweet-potato.webp"
      },
      {
        name_en: "Ice Cream Waffles",
        name_fr: "Gaufres à la Crème Glacée",
        desc_en: "Warm golden Belgian waffles paired with chilled creamy artisanal ice cream",
        desc_fr: "Gaufres belges dorées servies avec une boule de crème glacée onctueuse",
        price: "$8.99",
        image: "/menu/optimized/alacarte/ice-cream-waffles.webp"
      },
      {
        name_en: "Artisanal Ice Cream",
        name_fr: "Crème Glacée Artisanale",
        desc_en: "Refreshing premium ice cream scoop in choice of classic and Asian flavors",
        desc_fr: "Boule de crème glacée artisanale onctueuse aux saveurs gourmandes",
        price: "$1.99",
        image: "/menu/optimized/alacarte/ice-cream.webp"
      }
    ]
  },
  {
    title_en: "MAIN DISH",
    title_fr: "PLATS PRINCIPAUX",
    items: [
      {
        name_en: "Soy Sauce Fried Rice",
        name_fr: "Riz Frit à la Sauce Soja",
        desc_en: "Fragrant wok-fried Jasmine rice with premium dark soy sauce, scallions, and egg",
        desc_fr: "Riz jasmin sauté au wok à la sauce soja supérieure, oignons verts et œuf",
        price: "$13.99",
        image: "/menu/optimized/ayce/chicken-fried-rice.webp"
      },
      {
        name_en: "Sakura Shrimp & Chicken Fried Rice (C01)",
        name_fr: "Riz Frit Crevettes Sakura & Poulet (C01)",
        desc_en: "Fragrant wok-fried Jasmine rice with savory dried sakura shrimp, chicken, and egg",
        desc_fr: "Riz au jasmin sauté au wok avec crevettes sakura savoureuses, poulet et œuf",
        price: "$18.99",
        image: "/menu/optimized/alacarte/sakura-shrimpandchicken-fr.webp"
      },
      {
        name_en: "Pineapple Fried Rice (C12)",
        name_fr: "Riz Frit à l'Ananas (C12)",
        desc_en: "Fragrant golden fried rice with sweet pineapple chunks, egg, and fresh vegetables",
        desc_fr: "Riz sauté parfumé aux morceaux d'ananas juteux, œuf et légumes",
        price: "$18.99",
        image: "/menu/optimized/alacarte/pineapple-fried-rice.webp"
      },
      {
        name_en: "Chicken Udon Stir-Fry (B06)",
        name_fr: "Udon Sauté au Poulet (B06)",
        desc_en: "Thick Japanese udon noodles wok-fried with chicken strips and scallions",
        desc_fr: "Nouilles udon japonaises sautées au wok avec aiguillettes de poulet",
        price: "$19.99",
        image: "/menu/optimized/alacarte/chicken-udon-stir-fry.webp"
      },
      {
        name_en: "Stir-Fried Beef Udon",
        name_fr: "Udon Sauté au Bœuf Tendre",
        desc_en: "Thick Japanese udon noodles wok-tossed with tender beef slices and seasonal vegetables",
        desc_fr: "Épaisses nouilles udon sautées avec émincé de bœuf tendre et petits légumes",
        price: "$21.99",
        image: "/menu/optimized/alacarte/fried-beef-udon.webp"
      },
      {
        name_en: "Chicken Katsu Rice",
        name_fr: "Poulet Katsu sur Riz Chaud",
        desc_en: "Crispy Japanese panko breaded chicken cutlet served over steamed rice with savory katsu glaze",
        desc_fr: "Suprême de poulet croustillant pané au panko servi sur riz vapeur avec sauce katsu",
        price: "$15.99",
        image: "/menu/optimized/ayce/teriyaki-chicken.webp"
      },
      {
        name_en: "General Tao's Chicken (B16)",
        name_fr: "Poulet Général Tao (B16)",
        desc_en: "Crispy chicken tossed in signature sweet and savory General Tao sauce",
        desc_fr: "Morceaux de poulet croustillants enrobés de notre sauce Général Tao",
        price: "$21.99",
        image: "/menu/optimized/alacarte/general-taos-chicken.webp"
      },
      {
        name_en: "General Tao's Shrimp (B03)",
        name_fr: "Crevettes Général Tao (B03)",
        desc_en: "Crispy battered jumbo shrimp coated in tangy General Tao sweet glaze",
        desc_fr: "Grosses crevettes croustillantes glacées de sauce Général Tao maison",
        price: "$23.99",
        image: "/menu/optimized/alacarte/general-taos-shrimp.webp"
      },
      {
        name_en: "Traditional Pad Thai (C11)",
        name_fr: "Pad Thaï Traditionnel (C11)",
        desc_en: "Traditional stir-fried rice noodles with bean sprouts, egg, and crushed peanuts",
        desc_fr: "Nouilles de riz traditionnelles sautées avec fèves germées et arachides",
        price: "$19.99",
        image: "/menu/optimized/alacarte/pad-thai.webp"
      },
      {
        name_en: "HK Style Beef Noodles (C10)",
        name_fr: "Nouilles au Bœuf Style Hong Kong (C10)",
        desc_en: "Wok-charred wide rice noodles with sliced flank steak, bean sprouts, and dark soy",
        desc_fr: "Larges nouilles de riz sautées au wok au bœuf émincé et pousses de soja",
        price: "$20.99",
        image: "/menu/optimized/alacarte/hk-style-beef-noodles.webp"
      },
      {
        name_en: "Broccoli Beef",
        name_fr: "Bœuf au Brocoli Sauté",
        desc_en: "Tender sliced beef wok-tossed with fresh crisp broccoli florets in savory garlic sauce",
        desc_fr: "Émincé de bœuf tendre sauté au wok avec bouquets de brocolis frais",
        price: "$16.99",
        image: "/menu/optimized/alacarte/broccoli-beef.webp"
      },
      {
        name_en: "Spaghetti w/ Beef Black Pepper Sauce (C06)",
        name_fr: "Spaghetti au Bœuf Sauce Poivre Noir (C06)",
        desc_en: "Hong Kong cafe style stir-fried spaghetti with beef in aromatic black pepper sauce",
        desc_fr: "Spaghetti sauté à la hong-kongaise avec bœuf tendre et sauce poivre noir",
        price: "$20.99",
        image: "/menu/optimized/alacarte/spaghetti-w-beef-bpsauce.webp"
      },
      {
        name_en: "Steamed White Rice",
        name_fr: "Riz Blanc Parfumé",
        desc_en: "Steamed bowl of premium Jasmine white rice",
        desc_fr: "Bol de riz blanc au jasmin cuit à la vapeur",
        price: "$3.00",
        image: "/menu/optimized/ayce/white-rice.webp"
      }
    ]
  },
  {
    title_en: "SUSHI",
    title_fr: "SUSHIS",
    items: [
      {
        name_en: "Mango Roll (6 pcs)",
        name_fr: "Rouleau Mangue (6 mcx)",
        desc_en: "Sweet tropical mango, ripe avocado, and crisp cucumber (6 pcs)",
        desc_fr: "Mangue tropicale sucrée, avocat et concombre frais (6 mcx)",
        price: "$5.99",
        image: "/menu/optimized/alacarte/mango-roll-6pcs.webp"
      },
      {
        name_en: "Avocado Roll (6 pcs)",
        name_fr: "Rouleau Avocat (6 mcx)",
        desc_en: "Classic creamy avocado rolled with seasoned sushi rice and nori (6 pcs)",
        desc_fr: "Rouleau classique à l'avocat crémeux et riz vinaigré (6 mcx)",
        price: "$5.99",
        image: "/menu/optimized/alacarte/avocado-6pcs.webp"
      },
      {
        name_en: "Salmon & Avocado Roll (6 pcs)",
        name_fr: "Rouleau Saumon & Avocat (6 mcx)",
        desc_en: "Fresh Atlantic salmon paired with ripe Haas avocado (6 pcs)",
        desc_fr: "Saumon frais de l'Atlantique et avocat mûr (6 mcx)",
        price: "$8.99",
        image: "/menu/optimized/alacarte/salmon-and-avocado-6pcs.webp"
      },
      {
        name_en: "Fried Chicken Roll (10 pcs)",
        name_fr: "Rouleau Poulet Frit (10 mcx)",
        desc_en: "Tender fried chicken breast with crisp lettuce and teriyaki glaze (10 pcs)",
        desc_fr: "Poulet croustillant, salade fraîche et glaçage teriyaki (10 mcx)",
        price: "$11.99",
        image: "/menu/optimized/alacarte/fried-chicken-roll-10-pcs.webp"
      },
      {
        name_en: "Dragon Eye Roll (10 pcs)",
        name_fr: "Rouleau Œil de Dragon (10 mcx)",
        desc_en: "Deep-fried specialty maki with fresh salmon, whitefish, and scallions (10 pcs)",
        desc_fr: "Maki doré et croustillant au saumon, poisson blanc et oignons verts (10 mcx)",
        price: "$12.99",
        image: "/menu/optimized/alacarte/dragon-eye-roll-10-pcs.webp"
      },
      {
        name_en: "Spicy Salmon Roll (6 pcs)",
        name_fr: "Rouleau Saumon Épicé (6 mcx)",
        desc_en: "Fresh salmon tossed with sriracha spicy mayo and crunchy tempura (6 pcs)",
        desc_fr: "Tartare de saumon assaisonné à la mayo épicée et tempura (6 mcx)",
        price: "$13.99",
        image: "/menu/optimized/alacarte/spicy-salmon-6pcs.webp"
      },
      {
        name_en: "California Roll (10 pcs)",
        name_fr: "Rouleau Californie (10 mcx)",
        desc_en: "Crab stick, creamy avocado, crisp cucumber, and masago (10 pcs)",
        desc_fr: "Goberge de crabe, avocat crémeux, concombre croquant et masago (10 mcx)",
        price: "$9.99",
        image: "/menu/optimized/alacarte/california-roll-10-pcs.webp"
      },
      {
        name_en: "Philadelphia Roll",
        name_fr: "Rouleau Philadelphie",
        desc_en: "Smoked salmon, velvety cream cheese, cucumber, and sesame seeds",
        desc_fr: "Saumon fumé, fromage à la crème soyeux, concombre et graines de sésame",
        price: "$13.99",
        image: "/menu/optimized/ayce/philadelphia-roll.webp"
      },
      {
        name_en: "Signature Combo SS1",
        name_fr: "Plateau Signature SS1",
        desc_en: "Chef curated assortment of chef's favorite nigiri and crispy tempura rolls",
        desc_fr: "Assortiment harmonieux de nigiris délicats et rouleaux tempura croustillants",
        price: "$15.99",
        image: "/menu/optimized/alacarte/ss1.webp"
      },
      {
        name_en: "Signature Combo SS2",
        name_fr: "Plateau Signature SS2",
        desc_en: "Rich combination of fresh salmon lovers rolls, avocado maki, and torched nigiri",
        desc_fr: "Plateau généreux pour les amateurs de saumon frais, avocat et nigiris",
        price: "$21.99",
        image: "/menu/optimized/alacarte/ss2.webp"
      },
      {
        name_en: "Signature Combo SS3",
        name_fr: "Plateau Signature SS3",
        desc_en: "Colorful party platter featuring California rolls, spicy salmon, and mixed nigiri",
        desc_fr: "Plateau festif haut en couleur composé de rouleaux californiens et saumon épicé",
        price: "$34.99",
        image: "/menu/optimized/alacarte/ss3.webp"
      },
      {
        name_en: "Signature Combo SS4",
        name_fr: "Plateau Signature SS4",
        desc_en: "Deluxe grand combo featuring dragon eye, dynamite, and fresh fish selections",
        desc_fr: "Combo grandiose haut de gamme réunissant œil de dragon et créations fraîches",
        price: "$44.99",
        image: "/menu/optimized/alacarte/ss4.webp"
      },
      {
        name_en: "Sushi Boat Imperial (Boat 1)",
        name_fr: "Grand Bateau Impérial (Boat 1)",
        desc_en: "Spectacular wooden sushi boat laden with assorted premium nigiri, sashimi, and specialty rolls",
        desc_fr: "Magnifique bateau de fête garni de nigiris fins, sashimis et rouleaux de prestige",
        price: "$97.99",
        image: "/menu/optimized/lunch-express/boat-1.webp"
      },
      {
        name_en: "Sushi Boat Royal (Boat 2)",
        name_fr: "Grand Bateau Royal (Boat 2)",
        desc_en: "Elaborate multi-level wooden boat loaded with supreme maki collection and chef's cut sashimi",
        desc_fr: "Somptueux bateau garni d'une abondance de makis raffinés et sashimis du chef",
        price: "$111.99",
        image: "/menu/optimized/lunch-express/boat-2.webp"
      }
    ]
  },
  {
    title_en: "VEGETARIAN",
    title_fr: "VÉGÉTARIEN",
    items: [
      {
        name_en: "Vegetarian Stir Vermicelli (V01)",
        name_fr: "Vermicelles Sautés aux Légumes (V01)",
        desc_en: "Light wok-tossed vermicelli noodles loaded with crisp garden vegetables",
        desc_fr: "Vermicelles légers sautés au wok avec petits légumes croquants",
        price: "$15.99",
        image: "/menu/optimized/lunch-express/veg-stir-vermicelli.webp"
      },
      {
        name_en: "Vegetarian Fried Rice (V02)",
        name_fr: "Riz Frit aux Légumes du Potager (V02)",
        desc_en: "Fragrant fried rice packed with colorful fresh garden vegetables",
        desc_fr: "Riz sauté savoureux et parfumé aux petits légumes",
        price: "$13.99",
        image: "/menu/optimized/lunch-express/veg-fried-rice.webp"
      },
      {
        name_en: "Braised Tofu in Soy Sauce (V05)",
        name_fr: "Tofu Braisé à la Sauce Soja (V05)",
        desc_en: "Silken tofu squares lightly pan-fried and braised in aromatic soy sauce",
        desc_fr: "Cubes de tofu dorés mijotés dans une sauce soja parfumée",
        price: "$13.99",
        image: "/menu/optimized/lunch-express/braised-tofu-in-soy-sauce.webp"
      },
      {
        name_en: "Stir-Fried Mixed Vegetables",
        name_fr: "Légumes Assortis Sautés au Wok",
        desc_en: "Medley of seasonal fresh vegetables wok-fried in light savory garlic glaze",
        desc_fr: "Méli-mélo de légumes frais du marché sautés au wok dans un jus d'ail délicat",
        price: "$12.95",
        image: "/menu/optimized/lunch-express/stir-fried-mixed-vegetables.webp"
      },
      {
        name_en: "Vegetable Dumplings",
        name_fr: "Raviolis Végétariens du Jardin",
        desc_en: "Steamed thin-wrapper dumplings filled with cabbage, wood ear mushrooms, and greens",
        desc_fr: "Raviolis vapeur légers farcis aux champignons asiatiques et légumes verts",
        price: "$8.99",
        image: "/menu/optimized/lunch-express/vegetables-dumpling.webp"
      }
    ]
  },
  {
    title_en: "DRINKS & DESSERTS",
    title_fr: "BOISSONS & DESSERTS",
    items: [
      {
        name_en: "Hong Kong Style Milk Tea",
        name_fr: "Thé au Lait Style Hong Kong",
        desc_en: "Rich and silky brewed Ceylon black tea blended with evaporated milk",
        desc_fr: "Thé noir de Ceylan infusé à point et velouté au lait concentré",
        price: "$4.99",
        image: "/menu/optimized/alacarte/hong-kong-style-milk-tea.webp"
      },
      {
        name_en: "Fresh Brewed Coffee",
        name_fr: "Café Chaud Infusé",
        desc_en: "Rich and dark roasted aromatic hot brewed coffee",
        desc_fr: "Tasse de café noir fraîchement préparé aux grains torréfiés",
        price: "$3.99",
        image: "/menu/optimized/alacarte/coffee.webp"
      },
      {
        name_en: "Taro Milk Tea",
        name_fr: "Thé au Lait de Taro",
        desc_en: "Creamy sweet purple taro infused milk tea served cold",
        desc_fr: "Boisson douce et crémeuse au taro violet parfumée au thé",
        price: "$5.99",
        image: "/menu/optimized/alacarte/taro-milk-tea.webp"
      },
      {
        name_en: "Strawberry Matcha Latte",
        name_fr: "Latte Matcha à la Fraise",
        desc_en: "Layered beverage with real strawberry puree, whole milk, and stone-ground Japanese matcha",
        desc_fr: "Boisson étagée avec purée de fraises fraîches, lait frais et matcha pur",
        price: "$5.99",
        image: "/menu/optimized/alacarte/strawberry-matcha-latte.webp"
      },
      {
        name_en: "Mango Matcha Latte",
        name_fr: "Latte Matcha à la Mangue",
        desc_en: "Vibrant combination of sweet mango nectar, creamy milk, and premium matcha green tea",
        desc_fr: "Cocktail gourmand au nectar de mangue, lait onctueux et thé vert matcha",
        price: "$5.99",
        image: "/menu/optimized/alacarte/mango-matcha-latte.webp"
      },
      {
        name_en: "Mango Passion Slush",
        name_fr: "Slush Mangue & Passion",
        desc_en: "Icy blended tropical slush bursting with ripe mango and tart passion fruit flavors",
        desc_fr: "Boisson glacée frappée aux fruits tropicaux, mangue mûre et fruit de la passion",
        price: "$7.99",
        image: "/menu/optimized/alacarte/mango-passion-slush.webp"
      },
      {
        name_en: "Strawberry Slush",
        name_fr: "Slush Givré à la Fraise",
        desc_en: "Refreshing ice-blended smoothie prepared with sweet crushed strawberries",
        desc_fr: "Slush rafraîchissant préparé avec de vraies fraises sucrées finement broyées",
        price: "$7.99",
        image: "/menu/optimized/alacarte/strawberry-slush.webp"
      },
      {
        name_en: "Fresh Lemonade",
        name_fr: "Limonade Fraîche Maison",
        desc_en: "Hand-squeezed refreshing citrus lemonade served over ice",
        desc_fr: "Limonade rafraîchissante pressée à la main et servie bien glacée",
        price: "$4.99",
        image: "/menu/optimized/alacarte/limonade.webp"
      },
      {
        name_en: "Fresh Coconut Water",
        name_fr: "Eau de Coco Naturelle",
        desc_en: "Pure hydrating natural coconut water chilled to perfection",
        desc_fr: "Eau de coco naturelle 100% pure, désaltérante et bien fraîche",
        price: "$3.99",
        image: "/menu/optimized/lunch-express/coconut-water.webp"
      },
      {
        name_en: "Unsweetened Oolong Tea",
        name_fr: "Thé Oolong Sans Sucre",
        desc_en: "Crisp and roasted chilled premium whole-leaf oolong tea",
        desc_fr: "Infusion de thé oolong torréfié sans sucre ajouté, légère et désaltérante",
        price: "$4.99",
        image: "/menu/optimized/lunch-express/oolong-tea.webp"
      },
      {
        name_en: "Mexican Coca-Cola",
        name_fr: "Coca-Cola Mexicain (Bouteille en Verre)",
        desc_en: "Authentic imported Coca-Cola sweetened with 100% real cane sugar",
        desc_fr: "Authentique Coca-Cola importé pur sucre de canne en bouteille de verre",
        price: "$4.99",
        image: "/menu/optimized/lunch-express/coca-cola-mexican-bottled.webp"
      },
      {
        name_en: "Diet Coke",
        name_fr: "Coke Diète",
        desc_en: "Zero calorie refreshing crisp carbonated soft drink",
        desc_fr: "Boisson gazeuse rafraîchissante sans calories",
        price: "$3.00",
        image: "/menu/optimized/lunch-express/diet-coke.webp"
      },
      {
        name_en: "Milkis Korean Drink",
        name_fr: "Milkis Soda Coréen au Lait",
        desc_en: "Sparkling milk soda combining fizzy carbonation with smooth yogurt sweetness",
        desc_fr: "Célèbre soda coréen pétillant et doux au goût lacté et fruité",
        price: "$3.99",
        image: "/menu/optimized/lunch-express/milkis.webp"
      },
      {
        name_en: "Sparkling Mineral Water",
        name_fr: "Eau Minérale Pétillante",
        desc_en: "Chilled bottle of premium sparkling mineral water",
        desc_fr: "Bouteille en verre d'eau minérale pétillante d'Italie",
        price: "$6.99",
        image: "/menu/optimized/lunch-express/sparkling-water.webp"
      },
      {
        name_en: "Yuzu Cheesecake",
        name_fr: "Gâteau au Fromage Yuzu",
        desc_en: "Silky Japanese cheesecake infused with fragrant yuzu citrus zest",
        desc_fr: "Gâteau au fromage onctueux parfumé aux zestes raffinés de yuzu japonais",
        price: "$7.99",
        image: "/menu/optimized/lunch-express/cheese-cake-yuzu.webp"
      },
      {
        name_en: "Mango Mochi",
        name_fr: "Mochi à la Mangue",
        desc_en: "Soft glutinous rice cake filled with luscious sweet mango filling",
        desc_fr: "Mochi japonais moelleux garni d'une crème fondante à la mangue douce",
        price: "$4.99",
        image: "/menu/optimized/lunch-express/mango-mochi.webp"
      },
      {
        name_en: "Matcha Mochi",
        name_fr: "Mochi au Matcha",
        desc_en: "Chewy Japanese rice dessert infused with earthy stone-ground matcha green tea",
        desc_fr: "Mochi traditionnel parfumé à la poudre fine de thé vert matcha",
        price: "$4.99",
        image: "/menu/optimized/lunch-express/matcha-mochi.webp"
      },
      {
        name_en: "Ayran Turkish Yogurt Drink",
        name_fr: "Ayran Boisson Traditionnelle au Yaourt",
        desc_en: "Refreshing traditional chilled salted yogurt beverage",
        desc_fr: "Boisson rafraîchissante traditionnelle au yogourt velouté légèrement salé",
        price: "$3.50",
        image: "/menu/optimized/lunch-express/ayran.webp"
      },
      {
        name_en: "Strawberry Mochi",
        name_fr: "Mochi à la Fraise",
        desc_en: "Soft and chewy Japanese rice cake filled with sweet strawberry creme",
        desc_fr: "Gâteau de riz gluant moelleux et fondant farci à la crème de fraise",
        price: "$4.99",
        image: "/menu/optimized/lunch-express/strawberry-mochi.webp"
      }
    ]
  }
];

// Replace LUNCH_EXPRESS_MENU_CATEGORIES definition
const lunchStart = content.indexOf('export const LUNCH_EXPRESS_MENU_CATEGORIES');
if (lunchStart !== -1) {
  content = content.substring(0, lunchStart);
}

content = content.trimEnd() + '\n\nexport const LUNCH_EXPRESS_MENU_CATEGORIES: MenuCategory[] = ' + JSON.stringify(LUNCH_EXPRESS_MENU_CATEGORIES, null, 2) + ';\n';

fs.writeFileSync(menuDataPath, content, 'utf8');
console.log('Successfully updated src/data/menuData.ts with all Lunch Express images and items!');
