function setYear(){
  document.querySelectorAll(".year").forEach(el=>el.textContent=new Date().getFullYear());
}
document.addEventListener("DOMContentLoaded",setYear);

function goBack(){ history.back(); }

function addNav(){
  const nav=document.querySelector(".navbar");
  if(!nav) return;
  nav.innerHTML=`
    <div class="brand"><a href="../index.html" style="color:white">HTML-CSS-JS Practical</a></div>
    <div class="nav-links">
      <a href="../index.html">Home</a>
      <a href="../html/index.html">HTML</a>
      <a href="../css/index.html">CSS</a>
      <a href="../javascript/index.html">JavaScript</a>
    </div>`;
}
