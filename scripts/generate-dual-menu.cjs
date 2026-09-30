const fs = require('fs');
const path = require('path');

const ayceOptDir = 'public/menu/optimized/ayce';
const alacarteOptDir = 'public/menu/optimized/alacarte';

function getAyceImg(slug) {
  const file = path.join(ayceOptDir, `${slug}.webp`);
  if (!fs.existsSync(file)) {
    console.error('AYCE missing:', file);
    process.exit(1);
  }
  return `/menu/optimized/ayce/${slug}.webp`;
}

function getAlacarteImg(slug) {
  const file = path.join(alacarteOptDir, `${slug}.webp`);
  if (!fs.existsSync(file)) {
    console.error('Alacarte missing:', file);
    process.exit(1);
  }
  return `/menu/optimized/alacarte/${slug}.webp`;
}

const ayceCategories = [
  {
    title_en: "APPETIZERS",
    title_fr: "ENTRÉES",
    items: [
      {
        name_en: "Miso Soup",
        name_fr: "Soupe Miso",
        desc_en: "Classic Japanese dashi broth with silken tofu, wakame seaweed, and scallions",
        desc_fr: "Bouillon dashi traditionnel au miso, tofu soyeux, algues wakamé et oignons verts",
        image: getAyceImg("miso-soup")
      },
      {
        name_en: "Hot and Sour Soup",
        name_fr: "Soupe Aigre-Piquante",
        desc_en: "Zesty peppered broth with bamboo shoots, wood-ear mushrooms, and tofu",
        desc_fr: "Bouillon relevé et vinaigré aux pousses de bambou et champignons noirs",
        image: getAyceImg("hot-and-sour-soup")
      },
      {
        name_en: "Special Soup of the Week",
        name_fr: "Soupe Spéciale du Chef",
        desc_en: "Slow-simmered weekly house soup prepared with seasonal fresh ingredients",
        desc_fr: "Soupe maison mijotée préparée selon l'inspiration du chef",
        image: getAyceImg("special-soup-of-the-week")
      },
      {
        name_en: "Salted Edamame",
        name_fr: "Edamame Salé",
        desc_en: "Warm steamed young soybeans sprinkled with coarse mineral sea salt",
        desc_fr: "Fèves de soya fraîches à la vapeur saupoudrées de gros sel marin",
        image: getAyceImg("salted-edamame")
      },
      {
        name_en: "Kimchi",
        name_fr: "Kimchi Épicé",
        desc_en: "Artisanal Korean fermented napa cabbage with chili peppers and garlic",
        desc_fr: "Chou napa fermenté traditionnel aux piments coréens",
        image: getAyceImg("kimchi")
      },
      {
        name_en: "Ginger & Wasabi",
        name_fr: "Gingembre & Wasabi",
        desc_en: "Sweet shaved pickled ginger root with Japanese wasabi horseradish",
        desc_fr: "Fines lamelles de gingembre mariné et raifort wasabi",
        image: getAyceImg("ginger-and-wasabi")
      }
    ]
  },
  {
    title_en: "HOT KITCHEN",
    title_fr: "PLATS CHAUDS",
    items: [
      {
        name_en: "General Tao Chicken",
        name_fr: "Poulet Général Tao",
        desc_en: "Crispy chicken tossed in signature sweet and savory General Tao sauce",
        desc_fr: "Morceaux de poulet croustillants enrobés de notre sauce Général Tao",
        image: getAyceImg("general-tao-chicken")
      },
      {
        name_en: "Beef with Broccoli",
        name_fr: "Bœuf au brocoli",
        desc_en: "Tender sliced beef wok-tossed with fresh crisp broccoli florets",
        desc_fr: "Émincé de bœuf tendre sauté au wok avec brocolis frais",
        image: getAyceImg("beef-with-broccoli")
      },
      {
        name_en: "Chicken Fried Rice",
        name_fr: "Riz frit au poulet",
        desc_en: "Wok-fried Jasmine rice with tender chicken, eggs, and fresh scallions",
        desc_fr: "Riz au jasmin sauté au wok avec poulet tendre, œuf et oignons verts",
        image: getAyceImg("chicken-fried-rice")
      },
      {
        name_en: "Chicken Pad Thai",
        name_fr: "Pad Thaï au poulet",
        desc_en: "Traditional stir-fried rice noodles with chicken, bean sprouts, and peanuts",
        desc_fr: "Nouilles de riz traditionnelles sautées avec poulet et fèves germées",
        image: getAyceImg("chicken-pad-thai")
      },
      {
        name_en: "Chicken Udon",
        name_fr: "Udon sauté au poulet",
        desc_en: "Thick Japanese udon noodles stir-fried with chicken and fresh vegetables",
        desc_fr: "Épaisses nouilles udon sautées au poulet et légumes frais",
        image: getAyceImg("chicken-udon")
      },
      {
        name_en: "Black Pepper Chicken Spaghetti",
        name_fr: "Spaghetti au poulet poivre noir",
        desc_en: "Hong Kong style spaghetti with tender chicken in aromatic black pepper sauce",
        desc_fr: "Spaghetti sauté à la hong-kongaise avec poulet et sauce au poivre noir",
        image: getAyceImg("black-pepper-chicken-spaghetti")
      },
      {
        name_en: "Singapore Noodles",
        name_fr: "Nouilles à la singapourienne",
        desc_en: "Curry vermicelli noodles stir-fried with chicken, bell peppers, and bean sprouts",
        desc_fr: "Vermicelles sautés au curry jaune avec poulet et poivrons",
        image: getAyceImg("singapore-noodles")
      },
      {
        name_en: "Curry Chicken Cutlet",
        name_fr: "Escalope de poulet au curry",
        desc_en: "Crispy panko chicken cutlet smothered in rich Hong Kong curry sauce",
        desc_fr: "Escalope de poulet croustillante panko nappée d'une riche sauce curry",
        image: getAyceImg("curry-chicken-cutlet")
      },
      {
        name_en: "Vegetable Fried Rice",
        name_fr: "Riz frit aux légumes",
        desc_en: "Fragrant fried rice packed with colorful fresh garden vegetables",
        desc_fr: "Riz sauté savoureux et parfumé aux petits légumes croquants",
        image: getAyceImg("vegetable-fried-rice")
      },
      {
        name_en: "Curry Fried Rice",
        name_fr: "Riz frit au curry",
        desc_en: "Golden aromatic curry fried rice infused with herbs and mild spices",
        desc_fr: "Riz doré sauté aux arômes de curry doux et fines herbes",
        image: getAyceImg("curry-fried-rice")
      },
      {
        name_en: "White Rice",
        name_fr: "Riz blanc à la vapeur",
        desc_en: "Steamed premium Jasmine fragrant rice",
        desc_fr: "Bol de riz blanc au jasmin cuit à la vapeur",
        image: getAyceImg("white-rice")
      }
    ]
  },
  {
    title_en: "FRIED FAVORITES",
    title_fr: "FRITURES & FAVORIS",
    items: [
      {
        name_en: "Fried Calamari",
        name_fr: "Calamar Frit Croustillant",
        desc_en: "Tender seasoned calamari rings flash-fried until golden (1 pc)",
        desc_fr: "Anneaux de calamar marinés dorés et frits à la perfection (1 mc)",
        image: getAyceImg("fried-calamari")
      },
      {
        name_en: "Fried Chicken Wings",
        name_fr: "Ailes de Poulet Croustillantes",
        desc_en: "Crispy golden chicken wings seasoned with house spices (1 pc)",
        desc_fr: "Ailes de poulet croustillantes et juteuses aux épices maison (1 mc)",
        image: getAyceImg("fried-chicken-wings")
      },
      {
        name_en: "Teriyaki Chicken",
        name_fr: "Poulet Teriyaki",
        desc_en: "Grilled chicken fillet glazed with sweet savory homemade teriyaki sauce",
        desc_fr: "Tendres filets de poulet laqués à notre sauce teriyaki artisanale",
        image: getAyceImg("teriyaki-chicken")
      },
      {
        name_en: "Teriyaki Salmon",
        name_fr: "Saumon Teriyaki",
        desc_en: "Pan-seared Atlantic salmon fillet coated in rich teriyaki glaze",
        desc_fr: "Pavé de saumon poêlé et nappé d'un savoureux glaçage teriyaki",
        image: getAyceImg("teriyaki-salmon")
      },
      {
        name_en: "Salt & Pepper Shrimp",
        name_fr: "Crevettes Sel & Poivre",
        desc_en: "Crispy battered shrimp tossed with sea salt and cracked pepper (2 pcs)",
        desc_fr: "Crevettes croustillantes sautées au sel de mer et poivre (2 mcx)",
        image: getAyceImg("salt-and-pepper-shrimp")
      },
      {
        name_en: "Creamy Mussels",
        name_fr: "Moules Sauce Crémeuse",
        desc_en: "Half-shell ocean mussels baked with rich savory garlic cream (1 pc)",
        desc_fr: "Moules gratinées nappées d'une onctueuse crème à l'ail (1 mc)",
        image: getAyceImg("creamy-mussels")
      },
      {
        name_en: "Wasabi Cream Mussels",
        name_fr: "Moules Crème de Wasabi",
        desc_en: "Baked mussels topped with velvety wasabi-infused cream sauce (1 pc)",
        desc_fr: "Moules au four relevées d'une crème douce au wasabi (1 mc)",
        image: getAyceImg("wasabi-cream-mussels")
      },
      {
        name_en: "Spring Rolls",
        name_fr: "Rouleaux de Printemps",
        desc_en: "Crispy golden spring roll stuffed with shredded vegetables (1 pc)",
        desc_fr: "Rouleau croustillant farci de légumes finement émincés (1 mc)",
        image: getAyceImg("spring-rolls")
      },
      {
        name_en: "Fried Crab Stick",
        name_fr: "Bâtonnets de Crabe Frits",
        desc_en: "Golden panko-crusted crab sticks served hot and crispy (1 pc)",
        desc_fr: "Bâtonnets de crabe panés au panko et dorés à point (1 mc)",
        image: getAyceImg("fried-crab-stick")
      },
      {
        name_en: "Fried Scallops",
        name_fr: "Pétoncles Frits",
        desc_en: "Plump tender scallops breaded in Japanese breadcrumbs (1 pc)",
        desc_fr: "Pétoncles tendres enrobés d'une chapelure japonaise légère (1 mc)",
        image: getAyceImg("fried-scallops")
      },
      {
        name_en: "Fried Vegetable Dumplings",
        name_fr: "Raviolis aux Légumes Frits",
        desc_en: "Pan-fried crispy dumplings filled with minced fresh vegetables (1 pc)",
        desc_fr: "Raviolis croustillants farcis de légumes du marché (1 mc)",
        image: getAyceImg("fried-vegetable-dumplings")
      },
      {
        name_en: "Takoyaki",
        name_fr: "Takoyaki Japonais",
        desc_en: "Japanese octopus pancake balls with bonito flakes and sweet glaze (1 pc)",
        desc_fr: "Boulettes japonaises chaudes au poulpe avec flocons de bonite (1 mc)",
        image: getAyceImg("takoyaki")
      },
      {
        name_en: "French Fries",
        name_fr: "Frites Dorées",
        desc_en: "Crispy golden french fries sprinkled with sea salt",
        desc_fr: "Frites dorées et croustillantes saupoudrées de sel fin",
        image: getAyceImg("french-fries")
      }
    ]
  },
  {
    title_en: "TEMPURA SELECTION",
    title_fr: "SÉLECTION TEMPURA",
    items: [
      {
        name_en: "Tempura Shrimp",
        name_fr: "Tempura de Crevette",
        desc_en: "Succulent shrimp fried in airy Japanese tempura batter (1 pc)",
        desc_fr: "Crevette enrobée d'une pâte tempura légère et croustillante (1 mc)",
        image: getAyceImg("tempura-shrimp")
      },
      {
        name_en: "Tempura Sweet Potato",
        name_fr: "Tempura de Patate Douce",
        desc_en: "Sweet and tender golden sweet potato slice in light batter (1 pc)",
        desc_fr: "Tranche fondante de patate douce sous panure japonaise (1 mc)",
        image: getAyceImg("tempura-sweet-potato")
      },
      {
        name_en: "Tempura Broccoli",
        name_fr: "Tempura de Brocoli",
        desc_en: "Fresh broccoli florets flash-fried in delicate tempura batter (1 pc)",
        desc_fr: "Fleurons de brocoli frais frits dans une pâte tempura fine (1 mc)",
        image: getAyceImg("tempura-broccoli")
      },
      {
        name_en: "Tempura Mushroom",
        name_fr: "Tempura de Champignons",
        desc_en: "Whole fresh mushroom coated in crispy tempura coat (1 pc)",
        desc_fr: "Champignon croustillant et fondant à cœur (1 mc)",
        image: getAyceImg("tempura-mushroom")
      },
      {
        name_en: "Tempura Eggplant",
        name_fr: "Tempura d'Aubergine",
        desc_en: "Silky tender eggplant encased in crisp Japanese batter (1 pc)",
        desc_fr: "Aubergine fondante enveloppée d'une fine tempura (1 mc)",
        image: getAyceImg("tempura-eggplant")
      },
      {
        name_en: "Tempura Zucchini",
        name_fr: "Tempura de Courgette",
        desc_en: "Juicy garden zucchini medallions fried to golden perfection (1 pc)",
        desc_fr: "Rondelles de courgette fraîches dorées et croustillantes (1 mc)",
        image: getAyceImg("tempura-zucchini")
      }
    ]
  },
  {
    title_en: "MAKI ROLLS",
    title_fr: "ROULEAUX MAKI",
    items: [
      {
        name_en: "1001 Nuit Signature Roll",
        name_fr: "Rouleau Signature 1001 Nuit",
        desc_en: "House signature specialty roll crafted with chef's premium selection (4 pcs)",
        desc_fr: "Création signature du chef aux saveurs fusion raffinées (4 mcx)",
        image: getAyceImg("1001-nuit")
      },
      {
        name_en: "Philadelphia Roll",
        name_fr: "Rouleau Philadelphia",
        desc_en: "Smoked salmon, silky cream cheese, and avocado (4 pcs)",
        desc_fr: "Saumon fumé, fromage à la crème onctueux et avocat (4 mcx)",
        image: getAyceImg("philadelphia-roll")
      },
      {
        name_en: "Dynamite Roll",
        name_fr: "Rouleau Dynamite",
        desc_en: "Crispy shrimp tempura, avocado, cucumber, and spicy sauce (4 pcs)",
        desc_fr: "Crevette tempura croustillante, avocat et sauce épicée (4 mcx)",
        image: getAyceImg("dynamite")
      },
      {
        name_en: "Dragon Eye Roll",
        name_fr: "Rouleau Œil de Dragon",
        desc_en: "Deep-fried specialty maki with fresh salmon, whitefish, and scallions (4 pcs)",
        desc_fr: "Maki doré et croustillant au saumon, poisson blanc et oignons verts (4 mcx)",
        image: getAyceImg("dragon-eye")
      },
      {
        name_en: "Volcano Roll",
        name_fr: "Rouleau Volcano",
        desc_en: "Spicy roll topped with toasted tempura crunch and spicy mayo drizzle (4 pcs)",
        desc_fr: "Rouleau relevé avec flocons de tempura croustillants et mayo épicée (4 mcx)",
        image: getAyceImg("volcano")
      },
      {
        name_en: "Kamikaze Roll",
        name_fr: "Rouleau Kamikaze",
        desc_en: "Tuna, spicy sauce, tempura flakes, and avocado (4 pcs)",
        desc_fr: "Thon frais, sauce relevée, flocons de tempura et avocat (4 mcx)",
        image: getAyceImg("kamikaze")
      },
      {
        name_en: "California Roll",
        name_fr: "Rouleau Californie",
        desc_en: "Crab stick, creamy avocado, crisp cucumber, and masago (4 pcs)",
        desc_fr: "Goberge de crabe, avocat crémeux, concombre croquant et masago (4 mcx)",
        image: getAyceImg("california-roll")
      },
      {
        name_en: "Salmon Avocado Roll",
        name_fr: "Rouleau Saumon & Avocat",
        desc_en: "Fresh Atlantic salmon paired with ripe Haas avocado (3 pcs)",
        desc_fr: "Saumon frais de l'Atlantique et avocat mûr (3 mcx)",
        image: getAyceImg("salmon-avocado-roll")
      },
      {
        name_en: "Spicy Salmon Roll",
        name_fr: "Rouleau Saumon Épicé",
        desc_en: "Diced fresh salmon tossed with spicy mayo and crunchy tempura (4 pcs)",
        desc_fr: "Tartare de saumon assaisonné à la mayo épicée et tempura (4 mcx)",
        image: getAyceImg("spicy-salmon-roll")
      },
      {
        name_en: "Rainbow Roll",
        name_fr: "Rouleau Arc-en-ciel",
        desc_en: "California roll draped with assortment of fresh sashimi cuts (4 pcs)",
        desc_fr: "Rouleau Californie garni d'un éventail de sashimis frais (4 mcx)",
        image: getAyceImg("rain-bow-roll")
      },
      {
        name_en: "Crispy Chicken Roll",
        name_fr: "Rouleau Poulet Croustillant",
        desc_en: "Tender fried chicken breast with crisp lettuce and teriyaki glaze (4 pcs)",
        desc_fr: "Poulet croustillant, salade fraîche et glaçage teriyaki (4 mcx)",
        image: getAyceImg("crispy-chicken-roll")
      },
      {
        name_en: "Mango Roll",
        name_fr: "Rouleau Mangue",
        desc_en: "Sweet tropical mango, avocado, and crisp cucumber (3 pcs)",
        desc_fr: "Mangue tropicale sucrée, avocat et concombre frais (3 mcx)",
        image: getAyceImg("mango-roll")
      },
      {
        name_en: "Vegetable Roll",
        name_fr: "Rouleau Végétarien",
        desc_en: "Avocado, cucumber, pickled radish, and crisp asparagus (4 pcs)",
        desc_fr: "Avocat, concombre, radis mariné et asperges croquantes (4 mcx)",
        image: getAyceImg("vegetable-roll")
      },
      {
        name_en: "Mango Rice Paper Roll",
        name_fr: "Rouleau de Riz à la Mangue",
        desc_en: "Fresh mango and garden vegetables wrapped in delicate rice paper (4 pcs)",
        desc_fr: "Mangue fraîche et légumes croquants dans une feuille de riz (4 mcx)",
        image: getAyceImg("mango-rice-paper-roll")
      },
      {
        name_en: "Chicken Rice Paper Roll",
        name_fr: "Rouleau de Riz au Poulet",
        desc_en: "Tender seasoned chicken and herbs rolled in light rice paper (4 pcs)",
        desc_fr: "Poulet émincé et fines herbes dans une feuille de riz légère (4 mcx)",
        image: getAyceImg("chicken-rice-paper-roll")
      },
      {
        name_en: "Spicy Salmon Gunkan",
        name_fr: "Gunkan Saumon Épicé",
        desc_en: "Battleship sushi topped with spicy salmon tartare (1 pc)",
        desc_fr: "Bouchée d'algue garnie de tartare de saumon relevé (1 mc)",
        image: getAyceImg("spicy-salmon-gunka")
      },
      {
        name_en: "Crab Stick Gunkan",
        name_fr: "Gunkan Goberge de Crabe",
        desc_en: "Nori cup filled with creamy crab stick salad (1 pc)",
        desc_fr: "Algue nori garnie d'effiloché de crabe assaisonné (1 mc)",
        image: getAyceImg("crab-stick-gunkan")
      }
    ]
  },
  {
    title_en: "NIGIRI",
    title_fr: "NIGIRI",
    items: [
      {
        name_en: "Seared Salmon Nigiri",
        name_fr: "Nigiri Saumon Flambé",
        desc_en: "Flame-torched Atlantic salmon over pressed sushi rice (1 pc)",
        desc_fr: "Tranche de saumon saisie à la flamme sur riz vinaigré (1 mc)",
        image: getAyceImg("seared-salmon-nigiri")
      },
      {
        name_en: "Sweet Shrimp Nigiri",
        name_fr: "Nigiri Crevette Douce (Amaebi)",
        desc_en: "Delicate sweet spot prawn gently layered on sushi rice (1 pc)",
        desc_fr: "Crevette douce délicate posée sur lit de riz à sushi (1 mc)",
        image: getAyceImg("sweet-shrimp-nigiri")
      },
      {
        name_en: "Salmon Rose",
        name_fr: "Rose de Saumon",
        desc_en: "Delicate salmon sashimi petals formed into an edible rose bloom (1 pc)",
        desc_fr: "Pétales de saumon frais sculptés en une élégante rose (1 mc)",
        image: getAyceImg("salmon-rose")
      },
      {
        name_en: "Salmon Nigiri",
        name_fr: "Nigiri Saumon",
        desc_en: "Premium fresh raw Atlantic salmon over seasoned sushi rice (1 pc)",
        desc_fr: "Tranche de saumon frais de première qualité sur riz vinaigré (1 mc)",
        image: getAyceImg("salmon-nigiri")
      },
      {
        name_en: "Tuna Nigiri",
        name_fr: "Nigiri Thon Rouge",
        desc_en: "Ruby red tuna loin cut served over seasoned sushi rice (1 pc)",
        desc_fr: "Thon rouge fondant sur riz vinaigré traditionnel (1 mc)",
        image: getAyceImg("tuna-nigiri")
      },
      {
        name_en: "Shrimp Nigiri",
        name_fr: "Nigiri Crevette (Ebi)",
        desc_en: "Cooked butterfly black tiger shrimp over sushi rice (1 pc)",
        desc_fr: "Crevette cuite ouverte en papillon sur riz pressé (1 mc)",
        image: getAyceImg("shrimp-nigiri")
      },
      {
        name_en: "Unagi Nigiri",
        name_fr: "Nigiri Anguille Grillée (Unagi)",
        desc_en: "Caramelized freshwater eel brushed with sweet kabayaki tare (1 pc)",
        desc_fr: "Anguille grillée laquée à la sauce tare sucrée (1 mc)",
        image: getAyceImg("unagi-nigiri")
      },
      {
        name_en: "Crab Stick Nigiri",
        name_fr: "Nigiri Goberge de Crabe",
        desc_en: "Tender crab stick bound with a thin ribbon of nori seaweed (1 pc)",
        desc_fr: "Bâtonnet de goberge ceinturé d'une fine lanière de nori (1 mc)",
        image: getAyceImg("crab-stick-nigiri")
      },
      {
        name_en: "Egg (Tamago) Nigiri",
        name_fr: "Nigiri Omelette Japonaise (Tamago)",
        desc_en: "Sweet layered Japanese rolled omelette tied with nori (1 pc)",
        desc_fr: "Omelette japonaise douce et dorée liée au nori (1 mc)",
        image: getAyceImg("egg-tamago-nigiri")
      },
      {
        name_en: "Escolar Nigiri",
        name_fr: "Nigiri Escolar (Thon Blanc)",
        desc_en: "Silky, buttery white tuna cut over seasoned sushi rice (1 pc)",
        desc_fr: "Thon blanc à la chair tendre et beurrée sur riz vinaigré (1 mc)",
        image: getAyceImg("escolar-nigiri")
      },
      {
        name_en: "Surf Clam Nigiri",
        name_fr: "Nigiri Mactre de l'Atlantique (Hokkigai)",
        desc_en: "Sweet crimson Arctic surf clam served over sushi rice (1 pc)",
        desc_fr: "Mactre rouge de l'Atlantique à la texture croquante (1 mc)",
        image: getAyceImg("surf-clam-nigiri")
      }
    ]
  },
  {
    title_en: "SASHIMI",
    title_fr: "SASHIMI",
    items: [
      {
        name_en: "Salmon Sashimi",
        name_fr: "Sashimi Saumon",
        desc_en: "Hand-carved thick slice of pristine Atlantic salmon (1 pc)",
        desc_fr: "Épaisse tranche fondante de saumon frais de l'Atlantique (1 mc)",
        image: getAyceImg("salmon-sashimi")
      },
      {
        name_en: "Tuna Sashimi",
        name_fr: "Sashimi Thon Rouge",
        desc_en: "Selected cuts of ruby red sashimi-grade tuna (1 pc)",
        desc_fr: "Tranche sélectionnée de thon rouge de première fraîcheur (1 mc)",
        image: getAyceImg("tuna-sashimi")
      },
      {
        name_en: "Escolar Sashimi",
        name_fr: "Sashimi Escolar",
        desc_en: "Melt-in-your-mouth white tuna sashimi (1 pc)",
        desc_fr: "Délicieuse tranche de thon blanc escolar très fondant (1 mc)",
        image: getAyceImg("escolar-sashimi")
      },
      {
        name_en: "Surf Clam Sashimi",
        name_fr: "Sashimi Mactre (Hokkigai)",
        desc_en: "Tender arctic surf clam slice with marine sweetness (1 pc)",
        desc_fr: "Mactre arctique délicatement parfumée aux notes iodées (1 mc)",
        image: getAyceImg("surf-clam-sashimi")
      },
      {
        name_en: "Inari",
        name_fr: "Sashimi Inari Tofu",
        desc_en: "Seasoned sweet fried bean curd pouch (1 pc)",
        desc_fr: "Poche de tofu frite et marinée aux notes douces (1 mc)",
        image: getAyceImg("inari")
      },
      {
        name_en: "Tamago Sashimi",
        name_fr: "Sashimi Tamago",
        desc_en: "Sweet and fluffy Japanese layered rolled omelette (1 pc)",
        desc_fr: "Tranche d'omelette japonaise moelleuse et sucrée (1 mc)",
        image: getAyceImg("tamago")
      },
      {
        name_en: "Tobiko Cucumber",
        name_fr: "Tobiko & Concombre",
        desc_en: "Flying fish roe nestled in crisp refreshing cucumber cups (1 pc)",
        desc_fr: "Œufs de poisson volant croquants dans un concombre frais (1 mc)",
        image: getAyceImg("tobiko-cucumber")
      },
      {
        name_en: "Crab Stick Sashimi",
        name_fr: "Sashimi Goberge de Crabe",
        desc_en: "Lightly seasoned crab stick served sashimi style (1 pc)",
        desc_fr: "Bâtonnet de goberge servi en sashimi léger (1 mc)",
        image: getAyceImg("crab-stick-sashimi")
      }
    ]
  },
  {
    title_en: "SMALL & HAND ROLLS",
    title_fr: "PETITS ROULEAUX & CORNETS",
    items: [
      {
        name_en: "Avocado Roll",
        name_fr: "Rouleau Avocat",
        desc_en: "Classic creamy avocado rolled with seasoned sushi rice (3 pcs)",
        desc_fr: "Rouleau classique à l'avocat crémeux et riz vinaigré (3 mcx)",
        image: getAyceImg("avocado-roll")
      },
      {
        name_en: "Cucumber Roll",
        name_fr: "Rouleau Concombre",
        desc_en: "Crisp julienned cucumber rolled in nori seaweed (3 pcs)",
        desc_fr: "Concombre frais et croquant roulé dans une feuille de nori (3 mcx)",
        image: getAyceImg("cucumber-roll")
      },
      {
        name_en: "Salmon Roll",
        name_fr: "Rouleau Saumon",
        desc_en: "Fresh Atlantic salmon rolled in nori and sushi rice (3 pcs)",
        desc_fr: "Saumon frais enveloppé de riz et d'algue nori (3 mcx)",
        image: getAyceImg("salmon-roll")
      },
      {
        name_en: "Tuna Roll",
        name_fr: "Rouleau Thon",
        desc_en: "Pure ruby red tuna center rolled in traditional nori wrapper (3 pcs)",
        desc_fr: "Thon rouge pur enveloppé dans la tradition japonaise (3 mcx)",
        image: getAyceImg("tuna-roll")
      },
      {
        name_en: "Crab Roll",
        name_fr: "Rouleau Goberge de Crabe",
        desc_en: "Sweet tender crab meat rolled in nori (3 pcs)",
        desc_fr: "Bâtonnet de crabe tendre roulé dans le nori (3 mcx)",
        image: getAyceImg("crab-roll")
      },
      {
        name_en: "Salmon Hand Roll",
        name_fr: "Cornet au Saumon (Temaki)",
        desc_en: "Hand-rolled crispy seaweed cone packed with sushi rice and salmon",
        desc_fr: "Cône croustillant d'algue nori farci de saumon frais et riz vinaigré",
        image: getAyceImg("salmon-hand-roll")
      },
      {
        name_en: "Spicy Salmon Hand Roll",
        name_fr: "Cornet au Saumon Épicé",
        desc_en: "Temaki cone filled with zesty spicy salmon tartare and tempura crunch",
        desc_fr: "Cornet garni de tartare de saumon épicé et flocons de tempura",
        image: getAyceImg("spicy-salmon-hand-roll")
      },
      {
        name_en: "Avocado Hand Roll",
        name_fr: "Cornet à l'Avocat",
        desc_en: "Temaki seaweed cone layered with luscious avocado and toasted sesame",
        desc_fr: "Cornet temaki garni d'avocat et graines de sésame grillées",
        image: getAyceImg("avocado-hand-roll")
      },
      {
        name_en: "Cucumber Hand Roll",
        name_fr: "Cornet au Concombre",
        desc_en: "Crisp cucumber spears wrapped in fresh nori seaweed cone",
        desc_fr: "Bâtonnets de concombre croquants dans un cornet croustillant",
        image: getAyceImg("cucumber-hand-roll")
      },
      {
        name_en: "Crab Stick Hand Roll",
        name_fr: "Cornet Goberge de Crabe",
        desc_en: "Crab stick, avocado, and Japanese mayo wrapped in a crisp nori cone",
        desc_fr: "Goberge de crabe, avocat et mayonnaise japonaise en cornet",
        image: getAyceImg("crab-stick-hand-roll")
      }
    ]
  },
  {
    title_en: "SUSHI PIZZA",
    title_fr: "PIZZA SUSHI",
    items: [
      {
        name_en: "Crispy Sushi Pizza",
        name_fr: "Pizza Sushi Croustillante",
        desc_en: "Golden crispy fried rice patty base crowned with fish tartare, tobiko, and sauce",
        desc_fr: "Galette de riz dorée garnie de tartare de poisson, tobiko et sauces",
        image: getAyceImg("pizza-sushi-croustillante")
      },
      {
        name_en: "Crab Stick Sushi Pizza",
        name_fr: "Pizza Sushi au Crabe",
        desc_en: "Crunchy rice crust layered with seasoned crab stick, avocado, and spicy mayo",
        desc_fr: "Croûte de riz panée et frite surmontée de crabe assaisonné et avocat",
        image: getAyceImg("crab-stick-sushi-pizza")
      }
    ]
  },
  {
    title_en: "DESSERTS",
    title_fr: "DESSERTS",
    items: [
      {
        name_en: "Yuzu Cheesecake",
        name_fr: "Cheesecake au Yuzu",
        desc_en: "Velvety smooth cheesecake infused with tart Japanese yuzu citrus",
        desc_fr: "Gâteau au fromage crémeux parfumé au yuzu acidulé japonais",
        image: getAyceImg("cheese-cake-yuzu")
      },
      {
        name_en: "Strawberry Mochi",
        name_fr: "Mochi à la Fraise",
        desc_en: "Soft and chewy Japanese rice cake filled with sweet strawberry creme",
        desc_fr: "Gâteau de riz gluant moelleux farci à la crème de fraise",
        image: getAyceImg("strawberry-mochi")
      },
      {
        name_en: "Golden Fried Buns",
        name_fr: "Petits Pains Dorés",
        desc_en: "Deep-fried sweet Chinese mantou buns served with condensed milk dip (1 pc)",
        desc_fr: "Pain brioché chinois doré servi avec lait concentré sucré (1 mc)",
        image: getAyceImg("golden-buns")
      },
      {
        name_en: "Steamed Mini Buns",
        name_fr: "Petits Pains à la Vapeur",
        desc_en: "Fluffy pillowy sweet steamed milk buns (1 pc)",
        desc_fr: "Petits pains briochés cuits à la vapeur douce et moelleux (1 mc)",
        image: getAyceImg("steamed-mini-buns")
      },
      {
        name_en: "Sesame Balls",
        name_fr: "Boules de Sésame Croustillantes",
        desc_en: "Chewy glutinous rice balls coated in fragrant sesame seeds (1 pc)",
        desc_fr: "Boules de riz gluant croustillantes au sésame doré (1 mc)",
        image: getAyceImg("sesame-balls")
      },
      {
        name_en: "Artisanal Ice Cream",
        name_fr: "Crème Glacée Artisanale",
        desc_en: "Refreshing premium ice cream scoop in choice of classic and Asian flavors",
        desc_fr: "Boule de crème glacée onctueuse aux saveurs traditionnelles et asiatiques",
        image: getAlacarteImg("ice-cream")
      }
    ]
  },
  {
    title_en: "DRINKS",
    title_fr: "BOISSONS",
    items: [
      {
        name_en: "Hong Kong Style Milk Tea",
        name_fr: "Thé au Lait Style Hong Kong",
        desc_en: "Rich and silky brewed Ceylon black tea blended with evaporated milk",
        desc_fr: "Thé noir de Ceylan infusé à point et velouté au lait concentré",
        image: getAyceImg("hong-kong-style-milk-tea")
      },
      {
        name_en: "Taro Milk Tea",
        name_fr: "Thé au Lait de Taro",
        desc_en: "Creamy sweet purple taro infused milk tea served cold",
        desc_fr: "Boisson douce et crémeuse au taro violet parfumée au thé",
        image: getAyceImg("taro-milk-tea")
      },
      {
        name_en: "Strawberry Matcha Latte",
        name_fr: "Latte Matcha à la Fraise",
        desc_en: "Layered beverage with real strawberry puree, whole milk, and stone-ground Japanese matcha",
        desc_fr: "Boisson étagée avec purée de fraises fraîches, lait frais et matcha pur",
        image: getAyceImg("strawberry-matcha-latte")
      },
      {
        name_en: "Mango Matcha Latte",
        name_fr: "Latte Matcha à la Mangue",
        desc_en: "Vibrant combination of sweet mango nectar, creamy milk, and premium matcha green tea",
        desc_fr: "Cocktail gourmand au nectar de mangue, lait onctueux et thé vert matcha",
        image: getAyceImg("mango-matcha-latte")
      },
      {
        name_en: "Fresh Lemonade",
        name_fr: "Limonade Fraîche Maison",
        desc_en: "Hand-squeezed refreshing citrus lemonade served over ice",
        desc_fr: "Limonade rafraîchissante pressée à la main et servie bien glacée",
        image: getAyceImg("limonade")
      },
      {
        name_en: "Fresh Coconut Water",
        name_fr: "Eau de Coco Naturelle",
        desc_en: "Pure hydrating natural coconut water chilled to perfection",
        desc_fr: "Eau de coco naturelle 100% pure, désaltérante et bien fraîche",
        image: getAyceImg("coconut-water")
      },
      {
        name_en: "Unsweetened Oolong Tea",
        name_fr: "Thé Oolong Sans Sucre",
        desc_en: "Crisp and roasted chilled premium whole-leaf oolong tea",
        desc_fr: "Infusion de thé oolong torréfié sans sucre ajouté",
        image: getAyceImg("oolong-teano-sugar")
      },
      {
        name_en: "Sparkling Mineral Water",
        name_fr: "Eau Minérale Pétillante",
        desc_en: "Chilled bottle of premium sparkling mineral water",
        desc_fr: "Bouteille en verre d'eau minérale pétillante d'Italie",
        image: getAyceImg("sparkling-water")
      },
      {
        name_en: "Milkis Korean Drink",
        name_fr: "Milkis Soda Coréen au Lait",
        desc_en: "Sparkling milk soda combining fizzy carbonation with smooth yogurt sweetness",
        desc_fr: "Célèbre soda coréen pétillant et doux au goût lacté",
        image: getAyceImg("milkis")
      },
      {
        name_en: "Mexican Coca-Cola",
        name_fr: "Coca-Cola Mexicain (Bouteille en Verre)",
        desc_en: "Authentic imported Coca-Cola sweetened with 100% real cane sugar",
        desc_fr: "Authentique Coca-Cola importé pur sucre de canne en bouteille de verre",
        image: getAyceImg("coca-cola-mexican-bottled")
      },
      {
        name_en: "Diet Coke",
        name_fr: "Coke Diète",
        desc_en: "Zero calorie refreshing crisp carbonated soft drink",
        desc_fr: "Boisson gazeuse rafraîchissante sans calories",
        image: getAyceImg("diet-coke")
      },
      {
        name_en: "Fresh Brewed Coffee",
        name_fr: "Café Fraîchement Infusé",
        desc_en: "Rich and dark roasted aromatic hot brewed coffee",
        desc_fr: "Tasse de café noir fraîchement préparé aux grains torréfiés",
        image: getAyceImg("coffee")
      }
    ]
  }
];

