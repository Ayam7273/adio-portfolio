'use strict';

//Typing Effect
const text = document.querySelector(".title");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Software Engineer";
  }, 0);
  setTimeout(() => {
    text.textContent = "UIUX Designer";
  }, 5000);
  setTimeout(() => {
    text.textContent = "Frontend Dev";
  }, 10000);
  setTimeout(() => {
    text.textContent = "Backend Dev";
  }, 15000);
}
textLoad();
setInterval(textLoad, 12000);


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalRole = document.querySelector("[data-modal-role]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    modalRole.innerHTML = this.querySelector("[data-testimonials-role]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


// Modal Pop-up for portfolio

document.addEventListener("DOMContentLoaded", function () {
  const projectItems = document.querySelectorAll(".project-item a");
  const modal = document.createElement("div");
  modal.classList.add("project-modal");
  modal.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-portfoliocontent">
          <span class="close-modal">&times;</span>
          <figure class="modal-img">
              <img src="" alt="Project Image">
          </figure>
          <div class="modal-header">
            <h3 class="modal-title"></h3>
            <p class="modal-category"></p>
          </div>
          <p class="modal-desc"></p>
          <div class="modal-social">
          <a href="" target="_blank" class="modal-website">Live Preview&#8599;</a>
          </div>

      </div>
  `;
  document.body.appendChild(modal);

  const modalOverlay = modal.querySelector(".modal-overlay");
  const closeModal = modal.querySelector(".close-modal");
  const modalImg = modal.querySelector(".modal-img img");
  const modalTitle = modal.querySelector(".modal-title");
  const modalCategory = modal.querySelector(".modal-category");
  const modalDesc = modal.querySelector(".modal-desc");
  const modalWebsite = modal.querySelector(".modal-website");

  projectItems.forEach(item => {
      item.addEventListener("click", function (event) {
          event.preventDefault();
          const projectImg = item.querySelector(".project-img img").src;
          const projectTitle = item.querySelector(".project-title").innerText;
          const projectCategory = item.querySelector(".project-category").innerText;
          const projectDesc = item.querySelector(".project-desc")?.innerText || "No description available";
          
          // Select correct links
          const projectWebsite = item.closest(".project-item").querySelector(".project-website")?.href || "#";

          modalImg.src = projectImg;
          modalTitle.innerText = projectTitle;
          modalCategory.innerText = projectCategory;
          modalDesc.innerText = projectDesc;
          modalWebsite.href = projectWebsite;
          
          modal.classList.add("active");
      });
  });

  closeModal.addEventListener("click", function () {
      modal.classList.remove("active");
  });

  modalOverlay.addEventListener("click", function () {
      modal.classList.remove("active");
  });
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}