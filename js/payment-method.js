document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input[type='checkbox']");
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const checkLabelNames = document.querySelectorAll(".checkbox-name");
      checkLabelNames.forEach((label) => {
        if (input.id === label.getAttribute("for")) {
          label.classList.toggle("checked-label");
        }
      });
    });
  });

  const steps_btn_handle = document.querySelectorAll(".step-block__button");
  const allPaymentContents = document.querySelectorAll(
    ".payment-method__content"
  );

  steps_btn_handle.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      steps_btn_handle.forEach((btn) => {
        var roundCheck = btn.querySelector(".btn-rouned-check");
        roundCheck.classList.remove("checked");
      });
      const roundCheck = btn.querySelector(".btn-rouned-check");
      roundCheck.classList.add("checked");

      var stepLine = document.querySelector(".step-line");

      allPaymentContents.forEach((content) => {
        content.classList.remove("show");
      });
      allPaymentContents[index].classList.add("show");
    });
  });
});
