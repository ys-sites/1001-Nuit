export interface MenuItem {
  name_en: string;
  name_fr: string;
  desc_en?: string;
  desc_fr?: string;
  price?: string;
  image: string;
}

export interface MenuCategory {
  title_en: string;
  title_fr: string;
  items: MenuItem[];
}

export const AYCE_MENU_CATEGORIES: MenuCategory[] = [
  {
    "title_en": "APPETIZERS",
    "title_fr": "ENTRÉES",
    "items": [
      {
        "name_en": "Miso Soup",
        "name_fr": "Soupe Miso",
        "desc_en": "Classic Japanese dashi broth with silken tofu, wakame seaweed, and scallions",
        "desc_fr": "Bouillon dashi traditionnel au miso, tofu soyeux, algues wakamé et oignons verts",
        "image": "/menu/optimized/ayce/miso-soup.webp"
      },
      {
        "name_en": "Hot and Sour Soup",
        "name_fr": "Soupe Aigre-Piquante",
        "desc_en": "Zesty peppered broth with bamboo shoots, wood-ear mushrooms, and tofu",
        "desc_fr": "Bouillon relevé et vinaigré aux pousses de bambou et champignons noirs",
        "image": "/menu/optimized/ayce/hot-and-sour-soup.webp"
      },
      {
        "name_en": "Special Soup of the Week",
        "name_fr": "Soupe Spéciale du Chef",
        "desc_en": "Slow-simmered weekly house soup prepared with seasonal fresh ingredients",
        "desc_fr": "Soupe maison mijotée préparée selon l'inspiration du chef",
        "image": "/menu/optimized/ayce/special-soup-of-the-week.webp"
      },
      {
        "name_en": "Salted Edamame",
        "name_fr": "Edamame Salé",
        "desc_en": "Warm steamed young soybeans sprinkled with coarse mineral sea salt",
        "desc_fr": "Fèves de soya fraîches à la vapeur saupoudrées de gros sel marin",
        "image": "/menu/optimized/ayce/salted-edamame.webp"
      },
      {
        "name_en": "Kimchi",
        "name_fr": "Kimchi Épicé",
        "desc_en": "Artisanal Korean fermented napa cabbage with chili peppers and garlic",
        "desc_fr": "Chou napa fermenté traditionnel aux piments coréens",
        "image": "/menu/optimized/ayce/kimchi.webp"
      },
      {
        "name_en": "Ginger & Wasabi",
        "name_fr": "Gingembre & Wasabi",
        "desc_en": "Sweet shaved pickled ginger root with Japanese wasabi horseradish",
        "desc_fr": "Fines lamelles de gingembre mariné et raifort wasabi",
        "image": "/menu/optimized/ayce/ginger-and-wasabi.webp"
      }
    ]
  },
  {
    "title_en": "FRIED FAVORITES",
    "title_fr": "FRITURES FAVORITES",
    "items": [
      {
        "name_en": "Fried Calamari",
        "name_fr": "Calmars Frits Croustillants",
        "desc_en": "Tender calamari rings lightly dusted and golden fried with dip",
        "desc_fr": "Anneaux de calmar croustillants servis dorés avec trempette",
        "image": "/menu/optimized/ayce/fried-calamari.webp"
      },
      {
        "name_en": "Fried Chicken Wings",
        "name_fr": "Ailes de Poulet Frites",
        "desc_en": "Extra crispy seasoned jumbo chicken wings (1 pc)",
        "desc_fr": "Aile de poulet croustillante assaisonnée à la perfection (1 mc)",
        "image": "/menu/optimized/ayce/fried-chicken-wings.webp"
      },
      {
        "name_en": "Teriyaki Chicken",
        "name_fr": "Poulet Teriyaki",
        "desc_en": "Grilled juicy chicken glazed in sweet savory house teriyaki sauce",
        "desc_fr": "Morceaux de poulet grillés nappés de sauce teriyaki maison",
        "image": "/menu/optimized/ayce/teriyaki-chicken.webp"
      },
      {
        "name_en": "Teriyaki Salmon",
        "name_fr": "Saumon Teriyaki",
        "desc_en": "Seared Atlantic salmon fillet drizzled with rich teriyaki glaze",
        "desc_fr": "Filet de saumon atlantique poêlé et laqué au teriyaki",
        "image": "/menu/optimized/ayce/teriyaki-salmon.webp"
      },
      {
        "name_en": "Salt & Pepper Shrimp",
        "name_fr": "Crevettes Sel & Poivre",
        "desc_en": "Wok-tossed jumbo prawns with five-spice sea salt, garlic, and chilies (2 pcs)",
        "desc_fr": "Grosses crevettes sautées au wok au sel épicé, ail et piments (2 mcx)",
        "image": "/menu/optimized/ayce/salt-and-pepper-shrimp.webp"
      },
      {
        "name_en": "Creamy Mussels",
        "name_fr": "Moules Crémeuses",
        "desc_en": "Baked half-shell green mussels baked in decadent savory cream sauce (1 pc)",
        "desc_fr": "Moule gratinée nappée d'une sauce crémeuse savoureuse (1 mc)",
        "image": "/menu/optimized/ayce/creamy-mussels.webp"
      },
      {
        "name_en": "Wasabi Cream Mussels",
        "name_fr": "Moules à la Crème Wasabi",
        "desc_en": "Baked green mussel with a gentle zesty wasabi garlic aioli (1 pc)",
        "desc_fr": "Moule cuite au four avec aïoli parfumé au wasabi doux (1 mc)",
        "image": "/menu/optimized/ayce/wasabi-cream-mussels.webp"
      },
      {
        "name_en": "Spring Rolls",
        "name_fr": "Rouleaux de Printemps Croustillants",
        "desc_en": "Crispy fried golden vegetable spring roll with sweet plum sauce (1 pc)",
        "desc_fr": "Rouleau croustillant aux légumes frais et sauce aux prunes (1 mc)",
        "image": "/menu/optimized/ayce/spring-rolls.webp"
      },
      {
        "name_en": "Fried Crab Stick",
        "name_fr": "Goberge de Crabe Frite",
        "desc_en": "Golden crispy tempura-battered premium crab stick (1 pc)",
        "desc_fr": "Bâtonnet de goberge de crabe enrobé de chapelure croustillante (1 mc)",
        "image": "/menu/optimized/ayce/fried-crab-stick.webp"
      },
      {
        "name_en": "Fried Scallops",
        "name_fr": "Pétoncles Frits",
        "desc_en": "Breaded deep-fried sea scallop with house dipping sauce (1 pc)",
        "desc_fr": "Pétoncle doré et croustillant servi avec sauce d'accompagnement (1 mc)",
        "image": "/menu/optimized/ayce/fried-scallops.webp"
      },
      {
        "name_en": "Fried Vegetable Dumplings",
        "name_fr": "Raviolis Végétariens Frits (Gyoza)",
        "desc_en": "Pan-crisped dumpling packed with seasoned minced garden vegetables (1 pc)",
        "desc_fr": "Ravioli japonais poêlé croustillant farci aux légumes frais (1 mc)",
        "image": "/menu/optimized/ayce/fried-vegetable-dumplings.webp"
      },
      {
        "name_en": "Takoyaki",
        "name_fr": "Takoyaki (Boulettes de Poulpe)",
        "desc_en": "Savory Japanese octopus ball topped with sweet eel glaze and kewpie mayo (1 pc)",
        "desc_fr": "Bouchée japonaise au poulpe garnie de sauce sucrée et bonite (1 mc)",
        "image": "/menu/optimized/ayce/takoyaki.webp"
      },
      {
        "name_en": "French Fries",
        "name_fr": "Frites Dorées",
        "desc_en": "Crisp golden potato fries seasoned with sea salt",
        "desc_fr": "Frites croustillantes assaisonnées au sel fin",
        "image": "/menu/optimized/ayce/french-fries.webp"
      }
    ]
  },
  {
    "title_en": "HOT KITCHEN",
    "title_fr": "PLATS CHAUDS",
    "items": [
      {
        "name_en": "General Tao Chicken",
        "name_fr": "Poulet Général Tao",
        "desc_en": "Crispy chicken tossed in signature sweet and savory General Tao sauce",
        "desc_fr": "Morceaux de poulet croustillants enrobés de notre sauce Général Tao",
        "image": "/menu/optimized/ayce/general-tao-chicken.webp"
      },
      {
        "name_en": "Beef with Broccoli",
        "name_fr": "Bœuf au brocoli",
        "desc_en": "Tender sliced beef wok-tossed with fresh crisp broccoli florets",
        "desc_fr": "Émincé de bœuf tendre sauté au wok avec brocolis frais",
        "image": "/menu/optimized/ayce/beef-with-broccoli.webp"
      },
      {
        "name_en": "Chicken Fried Rice",
        "name_fr": "Riz frit au poulet",
        "desc_en": "Wok-fried Jasmine rice with tender chicken, eggs, and fresh scallions",
        "desc_fr": "Riz au jasmin sauté au wok avec poulet tendre, œuf et oignons verts",
        "image": "/menu/optimized/ayce/chicken-fried-rice.webp"
      },
      {
        "name_en": "Chicken Pad Thai",
        "name_fr": "Pad Thaï au poulet",
        "desc_en": "Traditional stir-fried rice noodles with chicken, bean sprouts, and peanuts",
        "desc_fr": "Nouilles de riz traditionnelles sautées avec poulet et fèves germées",
        "image": "/menu/optimized/ayce/chicken-pad-thai.webp"
      },
      {
        "name_en": "Chicken Udon",
        "name_fr": "Udon sauté au poulet",
        "desc_en": "Thick Japanese udon noodles stir-fried with chicken and fresh vegetables",
        "desc_fr": "Épaisses nouilles udon sautées au poulet et légumes frais",
        "image": "/menu/optimized/ayce/chicken-udon.webp"
      },
      {
        "name_en": "Black Pepper Chicken Spaghetti",
        "name_fr": "Spaghetti au poulet poivre noir",
        "desc_en": "Hong Kong style spaghetti with tender chicken in aromatic black pepper sauce",
        "desc_fr": "Spaghetti sauté à la hong-kongaise avec poulet et sauce au poivre noir",
        "image": "/menu/optimized/ayce/black-pepper-chicken-spaghetti.webp"
      },
      {
        "name_en": "Singapore Noodles",
        "name_fr": "Nouilles à la singapourienne",
        "desc_en": "Curry vermicelli noodles stir-fried with chicken, bell peppers, and bean sprouts",
        "desc_fr": "Vermicelles sautés au curry jaune avec poulet et poivrons",
        "image": "/menu/optimized/ayce/singapore-noodles.webp"
      },
      {
        "name_en": "Curry Chicken Cutlet",
        "name_fr": "Escalope de poulet au curry",
        "desc_en": "Crispy panko chicken cutlet smothered in rich Hong Kong curry sauce",
        "desc_fr": "Escalope de poulet croustillante panko nappée d'une riche sauce curry",
        "image": "/menu/optimized/ayce/curry-chicken-cutlet.webp"
      },
      {
        "name_en": "Curry Chicken Skewers",
        "name_fr": "Brochettes de Poulet au Curry",
        "desc_en": "Tender grilled chicken skewers infused with aromatic curry spices",
        "desc_fr": "Brochettes de poulet grillées et marinées aux épices douces de curry",
        "image": "/menu/optimized/ayce/curry-chicken-skewers.webp"
      },
      {
        "name_en": "Vegetable Fried Rice",
        "name_fr": "Riz frit aux légumes",
        "desc_en": "Fragrant fried rice packed with colorful fresh garden vegetables",
        "desc_fr": "Riz sauté savoureux et parfumé aux petits légumes croquants",
        "image": "/menu/optimized/ayce/vegetable-fried-rice.webp"
      },
      {
        "name_en": "Curry Fried Rice",
        "name_fr": "Riz frit au curry",
        "desc_en": "Golden aromatic curry fried rice infused with herbs and mild spices",
        "desc_fr": "Riz doré sauté aux arômes de curry doux et fines herbes",
        "image": "/menu/optimized/ayce/curry-fried-rice.webp"
      },
      {
        "name_en": "White Rice",
        "name_fr": "Riz blanc à la vapeur",
        "desc_en": "Steamed premium Jasmine fragrant rice",
        "desc_fr": "Bol de riz blanc au jasmin cuit à la vapeur",
        "image": "/menu/optimized/ayce/white-rice.webp"
      }
    ]
  },
  {
    "title_en": "TEMPURA SELECTION",
    "title_fr": "SÉLECTION TEMPURA",
    "items": [
      {
        "name_en": "Tempura Shrimp",
        "name_fr": "Tempura de Crevette",
        "desc_en": "Lightly battered crisp jumbo shrimp fried to airy perfection (1 pc)",
        "desc_fr": "Crevette géante panée tempura légère et croustillante (1 mc)",
        "image": "/menu/optimized/ayce/tempura-shrimp.webp"
      },
      {
        "name_en": "Tempura Sweet Potato",
        "name_fr": "Tempura de Patate Douce",
        "desc_en": "Golden slices of sweet potato enveloped in delicate crispy tempura (1 pc)",
        "desc_fr": "Tranche de patate douce fondante dans une panure tempura dorée (1 mc)",
        "image": "/menu/optimized/ayce/tempura-sweet-potato.webp"
      },
      {
        "name_en": "Tempura Broccoli",
        "name_fr": "Tempura de Brocoli",
        "desc_en": "Fresh green broccoli florets fried in crunchy golden tempura batter (1 pc)",
        "desc_fr": "Fleurette de brocoli frais enrobée de pâte tempura croquante (1 mc)",
        "image": "/menu/optimized/ayce/tempura-broccoli.webp"
      },
      {
        "name_en": "Tempura Mushroom",
        "name_fr": "Tempura de Champignon",
        "desc_en": "Juicy whole mushroom cap enveloped in delicate Japanese batter (1 pc)",
        "desc_fr": "Champignon juteux frit dans une légère panure japonaise (1 mc)",
        "image": "/menu/optimized/ayce/tempura-mushroom.webp"
      },
      {
        "name_en": "Tempura Eggplant",
        "name_fr": "Tempura d'Aubergine",
        "desc_en": "Tender Japanese eggplant slice coated in airy golden tempura (1 pc)",
        "desc_fr": "Tranche d'aubergine tendre et fondante sous panure croustillante (1 mc)",
        "image": "/menu/optimized/ayce/tempura-eggplant.webp"
      },
      {
        "name_en": "Tempura Zucchini",
        "name_fr": "Tempura de Courgette",
        "desc_en": "Fresh sliced zucchini fried in crisp savory tempura coating (1 pc)",
        "desc_fr": "Rondelle de courgette fraîche frite à la perfection (1 mc)",
        "image": "/menu/optimized/ayce/tempura-zucchini.webp"
      }
    ]
  },
  {
    "title_en": "SMALL ROLLS",
    "title_fr": "PETITS ROULEAUX",
    "items": [
      {
        "name_en": "Avocado Roll",
        "name_fr": "Rouleau Avocat",
        "desc_en": "Classic creamy avocado rolled with seasoned sushi rice (3 pcs)",
        "desc_fr": "Rouleau classique à l'avocat crémeux et riz vinaigré (3 mcx)",
        "image": "/menu/optimized/ayce/avocado-roll.webp"
      },
      {
        "name_en": "Cucumber Roll",
        "name_fr": "Rouleau Concombre",
        "desc_en": "Crisp julienned cucumber rolled in nori seaweed (3 pcs)",
        "desc_fr": "Concombre frais et croquant roulé dans une feuille de nori (3 mcx)",
        "image": "/menu/optimized/ayce/cucumber-roll.webp"
      },
      {
        "name_en": "Salmon Roll",
        "name_fr": "Rouleau Saumon",
        "desc_en": "Fresh Atlantic salmon rolled in nori and sushi rice (3 pcs)",
        "desc_fr": "Saumon frais enveloppé de riz et d'algue nori (3 mcx)",
        "image": "/menu/optimized/ayce/salmon-roll.webp"
      },
      {
        "name_en": "Tuna Roll",
        "name_fr": "Rouleau Thon",
        "desc_en": "Pure ruby red tuna center rolled in traditional nori wrapper (3 pcs)",
        "desc_fr": "Thon rouge pur enveloppé dans la tradition japonaise (3 mcx)",
        "image": "/menu/optimized/ayce/tuna-roll.webp"
      },
      {
        "name_en": "Crab Roll",
        "name_fr": "Rouleau Goberge de Crabe",
        "desc_en": "Sweet tender crab meat rolled in nori (3 pcs)",
        "desc_fr": "Bâtonnet de crabe tendre roulé dans le nori (3 mcx)",
        "image": "/menu/optimized/ayce/crab-roll.webp"
      }
    ]
  },
  {
    "title_en": "HAND ROLLS",
    "title_fr": "CORNETS TEMAKI",
    "items": [
      {
        "name_en": "Salmon Hand Roll",
        "name_fr": "Cornet au Saumon (Temaki)",
        "desc_en": "Hand-rolled crispy seaweed cone packed with sushi rice and salmon",
        "desc_fr": "Cône croustillant d'algue nori farci de saumon frais et riz vinaigré",
        "image": "/menu/optimized/ayce/salmon-hand-roll.webp"
      },
      {
        "name_en": "Spicy Salmon Hand Roll",
        "name_fr": "Cornet au Saumon Épicé",
        "desc_en": "Temaki cone filled with zesty spicy salmon tartare and tempura crunch",
        "desc_fr": "Cornet garni de tartare de saumon épicé et flocons de tempura",
        "image": "/menu/optimized/ayce/spicy-salmon-hand-roll.webp"
      },
      {
        "name_en": "Avocado Hand Roll",
        "name_fr": "Cornet à l'Avocat",
        "desc_en": "Temaki seaweed cone layered with luscious avocado and toasted sesame",
        "desc_fr": "Cornet temaki garni d'avocat et graines de sésame grillées",
        "image": "/menu/optimized/ayce/avocado-hand-roll.webp"
      },
      {
        "name_en": "Cucumber Hand Roll",
        "name_fr": "Cornet au Concombre",
        "desc_en": "Crisp cucumber spears wrapped in fresh nori seaweed cone",
        "desc_fr": "Bâtonnets de concombre croquants dans un cornet croustillant",
        "image": "/menu/optimized/ayce/cucumber-hand-roll.webp"
      },
      {
        "name_en": "Crab Stick Hand Roll",
        "name_fr": "Cornet Goberge de Crabe",
        "desc_en": "Crab stick, avocado, and Japanese mayo wrapped in a crisp nori cone",
        "desc_fr": "Goberge de crabe, avocat et mayonnaise japonaise en cornet",
        "image": "/menu/optimized/ayce/crab-stick-hand-roll.webp"
      }
    ]
  },
  {
    "title_en": "SUSHI PIZZA",
    "title_fr": "PIZZA SUSHI",
    "items": [
      {
        "name_en": "Crispy Sushi Pizza",
        "name_fr": "Pizza Sushi Croustillante",
        "desc_en": "Golden crispy fried rice patty base crowned with fish tartare, tobiko, and sauce",
        "desc_fr": "Galette de riz dorée garnie de tartare de poisson, tobiko et sauces",
        "image": "/menu/optimized/ayce/pizza-sushi-croustillante.webp"
      },
      {
        "name_en": "Crab Stick Sushi Pizza",
        "name_fr": "Pizza Sushi au Crabe",
        "desc_en": "Crunchy rice crust layered with seasoned crab stick, avocado, and spicy mayo",
        "desc_fr": "Croûte de riz panée et frite surmontée de crabe assaisonné et avocat",
        "image": "/menu/optimized/ayce/crab-stick-sushi-pizza.webp"
      }
    ]
  },
  {
    "title_en": "MAKI ROLLS",
    "title_fr": "ROULEAUX MAKI",
    "items": [
      {
        "name_en": "1001 Nuit Signature Roll",
        "name_fr": "Rouleau Signature 1001 Nuit",
        "desc_en": "House specialty maki crowned with fresh fish, tobiko, avocado, and sauces (4 pcs)",
        "desc_fr": "Maki signature du chef garni de poissons fins, avocat et tobiko (4 mcx)",
        "image": "/menu/optimized/ayce/1001-nuit.webp"
      },
      {
        "name_en": "Philadelphia Roll",
        "name_fr": "Rouleau Philadelphie",
        "desc_en": "Rich Philadelphia cream cheese paired with silky fresh salmon and avocado (4 pcs)",
        "desc_fr": "Saumon délicat, fromage à la crème onctueux et avocat frais (4 mcx)",
        "image": "/menu/optimized/ayce/philadelphia-roll.webp"
      },
      {
        "name_en": "Dynamite Roll",
        "name_fr": "Rouleau Dynamite",
        "desc_en": "Crispy tempura shrimp, avocado, cucumber, and spicy mayo drizzle (4 pcs)",
        "desc_fr": "Crevette tempura croustillante, avocat, concombre et mayo épicée (4 mcx)",
        "image": "/menu/optimized/ayce/dynamite.webp"
      },
      {
        "name_en": "Dragon Eye Roll",
        "name_fr": "Rouleau Œil de Dragon",
        "desc_en": "Lightly fried crispy specialty roll featuring salmon and white fish (4 pcs)",
        "desc_fr": "Rouleau frit croustillant garni de saumon frais et poisson blanc (4 mcx)",
        "image": "/menu/optimized/ayce/dragon-eye.webp"
      },
      {
        "name_en": "Volcano Roll",
        "name_fr": "Rouleau Volcan",
        "desc_en": "Warm torched spicy seafood lava mix erupting over a seasoned California roll base (4 pcs)",
        "desc_fr": "Mélange de fruits de mer épicés gratinés sur rouleau californien (4 mcx)",
        "image": "/menu/optimized/ayce/volcano.webp"
      },
      {
        "name_en": "Kamikaze Roll",
        "name_fr": "Rouleau Kamikaze",
        "desc_en": "Zesty spicy tuna or salmon tartare with crisp tempura crunch and avocado (4 pcs)",
        "desc_fr": "Tartare épicé relevé, flocons de tempura croustillants et avocat (4 mcx)",
        "image": "/menu/optimized/ayce/kamikaze.webp"
      },
      {
        "name_en": "California Roll",
        "name_fr": "Rouleau Californie",
        "desc_en": "Classic combination of crab meat, ripe avocado, cucumber, and toasted sesame (4 pcs)",
        "desc_fr": "Crabe savoureux, avocat mûr, concombre et graines de sésame (4 mcx)",
        "image": "/menu/optimized/ayce/california-roll.webp"
      },
      {
        "name_en": "Salmon Avocado Roll",
        "name_fr": "Rouleau Saumon & Avocat",
        "desc_en": "Silky fresh Atlantic salmon with creamy sliced avocado (3 pcs)",
        "desc_fr": "Alliance classique de saumon atlantique frais et avocat onctueux (3 mcx)",
        "image": "/menu/optimized/ayce/salmon-avocado-roll.webp"
      },
      {
        "name_en": "Spicy Salmon Roll",
        "name_fr": "Rouleau Saumon Épicé",
        "desc_en": "Hand-chopped fresh salmon tossed in spicy sriracha mayo and tempura crunch (4 pcs)",
        "desc_fr": "Saumon frais haché en sauce épicée avec flocons tempura (4 mcx)",
        "image": "/menu/optimized/ayce/spicy-salmon-roll.webp"
      },
      {
        "name_en": "Rainbow Roll",
        "name_fr": "Rouleau Arc-en-Ciel",
        "desc_en": "California roll blanketed with assorted fresh sashimi salmon, tuna, and avocado (4 pcs)",
        "desc_fr": "Californie drapé de tranches variées de saumon, thon et avocat (4 mcx)",
        "image": "/menu/optimized/ayce/rain-bow-roll.webp"
      },
      {
        "name_en": "Crispy Chicken Roll",
        "name_fr": "Rouleau Poulet Croustillant",
        "desc_en": "Golden crispy chicken breast with cucumber and sweet teriyaki drizzle (4 pcs)",
        "desc_fr": "Morceaux de poulet pané doré, concombre et sauce teriyaki douce (4 mcx)",
        "image": "/menu/optimized/ayce/crispy-chicken-roll.webp"
      },
      {
        "name_en": "Mango Roll",
        "name_fr": "Rouleau à la Mangue",
        "desc_en": "Refreshing ripe mango slices wrapped with crab stick and cream cheese (3 pcs)",
        "desc_fr": "Tranches de mangue douce enveloppant un cœur gourmand et frais (3 mcx)",
        "image": "/menu/optimized/ayce/mango-roll.webp"
      },
      {
        "name_en": "Vegetable Roll",
        "name_fr": "Rouleau Végétarien",
        "desc_en": "Crisp assorted garden vegetables rolled in seasoned sushi rice (4 pcs)",
        "desc_fr": "Légumes du marché frais et croquants roulés dans le nori (4 mcx)",
        "image": "/menu/optimized/ayce/vegetable-roll.webp"
      },
      {
        "name_en": "Mango Rice Paper Roll",
        "name_fr": "Rouleau Feuille de Riz à la Mangue",
        "desc_en": "Delicate Vietnamese rice paper rolled with sweet mango, avocado, and greens (4 pcs)",
        "desc_fr": "Feuille de riz légère garnie de mangue fraîche, avocat et herbes (4 mcx)",
        "image": "/menu/optimized/ayce/mango-rice-paper-roll.webp"
      },
      {
        "name_en": "Chicken Rice Paper Roll",
        "name_fr": "Rouleau Feuille de Riz au Poulet",
        "desc_en": "Grilled chicken and crisp salad greens tightly wrapped in translucent rice paper (4 pcs)",
        "desc_fr": "Poulet émincé et salade fraîche dans une galette de riz transparente (4 mcx)",
        "image": "/menu/optimized/ayce/chicken-rice-paper-roll.webp"
      },
      {
        "name_en": "Spicy Salmon Gunkan",
        "name_fr": "Gunkan Saumon Épicé",
        "desc_en": "Battleship nori wrap filled with overflowing spicy salmon tartare (1 pc)",
        "desc_fr": "Bouchée gunkan débordante de tartare de saumon piquant (1 mc)",
        "image": "/menu/optimized/ayce/spicy-salmon-gunka.webp"
      },
      {
        "name_en": "Crab Stick Gunkan",
        "name_fr": "Gunkan Goberge de Crabe",
        "desc_en": "Nori wrapped sushi boat topped with creamy crab meat salad (1 pc)",
        "desc_fr": "Bouchée gunkan garnie de salade de crabe crémeuse (1 mc)",
        "image": "/menu/optimized/ayce/crab-stick-gunkan.webp"
      }
    ]
  },
  {
    "title_en": "NIGIRI",
    "title_fr": "NIGIRI",
    "items": [
      {
        "name_en": "Seared Salmon Nigiri",
        "name_fr": "Nigiri Saumon Flambé",
        "desc_en": "Flame-torched Atlantic salmon over sushi rice with caramelised teriyaki glaze (1 pc)",
        "desc_fr": "Saumon atlantique légèrement saisi à la flamme et glacé au teriyaki (1 mc)",
        "image": "/menu/optimized/ayce/seared-salmon-nigiri.webp"
      },
      {
        "name_en": "Sweet Shrimp Nigiri",
        "name_fr": "Nigiri Crevette Douce (Amaebi)",
        "desc_en": "Delicate sweet raw shrimp delicately placed atop hand-pressed sushi rice (1 pc)",
        "desc_fr": "Crevette douce crue posée sur riz vinaigré façonné à la main (1 mc)",
        "image": "/menu/optimized/ayce/sweet-shrimp-nigiri.webp"
      },
      {
        "name_en": "Salmon Rose",
        "name_fr": "Rose de Saumon",
        "desc_en": "Artfully rolled salmon petals shaped into a blooming rose with spicy mayo and tobiko (1 pc)",
        "desc_fr": "Pétales de saumon frais sculptés en forme de rose avec tobiko (1 mc)",
        "image": "/menu/optimized/ayce/salmon-rose.webp"
      },
      {
        "name_en": "Salmon Nigiri",
        "name_fr": "Nigiri au Saumon",
        "desc_en": "Prime cut fresh Atlantic salmon over seasoned sushi rice (1 pc)",
        "desc_fr": "Tranche de saumon atlantique frais posée sur riz vinaigré (1 mc)",
        "image": "/menu/optimized/ayce/salmon-nigiri.webp"
      },
      {
        "name_en": "Tuna Nigiri",
        "name_fr": "Nigiri au Thon",
        "desc_en": "Ruby red fresh yellowfin tuna over vinegared rice (1 pc)",
        "desc_fr": "Pavé de thon rouge fin posé délicatement sur riz à sushi (1 mc)",
        "image": "/menu/optimized/ayce/tuna-nigiri.webp"
      },
      {
        "name_en": "Shrimp Nigiri",
        "name_fr": "Nigiri à la Crevette (Ebi)",
        "desc_en": "Butterflied cooked tiger prawn draped over sushi rice (1 pc)",
        "desc_fr": "Crevette cuite ouverte en papillon sur riz pressé (1 mc)",
        "image": "/menu/optimized/ayce/shrimp-nigiri.webp"
      },
      {
        "name_en": "Unagi Nigiri",
        "name_fr": "Nigiri à l'Anguille Grillée (Unagi)",
        "desc_en": "Rich caramelized barbecue freshwater eel tied with a ribbon of nori (1 pc)",
        "desc_fr": "Anguille laquée grillée au barbecue avec ruban d'algue (1 mc)",
        "image": "/menu/optimized/ayce/unagi-nigiri.webp"
      },
      {
        "name_en": "Crab Stick Nigiri",
        "name_fr": "Nigiri Goberge de Crabe",
        "desc_en": "Sweet Japanese crab stick over hand-formed sushi rice (1 pc)",
        "desc_fr": "Bâtonnet de crabe doux sur riz vinaigré (1 mc)",
        "image": "/menu/optimized/ayce/crab-stick-nigiri.webp"
      },
      {
        "name_en": "Egg (Tamago) Nigiri",
        "name_fr": "Nigiri Omelette Japonaise (Tamago)",
        "desc_en": "Sweet layered Japanese rolled omelette over sushi rice (1 pc)",
        "desc_fr": "Omelette japonaise sucrée traditionnelle sur lit de riz (1 mc)",
        "image": "/menu/optimized/ayce/egg-tamago-nigiri.webp"
      },
      {
        "name_en": "Escolar Nigiri",
        "name_fr": "Nigiri Escolar (Thon Blanc)",
        "desc_en": "Buttery smooth white escolar sashimi over pressed rice (1 pc)",
        "desc_fr": "Tranche de poisson blanc fondant à souhait sur riz à sushi (1 mc)",
        "image": "/menu/optimized/ayce/escolar-nigiri.webp"
      },
      {
        "name_en": "Surf Clam Nigiri",
        "name_fr": "Nigiri Mactre Rouge (Hokkigai)",
        "desc_en": "Sweet and tender arctic surf clam over sushi rice (1 pc)",
        "desc_fr": "Mactre rouge de l'Arctique douce et croquante sur riz (1 mc)",
        "image": "/menu/optimized/ayce/surf-clam-nigiri.webp"
      }
    ]
  },
  {
    "title_en": "SASHIMI",
    "title_fr": "SASHIMI",
    "items": [
      {
        "name_en": "Salmon Sashimi",
        "name_fr": "Sashimi de Saumon",
        "desc_en": "Thick hand-sliced premium Atlantic salmon sashimi (1 pc)",
        "desc_fr": "Épaisse tranche de saumon atlantique d'une grande fraîcheur (1 mc)",
        "image": "/menu/optimized/ayce/salmon-sashimi.webp"
      },
      {
        "name_en": "Tuna Sashimi",
        "name_fr": "Sashimi de Thon",
        "desc_en": "Tender ruby-red fresh tuna sashimi cut (1 pc)",
        "desc_fr": "Tranche de thon rouge délicatement tranchée au couteau (1 mc)",
        "image": "/menu/optimized/ayce/tuna-sashimi.webp"
      },
      {
        "name_en": "Escolar Sashimi",
        "name_fr": "Sashimi d'Escolar",
        "desc_en": "Velvety smooth white tuna escolar sashimi slice (1 pc)",
        "desc_fr": "Tranche de thon blanc escolar à la texture de beurre (1 mc)",
        "image": "/menu/optimized/ayce/escolar-sashimi.webp"
      },
      {
        "name_en": "Surf Clam Sashimi",
        "name_fr": "Sashimi Mactre Rouge (Hokkigai)",
        "desc_en": "Sweet and crunchy arctic surf clam sashimi (1 pc)",
        "desc_fr": "Mactre rouge douce et croquante préparée en sashimi (1 mc)",
        "image": "/menu/optimized/ayce/surf-clam-sashimi.webp"
      },
      {
        "name_en": "Inari",
        "name_fr": "Poche de Tofu Doux (Inari)",
        "desc_en": "Sweet simmered seasoned tofu pocket (1 pc)",
        "desc_fr": "Poche de tofu japonais mijotée et assaisonnée (1 mc)",
        "image": "/menu/optimized/ayce/inari.webp"
      },
      {
        "name_en": "Tamago Sashimi",
        "name_fr": "Sashimi Omelette Japonaise",
        "desc_en": "Sweet rolled Japanese omelette slices (1 pc)",
        "desc_fr": "Tranche d'omelette japonaise traditionnelle sucrée (1 mc)",
        "image": "/menu/optimized/ayce/tamago.webp"
      },
      {
        "name_en": "Tobiko Cucumber",
        "name_fr": "Tobiko & Concombre",
        "desc_en": "Crunchy flying fish roe served in a crisp cucumber boat (1 pc)",
        "desc_fr": "Œufs de poisson volant croquants dans un berceau de concombre (1 mc)",
        "image": "/menu/optimized/ayce/tobiko-cucumber.webp"
      },
      {
        "name_en": "Crab Stick Sashimi",
        "name_fr": "Sashimi Goberge de Crabe",
        "desc_en": "Sweet Japanese crab stick slices (1 pc)",
        "desc_fr": "Délicieux bâtonnet de goberge de crabe au goût doux et léger (1 mc)",
        "image": "/menu/optimized/ayce/crab-stick-sashimi.webp"
      }
    ]
  },
  {
    "title_en": "DESSERTS",
    "title_fr": "DESSERTS",
    "items": [
      {
        "name_en": "Yuzu Cheesecake",
        "name_fr": "Cheesecake au Yuzu",
        "desc_en": "Velvety smooth cheesecake infused with tart Japanese yuzu citrus",
        "desc_fr": "Gâteau au fromage crémeux parfumé au yuzu acidulé japonais",
        "image": "/menu/optimized/ayce/cheese-cake-yuzu.webp"
      },
      {
        "name_en": "Strawberry Mochi",
        "name_fr": "Mochi à la Fraise",
        "desc_en": "Soft and chewy Japanese rice cake filled with sweet strawberry creme",
        "desc_fr": "Gâteau de riz gluant moelleux farci à la crème de fraise",
        "image": "/menu/optimized/ayce/strawberry-mochi.webp"
      },
      {
        "name_en": "Golden Fried Buns",
        "name_fr": "Petits Pains Dorés",
        "desc_en": "Deep-fried sweet Chinese mantou buns served with condensed milk dip (1 pc)",
        "desc_fr": "Pain brioché chinois doré servi avec lait concentré sucré (1 mc)",
        "image": "/menu/optimized/ayce/golden-buns.webp"
      },
      {
        "name_en": "Steamed Mini Buns",
        "name_fr": "Petits Pains à la Vapeur",
        "desc_en": "Fluffy pillowy sweet steamed milk buns (1 pc)",
        "desc_fr": "Petits pains briochés cuits à la vapeur douce et moelleux (1 mc)",
        "image": "/menu/optimized/ayce/steamed-mini-buns.webp"
      },
      {
        "name_en": "Sesame Balls",
        "name_fr": "Boules de Sésame Croustillantes",
        "desc_en": "Chewy glutinous rice balls coated in fragrant sesame seeds (1 pc)",
        "desc_fr": "Boules de riz gluant croustillantes au sésame doré (1 mc)",
        "image": "/menu/optimized/ayce/sesame-balls.webp"
      },
      {
        "name_en": "Artisanal Ice Cream",
        "name_fr": "Crème Glacée Artisanale",
        "desc_en": "Refreshing premium ice cream scoop in choice of classic and Asian flavors",
        "desc_fr": "Boule de crème glacée onctueuse aux saveurs traditionnelles et asiatiques",
        "image": ""
      }
    ]
  },
  {
    "title_en": "DRINKS",
    "title_fr": "BOISSONS",
    "items": [
      {
        "name_en": "Hong Kong Style Milk Tea",
        "name_fr": "Thé au Lait Style Hong Kong",
        "desc_en": "Rich and silky brewed Ceylon black tea blended with evaporated milk",
        "desc_fr": "Thé noir de Ceylan infusé à point et velouté au lait concentré",
        "image": "/menu/optimized/ayce/hong-kong-style-milk-tea.webp"
      },
      {
        "name_en": "Taro Milk Tea",
        "name_fr": "Thé au Lait de Taro",
        "desc_en": "Creamy sweet purple taro infused milk tea served cold",
        "desc_fr": "Thé au lait onctueux au taro violet doux servi glacé",
        "image": "/menu/optimized/ayce/taro-milk-tea.webp"
      },
      {
        "name_en": "Strawberry Matcha Latte",
        "name_fr": "Matcha Latte à la Fraise",
        "desc_en": "Artisanal layered Japanese Uji matcha with sweet strawberry puree and milk",
        "desc_fr": "Matcha japonais de qualité supérieure superposé de purée de fraise",
        "image": "/menu/optimized/ayce/strawberry-matcha-latte.webp"
      },
      {
        "name_en": "Mango Matcha Latte",
        "name_fr": "Matcha Latte à la Mangue",
        "desc_en": "Vibrant green matcha green tea blended with tropical ripe mango nectar",
        "desc_fr": "Matcha vert japonais combiné à la douceur de la mangue mûre",
        "image": "/menu/optimized/ayce/mango-matcha-latte.webp"
      },
      {
        "name_en": "Fresh Lemonade",
        "name_fr": "Limonade Maison Fraîche",
        "desc_en": "Crisp hand-squeezed citrus lemonade with light sweetness",
        "desc_fr": "Limonade fraîche pressée à la main désaltérante",
        "image": "/menu/optimized/ayce/limonade.webp"
      },
      {
        "name_en": "Fresh Coconut Water",
        "name_fr": "Eau de Coco Fraîche",
        "desc_en": "Pure hydrating sweet natural young coconut water",
        "desc_fr": "Eau de jeune noix de coco naturelle et rafraîchissante",
        "image": "/menu/optimized/ayce/coconut-water.webp"
      },
      {
        "name_en": "Unsweetened Oolong Tea",
        "name_fr": "Thé Oolong Sans Sucre",
        "desc_en": "Fragrant chilled premium brewed roasted oolong tea with zero sugar",
        "desc_fr": "Thé oolong torréfié supérieur pur et sans sucre",
        "image": "/menu/optimized/ayce/oolong-teano-sugar.webp"
      },
      {
        "name_en": "Sparkling Mineral Water",
        "name_fr": "Eau Minérale Pétillante",
        "desc_en": "Chilled effervescent European sparkling mineral water bottle",
        "desc_fr": "Bouteille d'eau minérale gazeuse fraîche et pétillante",
        "image": "/menu/optimized/ayce/sparkling-water.webp"
      },
      {
        "name_en": "Milkis Korean Drink",
        "name_fr": "Boisson Coréenne Milkis",
        "desc_en": "Famous creamy and fizzy Korean yogurt carbonated soft drink",
        "desc_fr": "Boisson gazeuse coréenne pétillante au yogourt doux et rafraîchissant",
        "image": "/menu/optimized/ayce/milkis.webp"
      },
      {
        "name_en": "Mexican Coca-Cola",
        "name_fr": "Coca-Cola Mexicain (Bouteille de Verre)",
        "desc_en": "Classic Coca-Cola imported in glass bottle made with pure cane sugar",
        "desc_fr": "Bouteille en verre au sucre de canne naturel traditionnel",
        "image": "/menu/optimized/ayce/coca-cola-mexican-bottled.webp"
      },
      {
        "name_en": "Diet Coke",
        "name_fr": "Coke Diète",
        "desc_en": "Chilled crisp zero-calorie cola",
        "desc_fr": "Canette de boisson gazeuse diète sans calories",
        "image": "/menu/optimized/ayce/diet-coke.webp"
      },
      {
        "name_en": "Fresh Brewed Coffee",
        "name_fr": "Café Fraîchement Moulu",
        "desc_en": "Aromatic rich roasted coffee brewed fresh daily",
        "desc_fr": "Café torréfié riche et aromatique préparé sur place",
        "image": "/menu/optimized/ayce/coffee.webp"
      }
    ]
  }
];

