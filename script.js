document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("main-title");
  const desc = document.getElementById("description");
  const changeTxt = document.getElementById("change-text");
  const addItem = document.getElementById("add-item");
  const removeItem = document.getElementById("remove-item");
  const itemList = document.getElementById("item-list");

  changeTxt.addEventListener("click", () => {
    desc.textContent = "You've changed the text!";
    desc.style.color = "blue";
    desc.style.fontWeight = "bold";
  });

  addItem.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
  });

  removeItem.addEventListener("click", () => {
    if (itemList.lastElementChild) {
      itemList.removeChild(itemList.lastElementChild)
    }
  });
})