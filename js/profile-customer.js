document.addEventListener("DOMContentLoaded", () => {
  const btnSidebarSubtitle = document.querySelectorAll(
    ".button__sidebar-subtitle"
  );

  const subSidebarContent = document.querySelectorAll(
    ".user__sub-sidebar--content"
  );

  btnSidebarSubtitle.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      btnSidebarSubtitle.forEach((btn) => {
        btn.classList.remove("sub-active");
      });
      btn.classList.add("sub-active");
      subSidebarContent.forEach((content) => {
        content.classList.remove("show__sub-sidebar--content");
      });
      subSidebarContent[index].classList.add("show__sub-sidebar--content");
    });
  });

  const btnSidebarButtonTab = document.querySelectorAll(".button-tab");

  const mainSidebarContent = document.querySelectorAll(
    ".user__main-sidebar--content"
  );

  btnSidebarButtonTab.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      btnSidebarButtonTab.forEach((btn) => {
        btn.classList.remove("main-active");
      });
      btn.classList.add("main-active");
      mainSidebarContent.forEach((content) => {
        content.classList.remove("show__main-sidebar--content");
      });
      mainSidebarContent[index].classList.add("show__main-sidebar--content");
    });
  });
});
