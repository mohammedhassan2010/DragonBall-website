

   //  ---------start_tabs-----------  \\
   const tab1 = document.querySelector(".tab1");
   const tab2 = document.querySelector(".tab2");
   const tab3 = document.querySelector(".tab3");
   
   const content1 = document.querySelector(".content1");
   const content2 = document.querySelector(".content2");
   const content3 = document.querySelector(".content3");
   
  tab1.addEventListener("click", function(){
    content1.classList.add("show");
    content2.classList.remove("show");
    content3.classList.remove("show");
   });
   
   tab2.addEventListener("click", function(){
    content1.classList.remove("show");
    content2.classList.add("show");
    content3.classList.remove("show");
   });
   tab3.addEventListener("click", function(){
    content1.classList.remove("show");
    content2.classList.remove("show");
    content3.classList.add("show");
   });
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
   
   

  
