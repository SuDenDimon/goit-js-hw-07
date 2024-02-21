const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const titles = categories.querySelectorAll("h2");

titles.forEach((title) => {

  const titleName = title.textContent;
  console.log(`Category: ${titleName}`);

  const categoriesNames = title.parentElement.querySelectorAll("li");
  console.log(`Elements: ${categoriesNames.length}`);

});
