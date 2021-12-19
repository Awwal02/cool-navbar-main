import "./styles.css";
const list = document.querySelectorAll(".list");
function activeLink(selectedItem) {
  console.log(1);
  list.forEach((item) => {
    item.classList.remove("active");
  });
  this.classList.add("active");
}
list.forEach((item) => {
  item.addEventListener("click", activeLink);
});