export const ALACARTE_MENU_CATEGORIES: MenuCategory[] = [
  {
    "title_en": "MAIN DISH",
    "title_fr": "PLATS PRINCIPAUX",
    "items": [
      {
        "name_en": "Broccoli Beef",
        "name_fr": "Bœuf au brocoli",
        "desc_en": "Tender sliced beef wok-tossed with fresh crisp broccoli florets",
        "desc_fr": "Émincé de bœuf tendre sauté au wok avec brocolis frais",
        "image": "/menu/optimized/alacarte/broccoli-beef.webp"
      },
      {
        "name_en": "Sakura Shrimp & Chicken Fried Rice",
        "name_fr": "Riz frit aux crevettes sakura et poulet",
        "desc_en": "Fragrant wok-fried Jasmine rice with savory sakura shrimp, chicken, and egg",
        "desc_fr": "Riz au jasmin sauté au wok avec crevettes sakura savoureuses, poulet et œuf",
        "image": "/menu/optimized/alacarte/sakura-shrimpandchicken-fr.webp"
      },
      {
        "name_en": "General Tao's Chicken",
        "name_fr": "Poulet Général Tao",
        "desc_en": "Crispy chicken tossed in signature sweet and savory General Tao sauce",
        "desc_fr": "Morceaux de poulet croustillants enrobés de notre sauce Général Tao",
        "image": "/menu/optimized/alacarte/general-taos-chicken.webp"
      },
      {
        "name_en": "Takoyaki Chicken on Rice",
        "name_fr": "Poulet takoyaki sur riz",
        "desc_en": "Tender chicken cutlets glazed with Japanese takoyaki sauce over steamed rice",
        "desc_fr": "Morceaux de poulet tendres nappés de sauce takoyaki sur lit de riz",
        "image": "/menu/optimized/alacarte/takoyakichicken-on-rice.webp"
      },
      {
        "name_en": "Spaghetti w/ Beef Black Pepper Sauce",
        "name_fr": "Spaghetti sauté au bœuf sauce poivre noir",
        "desc_en": "Hong Kong cafe style stir-fried spaghetti with beef in aromatic black pepper sauce",
        "desc_fr": "Spaghetti sauté à la hong-kongaise avec bœuf tendre et sauce poivre noir",
        "image": "/menu/optimized/alacarte/spaghetti-w-beef-bpsauce.webp"
      },
      {
        "name_en": "AAA Beef Ribs Sunny Egg Rice",
        "name_fr": "Côtes de bœuf AAA et œuf miroir sur riz",
        "desc_en": "Tender AAA beef ribs glazed in savory sauce served over steamed rice with a sunny egg",
        "desc_fr": "Tendres côtes de bœuf AAA laquées servies sur lit de riz chaud avec œuf miroir",
        "image": "/menu/optimized/alacarte/aaa-beef-ribs-sunnyeggrice.webp"
      },
      {
        "name_en": "HK Style Beef Noodles",
        "name_fr": "Nouilles au bœuf style Hong Kong",
        "desc_en": "Wok-charred wide rice noodles with sliced flank steak and bean sprouts",
        "desc_fr": "Larges nouilles de riz sautées au wok au bœuf émincé et pousses de soja",
        "image": "/menu/optimized/alacarte/hk-style-beef-noodles.webp"
      },
      {
        "name_en": "Pad Thai",
        "name_fr": "Pad Thaï traditionnel",
        "desc_en": "Traditional stir-fried rice noodles with bean sprouts, egg, and crushed peanuts",
        "desc_fr": "Nouilles de riz traditionnelles sautées avec fèves germées et arachides",
        "image": "/menu/optimized/alacarte/pad-thai.webp"
      },
      {
        "name_en": "Pineapple Fried Rice",
        "name_fr": "Riz frit à l'ananas",
        "desc_en": "Fragrant golden fried rice with sweet pineapple chunks, egg, and vegetables",
        "desc_fr": "Riz sauté parfumé aux morceaux d'ananas sucrés, œuf et petits légumes",
        "image": "/menu/optimized/alacarte/pineapple-fried-rice.webp"
      },
      {
        "name_en": "Stir-Fried Beef Udon",
        "name_fr": "Udon sauté au bœuf",
        "desc_en": "Thick Japanese udon noodles wok-tossed with tender beef slices and vegetables",
        "desc_fr": "Épaisses nouilles udon japonaises sautées avec émincé de bœuf et légumes",
        "image": "/menu/optimized/alacarte/fried-beef-udon.webp"
      }
    ]
  },
  {
    "title_en": "SUSHI COMBO",
    "title_fr": "COMBOS SUSHI",
    "items": [
      {
        "name_en": "Sushi Boat Imperial (Boat 1)",
        "name_fr": "Grand Bateau Impérial (Boat 1)",
        "desc_en": "Spectacular wooden sushi boat laden with assorted premium nigiri, sashimi, and specialty rolls",
        "desc_fr": "Magnifique bateau de fête garni de nigiris fins, sashimis et rouleaux de prestige",
        "image": "/menu/optimized/alacarte/boat-1.webp"
      },
      {
        "name_en": "Sushi Boat Royal (Boat 2)",
        "name_fr": "Grand Bateau Royal (Boat 2)",
        "desc_en": "Elaborate multi-level wooden boat loaded with supreme maki collection and chef's cut sashimi",
        "desc_fr": "Somptueux bateau garni d'une abondance de makis raffinés et sashimis du chef",
        "image": "/menu/optimized/alacarte/boat2.webp"
      },
      {
        "name_en": "Signature Combo SS1",
        "name_fr": "Plateau Signature SS1",
        "desc_en": "Chef curated assortment of chef's favorite nigiri and crispy tempura rolls",
        "desc_fr": "Assortiment harmonieux de nigiris délicats et rouleaux tempura croustillants",
        "image": "/menu/optimized/alacarte/ss1.webp"
      },
      {
        "name_en": "Signature Combo SS2",
        "name_fr": "Plateau Signature SS2",
        "desc_en": "Rich combination of fresh salmon lovers rolls, avocado maki, and torched nigiri",
        "desc_fr": "Plateau généreux pour les amateurs de saumon frais, avocat et nigiris",
        "image": "/menu/optimized/alacarte/ss2.webp"
      },
      {
        "name_en": "Signature Combo SS3",
        "name_fr": "Plateau Signature SS3",
        "desc_en": "Colorful party platter featuring California rolls, spicy salmon, and mixed nigiri",
        "desc_fr": "Plateau festif haut en couleur composé de rouleaux californiens et saumon épicé",
        "image": "/menu/optimized/alacarte/ss3.webp"
      },
      {
        "name_en": "Signature Combo SS4",
        "name_fr": "Plateau Signature SS4",
        "desc_en": "Deluxe grand combo featuring dragon eye, dynamite, and fresh fish selections",
        "desc_fr": "Combo grandiose haut de gamme réunissant œil de dragon et créations fraîches",
        "image": "/menu/optimized/alacarte/ss4.webp"
      },
      {
        "name_en": "California Roll Combo",
        "name_fr": "Combo Rouleau Californie",
        "desc_en": "Crab stick, creamy avocado, crisp cucumber, and masago (10 pcs)",
        "desc_fr": "Goberge de crabe, avocat crémeux, concombre croquant et masago (10 mcx)",
        "image": "/menu/optimized/alacarte/california-roll-10-pcs.webp"
      },
      {
        "name_en": "Dragon Eye Roll Combo",
        "name_fr": "Combo Rouleau Œil de Dragon",
        "desc_en": "Deep-fried specialty maki with fresh salmon, whitefish, and scallions (10 pcs)",
        "desc_fr": "Maki doré et croustillant au saumon, poisson blanc et oignons verts (10 mcx)",
        "image": "/menu/optimized/alacarte/dragon-eye-roll-10-pcs.webp"
      },
      {
        "name_en": "Fried Chicken Roll Combo",
        "name_fr": "Combo Rouleau Poulet Frit",
        "desc_en": "Tender fried chicken breast with crisp lettuce and teriyaki glaze (10 pcs)",
        "desc_fr": "Poulet croustillant, salade fraîche et glaçage teriyaki (10 mcx)",
        "image": "/menu/optimized/alacarte/fried-chicken-roll-10-pcs.webp"
      },
      {
        "name_en": "Mango Roll Combo",
        "name_fr": "Combo Rouleau Mangue",
        "desc_en": "Sweet tropical mango, avocado, and crisp cucumber (6 pcs)",
        "desc_fr": "Mangue tropicale sucrée, avocat et concombre frais (6 mcx)",
        "image": "/menu/optimized/alacarte/mango-roll-6pcs.webp"
      },
      {
        "name_en": "Salmon & Avocado Combo",
        "name_fr": "Combo Saumon & Avocat",
        "desc_en": "Fresh Atlantic salmon paired with ripe Haas avocado (6 pcs)",
        "desc_fr": "Saumon frais de l'Atlantique et avocat mûr (6 mcx)",
        "image": "/menu/optimized/alacarte/salmon-and-avocado-6pcs.webp"
      },
      {
        "name_en": "Spicy Salmon Combo",
        "name_fr": "Combo Saumon Épicé",
        "desc_en": "Fresh salmon tossed with sriracha spicy mayo and crunchy tempura (6 pcs)",
        "desc_fr": "Tartare de saumon assaisonné à la mayo épicée et tempura (6 mcx)",
        "image": "/menu/optimized/alacarte/spicy-salmon-6pcs.webp"
      },
      {
        "name_en": "Avocado Roll Combo",
        "name_fr": "Combo Rouleau Avocat",
        "desc_en": "Classic creamy avocado rolled with seasoned sushi rice and nori (6 pcs)",
        "desc_fr": "Rouleau classique à l'avocat crémeux et riz vinaigré (6 mcx)",
        "image": "/menu/optimized/alacarte/avocado-6pcs.webp"
      }
    ]
  },
  {
    "title_en": "VEGETARIAN",
    "title_fr": "VÉGÉTARIEN",
    "items": [
      {
        "name_en": "Stir-Fried Mixed Vegetables",
        "name_fr": "Légumes assortis sautés au wok",
        "desc_en": "Medley of seasonal fresh vegetables wok-fried in light savory garlic glaze",
        "desc_fr": "Méli-mélo de légumes frais du marché sautés au wok dans un jus d'ail délicat",
        "image": "/menu/optimized/alacarte/fried-mixed-vegetables.webp"
      },
      {
        "name_en": "Vegetarian Stir Vermicelli",
        "name_fr": "Vermicelles sautés aux légumes",
        "desc_en": "Light wok-tossed vermicelli noodles loaded with crisp garden vegetables",
        "desc_fr": "Vermicelles légers sautés au wok avec petits légumes croquants",
        "image": "/menu/optimized/alacarte/veg-stir-vermicelli.webp"
      },
      {
        "name_en": "Vegetarian Fried Rice",
        "name_fr": "Riz frit aux légumes du potager",
        "desc_en": "Fragrant fried rice packed with colorful fresh garden vegetables",
        "desc_fr": "Riz sauté savoureux et parfumé aux petits légumes",
        "image": "/menu/optimized/alacarte/veg-fried-rice.webp"
      },
      {
        "name_en": "Braised Tofu in Soy Sauce",
        "name_fr": "Tofu Braisé à la Sauce Soja",
        "desc_en": "Silken tofu squares lightly pan-fried and braised in aromatic soy sauce",
        "desc_fr": "Cubes de tofu dorés mijotés dans une sauce soja parfumée",
        "image": "/menu/optimized/alacarte/braised-tofu-in-soy-sauce.webp"
      }
    ]
  },
  {
    "title_en": "SIGNATURE SNACKS",
    "title_fr": "SNACKS SIGNATURES",
    "items": [
      {
        "name_en": "Takoyaki",
        "name_fr": "Takoyaki Japonais",
        "desc_en": "Traditional Japanese octopus round pancake balls with sweet sauce (4 pcs)",
        "desc_fr": "Boulettes japonaises chaudes au poulpe avec flocons de bonite (4 mcx)",
        "image": "/menu/optimized/alacarte/takoyaki.webp"
      },
      {
        "name_en": "Popcorn Chicken",
        "name_fr": "Poulet Popcorn Croustillant",
        "desc_en": "Bite-sized marinated crispy fried chicken morsels tossed in Taiwanese pepper seasoning",
        "desc_fr": "Bouchées de poulet marinées ultra-croustillantes aux cinq épices taïwanaises",
        "image": "/menu/optimized/alacarte/popcorn-chicken.webp"
      },
      {
        "name_en": "Condensed Milk Toast",
        "name_fr": "Pain Doré au Lait Concentré",
        "desc_en": "Hong Kong style thick golden toast drizzled with creamy sweet condensed milk",
        "desc_fr": "Épaisse tranche de pain brioché doré arrosée de lait concentré sucré",
        "image": "/menu/optimized/alacarte/condensed-milk-toast.webp"
      },
      {
        "name_en": "Ice Cream Toast",
        "name_fr": "Pain Grillé à la Crème Glacée",
        "desc_en": "Crispy buttered toast topped with rich artisanal ice cream and sweet drizzles",
        "desc_fr": "Pain croustillant au beurre surmonté d'une boule de crème glacée artisanale",
        "image": "/menu/optimized/alacarte/ice-cream-toast.webp"
      },
      {
        "name_en": "Shrimp Toast",
        "name_fr": "Toasts Dorés aux Crevettes",
        "desc_en": "Crispy fried bread triangles layered with seasoned minced shrimp and sesame",
        "desc_fr": "Triangles de pain croustillants garnis de farce fine de crevettes et sésame",
        "image": "/menu/optimized/alacarte/shrimp-toast.webp"
      },
      {
        "name_en": "Artisanal Ice Cream",
        "name_fr": "Crème Glacée Artisanale",
        "desc_en": "Refreshing premium ice cream scoop in choice of classic and Asian flavors",
        "desc_fr": "Boule de crème glacée onctueuse aux saveurs traditionnelles et asiatiques",
        "image": "/menu/optimized/alacarte/ice-cream.webp"
      },
      {
        "name_en": "Ice Cream Waffles",
        "name_fr": "Gaufres à la Crème Glacée",
        "desc_en": "Warm golden Belgian waffles paired with chilled creamy ice cream scoop",
        "desc_fr": "Gaufres dorées croustillantes accompagnées d'une boule de crème glacée",
        "image": "/menu/optimized/alacarte/ice-cream-waffles.webp"
      },
      {
        "name_en": "Matcha Mochi",
        "name_fr": "Mochi au Matcha",
        "desc_en": "Chewy Japanese rice dessert infused with earthy stone-ground matcha green tea",
        "desc_fr": "Mochi traditionnel parfumé à la poudre fine de thé vert matcha",
        "image": "/menu/optimized/alacarte/matcha-mochi.webp"
      },
      {
        "name_en": "Strawberry Mochi",
        "name_fr": "Mochi à la Fraise",
        "desc_en": "Soft and chewy Japanese rice cake filled with sweet strawberry creme",
        "desc_fr": "Gâteau de riz gluant moelleux et fondant farci à la crème de fraise",
        "image": "/menu/optimized/alacarte/strawberry-mochi.webp"
      },
      {
        "name_en": "Mango Mochi",
        "name_fr": "Mochi à la Mangue",
        "desc_en": "Soft glutinous rice cake filled with luscious sweet mango filling",
        "desc_fr": "Mochi japonais moelleux garni d'une crème fondante à la mangue douce",
        "image": "/menu/optimized/alacarte/mango-mochi.webp"
      }
    ]
  },
  {
    "title_en": "SNACKS & SIDES",
    "title_fr": "SNACKS & EN-CAS",
    "items": [
      {
        "name_en": "Spicy Chili Beef",
        "name_fr": "Bœuf Pimenté Sauté Maison",
        "desc_en": "Tender sliced beef tossed with hot chilies, onions, and garlic glaze",
        "desc_fr": "Émincé de bœuf mariné sauté avec piments rouges frais et oignons doux",
        "image": "/menu/optimized/alacarte/spicy-chill-beef.webp"
      },
      {
        "name_en": "Curry Beef Udon Soup",
        "name_fr": "Soupe Udon au Bœuf et Curry",
        "desc_en": "Steaming bowl of thick udon noodles with tender beef in rich curry broth",
        "desc_fr": "Grand bol de nouilles udon fumantes au bœuf tendre et bouillon curry",
        "image": "/menu/optimized/alacarte/curry-beef-udon-soup.webp"
      },
      {
        "name_en": "Chicken Udon Stir-Fry",
        "name_fr": "Udon Sauté au Poulet & Légumes",
        "desc_en": "Thick udon noodles wok-fried with chicken strips and scallions",
        "desc_fr": "Nouilles udon sautées au wok avec aiguillettes de poulet",
        "image": "/menu/optimized/alacarte/chicken-udon-stir-fry.webp"
      },
      {
        "name_en": "General Tao's Chicken",
        "name_fr": "Bouchées Poulet Général Tao",
        "desc_en": "Crispy snack portion of signature sweet and spicy glazed chicken bites",
        "desc_fr": "Portion snack de poulet croustillant enrobé de sauce Général Tao",
        "image": "/menu/optimized/alacarte/general-taos-chicken.webp"
      },
      {
        "name_en": "Chicken Wings with Fries",
        "name_fr": "Ailes de Poulet & Frites",
        "desc_en": "Crispy fried seasoned chicken wings served with golden salted fries",
        "desc_fr": "Ailes de poulet croustillantes accompagnées de frites dorées",
        "image": "/menu/optimized/alacarte/chicken-wing-with-fries.webp"
      },
      {
        "name_en": "General Tao's Shrimp",
        "name_fr": "Crevettes Général Tao",
        "desc_en": "Crispy battered jumbo shrimp coated in tangy General Tao sweet glaze",
        "desc_fr": "Grosses crevettes croustillantes glacées de sauce Général Tao maison",
        "image": "/menu/optimized/alacarte/general-taos-shrimp.webp"
      },
      {
        "name_en": "Sesame Balls",
        "name_fr": "Boules de Sésame Croustillantes",
        "desc_en": "Chewy glutinous rice balls coated in fragrant sesame seeds with sweet filling",
        "desc_fr": "Boules de riz gluant croustillantes au sésame doré farcies de pâte sucrée",
        "image": "/menu/optimized/alacarte/sesame-balls.webp"
      },
      {
        "name_en": "Crispy Spring Rolls",
        "name_fr": "Rouleaux de Printemps",
        "desc_en": "Vegetarian spring roll with crunchy shredded vegetables",
        "desc_fr": "Rouleau croustillant farci de légumes finement émincés",
        "image": "/menu/optimized/alacarte/spring-rolls.webp"
      },
      {
        "name_en": "Crispy Fried Scallops",
        "name_fr": "Pétoncles Frits Croustillants",
        "desc_en": "Plump tender scallops breaded in Japanese breadcrumbs",
        "desc_fr": "Pétoncles tendres enrobés d'une chapelure japonaise légère",
        "image": "/menu/optimized/alacarte/fried-scallops.webp"
      },
      {
        "name_en": "Deep Fried Calamari",
        "name_fr": "Calamar Frit Croustillant",
        "desc_en": "Tender seasoned calamari rings flash-fried until golden",
        "desc_fr": "Anneaux de calamar marinés dorés et frits à la perfection",
        "image": "/menu/optimized/alacarte/deep-fried-calamari.webp"
      }
    ]
  },
  {
    "title_en": "DRINKS",
    "title_fr": "BOISSONS",
    "items": [
      {
        "name_en": "Hong Kong Style Milk Tea",
        "name_fr": "Thé au Lait Style Hong Kong",
        "desc_en": "Rich and silky brewed Ceylon black tea blended with evaporated milk",
        "desc_fr": "Thé noir de Ceylan infusé à point et velouté au lait concentré",
        "image": "/menu/optimized/alacarte/hong-kong-style-milk-tea.webp"
      },
      {
        "name_en": "Fresh Brewed Coffee",
        "name_fr": "Café Chaud Infusé",
        "desc_en": "Rich and dark roasted aromatic hot brewed coffee",
        "desc_fr": "Tasse de café noir fraîchement préparé aux grains torréfiés",
        "image": "/menu/optimized/alacarte/coffee.webp"
      },
      {
        "name_en": "Taro Milk Tea",
        "name_fr": "Thé au Lait de Taro",
        "desc_en": "Creamy sweet purple taro infused milk tea served cold",
        "desc_fr": "Boisson douce et crémeuse au taro violet parfumée au thé",
        "image": "/menu/optimized/alacarte/taro-milk-tea.webp"
      },
      {
        "name_en": "Strawberry Matcha Latte",
        "name_fr": "Latte Matcha à la Fraise",
        "desc_en": "Layered beverage with real strawberry puree, whole milk, and stone-ground Japanese matcha",
        "desc_fr": "Boisson étagée avec purée de fraises fraîches, lait frais et matcha pur",
        "image": "/menu/optimized/alacarte/strawberry-matcha-latte.webp"
      },
      {
        "name_en": "Mango Matcha Latte",
        "name_fr": "Latte Matcha à la Mangue",
        "desc_en": "Vibrant combination of sweet mango nectar, creamy milk, and premium matcha green tea",
        "desc_fr": "Cocktail gourmand au nectar de mangue, lait onctueux et thé vert matcha",
        "image": "/menu/optimized/alacarte/mango-matcha-latte.webp"
      },
      {
        "name_en": "Mango Passion Slush",
        "name_fr": "Slush Mangue & Passion",
        "desc_en": "Icy blended tropical slush bursting with ripe mango and tart passion fruit flavors",
        "desc_fr": "Boisson glacée frappée aux fruits tropicaux, mangue mûre et fruit de la passion",
        "image": "/menu/optimized/alacarte/mango-passion-slush.webp"
      },
      {
        "name_en": "Strawberry Slush",
        "name_fr": "Slush Givré à la Fraise",
        "desc_en": "Refreshing ice-blended smoothie prepared with sweet crushed strawberries",
        "desc_fr": "Slush rafraîchissant préparé avec de vraies fraises sucrées finement broyées",
        "image": "/menu/optimized/alacarte/strawberry-slush.webp"
      },
      {
        "name_en": "Fresh Lemonade",
        "name_fr": "Limonade Fraîche Maison",
        "desc_en": "Hand-squeezed refreshing citrus lemonade served over ice",
        "desc_fr": "Limonade rafraîchissante pressée à la main et servie bien glacée",
        "image": "/menu/optimized/alacarte/limonade.webp"
      },
      {
        "name_en": "Fresh Coconut Water",
        "name_fr": "Eau de Coco Naturelle",
        "desc_en": "Pure hydrating natural coconut water chilled to perfection",
        "desc_fr": "Eau de coco naturelle 100% pure, désaltérante et bien fraîche",
        "image": "/menu/optimized/alacarte/coconut-water.webp"
      },
      {
        "name_en": "Unsweetened Oolong Tea",
        "name_fr": "Thé Oolong Sans Sucre",
        "desc_en": "Crisp and roasted chilled premium whole-leaf oolong tea",
        "desc_fr": "Infusion de thé oolong torréfié sans sucre ajouté, légère et désaltérante",
        "image": "/menu/optimized/alacarte/oolong-teano-sugar.webp"
      },
      {
        "name_en": "Sparkling Mineral Water",
        "name_fr": "Eau Minérale Pétillante",
        "desc_en": "Chilled bottle of premium sparkling mineral water",
        "desc_fr": "Bouteille en verre d'eau minérale pétillante d'Italie",
        "image": "/menu/optimized/alacarte/sparkling-water.webp"
      },
      {
        "name_en": "Milkis Korean Drink",
        "name_fr": "Milkis Soda Coréen au Lait",
        "desc_en": "Sparkling milk soda combining fizzy carbonation with smooth yogurt sweetness",
        "desc_fr": "Célèbre soda coréen pétillant et doux au goût lacté et fruité",
        "image": "/menu/optimized/alacarte/milkis.webp"
      },
      {
        "name_en": "Mexican Coca-Cola",
        "name_fr": "Coca-Cola Mexicain (Bouteille en Verre)",
        "desc_en": "Authentic imported Coca-Cola sweetened with 100% real cane sugar",
        "desc_fr": "Authentique Coca-Cola importé pur sucre de canne en bouteille de verre",
        "image": "/menu/optimized/alacarte/coca-cola-mexican-bottled.webp"
      },
      {
        "name_en": "Diet Coke",
        "name_fr": "Coke Diète",
        "desc_en": "Zero calorie refreshing crisp carbonated soft drink",
        "desc_fr": "Boisson gazeuse rafraîchissante sans calories",
        "image": "/menu/optimized/alacarte/diet-coke.webp"
      },
      {
        "name_en": "Red Bull Energy Drink",
        "name_fr": "Boisson Énergisante Red Bull",
        "desc_en": "Chilled can of sugar-free Red Bull energy drink",
        "desc_fr": "Canette rafraîchissante de boisson énergisante sans sucre",
        "image": "/menu/optimized/alacarte/red-bull-zero.webp"
      }
    ]
  }
];

