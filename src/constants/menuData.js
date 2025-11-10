import poulet from "../assets/pizzaImages/PizzaPoulet-removebg-preview.png";
import viande from "../assets/pizzaImages/PizzaViande-removebg-preview.png";
import troisFrommage from "../assets/pizzaImages/Pizza3frommage-removebg-preview.png";
import merguez from "../assets/pizzaImages/PizzaMerguez-removebg-preview.png";
import vegetarian from "../assets/pizzaImages/PizzaVegetarian-removebg-preview.png";


const menuData = {
  classic: [
    { name: 'MARGUERITE', nameEn: 'MARGHERITA', ingredients: 'Sauce tomate-Fromage-olive', ingredientsEn: 'Tomato Sauce-Cheese-Olive', price: 9.90, image: poulet },
    { name: 'MERGUEZ', nameEn: 'SAUSAGE', ingredients: 'Sauce tomate-Fromage-merguez-olive-poivron', ingredientsEn: 'Tomato Sauce-Cheese-Merguez-Olive-Bell Pepper', price: 12.00 , image: merguez },
    { name: 'VÉGÉTARIENNE', nameEn: 'VEGETARIAN', ingredients: 'Sauce tomate-Fromage-champignon-oignon-olive-poivron', ingredientsEn: 'Tomato Sauce-Cheese-Mushroom-Onion-Olive-Bell Pepper', price: 11.50 , image: vegetarian },
    { name: 'VIANDE', nameEn: 'MEAT', ingredients: 'Sauce tomate-Fromage-Viande-olive-poivron', ingredientsEn: 'Tomato Sauce-Cheese-Meat-Olive-Bell Pepper', price: 12.00, image: viande },
    { name: 'POULET', nameEn: 'CHICKEN', ingredients: 'Sauce tomate-Fromage-Poulet-olive-poivron', ingredientsEn: 'Tomato Sauce-Cheese-Chicken-Olive-Bell Pepper', price: 12.00 , image: poulet},
    { name: 'TROIS FROMAGES', nameEn: 'TRIPLE CHEESE', ingredients: 'Sauce tomate-Mozzarella-Cheddar-Masdam-olive', ingredientsEn: 'Tomato Sauce-Mozzarella-Cheddar-Masdam-Bell Pepper', price: 12.00 , image: troisFrommage},
    { name: 'THON', nameEn: 'TUNA', ingredients: 'Sauce tomate-Fromage-Thon-olive-poivron', ingredientsEn: 'Tomato Sauce-Cheese-Tuna-Olive-Bell Pepper', price: 12.50, image: poulet },
    { name: 'CREVETTE', nameEn: 'SHRIMP', ingredients: 'Sauce tomate-Fromage-crevette-olive-poivron', ingredientsEn: 'Tomato Sauce-Cheese-Shrimp-Olive-Bell Pepper', price: 15.00 , image: poulet },
    { name: 'SAUMON', nameEn: 'SALMON', ingredients: 'Sauce tomate-Fromage-saumon-poivron-olive', ingredientsEn: 'Tomato Sauce-Cheese-Salmon-Bell Pepper-Olive', price: 14.00 , image: poulet},
  ],
  gourmet: [
    { name: 'AMÉRICAINE', nameEn: 'AMERICAN', ingredients: 'Sauce tomate-Viande-poulet-poivron-olive', ingredientsEn: 'Tomato Sauce-Meat-Chicken-Bell Pepper-Olive', price: 13.00 , image: viande},
    { name: 'POULET-CHEESE', nameEn: 'CHICKEN-CHEESE', ingredients: 'Sauce tomate-trois fromage-poulet-olive', ingredientsEn: 'Tomato Sauce-Three Cheese-Chicken-Olive', price: 13.50 , image: poulet},
    { name: 'SPÉCIALE', nameEn: 'SPECIAL', ingredients: 'Sauce tomate-fromage-viande-poulet-merguez-poivron-olive', ingredientsEn: 'Tomato Sauce-Cheese-Meat-Chicken-Merguez-Bell Pepper-Olive', price: 13.50  , image: poulet },
    { name: 'MY PIZZA', nameEn: 'MY PIZZA', ingredients: 'Jusqu\'à 4 ingrédients aux choix', ingredientsEn: 'Choose up to 4 ingredients', price: 15.00  , image: poulet},
  ],
  extras: [
    { name: 'VIANDE', nameEn: 'MEAT', price: 2.00 },
    { name: 'CHAMPIGNON', nameEn: 'MUSHROOMS', price: 2.00 },
    { name: 'FROMAGE', nameEn: 'CHEESE', price: 2.00 },
    { name: 'CREVETTE', nameEn: 'SHRIMP', price: 3.00 },
  ],
  drinks: [
    { name: 'CANETTE', nameEn: 'CAN', price: 1.50 },
    { name: 'BOUTEILLE', nameEn: 'BOTTLE', price: 2.50 },
  ]
};
export default menuData;