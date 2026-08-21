const screens=[...document.querySelectorAll(".screen")];

function show(id){
  const target=document.getElementById(id);
  if(!target)return;
  screens.forEach(s=>s.classList.remove("active"));
  target.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

document.addEventListener("click",e=>{
  const next=e.target.closest("[data-next]");
  const prev=e.target.closest("[data-prev]");
  if(next)show(next.dataset.next);
  if(prev)show(prev.dataset.prev);
});

const envelope=document.getElementById("envelope");
const openLetter=document.getElementById("openLetter");

function openEnvelope(){
  envelope.classList.add("open");
  setTimeout(()=>show("story"),650);
}
envelope?.addEventListener("click",openEnvelope);
envelope?.addEventListener("keydown",e=>{
  if(e.key==="Enter"||e.key===" ")openEnvelope();
});
openLetter?.addEventListener("click",openEnvelope);

document.getElementById("startBtn")?.addEventListener("click",()=>show("cover"));