export const LUNCH_EXPRESS_MENU_CATEGORIES: MenuCategory[] = [
  {
    "title_en": "POKE BOWL",
    "title_fr": "BOLS POKE",
    "items": [
      {
        "name_en": "Sashimi Poke Bowl",
        "name_fr": "Bol Poke au Sashimi",
        "desc_en": "Fresh assorted sashimi cuts over seasoned sushi rice with avocado, edamame, and house poke dressing",
        "desc_fr": "Assortiment de sashimis frais du chef sur riz vinaigré, avocat crémeux, edamame et marinade poke maison",
        "price": "$21.99",
        "image": "/menu/optimized/lunch-express/sashimi-poke-bowl.webp"
      },
      {
        "name_en": "Eel Poke Bowl",
        "name_fr": "Bol Poke à l'Anguille Grillée",
        "desc_en": "Tender glazed Japanese barbecue unagi eel over seasoned sushi rice with avocado and cucumber",
        "desc_fr": "Anguille grillée laquée à la sauce unagi sur lit de riz vinaigré avec avocat et lamelles de concombre",
        "price": "$19.99",
        "image": "/menu/optimized/lunch-express/eel-poke-bowl.webp"
      },
      {
        "name_en": "Spicy Salmon Poke Bowl",
        "name_fr": "Bol Poke au Saumon Épicé",
        "desc_en": "Fresh Atlantic salmon tossed with sriracha spicy mayo, avocado, edamame, and masago",
        "desc_fr": "Dés de saumon frais relevés à la mayonnaise épicée sriracha, avocat, edamame et masago",
        "price": "$20.99",
        "image": "/menu/optimized/lunch-express/spicy-salmon-poke-bowl.webp"
      },
      {
        "name_en": "Tuna Poke Bowl",
        "name_fr": "Bol Poke au Thon Rouge",
        "desc_en": "High-grade ruby red tuna slices with avocado, crisp cucumber, sesame, and signature poke glaze",
        "desc_fr": "Lamelles de thon rouge de première fraîcheur, avocat mûr, concombre croquant et sésame grillé",
        "price": "$20.99",
        "image": "/menu/optimized/lunch-express/tuna-poke-bowl.webp"
      },
      {
        "name_en": "Vegetarian Poke Bowl",
        "name_fr": "Bol Poke Végétarien",
        "desc_en": "Silken tofu squares, Haas avocado, edamame, seasoned seaweed salad, and cucumber over sushi rice",
        "desc_fr": "Cubes de tofu soyeux, avocat Haas, fèves d'edamame, salade d'algues et concombre sur riz vinaigré",
        "price": "$16.99",
        "image": "/menu/optimized/lunch-express/vegetarian-poke-bowl.webp"
      }
    ]
  },
  {
    "title_en": "SNACKS & SIDES",
    "title_fr": "SNACKS & EN-CAS",
    "items": [
      {
        "name_en": "Beef Skewers",
        "name_fr": "Brochettes de Bœuf Grillées",
        "desc_en": "Tender grilled beef skewers marinated in aromatic cumin and Asian spices",
        "desc_fr": "Brochettes de bœuf mariné grillées au parfum de cumin et épices d'Asie",
        "price": "$14.99",
        "image": "/menu/optimized/ayce/curry-chicken-skewers.webp"
      },
      {
        "name_en": "Lamb Skewers",
        "name_fr": "Brochettes d'Agneau Grillées",
        "desc_en": "Succulent Xinjiang-style spiced lamb skewers seared with roasted cumin and chili",
        "desc_fr": "Tendres brochettes d'agneau grillées relevées au cumin torréfié et piment",
        "price": "$16.99",
        "image": "/menu/optimized/ayce/curry-chicken-skewers.webp"
      },
      {
        "name_en": "Mixed Meat Skewers",
        "name_fr": "Brochettes Mixtes Assorties",
        "desc_en": "Trio of grilled spiced meat skewers bursting with savory barbecue flavors",
        "desc_fr": "Trio de brochettes de viandes marinées grillées aux saveurs barbecue d'Asie",
        "price": "$15.99",
        "image": "/menu/optimized/ayce/curry-chicken-skewers.webp"
      },
      {
        "name_en": "Chicken Wings with Fries",
        "name_fr": "Ailes de Poulet & Frites",
        "desc_en": "Crispy fried seasoned chicken wings served with golden salted fries",
        "desc_fr": "Ailes de poulet croustillantes accompagnées de frites dorées au sel marin",
        "price": "$14.99",
        "image": "/menu/optimized/alacarte/chicken-wing-with-fries.webp"
      },
      {
        "name_en": "Sesame Balls (B04)",
        "name_fr": "Boules de Sésame Croustillantes (B04)",
        "desc_en": "Chewy glutinous rice balls coated in fragrant sesame seeds with sweet filling",
        "desc_fr": "Boules de riz gluant dorées au sésame croustillant avec cœur sucré fondant",
        "price": "$5.99",
        "image": "/menu/optimized/alacarte/sesame-balls.webp"
      },
      {
        "name_en": "Spicy Chili Beef (B09)",
        "name_fr": "Bœuf Pimenté Sauté Maison (B09)",
        "desc_en": "Tender sliced beef tossed with hot chilies, sweet onions, and savory garlic glaze",
        "desc_fr": "Émincé de bœuf mariné sauté au wok avec piments frais et oignons doux",
        "price": "$13.99",
        "image": "/menu/optimized/alacarte/spicy-chill-beef.webp"
      },
      {
        "name_en": "Deep Fried Calamari (B17)",
        "name_fr": "Calmars Frits Croustillants (B17)",
        "desc_en": "Tender seasoned calamari rings flash-fried until crispy and golden",
        "desc_fr": "Anneaux de calmar marinés dorés et frits à la perfection",
        "price": "$14.99",
        "image": "/menu/optimized/alacarte/deep-fried-calamari.webp"
      },
      {
        "name_en": "Crispy Spring Rolls (B18)",
        "name_fr": "Rouleaux Impériaux Croustillants (B18)",
        "desc_en": "Vegetarian crispy fried spring rolls packed with shredded garden vegetables",
        "desc_fr": "Rouleaux croustillants dorés farcis de légumes frais finement émincés",
        "price": "$6.99",
        "image": "/menu/optimized/alacarte/spring-rolls.webp"
      },
      {
        "name_en": "Fried Scallops (B19)",
        "name_fr": "Pétoncles Frits Croustillants (B19)",
        "desc_en": "Plump tender scallops breaded in light golden Japanese panko",
        "desc_fr": "Pétoncles tendres panés à la chapelure japonaise panko dorée",
        "price": "$5.99",
        "image": "/menu/optimized/alacarte/fried-scallops.webp"
      },
      {
        "name_en": "Condensed Milk Toast",
        "name_fr": "Pain Doré au Lait Concentré",
        "desc_en": "Hong Kong style thick golden toast generously drizzled with creamy sweet condensed milk",
        "desc_fr": "Épaisse tranche de pain brioché doré arrosée de lait concentré sucré",
        "price": "$7.99",
        "image": "/menu/optimized/alacarte/condensed-milk-toast.webp"
      },
      {
        "name_en": "French Fries",
        "name_fr": "Frites Dorées Classiques",
        "desc_en": "Crispy golden potato fries lightly seasoned with fine sea salt",
        "desc_fr": "Frites de pommes de terre classiques croustillantes et salées au sel de mer",
        "price": "$4.99",
        "image": "/menu/optimized/ayce/french-fries.webp"
      },
      {
        "name_en": "Sweet Potato Fries",
        "name_fr": "Frites de Patate Douce",
        "desc_en": "Crispy battered sweet potato fries served hot and lightly seasoned",
        "desc_fr": "Frites de patates douces croustillantes et savoureuses",
        "price": "$6.99",
        "image": "/menu/optimized/ayce/tempura-sweet-potato.webp"
      },
      {
        "name_en": "Ice Cream Waffles",
        "name_fr": "Gaufres à la Crème Glacée",
        "desc_en": "Warm golden Belgian waffles paired with chilled creamy artisanal ice cream",
        "desc_fr": "Gaufres belges dorées servies avec une boule de crème glacée onctueuse",
        "price": "$8.99",
        "image": "/menu/optimized/alacarte/ice-cream-waffles.webp"
      },
      {
        "name_en": "Artisanal Ice Cream",
        "name_fr": "Crème Glacée Artisanale",
        "desc_en": "Refreshing premium ice cream scoop in choice of classic and Asian flavors",
        "desc_fr": "Boule de crème glacée artisanale onctueuse aux saveurs gourmandes",
        "price": "$1.99",
        "image": "/menu/optimized/alacarte/ice-cream.webp"
      }
    ]
  },
  {
    "title_en": "MAIN DISH",
    "title_fr": "PLATS PRINCIPAUX",
    "items": [
      {
        "name_en": "Soy Sauce Fried Rice",
        "name_fr": "Riz Frit à la Sauce Soja",
        "desc_en": "Fragrant wok-fried Jasmine rice with premium dark soy sauce, scallions, and egg",
        "desc_fr": "Riz jasmin sauté au wok à la sauce soja supérieure, oignons verts et œuf",
        "price": "$13.99",
        "image": "/menu/optimized/ayce/chicken-fried-rice.webp"
      },
      {
        "name_en": "Sakura Shrimp & Chicken Fried Rice (C01)",
        "name_fr": "Riz Frit Crevettes Sakura & Poulet (C01)",
        "desc_en": "Fragrant wok-fried Jasmine rice with savory dried sakura shrimp, chicken, and egg",
        "desc_fr": "Riz au jasmin sauté au wok avec crevettes sakura savoureuses, poulet et œuf",
        "price": "$18.99",
        "image": "/menu/optimized/alacarte/sakura-shrimpandchicken-fr.webp"
      },
      {
        "name_en": "Pineapple Fried Rice (C12)",
        "name_fr": "Riz Frit à l'Ananas (C12)",
        "desc_en": "Fragrant golden fried rice with sweet pineapple chunks, egg, and fresh vegetables",
        "desc_fr": "Riz sauté parfumé aux morceaux d'ananas juteux, œuf et légumes",
        "price": "$18.99",
        "image": "/menu/optimized/alacarte/pineapple-fried-rice.webp"
      },
      {
        "name_en": "Chicken Udon Stir-Fry (B06)",
        "name_fr": "Udon Sauté au Poulet (B06)",
        "desc_en": "Thick Japanese udon noodles wok-fried with chicken strips and scallions",
        "desc_fr": "Nouilles udon japonaises sautées au wok avec aiguillettes de poulet",
        "price": "$19.99",
        "image": "/menu/optimized/alacarte/chicken-udon-stir-fry.webp"
      },
      {
        "name_en": "Stir-Fried Beef Udon",
        "name_fr": "Udon Sauté au Bœuf Tendre",
        "desc_en": "Thick Japanese udon noodles wok-tossed with tender beef slices and seasonal vegetables",
        "desc_fr": "Épaisses nouilles udon sautées avec émincé de bœuf tendre et petits légumes",
        "price": "$21.99",
        "image": "/menu/optimized/alacarte/fried-beef-udon.webp"
      },
      {
        "name_en": "Chicken Katsu Rice",
        "name_fr": "Poulet Katsu sur Riz Chaud",
        "desc_en": "Crispy Japanese panko breaded chicken cutlet served over steamed rice with savory katsu glaze",
        "desc_fr": "Suprême de poulet croustillant pané au panko servi sur riz vapeur avec sauce katsu",
        "price": "$15.99",
        "image": "/menu/optimized/ayce/teriyaki-chicken.webp"
      },
      {
        "name_en": "General Tao's Chicken (B16)",
        "name_fr": "Poulet Général Tao (B16)",
        "desc_en": "Crispy chicken tossed in signature sweet and savory General Tao sauce",
        "desc_fr": "Morceaux de poulet croustillants enrobés de notre sauce Général Tao",
        "price": "$21.99",
        "image": "/menu/optimized/alacarte/general-taos-chicken.webp"
      },
      {
        "name_en": "General Tao's Shrimp (B03)",
        "name_fr": "Crevettes Général Tao (B03)",
        "desc_en": "Crispy battered jumbo shrimp coated in tangy General Tao sweet glaze",
        "desc_fr": "Grosses crevettes croustillantes glacées de sauce Général Tao maison",
        "price": "$23.99",
        "image": "/menu/optimized/alacarte/general-taos-shrimp.webp"
      },
      {
        "name_en": "Traditional Pad Thai (C11)",
        "name_fr": "Pad Thaï Traditionnel (C11)",
        "desc_en": "Traditional stir-fried rice noodles with bean sprouts, egg, and crushed peanuts",
        "desc_fr": "Nouilles de riz traditionnelles sautées avec fèves germées et arachides",
        "price": "$19.99",
        "image": "/menu/optimized/alacarte/pad-thai.webp"
      },
      {
        "name_en": "HK Style Beef Noodles (C10)",
        "name_fr": "Nouilles au Bœuf Style Hong Kong (C10)",
        "desc_en": "Wok-charred wide rice noodles with sliced flank steak, bean sprouts, and dark soy",
        "desc_fr": "Larges nouilles de riz sautées au wok au bœuf émincé et pousses de soja",
        "price": "$20.99",
        "image": "/menu/optimized/alacarte/hk-style-beef-noodles.webp"
      },
      {
        "name_en": "Broccoli Beef",
        "name_fr": "Bœuf au Brocoli Sauté",
        "desc_en": "Tender sliced beef wok-tossed with fresh crisp broccoli florets in savory garlic sauce",
        "desc_fr": "Émincé de bœuf tendre sauté au wok avec bouquets de brocolis frais",
        "price": "$16.99",
        "image": "/menu/optimized/alacarte/broccoli-beef.webp"
      },
      {
        "name_en": "Spaghetti w/ Beef Black Pepper Sauce (C06)",
        "name_fr": "Spaghetti au Bœuf Sauce Poivre Noir (C06)",
        "desc_en": "Hong Kong cafe style stir-fried spaghetti with beef in aromatic black pepper sauce",
        "desc_fr": "Spaghetti sauté à la hong-kongaise avec bœuf tendre et sauce poivre noir",
        "price": "$20.99",
        "image": "/menu/optimized/alacarte/spaghetti-w-beef-bpsauce.webp"
      },
      {
        "name_en": "Steamed White Rice",
        "name_fr": "Riz Blanc Parfumé",
        "desc_en": "Steamed bowl of premium Jasmine white rice",
        "desc_fr": "Bol de riz blanc au jasmin cuit à la vapeur",
        "price": "$3.00",
        "image": "/menu/optimized/ayce/white-rice.webp"
      }
    ]
  },
  {
    "title_en": "SUSHI",
    "title_fr": "SUSHIS",
    "items": [
      {
        "name_en": "Mango Roll (6 pcs)",
        "name_fr": "Rouleau Mangue (6 mcx)",
        "desc_en": "Sweet tropical mango, ripe avocado, and crisp cucumber (6 pcs)",
        "desc_fr": "Mangue tropicale sucrée, avocat et concombre frais (6 mcx)",
        "price": "$5.99",
        "image": "/menu/optimized/alacarte/mango-roll-6pcs.webp"
      },
      {
        "name_en": "Avocado Roll (6 pcs)",
        "name_fr": "Rouleau Avocat (6 mcx)",
        "desc_en": "Classic creamy avocado rolled with seasoned sushi rice and nori (6 pcs)",
        "desc_fr": "Rouleau classique à l'avocat crémeux et riz vinaigré (6 mcx)",
        "price": "$5.99",
        "image": "/menu/optimized/alacarte/avocado-6pcs.webp"
      },
      {
        "name_en": "Salmon & Avocado Roll (6 pcs)",
        "name_fr": "Rouleau Saumon & Avocat (6 mcx)",
        "desc_en": "Fresh Atlantic salmon paired with ripe Haas avocado (6 pcs)",
        "desc_fr": "Saumon frais de l'Atlantique et avocat mûr (6 mcx)",
        "price": "$8.99",
        "image": "/menu/optimized/alacarte/salmon-and-avocado-6pcs.webp"
      },
      {
        "name_en": "Fried Chicken Roll (10 pcs)",
        "name_fr": "Rouleau Poulet Frit (10 mcx)",
        "desc_en": "Tender fried chicken breast with crisp lettuce and teriyaki glaze (10 pcs)",
        "desc_fr": "Poulet croustillant, salade fraîche et glaçage teriyaki (10 mcx)",
        "price": "$11.99",
        "image": "/menu/optimized/alacarte/fried-chicken-roll-10-pcs.webp"
      },
      {
        "name_en": "Dragon Eye Roll (10 pcs)",
        "name_fr": "Rouleau Œil de Dragon (10 mcx)",
        "desc_en": "Deep-fried specialty maki with fresh salmon, whitefish, and scallions (10 pcs)",
        "desc_fr": "Maki doré et croustillant au saumon, poisson blanc et oignons verts (10 mcx)",
        "price": "$12.99",
        "image": "/menu/optimized/alacarte/dragon-eye-roll-10-pcs.webp"
      },
      {
        "name_en": "Spicy Salmon Roll (6 pcs)",
        "name_fr": "Rouleau Saumon Épicé (6 mcx)",
        "desc_en": "Fresh salmon tossed with sriracha spicy mayo and crunchy tempura (6 pcs)",
        "desc_fr": "Tartare de saumon assaisonné à la mayo épicée et tempura (6 mcx)",
        "price": "$13.99",
        "image": "/menu/optimized/alacarte/spicy-salmon-6pcs.webp"
      },
      {
        "name_en": "California Roll (10 pcs)",
        "name_fr": "Rouleau Californie (10 mcx)",
        "desc_en": "Crab stick, creamy avocado, crisp cucumber, and masago (10 pcs)",
        "desc_fr": "Goberge de crabe, avocat crémeux, concombre croquant et masago (10 mcx)",
        "price": "$9.99",
        "image": "/menu/optimized/alacarte/california-roll-10-pcs.webp"
      },
      {
        "name_en": "Philadelphia Roll",
        "name_fr": "Rouleau Philadelphie",
        "desc_en": "Smoked salmon, velvety cream cheese, cucumber, and sesame seeds",
        "desc_fr": "Saumon fumé, fromage à la crème soyeux, concombre et graines de sésame",
        "price": "$13.99",
        "image": "/menu/optimized/ayce/philadelphia-roll.webp"
      },
      {
        "name_en": "Signature Combo SS1",
        "name_fr": "Plateau Signature SS1",
        "desc_en": "Chef curated assortment of chef's favorite nigiri and crispy tempura rolls",
        "desc_fr": "Assortiment harmonieux de nigiris délicats et rouleaux tempura croustillants",
        "price": "$15.99",
        "image": "/menu/optimized/alacarte/ss1.webp"
      },
      {
        "name_en": "Signature Combo SS2",
        "name_fr": "Plateau Signature SS2",
        "desc_en": "Rich combination of fresh salmon lovers rolls, avocado maki, and torched nigiri",
        "desc_fr": "Plateau généreux pour les amateurs de saumon frais, avocat et nigiris",
        "price": "$21.99",
        "image": "/menu/optimized/alacarte/ss2.webp"
      },
      {
        "name_en": "Signature Combo SS3",
        "name_fr": "Plateau Signature SS3",
        "desc_en": "Colorful party platter featuring California rolls, spicy salmon, and mixed nigiri",
        "desc_fr": "Plateau festif haut en couleur composé de rouleaux californiens et saumon épicé",
        "price": "$34.99",
        "image": "/menu/optimized/alacarte/ss3.webp"
      },
      {
        "name_en": "Signature Combo SS4",
        "name_fr": "Plateau Signature SS4",
        "desc_en": "Deluxe grand combo featuring dragon eye, dynamite, and fresh fish selections",
        "desc_fr": "Combo grandiose haut de gamme réunissant œil de dragon et créations fraîches",
        "price": "$44.99",
        "image": "/menu/optimized/alacarte/ss4.webp"
      },
      {
        "name_en": "Sushi Boat Imperial (Boat 1)",
        "name_fr": "Grand Bateau Impérial (Boat 1)",
        "desc_en": "Spectacular wooden sushi boat laden with assorted premium nigiri, sashimi, and specialty rolls",
        "desc_fr": "Magnifique bateau de fête garni de nigiris fins, sashimis et rouleaux de prestige",
        "price": "$97.99",
        "image": "/menu/optimized/alacarte/boat-1.webp"
      },
      {
        "name_en": "Sushi Boat Royal (Boat 2)",
        "name_fr": "Grand Bateau Royal (Boat 2)",
        "desc_en": "Elaborate multi-level wooden boat loaded with supreme maki collection and chef's cut sashimi",
        "desc_fr": "Somptueux bateau garni d'une abondance de makis raffinés et sashimis du chef",
        "price": "$111.99",
        "image": "/menu/optimized/alacarte/boat2.webp"
      }
    ]
  },
  {
    "title_en": "VEGETARIAN",
    "title_fr": "VÉGÉTARIEN",
    "items": [
      {
        "name_en": "Vegetarian Stir Vermicelli (V01)",
        "name_fr": "Vermicelles Sautés aux Légumes (V01)",
        "desc_en": "Light wok-tossed vermicelli noodles loaded with crisp garden vegetables",
        "desc_fr": "Vermicelles légers sautés au wok avec petits légumes croquants",
        "price": "$15.99",
        "image": "/menu/optimized/alacarte/veg-stir-vermicelli.webp"
      },
      {
        "name_en": "Vegetarian Fried Rice (V02)",
        "name_fr": "Riz Frit aux Légumes du Potager (V02)",
        "desc_en": "Fragrant fried rice packed with colorful fresh garden vegetables",
        "desc_fr": "Riz sauté savoureux et parfumé aux petits légumes",
        "price": "$13.99",
        "image": "/menu/optimized/alacarte/veg-fried-rice.webp"
      },
      {
        "name_en": "Braised Tofu in Soy Sauce (V05)",
        "name_fr": "Tofu Braisé à la Sauce Soja (V05)",
        "desc_en": "Silken tofu squares lightly pan-fried and braised in aromatic soy sauce",
        "desc_fr": "Cubes de tofu dorés mijotés dans une sauce soja parfumée",
        "price": "$13.99",
        "image": "/menu/optimized/alacarte/braised-tofu-in-soy-sauce.webp"
      },
      {
        "name_en": "Stir-Fried Mixed Vegetables",
        "name_fr": "Légumes Assortis Sautés au Wok",
        "desc_en": "Medley of seasonal fresh vegetables wok-fried in light savory garlic glaze",
        "desc_fr": "Méli-mélo de légumes frais du marché sautés au wok dans un jus d'ail délicat",
        "price": "$12.95",
        "image": "/menu/optimized/alacarte/fried-mixed-vegetables.webp"
      },
      {
        "name_en": "Vegetable Dumplings",
        "name_fr": "Raviolis Végétariens du Jardin",
        "desc_en": "Steamed thin-wrapper dumplings filled with cabbage, wood ear mushrooms, and greens",
        "desc_fr": "Raviolis vapeur légers farcis aux champignons asiatiques et légumes verts",
        "price": "$8.99",
        "image": "/menu/optimized/alacarte/vegetables-dumpling.webp"
      }
    ]
  },
  {
    "title_en": "DRINKS & DESSERTS",
    "title_fr": "BOISSONS & DESSERTS",
    "items": [
      {
        "name_en": "Hong Kong Style Milk Tea",
        "name_fr": "Thé au Lait Style Hong Kong",
        "desc_en": "Rich and silky brewed Ceylon black tea blended with evaporated milk",
        "desc_fr": "Thé noir de Ceylan infusé à point et velouté au lait concentré",
        "price": "$4.99",
        "image": "/menu/optimized/alacarte/hong-kong-style-milk-tea.webp"
      },
      {
        "name_en": "Fresh Brewed Coffee",
        "name_fr": "Café Chaud Infusé",
        "desc_en": "Rich and dark roasted aromatic hot brewed coffee",
        "desc_fr": "Tasse de café noir fraîchement préparé aux grains torréfiés",
        "price": "$3.99",
        "image": "/menu/optimized/alacarte/coffee.webp"
      },
      {
        "name_en": "Taro Milk Tea",
        "name_fr": "Thé au Lait de Taro",
        "desc_en": "Creamy sweet purple taro infused milk tea served cold",
        "desc_fr": "Boisson douce et crémeuse au taro violet parfumée au thé",
        "price": "$5.99",
        "image": "/menu/optimized/alacarte/taro-milk-tea.webp"
      },
      {
        "name_en": "Strawberry Matcha Latte",
        "name_fr": "Latte Matcha à la Fraise",
        "desc_en": "Layered beverage with real strawberry puree, whole milk, and stone-ground Japanese matcha",
        "desc_fr": "Boisson étagée avec purée de fraises fraîches, lait frais et matcha pur",
        "price": "$5.99",
        "image": "/menu/optimized/alacarte/strawberry-matcha-latte.webp"
      },
      {
        "name_en": "Mango Matcha Latte",
        "name_fr": "Latte Matcha à la Mangue",
        "desc_en": "Vibrant combination of sweet mango nectar, creamy milk, and premium matcha green tea",
        "desc_fr": "Cocktail gourmand au nectar de mangue, lait onctueux et thé vert matcha",
        "price": "$5.99",
        "image": "/menu/optimized/alacarte/mango-matcha-latte.webp"
      },
      {
        "name_en": "Mango Passion Slush",
        "name_fr": "Slush Mangue & Passion",
        "desc_en": "Icy blended tropical slush bursting with ripe mango and tart passion fruit flavors",
        "desc_fr": "Boisson glacée frappée aux fruits tropicaux, mangue mûre et fruit de la passion",
        "price": "$7.99",
        "image": "/menu/optimized/alacarte/mango-passion-slush.webp"
      },
      {
        "name_en": "Strawberry Slush",
        "name_fr": "Slush Givré à la Fraise",
        "desc_en": "Refreshing ice-blended smoothie prepared with sweet crushed strawberries",
        "desc_fr": "Slush rafraîchissant préparé avec de vraies fraises sucrées finement broyées",
        "price": "$7.99",
        "image": "/menu/optimized/alacarte/strawberry-slush.webp"
      },
      {
        "name_en": "Fresh Lemonade",
        "name_fr": "Limonade Fraîche Maison",
        "desc_en": "Hand-squeezed refreshing citrus lemonade served over ice",
        "desc_fr": "Limonade rafraîchissante pressée à la main et servie bien glacée",
        "price": "$4.99",
        "image": "/menu/optimized/alacarte/limonade.webp"
      },
      {
        "name_en": "Fresh Coconut Water",
        "name_fr": "Eau de Coco Naturelle",
        "desc_en": "Pure hydrating natural coconut water chilled to perfection",
        "desc_fr": "Eau de coco naturelle 100% pure, désaltérante et bien fraîche",
        "price": "$3.99",
        "image": "/menu/optimized/alacarte/coconut-water.webp"
      },
      {
        "name_en": "Unsweetened Oolong Tea",
        "name_fr": "Thé Oolong Sans Sucre",
        "desc_en": "Crisp and roasted chilled premium whole-leaf oolong tea",
        "desc_fr": "Infusion de thé oolong torréfié sans sucre ajouté, légère et désaltérante",
        "price": "$4.99",
        "image": "/menu/optimized/alacarte/oolong-teano-sugar.webp"
      },
      {
        "name_en": "Mexican Coca-Cola",
        "name_fr": "Coca-Cola Mexicain (Bouteille en Verre)",
        "desc_en": "Authentic imported Coca-Cola sweetened with 100% real cane sugar",
        "desc_fr": "Authentique Coca-Cola importé pur sucre de canne en bouteille de verre",
        "price": "$4.99",
        "image": "/menu/optimized/alacarte/coca-cola-mexican-bottled.webp"
      },
      {
        "name_en": "Diet Coke",
        "name_fr": "Coke Diète",
        "desc_en": "Zero calorie refreshing crisp carbonated soft drink",
        "desc_fr": "Boisson gazeuse rafraîchissante sans calories",
        "price": "$3.00",
        "image": "/menu/optimized/alacarte/diet-coke.webp"
      },
      {
        "name_en": "Milkis Korean Drink",
        "name_fr": "Milkis Soda Coréen au Lait",
        "desc_en": "Sparkling milk soda combining fizzy carbonation with smooth yogurt sweetness",
        "desc_fr": "Célèbre soda coréen pétillant et doux au goût lacté et fruité",
        "price": "$3.99",
        "image": "/menu/optimized/alacarte/milkis.webp"
      },
      {
        "name_en": "Sparkling Mineral Water",
        "name_fr": "Eau Minérale Pétillante",
        "desc_en": "Chilled bottle of premium sparkling mineral water",
        "desc_fr": "Bouteille en verre d'eau minérale pétillante d'Italie",
        "price": "$6.99",
        "image": "/menu/optimized/alacarte/sparkling-water.webp"
      },
      {
        "name_en": "Yuzu Cheesecake",
        "name_fr": "Gâteau au Fromage Yuzu",
        "desc_en": "Silky Japanese cheesecake infused with fragrant yuzu citrus zest",
        "desc_fr": "Gâteau au fromage onctueux parfumé aux zestes raffinés de yuzu japonais",
        "price": "$7.99",
        "image": "/menu/optimized/alacarte/cheese-cake-yuzu.webp"
      },
      {
        "name_en": "Mango Mochi",
        "name_fr": "Mochi à la Mangue",
        "desc_en": "Soft glutinous rice cake filled with luscious sweet mango filling",
        "desc_fr": "Mochi japonais moelleux garni d'une crème fondante à la mangue douce",
        "price": "$4.99",
        "image": "/menu/optimized/alacarte/mango-mochi.webp"
      },
      {
        "name_en": "Matcha Mochi",
        "name_fr": "Mochi au Matcha",
        "desc_en": "Chewy Japanese rice dessert infused with earthy stone-ground matcha green tea",
        "desc_fr": "Mochi traditionnel parfumé à la poudre fine de thé vert matcha",
        "price": "$4.99",
        "image": "/menu/optimized/alacarte/matcha-mochi.webp"
      },
      {
        "name_en": "Ayran Turkish Yogurt Drink",
        "name_fr": "Ayran Boisson Traditionnelle au Yaourt",
        "desc_en": "Refreshing traditional chilled salted yogurt beverage",
        "desc_fr": "Boisson rafraîchissante traditionnelle au yogourt velouté légèrement salé",
        "price": "$3.50",
        "image": "/menu/optimized/lunch-express/ayran.webp"
      },
      {
        "name_en": "Strawberry Mochi",
        "name_fr": "Mochi à la Fraise",
        "desc_en": "Soft and chewy Japanese rice cake filled with sweet strawberry creme",
        "desc_fr": "Gâteau de riz gluant moelleux et fondant farci à la crème de fraise",
        "price": "$4.99",
        "image": "/menu/optimized/alacarte/strawberry-mochi.webp"
      }
    ]
  }
];
