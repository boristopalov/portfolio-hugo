document.addEventListener("DOMContentLoaded", function () {
  // About section tabs
  const aboutButtons = document.querySelectorAll(".aboutSection button");
  aboutButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const section = this.dataset.section;
      const sections = document.querySelectorAll(".section-content > div");
      sections.forEach((div) => {
        if (div instanceof HTMLElement) {
          div.style.display = "none";
        }
      });

      const targetSection = document.getElementById(section);
      if (targetSection instanceof HTMLElement) {
        targetSection.style.display = "block";
      }

      aboutButtons.forEach((btn) => {
        btn.classList.remove("aboutItemActive");
        btn.classList.add("aboutItem");
      });
      this.classList.remove("aboutItem");
      this.classList.add("aboutItemActive");
    });
  });

  // Work experience tabs
  const workButtons = document.querySelectorAll(".workButtons button");
  workButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const work = this.dataset.work;
      const sections = document.querySelectorAll(".work-content > div");
      sections.forEach((div) => {
        if (div instanceof HTMLElement) {
          div.style.display = "none";
        }
      });

      const targetWork = document.getElementById(work);
      if (targetWork instanceof HTMLElement) {
        targetWork.style.display = "block";
      }

      workButtons.forEach((btn) => {
        btn.classList.remove("workButtonActive");
        btn.classList.add("workButton");
      });
      this.classList.remove("workButton");
      this.classList.add("workButtonActive");
    });
  });
});