const alacarteCategories = [
  {
    title_en: "MAIN DISH",
    title_fr: "PLATS PRINCIPAUX",
    items: [
      {
        name_en: "Broccoli Beef",
        name_fr: "Bœuf au brocoli",
        desc_en: "Tender sliced beef wok-tossed with fresh crisp broccoli florets",
        desc_fr: "Émincé de bœuf tendre sauté au wok avec brocolis frais",
        image: getAlacarteImg("broccoli-beef")
      },
      {
        name_en: "Sakura Shrimp & Chicken Fried Rice",
        name_fr: "Riz frit aux crevettes sakura et poulet",
        desc_en: "Fragrant wok-fried Jasmine rice with savory sakura shrimp, chicken, and egg",
        desc_fr: "Riz au jasmin sauté au wok avec crevettes sakura savoureuses, poulet et œuf",
        image: getAlacarteImg("sakura-shrimpandchicken-fr")
      },
      {
        name_en: "General Tao's Chicken",
        name_fr: "Poulet Général Tao",
        desc_en: "Crispy chicken tossed in signature sweet and savory General Tao sauce",
        desc_fr: "Morceaux de poulet croustillants enrobés de notre sauce Général Tao",
        image: getAlacarteImg("general-taos-chicken")
      },
      {
        name_en: "Takoyaki Chicken on Rice",
        name_fr: "Poulet takoyaki sur riz",
        desc_en: "Tender chicken cutlets glazed with Japanese takoyaki sauce over steamed rice",
        desc_fr: "Morceaux de poulet tendres nappés de sauce takoyaki sur lit de riz",
        image: getAlacarteImg("takoyakichicken-on-rice")
      },
      {
        name_en: "Spaghetti w/ Beef Black Pepper Sauce",
        name_fr: "Spaghetti sauté au bœuf sauce poivre noir",
        desc_en: "Hong Kong cafe style stir-fried spaghetti with beef in aromatic black pepper sauce",
        desc_fr: "Spaghetti sauté à la hong-kongaise avec bœuf tendre et sauce poivre noir",
        image: getAlacarteImg("spaghetti-w-beef-bpsauce")
      },
      {
        name_en: "AAA Beef Ribs Sunny Egg Rice",
        name_fr: "Côtes de bœuf AAA et œuf miroir sur riz",
        desc_en: "Tender AAA beef ribs glazed in savory sauce served over steamed rice with a sunny egg",
        desc_fr: "Tendres côtes de bœuf AAA laquées servies sur lit de riz chaud avec œuf miroir",
        image: getAlacarteImg("aaa-beef-ribs-sunnyeggrice")
      },
      {
        name_en: "HK Style Beef Noodles",
        name_fr: "Nouilles au bœuf style Hong Kong",
        desc_en: "Wok-charred wide rice noodles with sliced flank steak and bean sprouts",
        desc_fr: "Larges nouilles de riz sautées au wok au bœuf émincé et pousses de soja",
        image: getAlacarteImg("hk-style-beef-noodles")
      },
      {
        name_en: "Pad Thai",
        name_fr: "Pad Thaï traditionnel",
        desc_en: "Traditional stir-fried rice noodles with bean sprouts, egg, and crushed peanuts",
        desc_fr: "Nouilles de riz traditionnelles sautées avec fèves germées et arachides",
        image: getAlacarteImg("pad-thai")
      },
      {
        name_en: "Pineapple Fried Rice",
        name_fr: "Riz frit à l'ananas",
        desc_en: "Fragrant golden fried rice with sweet pineapple chunks, egg, and vegetables",
        desc_fr: "Riz sauté parfumé aux morceaux d'ananas sucrés, œuf et petits légumes",
        image: getAlacarteImg("pineapple-fried-rice")
      },
      {
        name_en: "Stir-Fried Beef Udon",
        name_fr: "Udon sauté au bœuf",
        desc_en: "Thick Japanese udon noodles wok-tossed with tender beef slices and vegetables",
        desc_fr: "Épaisses nouilles udon japonaises sautées avec émincé de bœuf et légumes",
        image: getAlacarteImg("fried-beef-udon")
      }
    ]
  },
  {
    title_en: "SUSHI COMBO",
    title_fr: "COMBOS SUSHI",
    items: [
      {
        name_en: "Sushi Boat Imperial (Boat 1)",
        name_fr: "Grand Bateau Impérial (Boat 1)",
        desc_en: "Spectacular wooden sushi boat laden with assorted premium nigiri, sashimi, and specialty rolls",
        desc_fr: "Magnifique bateau de fête garni de nigiris fins, sashimis et rouleaux de prestige",
        image: getAlacarteImg("boat-1")
      },
      {
        name_en: "Sushi Boat Royal (Boat 2)",
        name_fr: "Grand Bateau Royal (Boat 2)",
        desc_en: "Elaborate multi-level wooden boat loaded with supreme maki collection and chef's cut sashimi",
        desc_fr: "Somptueux bateau garni d'une abondance de makis raffinés et sashimis du chef",
        image: getAlacarteImg("boat2")
      },
      {
        name_en: "Signature Combo SS1",
        name_fr: "Plateau Signature SS1",
        desc_en: "Chef curated assortment of chef's favorite nigiri and crispy tempura rolls",
        desc_fr: "Assortiment harmonieux de nigiris délicats et rouleaux tempura croustillants",
        image: getAlacarteImg("ss1")
      },
      {
        name_en: "Signature Combo SS2",
        name_fr: "Plateau Signature SS2",
        desc_en: "Rich combination of fresh salmon lovers rolls, avocado maki, and torched nigiri",
        desc_fr: "Plateau généreux pour les amateurs de saumon frais, avocat et nigiris",
        image: getAlacarteImg("ss2")
      },
      {
        name_en: "Signature Combo SS3",
        name_fr: "Plateau Signature SS3",
        desc_en: "Colorful party platter featuring California rolls, spicy salmon, and mixed nigiri",
        desc_fr: "Plateau festif haut en couleur composé de rouleaux californiens et saumon épicé",
        image: getAlacarteImg("ss3")
      },
      {
        name_en: "Signature Combo SS4",
        name_fr: "Plateau Signature SS4",
        desc_en: "Deluxe grand combo featuring dragon eye, dynamite, and fresh fish selections",
        desc_fr: "Combo grandiose haut de gamme réunissant œil de dragon et créations fraîches",
        image: getAlacarteImg("ss4")
      },
      {
        name_en: "California Roll Combo",
        name_fr: "Combo Rouleau Californie",
        desc_en: "Crab stick, creamy avocado, crisp cucumber, and masago (10 pcs)",
        desc_fr: "Goberge de crabe, avocat crémeux, concombre croquant et masago (10 mcx)",
        image: getAlacarteImg("california-roll-10-pcs")
      },
      {
        name_en: "Dragon Eye Roll Combo",
        name_fr: "Combo Rouleau Œil de Dragon",
        desc_en: "Deep-fried specialty maki with fresh salmon, whitefish, and scallions (10 pcs)",
        desc_fr: "Maki doré et croustillant au saumon, poisson blanc et oignons verts (10 mcx)",
        image: getAlacarteImg("dragon-eye-roll-10-pcs")
      },
      {
        name_en: "Fried Chicken Roll Combo",
        name_fr: "Combo Rouleau Poulet Frit",
        desc_en: "Tender fried chicken breast with crisp lettuce and teriyaki glaze (10 pcs)",
        desc_fr: "Poulet croustillant, salade fraîche et glaçage teriyaki (10 mcx)",
        image: getAlacarteImg("fried-chicken-roll-10-pcs")
      },
      {
        name_en: "Mango Roll Combo",
        name_fr: "Combo Rouleau Mangue",
        desc_en: "Sweet tropical mango, avocado, and crisp cucumber (6 pcs)",
        desc_fr: "Mangue tropicale sucrée, avocat et concombre frais (6 mcx)",
        image: getAlacarteImg("mango-roll-6pcs")
      },
      {
        name_en: "Salmon & Avocado Combo",
        name_fr: "Combo Saumon & Avocat",
        desc_en: "Fresh Atlantic salmon paired with ripe Haas avocado (6 pcs)",
        desc_fr: "Saumon frais de l'Atlantique et avocat mûr (6 mcx)",
        image: getAlacarteImg("salmon-and-avocado-6pcs")
      },
      {
        name_en: "Spicy Salmon Combo",
        name_fr: "Combo Saumon Épicé",
        desc_en: "Fresh salmon tossed with sriracha spicy mayo and crunchy tempura (6 pcs)",
        desc_fr: "Tartare de saumon assaisonné à la mayo épicée et tempura (6 mcx)",
        image: getAlacarteImg("spicy-salmon-6pcs")
      },
      {
        name_en: "Avocado Roll Combo",
        name_fr: "Combo Rouleau Avocat",
        desc_en: "Classic creamy avocado rolled with seasoned sushi rice and nori (6 pcs)",
        desc_fr: "Rouleau classique à l'avocat crémeux et riz vinaigré (6 mcx)",
        image: getAlacarteImg("avocado-6pcs")
      }
    ]
  },
  {
    title_en: "SIZZLING PLATES",
    title_fr: "PLAQUES CHAUFFANTES",
    items: [
      {
        name_en: "Sizzling Lamb Chops",
        name_fr: "Côtelettes d'Agneau sur Plaque Chauffante",
        desc_en: "Tender marinated lamb chops served on a sizzling hot cast-iron skillet",
        desc_fr: "Tendres côtelettes d'agneau grillées servies crépitantes sur fonte brûlante",
        image: getAlacarteImg("sp01-sizzling-lamb-chops")
      },
      {
        name_en: "Sizzling AAA Angus Beef Ribs",
        name_fr: "Côtes de Bœuf Angus AAA sur Plaque",
        desc_en: "Prime AAA Angus beef short ribs caramelized in savory garlic black pepper sauce",
        desc_fr: "Côtes levées de bœuf Angus AAA caramélisées dans une sauce au poivre noir",
        image: getAlacarteImg("sp02-aaa-angus-beef-ribs")
      },
      {
        name_en: "Sizzling Garlic Chicken Chop",
        name_fr: "Haut de Cuisse de Poulet à l'Ail Sauté",
        desc_en: "Juicy marinated bone-in chicken thighs seared with garlic herb butter",
        desc_fr: "Cuisse de poulet marinée et dorée au beurre d'ail sur plaque fumante",
        image: getAlacarteImg("sp03-garlic-chicken-chop")
      },
      {
        name_en: "Sizzling Breaded Sole & Chicken Chop",
        name_fr: "Duo Sole Panée & Poulet sur Plaque",
        desc_en: "Golden breaded sole fish fillet paired with grilled tender chicken cutlet",
        desc_fr: "Filet de sole doré et croustillant accompagné d'un suprême de poulet grillé",
        image: getAlacarteImg("sp04-breadsoleandchickenchop")
      }
    ]
  },
  {
    title_en: "DUMPLINGS",
    title_fr: "RAVIOLIS",
    items: [
      {
        name_en: "Lamb & Cilantro Soup Dumplings",
        name_fr: "Raviolis d'Agneau & Coriandre",
        desc_en: "Handmade steamed dumplings bursting with spiced lamb and fresh cilantro",
        desc_fr: "Raviolis artisanaux juteux farcis d'agneau parfumé et de coriandre fraîche",
        image: getAlacarteImg("lambandcilantro-soup-dumplings")
      },
      {
        name_en: "Shrimp, Egg & Zucchini Dumplings",
        name_fr: "Raviolis Crevette, Œuf & Courgette",
        desc_en: "Delicate steamed dumplings with fresh chopped prawns, egg, and zucchini",
        desc_fr: "Raviolis cuits à la vapeur aux crevettes fraîches, œuf et courgette",
        image: getAlacarteImg("shrimp-egg-and-zucchini")
      },
      {
        name_en: "Vegetarian Garden Dumplings",
        name_fr: "Raviolis Végétariens du Jardin",
        desc_en: "Steamed thin-wrapper dumplings filled with cabbage, wood ear mushrooms, and greens",
        desc_fr: "Raviolis vapeur légers farcis aux champignons asiatiques et légumes verts",
        image: getAlacarteImg("vegetables-dumpling")
      }
    ]
  },
  {
    title_en: "VEGETARIAN",
    title_fr: "VÉGÉTARIEN",
    items: [
      {
        name_en: "Stir-Fried Mixed Vegetables",
        name_fr: "Légumes assortis sautés au wok",
        desc_en: "Medley of seasonal fresh vegetables wok-fried in light savory garlic glaze",
        desc_fr: "Méli-mélo de légumes frais du marché sautés au wok dans un jus d'ail délicat",
        image: getAlacarteImg("fried-mixed-vegetables")
      },
      {
        name_en: "Vegetarian Stir Vermicelli",
        name_fr: "Vermicelles sautés aux légumes",
        desc_en: "Light wok-tossed vermicelli noodles loaded with crisp garden vegetables",
        desc_fr: "Vermicelles légers sautés au wok avec petits légumes croquants",
        image: getAlacarteImg("veg-stir-vermicelli")
      },
      {
        name_en: "Vegetarian Fried Rice",
        name_fr: "Riz frit aux légumes du potager",
        desc_en: "Fragrant fried rice packed with colorful fresh garden vegetables",
        desc_fr: "Riz sauté savoureux et parfumé aux petits légumes",
        image: getAlacarteImg("veg-fried-rice")
      },
      {
        name_en: "Braised Tofu in Soy Sauce",
        name_fr: "Tofu Braisé à la Sauce Soja",
        desc_en: "Silken tofu squares lightly pan-fried and braised in aromatic soy sauce",
        desc_fr: "Cubes de tofu dorés mijotés dans une sauce soja parfumée",
        image: getAlacarteImg("braised-tofu-in-soy-sauce")
      }
    ]
  },
  {
    title_en: "CURRY STYLE HK",
    title_fr: "CURRY STYLE HK",
    items: [
      {
        name_en: "Curry Beef on Rice",
        name_fr: "Bœuf au Curry Style Hong Kong",
        desc_en: "Rich fragrant yellow curry with tender braised beef chunks served over rice",
        desc_fr: "Bœuf tendre mijoté dans un curry jaune onctueux et parfumé sur lit de riz",
        image: getAlacarteImg("curry-beef-on-rice")
      },
      {
        name_en: "Curry Lamb Chops on Rice",
        name_fr: "Côtelettes d'Agneau au Curry sur Riz",
        desc_en: "Succulent lamb chops simmered in rich aromatic Hong Kong style curry sauce",
        desc_fr: "Côtelettes d'agneau parfumées et braisées dans notre sauce curry maison",
        image: getAlacarteImg("curry-lamb-chops-on-rice")
      }
    ]
  },
  {
    title_en: "HK NOODLES (LO DING)",
    title_fr: "NOUILLES INSTANTANÉES HK",
    items: [
      {
        name_en: "Chicken & Scrambled Egg Lo Ding",
        name_fr: "Lo Ding Poulet & Œuf Brouillé",
        desc_en: "Hong Kong dry tossed ramen noodles crowned with tender chicken and silky eggs",
        desc_fr: "Nouilles sautées à sec style Hong Kong avec poulet et œufs brouillés soyeux",
        image: getAlacarteImg("chicken-and-scrambleegg-loding")
      },
      {
        name_en: "Curry Beef Brisket Lo Ding",
        name_fr: "Lo Ding Poitrine de Bœuf au Curry",
        desc_en: "Tossed noodles paired with slow-braised tender beef brisket in curry glaze",
        desc_fr: "Nouilles instantanées sautées avec poitrine de bœuf fondante au curry",
        image: getAlacarteImg("curry-beef-brisket-lo-ding-copy")
      }
    ]
  },
  {
    title_en: "SIGNATURE SNACKS",
    title_fr: "SNACKS SIGNATURES",
    items: [
      {
        name_en: "Takoyaki",
        name_fr: "Takoyaki Japonais",
        desc_en: "Traditional Japanese octopus round pancake balls with sweet sauce (4 pcs)",
        desc_fr: "Boulettes japonaises chaudes au poulpe avec flocons de bonite (4 mcx)",
        image: getAlacarteImg("takoyaki")
      },
      {
        name_en: "Popcorn Chicken",
        name_fr: "Poulet Popcorn Croustillant",
        desc_en: "Bite-sized marinated crispy fried chicken morsels tossed in Taiwanese pepper seasoning",
        desc_fr: "Bouchées de poulet marinées ultra-croustillantes aux cinq épices taïwanaises",
        image: getAlacarteImg("popcorn-chicken")
      },
      {
        name_en: "Condensed Milk Toast",
        name_fr: "Pain Doré au Lait Concentré",
        desc_en: "Hong Kong style thick golden toast drizzled with creamy sweet condensed milk",
        desc_fr: "Épaisse tranche de pain brioché doré arrosée de lait concentré sucré",
        image: getAlacarteImg("condensed-milk-toast")
      },
      {
        name_en: "Ice Cream Toast",
        name_fr: "Pain Grillé à la Crème Glacée",
        desc_en: "Crispy buttered toast topped with rich artisanal ice cream and sweet drizzles",
        desc_fr: "Pain croustillant au beurre surmonté d'une boule de crème glacée artisanale",
        image: getAlacarteImg("ice-cream-toast")
      },
      {
        name_en: "Shrimp Toast",
        name_fr: "Toasts Dorés aux Crevettes",
        desc_en: "Crispy fried bread triangles layered with seasoned minced shrimp and sesame",
        desc_fr: "Triangles de pain croustillants garnis de farce fine de crevettes et sésame",
        image: getAlacarteImg("shrimp-toast")
      },
      {
        name_en: "Artisanal Ice Cream",
        name_fr: "Crème Glacée Artisanale",
        desc_en: "Refreshing premium ice cream scoop in choice of classic and Asian flavors",
        desc_fr: "Boule de crème glacée onctueuse aux saveurs traditionnelles et asiatiques",
        image: getAlacarteImg("ice-cream")
      },
      {
        name_en: "Ice Cream Waffles",
        name_fr: "Gaufres à la Crème Glacée",
        desc_en: "Warm golden Belgian waffles paired with chilled creamy ice cream scoop",
        desc_fr: "Gaufres dorées croustillantes accompagnées d'une boule de crème glacée",
        image: getAlacarteImg("ice-cream-waffles")
      },
      {
        name_en: "Matcha Mochi",
        name_fr: "Mochi au Matcha",
        desc_en: "Chewy Japanese rice dessert infused with earthy stone-ground matcha green tea",
        desc_fr: "Mochi traditionnel parfumé à la poudre fine de thé vert matcha",
        image: getAlacarteImg("matcha-mochi")
      },
      {
        name_en: "Strawberry Mochi",
        name_fr: "Mochi à la Fraise",
        desc_en: "Soft and chewy Japanese rice cake filled with sweet strawberry creme",
        desc_fr: "Gâteau de riz gluant moelleux et fondant farci à la crème de fraise",
        image: getAlacarteImg("strawberry-mochi")
      },
      {
        name_en: "Mango Mochi",
        name_fr: "Mochi à la Mangue",
        desc_en: "Soft glutinous rice cake filled with luscious sweet mango filling",
        desc_fr: "Mochi japonais moelleux garni d'une crème fondante à la mangue douce",
        image: getAlacarteImg("mango-mochi")
      }
    ]
  },
  {
    title_en: "SNACKS & SIDES",
    title_fr: "SNACKS & EN-CAS",
    items: [
      {
        name_en: "Spicy Chili Beef",
        name_fr: "Bœuf Pimenté Sauté Maison",
        desc_en: "Tender sliced beef tossed with hot chilies, onions, and garlic glaze",
        desc_fr: "Émincé de bœuf mariné sauté avec piments rouges frais et oignons doux",
        image: getAlacarteImg("spicy-chill-beef")
      },
      {
        name_en: "Curry Beef Udon Soup",
        name_fr: "Soupe Udon au Bœuf et Curry",
        desc_en: "Steaming bowl of thick udon noodles with tender beef in rich curry broth",
        desc_fr: "Grand bol de nouilles udon fumantes au bœuf tendre et bouillon curry",
        image: getAlacarteImg("curry-beef-udon-soup")
      },
      {
        name_en: "Chicken Udon Stir-Fry",
        name_fr: "Udon Sauté au Poulet & Légumes",
        desc_en: "Thick udon noodles wok-fried with chicken strips and scallions",
        desc_fr: "Nouilles udon sautées au wok avec aiguillettes de poulet",
        image: getAlacarteImg("chicken-udon-stir-fry")
      },
      {
        name_en: "General Tao's Chicken",
        name_fr: "Bouchées Poulet Général Tao",
        desc_en: "Crispy snack portion of signature sweet and spicy glazed chicken bites",
        desc_fr: "Portion snack de poulet croustillant enrobé de sauce Général Tao",
        image: getAlacarteImg("general-taos-chicken")
      },
      {
        name_en: "Chicken Wings with Fries",
        name_fr: "Ailes de Poulet & Frites",
        desc_en: "Crispy fried seasoned chicken wings served with golden salted fries",
        desc_fr: "Ailes de poulet croustillantes accompagnées de frites dorées",
        image: getAlacarteImg("chicken-wing-with-fries")
      },
      {
        name_en: "General Tao's Shrimp",
        name_fr: "Crevettes Général Tao",
        desc_en: "Crispy battered jumbo shrimp coated in tangy General Tao sweet glaze",
        desc_fr: "Grosses crevettes croustillantes glacées de sauce Général Tao maison",
        image: getAlacarteImg("general-taos-shrimp")
      },
      {
        name_en: "Sesame Balls",
        name_fr: "Boules de Sésame Croustillantes",
        desc_en: "Chewy glutinous rice balls coated in fragrant sesame seeds with sweet filling",
        desc_fr: "Boules de riz gluant croustillantes au sésame doré farcies de pâte sucrée",
        image: getAlacarteImg("sesame-balls")
      },
      {
        name_en: "Crispy Spring Rolls",
        name_fr: "Rouleaux de Printemps",
        desc_en: "Vegetarian spring roll with crunchy shredded vegetables",
        desc_fr: "Rouleau croustillant farci de légumes finement émincés",
        image: getAlacarteImg("spring-rolls")
      },
      {
        name_en: "Crispy Fried Scallops",
        name_fr: "Pétoncles Frits Croustillants",
        desc_en: "Plump tender scallops breaded in Japanese breadcrumbs",
        desc_fr: "Pétoncles tendres enrobés d'une chapelure japonaise légère",
        image: getAlacarteImg("fried-scallops")
      },
      {
        name_en: "Deep Fried Calamari",
        name_fr: "Calamar Frit Croustillant",
        desc_en: "Tender seasoned calamari rings flash-fried until golden",
        desc_fr: "Anneaux de calamar marinés dorés et frits à la perfection",
        image: getAlacarteImg("deep-fried-calamari")
      }
    ]
  },
  {
    title_en: "DRINKS",
    title_fr: "BOISSONS",
    items: [
      {
        name_en: "Hong Kong Style Milk Tea",
        name_fr: "Thé au Lait Style Hong Kong",
        desc_en: "Rich and silky brewed Ceylon black tea blended with evaporated milk",
        desc_fr: "Thé noir de Ceylan infusé à point et velouté au lait concentré",
        image: getAlacarteImg("hong-kong-style-milk-tea")
      },
      {
        name_en: "Fresh Brewed Coffee",
        name_fr: "Café Chaud Infusé",
        desc_en: "Rich and dark roasted aromatic hot brewed coffee",
        desc_fr: "Tasse de café noir fraîchement préparé aux grains torréfiés",
        image: getAlacarteImg("coffee")
      },
      {
        name_en: "Taro Milk Tea",
        name_fr: "Thé au Lait de Taro",
        desc_en: "Creamy sweet purple taro infused milk tea served cold",
        desc_fr: "Boisson douce et crémeuse au taro violet parfumée au thé",
        image: getAlacarteImg("taro-milk-tea")
      },
      {
        name_en: "Strawberry Matcha Latte",
        name_fr: "Latte Matcha à la Fraise",
        desc_en: "Layered beverage with real strawberry puree, whole milk, and stone-ground Japanese matcha",
        desc_fr: "Boisson étagée avec purée de fraises fraîches, lait frais et matcha pur",
        image: getAlacarteImg("strawberry-matcha-latte")
      },
      {
        name_en: "Mango Matcha Latte",
        name_fr: "Latte Matcha à la Mangue",
        desc_en: "Vibrant combination of sweet mango nectar, creamy milk, and premium matcha green tea",
        desc_fr: "Cocktail gourmand au nectar de mangue, lait onctueux et thé vert matcha",
        image: getAlacarteImg("mango-matcha-latte")
      },
      {
        name_en: "Mango Passion Slush",
        name_fr: "Slush Mangue & Passion",
        desc_en: "Icy blended tropical slush bursting with ripe mango and tart passion fruit flavors",
        desc_fr: "Boisson glacée frappée aux fruits tropicaux, mangue mûre et fruit de la passion",
        image: getAlacarteImg("mango-passion-slush")
      },
      {
        name_en: "Strawberry Slush",
        name_fr: "Slush Givré à la Fraise",
        desc_en: "Refreshing ice-blended smoothie prepared with sweet crushed strawberries",
        desc_fr: "Slush rafraîchissant préparé avec de vraies fraises sucrées finement broyées",
        image: getAlacarteImg("strawberry-slush")
      },
      {
        name_en: "Fresh Lemonade",
        name_fr: "Limonade Fraîche Maison",
        desc_en: "Hand-squeezed refreshing citrus lemonade served over ice",
        desc_fr: "Limonade rafraîchissante pressée à la main et servie bien glacée",
        image: getAlacarteImg("limonade")
      },
      {
        name_en: "Fresh Coconut Water",
        name_fr: "Eau de Coco Naturelle",
        desc_en: "Pure hydrating natural coconut water chilled to perfection",
        desc_fr: "Eau de coco naturelle 100% pure, désaltérante et bien fraîche",
        image: getAlacarteImg("coconut-water")
      },
      {
        name_en: "Unsweetened Oolong Tea",
        name_fr: "Thé Oolong Sans Sucre",
        desc_en: "Crisp and roasted chilled premium whole-leaf oolong tea",
        desc_fr: "Infusion de thé oolong torréfié sans sucre ajouté, légère et désaltérante",
        image: getAlacarteImg("oolong-teano-sugar")
      },
      {
        name_en: "Sparkling Mineral Water",
        name_fr: "Eau Minérale Pétillante",
        desc_en: "Chilled bottle of premium sparkling mineral water",
        desc_fr: "Bouteille en verre d'eau minérale pétillante d'Italie",
        image: getAlacarteImg("sparkling-water")
      },
      {
        name_en: "Milkis Korean Drink",
        name_fr: "Milkis Soda Coréen au Lait",
        desc_en: "Sparkling milk soda combining fizzy carbonation with smooth yogurt sweetness",
        desc_fr: "Célèbre soda coréen pétillant et doux au goût lacté et fruité",
        image: getAlacarteImg("milkis")
      },
      {
        name_en: "Mexican Coca-Cola",
        name_fr: "Coca-Cola Mexicain (Bouteille en Verre)",
        desc_en: "Authentic imported Coca-Cola sweetened with 100% real cane sugar",
        desc_fr: "Authentique Coca-Cola importé pur sucre de canne en bouteille de verre",
        image: getAlacarteImg("coca-cola-mexican-bottled")
      },
      {
        name_en: "Diet Coke",
        name_fr: "Coke Diète",
        desc_en: "Zero calorie refreshing crisp carbonated soft drink",
        desc_fr: "Boisson gazeuse rafraîchissante sans calories",
        image: getAlacarteImg("diet-coke")
      },
      {
        name_en: "Red Bull Energy Drink",
        name_fr: "Boisson Énergisante Red Bull",
        desc_en: "Chilled can of sugar-free Red Bull energy drink",
        desc_fr: "Canette rafraîchissante de boisson énergisante sans sucre",
        image: getAlacarteImg("red-bull-zero")
      }
    ]
  }
];

const fileContent = `export interface MenuItem {
  name_en: string;
  name_fr: string;
  desc_en?: string;
  desc_fr?: string;
  image: string;
}

export interface MenuCategory {
  title_en: string;
  title_fr: string;
  items: MenuItem[];
}

export const AYCE_MENU_CATEGORIES: MenuCategory[] = ${JSON.stringify(ayceCategories, null, 2)};

export const ALACARTE_MENU_CATEGORIES: MenuCategory[] = ${JSON.stringify(alacarteCategories, null, 2)};
`;

fs.writeFileSync('src/data/menuData.ts', fileContent, 'utf8');
console.log('SUCCESS! Wrote 100% verified dual menu dataset to src/data/menuData.ts');
