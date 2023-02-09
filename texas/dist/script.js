const title = document.querySelector(".title");
const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("scroll", wrapperScroll);

function wrapperScroll() {
  wrapper.style.backgroundColor = white;
}