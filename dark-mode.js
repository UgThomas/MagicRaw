const toggleButton = document.getElementById("darkModeToggle");
const darkModeIcon = document.getElementById("darkModeIcon");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Alterna o ícone de lua/sol
  if (body.classList.contains("dark-mode")) {
    darkModeIcon.src = "web/icons8-sun-32.png"; // Ícone de sol para o modo claro
  } else {
    darkModeIcon.src = "web/icons8-símbolo-da-lua-32.png"; // Ícone de lua para o modo escuro
  }
});
