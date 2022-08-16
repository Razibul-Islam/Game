document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {

    document.querySelectorAll(".bg-btnBg").forEach((button) => {
      button.classList.remove("bg-btnBg");
    });

    button.classList.add("bg-btnBg");
  });
});

document.querySelectorAll(".btn-container").forEach((button) => {
  button.addEventListener('click', function () {
    document.querySelectorAll(".bg-topBtnColor").forEach((button) => {
      button.classList.remove('bg-topBtnColor');
    });
    button.classList.add("bg-topBtnColor");
  });
})