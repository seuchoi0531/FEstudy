document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector(".component-name")
    .addEventListener("click", scrollToBottom);
});

function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}
