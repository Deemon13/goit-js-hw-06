const refs = {
  categoriesRef: document.querySelector('#categories'),
};

const categoryItems = [...refs.categoriesRef.children];

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(el => {
  const elements = el.querySelectorAll('li');
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
