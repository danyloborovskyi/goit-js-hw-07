const list = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${list.length}`);

list.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const item = category.querySelectorAll("ul li");

    console.log(`Category: ${title}`);
    console.log(`Elements: ${item.length}`);
});