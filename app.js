const screens=[...document.querySelectorAll(".screen")];
function go(id,push=true){const el=document.getElementById(id);if(!el)return;screens.forEach(x=>x.classList.remove("active"));el.classList.add("active");scrollTo(0,0);if(push)history.pushState({},'',`#${id}`)}
document.addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(b)go(b.dataset.go)});
addEventListener("popstate",()=>go(location.hash.slice(1)||"home",false));
if(location.hash&&document.getElementById(location.hash.slice(1)))go(location.hash.slice(1),false);
const modal=document.getElementById("modal");document.getElementById("secret")?.addEventListener("click",()=>modal.classList.add("open"));document.getElementById("close")?.addEventListener("click",()=>modal.classList.remove("open"));modal?.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});