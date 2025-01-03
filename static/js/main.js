document.addEventListener("DOMContentLoaded", function () {
  // About section tabs
  const aboutButtons = document.querySelectorAll(".aboutSection button");
  aboutButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const section = this.dataset.section;
      document.querySelectorAll(".section-content > div").forEach((div) => {
        div.style.display = "none";
      });
      document.getElementById(section).style.display = "block";

      aboutButtons.forEach((btn) => btn.classList.remove("aboutItemActive"));
      this.classList.add("aboutItemActive");
    });
  });

  // Work experience tabs
  const workButtons = document.querySelectorAll(".workButtons button");
  workButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const work = this.dataset.work;
      document.querySelectorAll(".work-content > div").forEach((div) => {
        div.style.display = "none";
      });
      document.getElementById(work).style.display = "block";

      workButtons.forEach((btn) => btn.classList.remove("workButtonActive"));
      this.classList.add("workButtonActive");
    });
  });
});
