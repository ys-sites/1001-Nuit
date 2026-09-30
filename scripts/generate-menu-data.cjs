const fs = require('fs');
const path = require('path');

const outDir = 'public/menu/optimized';

function verifyImage(slug) {
  const filePath = path.join(outDir, `${slug}.webp`);
  if (!fs.existsSync(filePath)) {
    console.error(`ERROR: Missing image file for slug: ${slug} (${filePath})`);
    process.exit(1);
  }
  return `/menu/optimized/${slug}.webp`;
}

// Complete, rich, clean, non-duplicated menu dataset
const categories = [
  {
    title_en: "HOT KITCHEN",
    title_fr: "PLATS CHAUDS",
    items: [
      {
        name_en: "General Tao Chicken",
        name_fr: "Poulet Général Tao",
        desc_en: "Crispy chicken tossed in signature sweet and savory General Tao sauce",
        desc_fr: "Morceaux de poulet croustillants enrobés de notre sauce Général Tao maison",
        image: verifyImage("general-tao-chicken")
      },
      {
        name_en: "Beef with Broccoli",
        name_fr: "Bœuf au brocoli",
        desc_en: "Tender sliced beef wok-tossed with fresh crisp broccoli florets",
        desc_fr: "Émincé de bœuf tendre sauté au wok avec brocolis frais croquants",
        image: verifyImage("beef-with-broccoli")
      },
      {
        name_en: "Sakura Shrimp & Chicken Fried Rice",
        name_fr: "Riz frit aux crevettes sakura et poulet",
        desc_en: "Fragrant wok-fried Jasmine rice with savory sakura shrimp, chicken, and egg",
        desc_fr: "Riz au jasmin sauté au wok avec crevettes sakura savoureuses, poulet et œuf",
        image: verifyImage("sakura-shrimp-chicken-fried-rice")
      },
      {
        name_en: "Chicken Fried Rice",
        name_fr: "Riz frit au poulet",
        desc_en: "Wok-fried Jasmine rice with tender chicken, eggs, and fresh scallions",
        desc_fr: "Riz au jasmin sauté au wok avec poulet tendre, œuf et oignons verts",
        image: verifyImage("chicken-fried-rice")
      },
      {
        name_en: "Pineapple Fried Rice",
        name_fr: "Riz frit à l'ananas",
        desc_en: "Fragrant golden fried rice with sweet pineapple chunks, egg, and fresh vegetables",
        desc_fr: "Riz sauté parfumé aux morceaux d'ananas sucrés, œuf et petits légumes",
        image: verifyImage("pineapple-fried-rice")
      },
      {
        name_en: "Chicken Pad Thai",
        name_fr: "Pad Thaï au poulet",
        desc_en: "Traditional stir-fried rice noodles with tender chicken, bean sprouts, and crushed peanuts",
        desc_fr: "Nouilles de riz traditionnelles sautées avec poulet, fèves germées et arachides",
        image: verifyImage("chicken-pad-thai")
      },
      {
        name_en: "Stir-Fried Beef Udon",
        name_fr: "Udon sauté au bœuf",
        desc_en: "Japanese udon noodles wok-tossed with tender beef slices and crunchy vegetables",
        desc_fr: "Épaisses nouilles udon japonaises sautées avec émincé de bœuf et légumes croquants",
        image: verifyImage("stir-fried-beef-udon")
      },
      {
        name_en: "Chicken Udon",
        name_fr: "Udon sauté au poulet",
        desc_en: "Thick Japanese udon noodles stir-fried with chicken and fresh vegetables",
        desc_fr: "Épaisses nouilles udon sautées au poulet tendre et légumes frais du marché",
        image: verifyImage("chicken-udon")
      },
      {
        name_en: "Hong Kong Style Beef Noodles",
        name_fr: "Nouilles au bœuf style Hong Kong",
        desc_en: "Wok-charred wide rice noodles with sliced flank steak and bean sprouts",
        desc_fr: "Larges nouilles de riz sautées au wok au bœuf émincé et pousses de soja",
        image: verifyImage("hk-style-beef-noodles")
      },
      {
        name_en: "Spaghetti with Beef in Black Pepper Sauce",
        name_fr: "Spaghetti sauté au bœuf sauce poivre noir",
        desc_en: "Hong Kong cafe style stir-fried spaghetti with tender beef in aromatic black pepper sauce",
        desc_fr: "Spaghetti sauté à la hong-kongaise avec bœuf tendre et sauce corsée au poivre noir",
        image: verifyImage("spaghetti-beef-black-pepper-sauce")
      },
      {
        name_en: "Black Pepper Chicken Spaghetti",
        name_fr: "Spaghetti sauté au poulet sauce poivre noir",
        desc_en: "Hong Kong style spaghetti with tender chicken strips in savory black pepper sauce",
        desc_fr: "Spaghetti sauté à la hong-kongaise avec poulet émincé et sauce au poivre noir",
        image: verifyImage("black-pepper-chicken-spaghetti")
      },
      {
        name_en: "AAA Beef Ribs with Sunny Egg on Rice",
        name_fr: "Côtes de bœuf AAA et œuf miroir sur riz",
        desc_en: "Tender AAA beef ribs glazed in savory sauce served over steamed rice with a sunny egg",
        desc_fr: "Tendres côtes de bœuf AAA laquées servies sur lit de riz chaud avec œuf miroir",
        image: verifyImage("aaa-beef-ribs-sunny-egg-rice")
      },
      {
        name_en: "Singapore Noodles",
        name_fr: "Nouilles à la singapourienne",
        desc_en: "Curry vermicelli noodles stir-fried with chicken, bell peppers, and bean sprouts",
        desc_fr: "Vermicelles sautés au curry jaune avec poulet, poivrons et fèves germées",
        image: verifyImage("singapore-noodles")
      },
      {
        name_en: "Vegetarian Stir-Fried Vermicelli",
        name_fr: "Vermicelles sautés aux légumes",
        desc_en: "Light wok-tossed vermicelli noodles loaded with crisp garden vegetables and sesame",
        desc_fr: "Vermicelles légers sautés au wok avec petits légumes croquants et sésame",
        image: verifyImage("veg-stir-vermicelli")
      },
      {
        name_en: "Stir-Fried Mixed Vegetables",
        name_fr: "Légumes assortis sautés au wok",
        desc_en: "Medley of seasonal fresh vegetables wok-fried in light savory garlic glaze",
        desc_fr: "Méli-mélo de légumes frais du marché sautés au wok dans un jus d'ail délicat",
        image: verifyImage("stir-fried-mixed-vegetables")
      },
      {
        name_en: "Vegetable Fried Rice",
        name_fr: "Riz frit aux légumes",
        desc_en: "Fragrant fried rice packed with colorful fresh garden vegetables",
        desc_fr: "Riz sauté savoureux et parfumé aux petits légumes croquants du potager",
        image: verifyImage("vegetable-fried-rice")
      },
      {
        name_en: "Curry Fried Rice",
        name_fr: "Riz frit au curry",
        desc_en: "Golden aromatic curry fried rice infused with herbs and mild spices",
        desc_fr: "Riz doré sauté aux arômes de curry doux et fines herbes",
        image: verifyImage("curry-fried-rice")
      },
      {
        name_en: "Curry Chicken Cutlet",
        name_fr: "Escalope de poulet au curry",
        desc_en: "Crispy panko chicken cutlet smothered in rich Hong Kong curry sauce",
        desc_fr: "Escalope de poulet croustillante panko nappée d'une riche sauce curry",
        image: verifyImage("curry-chicken-cutlet")
      },
      {
        name_en: "Curry Chicken Skewers",
        name_fr: "Brochettes de poulet au curry",
        desc_en: "Tender grilled chicken skewers seasoned with spiced curry glaze",
        desc_fr: "Tendres brochettes de poulet grillées et laquées au curry épicé",
        image: verifyImage("curry-chicken-skewers")
      },
      {
        name_en: "White Rice",
        name_fr: "Riz blanc cuit à la vapeur",
        desc_en: "Steamed premium Jasmine fragrant rice",
        desc_fr: "Bol de riz blanc au jasmin cuit à la vapeur parfumée",
        image: verifyImage("white-rice")
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
        image: verifyImage("1001-nuit")
      },
      {
        name_en: "Philadelphia Roll",
        name_fr: "Rouleau Philadelphia",
        desc_en: "Smoked salmon, silky cream cheese, and avocado (4 pcs)",
        desc_fr: "Saumon fumé, fromage à la crème onctueux et avocat (4 mcx)",
        image: verifyImage("philadelphia-roll")
      },
      {
        name_en: "Dynamite Roll",
        name_fr: "Rouleau Dynamite",
        desc_en: "Crispy shrimp tempura, avocado, cucumber, and spicy Japanese sauce (4 pcs)",
        desc_fr: "Crevette tempura croustillante, avocat, concombre et sauce épicée (4 mcx)",
        image: verifyImage("dynamite")
      },
      {
        name_en: "Dragon Eye Roll",
        name_fr: "Rouleau Œil de Dragon",
        desc_en: "Deep-fried specialty maki with fresh salmon, whitefish, and scallions (4 pcs)",
        desc_fr: "Maki doré et croustillant au saumon, poisson blanc et oignons verts (4 mcx)",
        image: verifyImage("dragon-eye")
      },
      {
        name_en: "Volcano Roll",
        name_fr: "Rouleau Volcano",
        desc_en: "Spicy roll topped with toasted tempura crunch and spicy mayo drizzle (4 pcs)",
        desc_fr: "Rouleau relevé avec flocons de tempura croustillants et mayo épicée (4 mcx)",
        image: verifyImage("volcano")
      },
      {
        name_en: "Kamikaze Roll",
        name_fr: "Rouleau Kamikaze",
        desc_en: "Tuna, spicy sauce, tempura flakes, and avocado (4 pcs)",
        desc_fr: "Thon frais, sauce relevée, flocons de tempura et avocat (4 mcx)",
        image: verifyImage("kamikaze")
      },
      {
        name_en: "California Roll",
        name_fr: "Rouleau Californie",
        desc_en: "Crab stick, creamy avocado, crisp cucumber, and masago (4 pcs)",
        desc_fr: "Goberge de crabe, avocat crémeux, concombre croquant et masago (4 mcx)",
        image: verifyImage("california-roll")
      },
      {
        name_en: "Salmon Avocado Roll",
        name_fr: "Rouleau Saumon & Avocat",
        desc_en: "Fresh Atlantic salmon paired with ripe Haas avocado (3 pcs)",
        desc_fr: "Saumon frais de l'Atlantique et avocat mûr (3 mcx)",
        image: verifyImage("salmon-avocado-roll")
      },
      {
        name_en: "Spicy Salmon Roll",
        name_fr: "Rouleau Saumon Épicé",
        desc_en: "Diced fresh salmon tossed with sriracha mayo and crunchy tempura (4 pcs)",
        desc_fr: "Tartare de saumon assaisonné à la mayo épicée et tempura (4 mcx)",
        image: verifyImage("spicy-salmon-roll")
      },
      {
        name_en: "Rainbow Roll",
        name_fr: "Rouleau Arc-en-ciel",
        desc_en: "California roll draped with assortment of fresh sashimi cuts (4 pcs)",
        desc_fr: "Rouleau Californie garni d'un éventail de sashimis frais (4 mcx)",
        image: verifyImage("rain-bow-roll")
      },
      {
        name_en: "Crispy Chicken Roll",
        name_fr: "Rouleau Poulet Croustillant",
        desc_en: "Tender fried chicken breast with crisp lettuce and savory teriyaki glaze (4 pcs)",
        desc_fr: "Poulet croustillant, salade fraîche et glaçage teriyaki (4 mcx)",
        image: verifyImage("crispy-chicken-roll")
      },
      {
        name_en: "Mango Roll",
        name_fr: "Rouleau Mangue",
        desc_en: "Sweet tropical mango, avocado, and crisp cucumber (3 pcs)",
        desc_fr: "Mangue tropicale sucrée, avocat et concombre frais (3 mcx)",
        image: verifyImage("mango-roll")
      },
      {
        name_en: "Vegetable Roll",
        name_fr: "Rouleau Végétarien",
        desc_en: "Avocado, cucumber, pickled radish, and crisp asparagus (4 pcs)",
        desc_fr: "Avocat, concombre, radis mariné et asperges croquantes (4 mcx)",
        image: verifyImage("vegetable-roll")
      },
      {
        name_en: "Mango Rice Paper Roll",
        name_fr: "Rouleau de Riz à la Mangue",
        desc_en: "Fresh mango and garden vegetables wrapped in delicate rice paper (4 pcs)",
        desc_fr: "Mangue fraîche et légumes croquants enveloppés dans du papier de riz (4 mcx)",
        image: verifyImage("mango-rice-paper-roll")
      },
      {
        name_en: "Chicken Rice Paper Roll",
        name_fr: "Rouleau de Riz au Poulet",
        desc_en: "Tender seasoned chicken and herbs rolled in light rice paper (4 pcs)",
        desc_fr: "Poulet émincé et fines herbes dans une feuille de riz légère (4 mcx)",
        image: verifyImage("chicken-rice-paper-roll")
      },
      {
        name_en: "Spicy Salmon Gunkan",
        name_fr: "Gunkan Saumon Épicé",
        desc_en: "Battleship sushi topped with mound of zesty spicy salmon tartare (1 pc)",
        desc_fr: "Bouchée d'algue garnie de tartare de saumon relevé (1 mc)",
        image: verifyImage("spicy-salmon-gunka")
      },
      {
        name_en: "Crab Stick Gunkan",
        name_fr: "Gunkan Goberge de Crabe",
        desc_en: "Nori cup filled with creamy crab stick salad (1 pc)",
        desc_fr: "Algue nori garnie d'effiloché de crabe assaisonné (1 mc)",
        image: verifyImage("crab-stick-gunkan")
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
        image: verifyImage("seared-salmon-nigiri")
      },
      {
        name_en: "Sweet Shrimp Nigiri",
        name_fr: "Nigiri Crevette Douce (Amaebi)",
        desc_en: "Delicate sweet spot prawn gently layered on sushi rice (1 pc)",
        desc_fr: "Crevette douce délicate posée sur lit de riz à sushi (1 mc)",
        image: verifyImage("sweet-shrimp-nigiri")
      },
      {
        name_en: "Salmon Rose",
        name_fr: "Rose de Saumon",
        desc_en: "Delicate salmon sashimi petals formed into an edible rose bloom (1 pc)",
        desc_fr: "Pétales de saumon frais sculptés en une élégante rose (1 mc)",
        image: verifyImage("salmon-rose")
      },
      {
        name_en: "Salmon Nigiri",
        name_fr: "Nigiri Saumon",
        desc_en: "Premium fresh raw Atlantic salmon over seasoned sushi rice (1 pc)",
        desc_fr: "Tranche de saumon frais de première qualité sur riz vinaigré (1 mc)",
        image: verifyImage("salmon-nigiri")
      },
      {
        name_en: "Tuna Nigiri",
        name_fr: "Nigiri Thon Rouge",
        desc_en: "Ruby red tuna loin cut served over seasoned sushi rice (1 pc)",
        desc_fr: "Thon rouge fondant sur riz vinaigré traditionnel (1 mc)",
        image: verifyImage("tuna-nigiri")
      },
      {
        name_en: "Shrimp Nigiri",
        name_fr: "Nigiri Crevette (Ebi)",
        desc_en: "Cooked butterfly black tiger shrimp over sushi rice (1 pc)",
        desc_fr: "Crevette cuite ouverte en papillon sur riz pressé (1 mc)",
        image: verifyImage("shrimp-nigiri")
      },
      {
        name_en: "Unagi Nigiri",
        name_fr: "Nigiri Anguille Grillée (Unagi)",
        desc_en: "Caramelized freshwater eel brushed with sweet kabayaki tare (1 pc)",
        desc_fr: "Anguille grillée laquée à la sauce tare sucrée (1 mc)",
        image: verifyImage("unagi-nigiri")
      },
      {
        name_en: "Crab Stick Nigiri",
        name_fr: "Nigiri Goberge de Crabe",
        desc_en: "Tender crab stick bound with a thin ribbon of nori seaweed (1 pc)",
        desc_fr: "Bâtonnet de goberge ceinturé d'une fine lanière de nori (1 mc)",
        image: verifyImage("crab-stick-nigiri")
      },
      {
        name_en: "Egg (Tamago) Nigiri",
        name_fr: "Nigiri Omelette Japonaise (Tamago)",
        desc_en: "Sweet layered Japanese rolled omelette tied with nori (1 pc)",
        desc_fr: "Omelette japonaise douce et dorée liée au nori (1 mc)",
        image: verifyImage("egg-tamago-nigiri")
      },
      {
        name_en: "Escolar Nigiri",
        name_fr: "Nigiri Escolar (Thon Blanc)",
        desc_en: "Silky, buttery white tuna cut over seasoned sushi rice (1 pc)",
        desc_fr: "Thon blanc à la chair tendre et beurrée sur riz vinaigré (1 mc)",
        image: verifyImage("escolar-nigiri")
      },
      {
        name_en: "Surf Clam Nigiri",
        name_fr: "Nigiri Mactre de l'Atlantique (Hokkigai)",
        desc_en: "Sweet crimson Arctic surf clam served over sushi rice (1 pc)",
        desc_fr: "Mactre rouge de l'Atlantique à la texture croquante (1 mc)",
        image: verifyImage("surf-clam-nigiri")
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
        image: verifyImage("salmon-sashimi")
      },
      {
        name_en: "Tuna Sashimi",
        name_fr: "Sashimi Thon Rouge",
        desc_en: "Selected cuts of ruby red sashimi-grade tuna (1 pc)",
        desc_fr: "Tranche sélectionnée de thon rouge de première fraîcheur (1 mc)",
        image: verifyImage("tuna-sashimi")
      },
      {
        name_en: "Escolar Sashimi",
        name_fr: "Sashimi Escolar",
        desc_en: "Melt-in-your-mouth white tuna sashimi (1 pc)",
        desc_fr: "Délicieuse tranche de thon blanc escolar très fondant (1 mc)",
        image: verifyImage("escolar-sashimi")
      },
      {
        name_en: "Surf Clam Sashimi",
        name_fr: "Sashimi Mactre (Hokkigai)",
        desc_en: "Tender arctic surf clam slice with delicate marine sweetness (1 pc)",
        desc_fr: "Mactre arctique délicatement parfumée aux notes iodées (1 mc)",
        image: verifyImage("surf-clam-sashimi")
      },
      {
        name_en: "Inari",
        name_fr: "Sashimi Inari Tofu",
        desc_en: "Seasoned sweet fried bean curd pouch (1 pc)",
        desc_fr: "Poche de tofu frite et marinée aux notes douces (1 mc)",
        image: verifyImage("inari")
      },
      {
        name_en: "Tamago Sashimi",
        name_fr: "Sashimi Tamago",
        desc_en: "Sweet and fluffy Japanese layered rolled omelette (1 pc)",
        desc_fr: "Tranche d'omelette japonaise moelleuse et sucrée (1 mc)",
        image: verifyImage("tamago")
      },
      {
        name_en: "Tobiko Cucumber",
        name_fr: "Tobiko & Concombre",
        desc_en: "Flying fish roe nestled in crisp refreshing cucumber cups (1 pc)",
        desc_fr: "Œufs de poisson volant croquants nichés dans un concombre frais (1 mc)",
        image: verifyImage("tobiko-cucumber")
      },
      {
        name_en: "Crab Stick Sashimi",
        name_fr: "Sashimi Goberge de Crabe",
        desc_en: "Lightly seasoned crab stick served sashimi style (1 pc)",
        desc_fr: "Bâtonnet de goberge servi en sashimi léger (1 mc)",
        image: verifyImage("crab-stick-sashimi")
      }
    ]
  },
  {
    title_en: "SUSHI COMBOS & BOATS",
    title_fr: "COMBOS & BATEAUX SUSHI",
    items: [
      {
        name_en: "Sushi Boat Imperial (Boat 1)",
        name_fr: "Grand Bateau Impérial (Boat 1)",
        desc_en: "Spectacular wooden sushi boat laden with assorted premium nigiri, sashimi, and specialty rolls",
        desc_fr: "Magnifique bateau de fête garni de nigiris fins, sashimis et rouleaux de prestige",
        image: verifyImage("sushi-boat-1")
      },
      {
        name_en: "Sushi Boat Royal (Boat 2)",
        name_fr: "Grand Bateau Royal (Boat 2)",
        desc_en: "Elaborate multi-level wooden boat loaded with supreme maki collection and chef's cut sashimi",
        desc_fr: "Somptueux bateau garni d'une abondance de makis raffinés et sashimis du chef",
        image: verifyImage("sushi-boat-2")
      },
      {
        name_en: "Signature Combo SS1",
        name_fr: "Plateau Signature SS1",
        desc_en: "Chef curated assortment of chef's favorite nigiri and crispy tempura rolls",
        desc_fr: "Assortiment harmonieux de nigiris délicats et rouleaux tempura croustillants",
        image: verifyImage("sushi-combo-ss1")
      },
      {
        name_en: "Signature Combo SS2",
        name_fr: "Plateau Signature SS2",
        desc_en: "Rich combination of fresh salmon lovers rolls, avocado maki, and torched nigiri",
        desc_fr: "Plateau généreux pour les amateurs de saumon frais, avocat et nigiris",
        image: verifyImage("sushi-combo-ss2")
      },
      {
        name_en: "Signature Combo SS3",
        name_fr: "Plateau Signature SS3",
        desc_en: "Colorful party platter featuring California rolls, spicy salmon, and mixed nigiri",
        desc_fr: "Plateau festif haut en couleur composé de rouleaux californiens et saumon épicé",
        image: verifyImage("sushi-combo-ss3")
      },
      {
        name_en: "Signature Combo SS4",
        name_fr: "Plateau Signature SS4",
        desc_en: "Deluxe grand combo featuring dragon eye, dynamite, and fresh fish selections",
        desc_fr: "Combo grandiose haut de gamme réunissant œil de dragon et créations fraîches",
        image: verifyImage("sushi-combo-ss4")
      }
    ]
  },
  {
    title_en: "SMALL & HAND ROLLS",
    title_fr: "PETITS ROULEAUX & CORNETS",
    items: [
      {
        name_en: "Avocado Roll",
        name_fr: "Rouleau Avocat (Hosomaki)",
        desc_en: "Classic creamy avocado rolled with seasoned sushi rice and nori (3 pcs)",
        desc_fr: "Rouleau classique à l'avocat crémeux et riz vinaigré (3 mcx)",
        image: verifyImage("avocado-roll")
      },
      {
        name_en: "Cucumber Roll",
        name_fr: "Rouleau Concombre (Kappa Maki)",
        desc_en: "Crisp and refreshing julienned cucumber rolled in nori seaweed (3 pcs)",
        desc_fr: "Concombre frais et croquant roulé dans une feuille de nori (3 mcx)",
        image: verifyImage("cucumber-roll")
      },
      {
        name_en: "Salmon Roll",
        name_fr: "Rouleau Saumon (Sake Maki)",
        desc_en: "Fresh Atlantic salmon rolled simply in nori and sushi rice (3 pcs)",
        desc_fr: "Saumon frais enveloppé de riz et d'algue nori (3 mcx)",
        image: verifyImage("salmon-roll")
      },
      {
        name_en: "Tuna Roll",
        name_fr: "Rouleau Thon (Tekka Maki)",
        desc_en: "Pure ruby red tuna center rolled in traditional nori wrapper (3 pcs)",
        desc_fr: "Thon rouge pur enveloppé dans la tradition japonaise (3 mcx)",
        image: verifyImage("tuna-roll")
      },
      {
        name_en: "Crab Roll",
        name_fr: "Rouleau Goberge de Crabe",
        desc_en: "Sweet tender crab meat rolled in nori (3 pcs)",
        desc_fr: "Bâtonnet de crabe tendre roulé dans le nori (3 mcx)",
        image: verifyImage("crab-roll")
      },
      {
        name_en: "Salmon Hand Roll",
        name_fr: "Cornet au Saumon (Temaki)",
        desc_en: "Hand-rolled crispy seaweed cone packed with sushi rice and salmon",
        desc_fr: "Cône croustillant d'algue nori farci de saumon frais et riz vinaigré",
        image: verifyImage("salmon-hand-roll")
      },
      {
        name_en: "Spicy Salmon Hand Roll",
        name_fr: "Cornet au Saumon Épicé",
        desc_en: "Temaki cone filled with zesty spicy salmon tartare and tempura crunch",
        desc_fr: "Cornet garni de tartare de saumon épicé et flocons de tempura",
        image: verifyImage("spicy-salmon-hand-roll")
      },
      {
        name_en: "Avocado Hand Roll",
        name_fr: "Cornet à l'Avocat",
        desc_en: "Temaki seaweed cone layered with luscious avocado and toasted sesame",
        desc_fr: "Cornet temaki généreusement garni d'avocat et graines de sésame grillées",
        image: verifyImage("avocado-hand-roll")
      },
      {
        name_en: "Cucumber Hand Roll",
        name_fr: "Cornet au Concombre",
        desc_en: "Crisp cucumber spears wrapped in fresh nori seaweed cone",
        desc_fr: "Bâtonnets de concombre croquants dans un cornet croustillant",
        image: verifyImage("cucumber-hand-roll")
      },
      {
        name_en: "Crab Stick Hand Roll",
        name_fr: "Cornet Goberge de Crabe",
        desc_en: "Crab stick, avocado, and Japanese mayo wrapped in a crisp nori cone",
        desc_fr: "Goberge de crabe, avocat et mayonnaise japonaise en cornet",
        image: verifyImage("crab-stick-hand-roll")
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
        desc_en: "Golden crispy fried rice patty base crowned with fresh fish tartare, tobiko, and signature sauces",
        desc_fr: "Galette de riz dorée et croustillante garnie de tartare de poisson, tobiko et sauces du chef",
        image: verifyImage("pizza-sushi-croustillante")
      },
      {
        name_en: "Crab Stick Sushi Pizza",
        name_fr: "Pizza Sushi au Crabe",
        desc_en: "Crunchy rice crust layered with seasoned crab stick, avocado slices, and spicy mayo",
        desc_fr: "Croûte de riz panée et frite surmontée de crabe assaisonné, avocat et mayo relevée",
        image: verifyImage("crab-stick-sushi-pizza")
      }
    ]
  },
  {
    title_en: "FRIED FAVORITES",
    title_fr: "FRITURES & FAVORIS",
    items: [
      {
        name_en: "Crispy Calamari",
        name_fr: "Calamar Frit Croustillant",
        desc_en: "Tender seasoned calamari rings flash-fried until golden (1 pc)",
        desc_fr: "Anneaux de calamar marinés dorés et frits à la perfection (1 mc)",
        image: verifyImage("fried-calamari")
      },
      {
        name_en: "Crispy Popcorn Chicken",
        name_fr: "Poulet Popcorn Croustillant",
        desc_en: "Bite-sized marinated crispy fried chicken morsels tossed in Taiwanese pepper seasoning",
        desc_fr: "Bouchées de poulet marinées ultra-croustillantes aux cinq épices taïwanaises",
        image: verifyImage("popcorn-chicken")
      },
      {
        name_en: "Fried Chicken Wings",
        name_fr: "Ailes de Poulet Croustillantes",
        desc_en: "Crispy golden chicken wings seasoned with house spices (1 pc)",
        desc_fr: "Ailes de poulet croustillantes et juteuses aux épices maison (1 mc)",
        image: verifyImage("fried-chicken-wings")
      },
      {
        name_en: "Golden Shrimp Toast",
        name_fr: "Toasts Dorés aux Crevettes",
        desc_en: "Crispy fried bread triangles layered with seasoned minced shrimp and sesame",
        desc_fr: "Triangles de pain croustillants garnis de farce fine de crevettes et sésame",
        image: verifyImage("shrimp-toast")
      },
      {
        name_en: "Teriyaki Chicken",
        name_fr: "Poulet Teriyaki",
        desc_en: "Grilled chicken fillet glazed with sweet savory homemade teriyaki sauce",
        desc_fr: "Tendres filets de poulet laqués à notre sauce teriyaki artisanale",
        image: verifyImage("teriyaki-chicken")
      },
      {
        name_en: "Teriyaki Salmon",
        name_fr: "Saumon Teriyaki",
        desc_en: "Pan-seared Atlantic salmon fillet coated in rich teriyaki glaze",
        desc_fr: "Pavé de saumon poêlé et nappé d'un savoureux glaçage teriyaki",
        image: verifyImage("teriyaki-salmon")
      },
      {
        name_en: "Salt & Pepper Shrimp",
        name_fr: "Crevettes Sel & Poivre",
        desc_en: "Crispy battered shrimp tossed with sea salt, cracked pepper, and scallions (2 pcs)",
        desc_fr: "Crevettes croustillantes sautées au sel de mer, poivre et ciboule (2 mcx)",
        image: verifyImage("salt-and-pepper-shrimp")
      },
      {
        name_en: "Creamy Mussels",
        name_fr: "Moules Sauce Crémeuse",
        desc_en: "Half-shell ocean mussels baked with rich savory garlic cream (1 pc)",
        desc_fr: "Moules gratinées nappées d'une onctueuse crème à l'ail (1 mc)",
        image: verifyImage("creamy-mussels")
      },
      {
        name_en: "Wasabi Cream Mussels",
        name_fr: "Moules à la Crème de Wasabi",
        desc_en: "Baked mussels topped with velvety wasabi-infused cream sauce (1 pc)",
        desc_fr: "Moules au four relevées d'une sauce crémeuse au wasabi subtil (1 mc)",
        image: verifyImage("wasabi-cream-mussels")
      },
      {
        name_en: "Crispy Spring Rolls",
        name_fr: "Rouleaux de Printemps Croustillants",
        desc_en: "Vegetarian spring roll with crunchy shredded vegetables (1 pc)",
        desc_fr: "Rouleau croustillant farci de légumes finement émincés (1 mc)",
        image: verifyImage("spring-rolls")
      },
      {
        name_en: "Fried Crab Stick",
        name_fr: "Bâtonnets de Crabe Frits",
        desc_en: "Golden panko-crusted crab sticks served hot and crispy (1 pc)",
        desc_fr: "Bâtonnets de crabe panés au panko et dorés à point (1 mc)",
        image: verifyImage("fried-crab-stick")
      },
      {
        name_en: "Fried Scallops",
        name_fr: "Pétoncles Frits",
        desc_en: "Plump tender scallops breaded in Japanese breadcrumbs (1 pc)",
        desc_fr: "Pétoncles tendres enrobés d'une chapelure japonaise légère (1 mc)",
        image: verifyImage("fried-scallops")
      },
      {
        name_en: "Fried Vegetable Dumplings",
        name_fr: "Raviolis aux Légumes Frits",
        desc_en: "Pan-fried crispy dumplings filled with minced fresh vegetables (1 pc)",
        desc_fr: "Raviolis croustillants à la poêle farcis de légumes du marché (1 mc)",
        image: verifyImage("fried-vegetable-dumplings")
      },
      {
        name_en: "Takoyaki",
        name_fr: "Takoyaki Japonais",
        desc_en: "Traditional Japanese octopus round pancake balls with bonito flakes and sweet glaze (1 pc)",
        desc_fr: "Boulettes japonaises chaudes au poulpe avec flocons de bonite et sauce sucrée (1 mc)",
        image: verifyImage("takoyaki")
      },
      {
        name_en: "Golden French Fries",
        name_fr: "Frites Dorées",
        desc_en: "Crispy golden french fries sprinkled with sea salt",
        desc_fr: "Frites dorées et croustillantes saupoudrées de sel fin",
        image: verifyImage("french-fries")
      }
    ]
  },
  {
    title_en: "TEMPURA SELECTION",
    title_fr: "SÉLECTION TEMPURA",
    items: [
      {
        name_en: "Shrimp Tempura",
        name_fr: "Tempura de Crevette",
        desc_en: "Succulent shrimp fried in airy, feather-light Japanese tempura batter (1 pc)",
        desc_fr: "Crevette enrobée d'une pâte tempura aérienne et croustillante (1 mc)",
        image: verifyImage("tempura-shrimp")
      },
      {
        name_en: "Sweet Potato Tempura",
        name_fr: "Tempura de Patate Douce",
        desc_en: "Sweet and tender golden sweet potato slice in light batter (1 pc)",
        desc_fr: "Tranche fondante de patate douce sous panure japonaise dorée (1 mc)",
        image: verifyImage("tempura-sweet-potato")
      },
      {
        name_en: "Broccoli Tempura",
        name_fr: "Tempura de Brocoli",
        desc_en: "Fresh broccoli florets flash-fried in delicate tempura batter (1 pc)",
        desc_fr: "Fleurons de brocoli frais frits dans une pâte tempura ultra-légère (1 mc)",
        image: verifyImage("tempura-broccoli")
      },
      {
        name_en: "Mushroom Tempura",
        name_fr: "Tempura de Champignons",
        desc_en: "Earthy whole mushroom coated in crispy tempura coat (1 pc)",
        desc_fr: "Champignon de Paris croustillant et fondant à cœur (1 mc)",
        image: verifyImage("tempura-mushroom")
      },
      {
        name_en: "Eggplant Tempura",
        name_fr: "Tempura d'Aubergine",
        desc_en: "Silky tender eggplant encased in crisp Japanese batter (1 pc)",
        desc_fr: "Aubergine fondante enveloppée d'une fine dentelle de tempura (1 mc)",
        image: verifyImage("tempura-eggplant")
      },
      {
        name_en: "Zucchini Tempura",
        name_fr: "Tempura de Courgette",
        desc_en: "Juicy garden zucchini medallions fried to golden perfection (1 pc)",
        desc_fr: "Rondelles de courgette fraîches dorées et croustillantes (1 mc)",
        image: verifyImage("tempura-zucchini")
      }
    ]
  },
  {
    title_en: "APPETIZERS & SOUPS",
    title_fr: "ENTRÉES & SOUPES",
    items: [
      {
        name_en: "Miso Soup",
        name_fr: "Soupe Miso Traditionnelle",
        desc_en: "Classic Japanese dashi broth with fermented soybean paste, silken tofu, wakame, and scallions",
        desc_fr: "Bouillon dashi traditionnel au miso, tofu soyeux, algues wakamé et oignons verts",
        image: verifyImage("miso-soup")
      },
      {
        name_en: "Hot and Sour Soup",
        name_fr: "Soupe Aigre-Piquante",
        desc_en: "Zesty peppered broth with bamboo shoots, wood-ear mushrooms, and tofu ribbons",
        desc_fr: "Bouillon relevé et vinaigré aux pousses de bambou, champignons noirs et tofu",
        image: verifyImage("hot-and-sour-soup")
      },
      {
        name_en: "Chef's Special Soup of the Week",
        name_fr: "Soupe Spéciale du Chef",
        desc_en: "Slow-simmered weekly house soup prepared with seasonal premium ingredients",
        desc_fr: "Soupe maison mijotée préparée selon l'inspiration du chef et les saisons",
        image: verifyImage("special-soup-of-the-week")
      },
      {
        name_en: "Salted Edamame",
        name_fr: "Edamame Salé",
        desc_en: "Warm steamed young soybeans in pod sprinkled with coarse mineral sea salt",
        desc_fr: "Fèves de soya fraîches à la vapeur saupoudrées de gros sel marin",
        image: verifyImage("salted-edamame")
      },
      {
        name_en: "Spicy Kimchi",
        name_fr: "Kimchi Épicé Maison",
        desc_en: "Artisanal Korean fermented napa cabbage with chili peppers and garlic",
        desc_fr: "Chou napa fermenté traditionnel aux piments coréens et ail doux",
        image: verifyImage("kimchi")
      },
      {
        name_en: "Pickled Ginger & Wasabi",
        name_fr: "Gingembre Mariné & Wasabi",
        desc_en: "Sweet shaved pickled ginger root with Japanese wasabi horseradish",
        desc_fr: "Fines lamelles de gingembre mariné et raifort wasabi piquant",
        image: verifyImage("ginger-and-wasabi")
      }
    ]
  },
  {
    title_en: "SIZZLING & SPECIALTIES",
    title_fr: "PLAQUES CHAUFFANTES & SPÉCIALITÉS",
    items: [
      {
        name_en: "Sizzling Lamb Chops",
        name_fr: "Côtelettes d'Agneau sur Plaque Chauffante",
        desc_en: "Tender marinated lamb chops served on a sizzling hot cast-iron skillet",
        desc_fr: "Tendres côtelettes d'agneau grillées servies crépitantes sur fonte brûlante",
        image: verifyImage("sizzling-lamb-chops")
      },
      {
        name_en: "Sizzling AAA Angus Beef Ribs",
        name_fr: "Côtes de Bœuf Angus AAA sur Plaque",
        desc_en: "Prime AAA Angus beef short ribs caramelized in savory garlic black pepper sauce",
        desc_fr: "Côtes levées de bœuf Angus AAA caramélisées dans une sauce au poivre noir",
        image: verifyImage("sizzling-aaa-angus-beef-ribs")
      },
      {
        name_en: "Sizzling Garlic Chicken Chop",
        name_fr: "Haut de Cuisse de Poulet à l'Ail Sauté",
        desc_en: "Juicy marinated bone-in chicken thighs seared with garlic herb butter",
        desc_fr: "Cuisse de poulet marinée et dorée au beurre d'ail sur plaque fumante",
        image: verifyImage("sizzling-garlic-chicken-chop")
      },
      {
        name_en: "Sizzling Breaded Sole & Chicken Chop",
        name_fr: "Duo Sole Panée & Poulet sur Plaque",
        desc_en: "Golden breaded sole fish fillet paired with grilled tender chicken cutlet",
        desc_fr: "Filet de sole doré et croustillant accompagné d'un suprême de poulet grillé",
        image: verifyImage("sizzling-breaded-sole-and-chicken-chop")
      },
      {
        name_en: "Spicy Chili Beef",
        name_fr: "Bœuf Pimenté Sauté Maison",
        desc_en: "Tender sliced beef tossed with hot chilies, onions, and garlic glaze",
        desc_fr: "Émincé de bœuf mariné sauté avec piments rouges frais et oignons doux",
        image: verifyImage("spicy-chili-beef")
      },
      {
        name_en: "General Tao's Shrimp",
        name_fr: "Crevettes Général Tao",
        desc_en: "Crispy battered jumbo shrimp coated in tangy General Tao sweet glaze",
        desc_fr: "Grosses crevettes croustillantes glacées de sauce Général Tao maison",
        image: verifyImage("general-taos-shrimp")
      },
      {
        name_en: "Curry Beef Udon Soup",
        name_fr: "Soupe Udon au Bœuf et Curry",
        desc_en: "Steaming bowl of thick udon noodles with tender beef in rich curry broth",
        desc_fr: "Grand bol de nouilles udon fumantes au bœuf tendre et bouillon curry parfumé",
        image: verifyImage("curry-beef-udon-soup")
      },
      {
        name_en: "Hong Kong Curry Beef on Rice",
        name_fr: "Bœuf au Curry Style Hong Kong",
        desc_en: "Rich fragrant yellow curry with tender braised beef chunks served over rice",
        desc_fr: "Bœuf tendre mijoté dans un curry jaune onctueux et parfumé sur lit de riz",
        image: verifyImage("curry-beef-on-rice")
      },
      {
        name_en: "Hong Kong Curry Lamb Chops on Rice",
        name_fr: "Côtelettes d'Agneau au Curry sur Riz",
        desc_en: "Succulent lamb chops simmered in rich aromatic Hong Kong style curry sauce",
        desc_fr: "Côtelettes d'agneau parfumées et braisées dans notre sauce curry maison",
        image: verifyImage("curry-lamb-chops-on-rice")
      },
      {
        name_en: "Chicken & Scrambled Egg Lo Ding",
        name_fr: "Lo Ding Poulet & Œuf Brouillé",
        desc_en: "Hong Kong dry tossed ramen noodles crowned with tender chicken and silky eggs",
        desc_fr: "Nouilles sautées à sec style Hong Kong avec poulet et œufs brouillés soyeux",
        image: verifyImage("chicken-and-scrambled-egg-lo-ding")
      },
      {
        name_en: "Curry Beef Brisket Lo Ding",
        name_fr: "Lo Ding Poitrine de Bœuf au Curry",
        desc_en: "Tossed noodles paired with slow-braised tender beef brisket in curry glaze",
        desc_fr: "Nouilles instantanées sautées avec poitrine de bœuf fondante au curry",
        image: verifyImage("curry-beef-brisket-lo-ding")
      },
      {
        name_en: "Braised Tofu in Soy Sauce",
        name_fr: "Tofu Braisé à la Sauce Soja",
        desc_en: "Silken tofu squares lightly pan-fried and braised in aromatic mushroom soy sauce",
        desc_fr: "Cubes de tofu dorés mijotés dans une sauce soja parfumée aux champignons",
        image: verifyImage("braised-tofu-in-soy-sauce")
      },
      {
        name_en: "Lamb & Cilantro Soup Dumplings",
        name_fr: "Raviolis d'Agneau & Coriandre",
        desc_en: "Handmade steamed dumplings bursting with flavorful spiced lamb and fresh cilantro",
        desc_fr: "Raviolis artisanaux juteux farcis d'agneau parfumé et de coriandre fraîche",
        image: verifyImage("lamb-and-cilantro-soup-dumplings")
      },
      {
        name_en: "Shrimp, Egg & Zucchini Dumplings",
        name_fr: "Raviolis Crevette, Œuf & Courgette",
        desc_en: "Delicate steamed dumplings with fresh chopped prawns, egg, and zucchini",
        desc_fr: "Raviolis cuits à la vapeur aux crevettes fraîches, œuf et courgette",
        image: verifyImage("shrimp-egg-and-zucchini-dumplings")
      },
      {
        name_en: "Vegetarian Garden Dumplings",
        name_fr: "Raviolis Végétariens du Jardin",
        desc_en: "Steamed thin-wrapper dumplings filled with cabbage, wood ear mushrooms, and greens",
        desc_fr: "Raviolis vapeur légers farcis aux champignons asiatiques et légumes verts",
        image: verifyImage("vegetables-dumplings")
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
        desc_fr: "Gâteau au fromage crémeux et onctueux parfumé au yuzu acidulé japonais",
        image: verifyImage("cheese-cake-yuzu")
      },
      {
        name_en: "Strawberry Mochi",
        name_fr: "Mochi à la Fraise",
        desc_en: "Soft and chewy Japanese rice cake filled with sweet strawberry creme",
        desc_fr: "Gâteau de riz gluant moelleux et fondant farci à la crème de fraise",
        image: verifyImage("strawberry-mochi")
      },
      {
        name_en: "Mango Mochi",
        name_fr: "Mochi à la Mangue",
        desc_en: "Soft glutinous rice cake filled with luscious sweet mango filling",
        desc_fr: "Mochi japonais moelleux garni d'une crème fondante à la mangue douce",
        image: verifyImage("mango-mochi")
      },
      {
        name_en: "Matcha Mochi",
        name_fr: "Mochi au Matcha",
        desc_en: "Chewy Japanese rice dessert infused with earthy stone-ground matcha green tea",
        desc_fr: "Mochi traditionnel parfumé à la poudre fine de thé vert matcha",
        image: verifyImage("matcha-mochi")
      },
      {
        name_en: "Condensed Milk Toast",
        name_fr: "Pain Doré au Lait Concentré",
        desc_en: "Hong Kong style thick golden toast drizzled with creamy sweet condensed milk",
        desc_fr: "Épaisse tranche de pain brioché doré arrosée de lait concentré sucré",
        image: verifyImage("condensed-milk-toast")
      },
      {
        name_en: "Ice Cream Toast",
        name_fr: "Pain Grillé à la Crème Glacée",
        desc_en: "Crispy buttered toast topped with rich artisanal ice cream and sweet drizzles",
        desc_fr: "Pain croustillant au beurre surmonté d'une boule de crème glacée artisanale",
        image: verifyImage("ice-cream-toast")
      },
      {
        name_en: "Ice Cream Waffles",
        name_fr: "Gaufres à la Crème Glacée",
        desc_en: "Warm golden Belgian waffles paired with chilled creamy ice cream scoop",
        desc_fr: "Gaufres dorées croustillantes accompagnées d'une boule de crème glacée",
        image: verifyImage("ice-cream-waffles")
      },
      {
        name_en: "Golden Fried Buns",
        name_fr: "Petits Pains Dorés",
        desc_en: "Deep-fried sweet Chinese mantou buns served with condensed milk dip (1 pc)",
        desc_fr: "Pain brioché chinois doré et croustillant servi avec lait concentré sucré (1 mc)",
        image: verifyImage("golden-buns")
      },
      {
        name_en: "Steamed Mini Buns",
        name_fr: "Petits Pains Cuits à la Vapeur",
        desc_en: "Fluffy pillowy sweet steamed milk buns (1 pc)",
        desc_fr: "Petits pains briochés cuits à la vapeur douce et moelleux (1 mc)",
        image: verifyImage("steamed-mini-buns")
      },
      {
        name_en: "Sesame Balls",
        name_fr: "Boules de Sésame Croustillantes",
        desc_en: "Chewy glutinous rice balls coated in fragrant sesame seeds with sweet filling (1 pc)",
        desc_fr: "Boules de riz gluant croustillantes au sésame doré farcies de pâte sucrée (1 mc)",
        image: verifyImage("sesame-balls")
      },
      {
        name_en: "Artisanal Ice Cream",
        name_fr: "Crème Glacée Artisanale",
        desc_en: "Refreshing premium ice cream scoop in choice of classic and Asian flavors",
        desc_fr: "Boule de crème glacée onctueuse aux saveurs traditionnelles et asiatiques",
        image: verifyImage("ice-cream")
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
        image: verifyImage("hong-kong-style-milk-tea")
      },
      {
        name_en: "Taro Milk Tea",
        name_fr: "Thé au Lait de Taro",
        desc_en: "Creamy sweet purple taro infused milk tea served cold",
        desc_fr: "Boisson douce et crémeuse au taro violet parfumée au thé",
        image: verifyImage("taro-milk-tea")
      },
      {
        name_en: "Strawberry Matcha Latte",
        name_fr: "Latte Matcha à la Fraise",
        desc_en: "Layered beverage with real strawberry puree, whole milk, and stone-ground Japanese matcha",
        desc_fr: "Boisson étagée avec purée de fraises fraîches, lait frais et matcha pur",
        image: verifyImage("strawberry-matcha-latte")
      },
      {
        name_en: "Mango Matcha Latte",
        name_fr: "Latte Matcha à la Mangue",
        desc_en: "Vibrant combination of sweet mango nectar, creamy milk, and premium matcha green tea",
        desc_fr: "Cocktail gourmand au nectar de mangue, lait onctueux et thé vert matcha",
        image: verifyImage("mango-matcha-latte")
      },
      {
        name_en: "Mango Passion Slush",
        name_fr: "Slush Mangue & Fruit de la Passion",
        desc_en: "Icy blended tropical slush bursting with ripe mango and tart passion fruit flavors",
        desc_fr: "Boisson glacée frappée aux fruits tropicaux, mangue mûre et fruit de la passion",
        image: verifyImage("mango-passion-slush")
      },
      {
        name_en: "Strawberry Slush",
        name_fr: "Slush Givré à la Fraise",
        desc_en: "Refreshing ice-blended smoothie prepared with sweet crushed strawberries",
        desc_fr: "Slush rafraîchissant préparé avec de vraies fraises sucrées finement broyées",
        image: verifyImage("strawberry-slush")
      },
      {
        name_en: "Fresh Lemonade",
        name_fr: "Limonade Fraîche Maison",
        desc_en: "Hand-squeezed refreshing citrus lemonade served over ice",
        desc_fr: "Limonade rafraîchissante pressée à la main et servie bien glacée",
        image: verifyImage("limonade")
      },
      {
        name_en: "Fresh Coconut Water",
        name_fr: "Eau de Coco Naturelle",
        desc_en: "Pure hydrating natural coconut water chilled to perfection",
        desc_fr: "Eau de coco naturelle 100% pure, désaltérante et bien fraîche",
        image: verifyImage("coconut-water")
      },
      {
        name_en: "Unsweetened Oolong Tea",
        name_fr: "Thé Oolong Sans Sucre",
        desc_en: "Crisp and roasted chilled premium whole-leaf oolong tea",
        desc_fr: "Infusion de thé oolong torréfié sans sucre ajouté, légère et désaltérante",
        image: verifyImage("oolong-teano-sugar")
      },
      {
        name_en: "Sparkling Mineral Water (S.Pellegrino)",
        name_fr: "Eau Minérale Pétillante (S.Pellegrino)",
        desc_en: "Chilled bottle of premium sparkling mineral water",
        desc_fr: "Bouteille en verre d'eau minérale pétillante d'Italie",
        image: verifyImage("sparkling-water")
      },
      {
        name_en: "Milkis Korean Carbonated Drink",
        name_fr: "Milkis Soda Coréen au Lait",
        desc_en: "Sparkling milk soda combining fizzy carbonation with smooth yogurt sweetness",
        desc_fr: "Célèbre soda coréen pétillant et doux au goût lacté et fruité",
        image: verifyImage("milkis")
      },
      {
        name_en: "Mexican Coca-Cola (Glass Bottle)",
        name_fr: "Coca-Cola Mexicain (Bouteille en Verre)",
        desc_en: "Authentic imported Coca-Cola sweetened with 100% real cane sugar",
        desc_fr: "Authentique Coca-Cola importé pur sucre de canne en bouteille de verre",
        image: verifyImage("coca-cola-mexican-bottled")
      },
      {
        name_en: "Diet Coke",
        name_fr: "Coke Diète",
        desc_en: "Zero calorie refreshing crisp carbonated soft drink",
        desc_fr: "Boisson gazeuse rafraîchissante sans calories",
        image: verifyImage("diet-coke")
      },
      {
        name_en: "Red Bull Energy Drink (Zero)",
        name_fr: "Boisson Énergisante Red Bull (Zéro)",
        desc_en: "Chilled can of sugar-free Red Bull energy drink",
        desc_fr: "Canette rafraîchissante de boisson énergisante sans sucre",
        image: verifyImage("red-bull-zero")
      },
      {
        name_en: "Fresh Brewed Coffee",
        name_fr: "Café Fraîchement Infusé",
        desc_en: "Rich and dark roasted aromatic hot brewed coffee",
        desc_fr: "Tasse de café noir fraîchement préparé aux grains torréfiés",
        image: verifyImage("coffee")
      }
    ]
  }
];

// Write to src/data/menuData.ts
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

export const MENU_CATEGORIES: MenuCategory[] = ${JSON.stringify(categories, null, 2)};
`;

fs.writeFileSync('src/data/menuData.ts', fileContent, 'utf8');
console.log('Successfully wrote src/data/menuData.ts');

let totalDishes = 0;
categories.forEach(c => {
  totalDishes += c.items.length;
  console.log(`- ${c.title_en}: ${c.items.length} dishes`);
});
console.log(`TOTAL DISHES IN MENU: ${totalDishes}`);
