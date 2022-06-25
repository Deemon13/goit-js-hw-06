const refs = {
  ingredientsRef: document.querySelector('#ingredients'),
};

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const markup = ingredients.map(el => {
  const itemRef = document.createElement('li');
  itemRef.textContent = `${el}`;
  itemRef.classList.add('item');
  return itemRef;
});

refs.ingredientsRef.append(...markup);
