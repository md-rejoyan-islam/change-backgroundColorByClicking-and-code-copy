const copy = document.getElementById("copy");
const show = document.getElementById("show");
const showResult = document.getElementById("showResult");

// hex color generate function
const hexColor = () => {
  const red = Math.floor(Math.random() * 255).toString(16);
  const green = Math.floor(Math.random() * 255).toString(16);
  const blue = Math.floor(Math.random() * 255).toString(16);
  return `#${red}${green}${blue}`;
};
const change = () => {
  const hexColorCode = hexColor();
  document.querySelector("body").style.backgroundColor = hexColorCode;
  show.innerHTML = hexColorCode;
  copy.value = hexColorCode;
  navigator.clipboard.writeText(hexColorCode);
};

setInterval(() => {
  showResult.classList.add("hidden");
}, 2000);

copy.onclick = () => {
  showResult.classList.remove("hidden");
  const value = copy.value;
  showResult.innerHTML = `${value ? value : "#bae6fd"} copied`;
};
