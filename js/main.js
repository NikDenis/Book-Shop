const moreBtn1 = document.querySelectorAll(".page-content-new-book-btn");
moreBtn1.forEach((elem) => {
  elem.classList.add("page-content-book-btn");
});
const moreBtn2 = document.querySelectorAll(".page-content-best-book-btn");
moreBtn2.forEach((elem) => {
  elem.classList.add("page-content-book-btn");
});
// Клик по всей области
window.addEventListener("click", function (event) {
  //Проверка на клик по кнопке карточки
  if (event.target.hasAttribute("data-book-btn")) {
    const card = event.target.closest(".card-book__item");
    // Сохранение данных карточки после клика по кнопке
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
    this.localStorage.setItem("countPage", productInfo.countPage);
    console.log(productInfo);
    window.location.href = "product-page.html";
    imageBook.src = "img/catalog-img/book5.jpg";
  }
});
