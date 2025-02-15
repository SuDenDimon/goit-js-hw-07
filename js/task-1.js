const categoryItems = document.querySelectorAll(".item");
console.log(`Numder of categories: ${categoryItems.length}`);

const titles = document.querySelectorAll("h2");

titles.forEach((title) => {
  console.log(`Category: ${title.textContent}`);

  const categoryNames = title.parentElement.querySelectorAll("li");
  console.log(`Elements: ${categoryNames.length}`);
});
