const moreBtn1 = document.querySelectorAll(".page-content-new-book-btn");
moreBtn1.forEach((elem) => {
  elem.classList.add("page-content-book-btn");
});
const moreBtn2 = document.querySelectorAll(".page-content-best-book-btn");
moreBtn2.forEach((elem) => {
  elem.classList.add("page-content-book-btn");
});
window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-book-btn")) {
    const card = event.target.closest(".card-book__item");
    const productInfo = {
      imgSrc: card.querySelector(".card-book__img").getAttribute("src"),
      name: card.querySelector(".card-book__name").innerText,
      reating: card.querySelector(".reating-book").innerText,
      author: card.querySelector(".card-book__author").innerText,
      countPage: card.querySelector(".card-book__count").innerText,
    };
    localStorage.setItem("imgSrc", productInfo.imgSrc);
    localStorage.setItem("name", productInfo.name);
    localStorage.setItem("reating", productInfo.reating);
    localStorage.setItem("author", productInfo.author);
    localStorage.setItem("countPage", productInfo.countPage);
    console.log(productInfo);
    window.location.href = "product-page.html";
    imageBook.src = "img/catalog-img/book5.jpg";
  }
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  search();
});

function search() {
  let query = document.getElementById("search").value;
  let elements = document.getElementsByClassName("searchable");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].textContent.includes(query)) {
      elements[i].style.color = "green";
      elements[i].scrollIntoView({ behavior: "smooth" });
    } else {
      elements[i].style.color = "red";
    }
  }
}
