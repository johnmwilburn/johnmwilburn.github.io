// Navbar
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

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

// Project Modals
const projectItems = document.querySelectorAll(".project-item a");
const modal = document.getElementById("project-modal");
const closeBtn = document.querySelector(".close-btn");
const projectVideo = document.getElementById("project-video");
const projectTitle = document.getElementById("project-title");
const projectSummaryList = document.getElementById("project-summary-list");

projectItems.forEach(item => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    const title = this.dataset.projectTitle;
    const videoSrc = this.dataset.projectVideo;
    const summary = this.dataset.projectSummary;

    projectTitle.textContent = title;
    projectVideo.src = videoSrc;
    projectSummaryList.innerHTML = summary;

    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
  projectVideo.src = "";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    projectVideo.src = "";
  }
});