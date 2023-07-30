import { catalogBooks } from "./data.js";
const catalogBook = JSON.parse(catalogBooks);

const catalogBookList = document.querySelector(".card-book__list");

catalogBook.forEach(
  ({ reatingCount, image, name, author, discription, countPage }) => {
    const productEl = `
      <li class="card-book__item">
        <span class="book-item-reating-top">
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.87152 4.81324C7.29957 3.74612 7.5136 3.21256 7.86132 3.13861C7.95275 3.11916 8.04724 3.11916 8.13867 3.13861C8.48639 3.21256 8.70042 3.74612 9.12847 4.81324C9.37189 5.4201 9.4936 5.72352 9.72134 5.9299C9.78522 5.98779 9.85456 6.03934 9.92839 6.08384C10.1916 6.24249 10.5202 6.27192 11.1774 6.33078C12.2899 6.43041 12.8462 6.48023 13.016 6.79739C13.0512 6.86308 13.0751 6.9342 13.0868 7.00779C13.1431 7.36315 12.7342 7.73519 11.9163 8.47927L11.6892 8.68589C11.3068 9.03376 11.1157 9.2077 11.0051 9.42477C10.9387 9.55498 10.8943 9.69521 10.8734 9.83985C10.8387 10.081 10.8947 10.3333 11.0066 10.838L11.0466 11.0183C11.2474 11.9233 11.3478 12.3758 11.2225 12.5982C11.1099 12.798 10.9026 12.9259 10.6735 12.9369C10.4185 12.949 10.0592 12.6562 9.34052 12.0707C8.86704 11.6848 8.63031 11.4919 8.3675 11.4166C8.12734 11.3477 7.87265 11.3477 7.63249 11.4166C7.36968 11.4919 7.13294 11.6848 6.65947 12.0707C5.94082 12.6562 5.5815 12.949 5.32648 12.9369C5.09742 12.9259 4.89005 12.798 4.77747 12.5982C4.65215 12.3758 4.75254 11.9233 4.95334 11.0183L4.99335 10.838C5.10532 10.3333 5.1613 10.081 5.12656 9.83985C5.10572 9.69521 5.06124 9.55498 4.99491 9.42477C4.88432 9.2077 4.69314 9.03376 4.31078 8.68589L4.08366 8.47927C3.2658 7.73519 2.85688 7.36315 2.91319 7.00779C2.92485 6.9342 2.94877 6.86308 2.98395 6.79739C3.15382 6.48023 3.71007 6.43041 4.82258 6.33078C5.47977 6.27192 5.80837 6.24249 6.07159 6.08384C6.14543 6.03934 6.21477 5.98779 6.27865 5.9299C6.50639 5.72352 6.6281 5.4201 6.87152 4.81324Z" troke="white" />
          </svg>
          <span class="reating-book">${reatingCount}</span>
        </span>
        <a class="page-content-new-book-link card-book__link" href="">
          <img
            class="page-content-new-book-img card-book__img"
            src="${image}"
            alt="Жизнь в удовольствие"
            height="320px"
          />
        </a>
        <div class="card-book__position-wrp">
          <div class="card-book__discription-wrp">
          <p class="page-content-new-book-author card-book__author">
          ${author}
          </p>
          <h4 class="page-content-new-book-name card-book__name">
            ${name}
          </h4>
          <p class="page-content-new-book-txt card-book__text">
            ${discription}
          </p>
          </div>
          <div class="card-book__btn-wrp">
            <button class="page-content-book-btn card-book__btn" data-book-btn>
            Подробнее
            </button>
            <span class="page-content-new-book-count card-book__count">${countPage}</span>
          </div>
        </div>
      </li>`;

    catalogBookList.insertAdjacentHTML("beforeend", productEl);
  }
);
