

   //  ---------start_tabs-----------  \\


function hideShow(item){
  const divs = document.querySelectorAll("div")
  item.onclick = () => {
      divs.forEach(div => {
          div.classList.remove("show")
      })
      document.querySelector(`.${item.dataset.div}`).classList.add("show")
  }
}

window.onload = () => {
  const navItems = document.querySelectorAll("li")
  navItems.forEach(item => {
      item.onclick = () => {
          hideShow(item)
      }
  })
}

//  ---------end_tabs-----------  \\

   //  ---------start_mod-----------  \\
  //  ----------- light mod ------------\\
   const light = document.querySelector(".light");
   const body = document.querySelector(".body");
   light.addEventListener("click", function(){
     body.style.backgroundColor = "white";    
   });
// ---------------dark mod -----------------\\
   const dark = document.querySelector(".dark");
   dark.addEventListener("click", function(){
     body.style.backgroundColor = "black";    
   });
   //  ---------end_mod-----------  \\
   
   

  
