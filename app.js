const screens = [...document.querySelectorAll(".screen")];

function show(id){
  const target = document.getElementById(id);
  if(!target) return;
  screens.forEach(s => s.classList.remove("active"));
  target.classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}

document.addEventListener("click", e => {
  const go = e.target.closest("[data-go]");
  if(go) show(go.dataset.go);
});

const secret = document.getElementById("secret");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

secret?.addEventListener("click", () => modal?.classList.add("show"));
close?.addEventListener("click", () => modal?.classList.remove("show"));
modal?.addEventListener("click", e => {
  if(e.target === modal) modal.classList.remove("show");
});
document.addEventListener("keydown", e => {
  if(e.key === "Escape") modal?.classList.remove("show");
});
