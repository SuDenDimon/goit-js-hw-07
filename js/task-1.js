const categoryItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItems.length}`);

const titles = document.querySelectorAll("h2");

titles.forEach((title) => {

  const titleName = title.textContent;
  console.log(`Category: ${titleName}`);

  const categoriesNames = title.parentElement.querySelectorAll("li");
  console.log(`Elements: ${categoriesNames.length}`);

});
