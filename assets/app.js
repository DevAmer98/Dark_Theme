
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem("darkdigital.theme");
  if(saved){ root.setAttribute("data-theme", saved); }
  document.addEventListener("click", (e)=>{
    const toggle = e.target.closest("[data-toggle-theme]");
    if(toggle){
      const cur = root.getAttribute("data-theme") || "dark";
      const next = cur === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("darkdigital.theme", next);
    }
  });
})();
