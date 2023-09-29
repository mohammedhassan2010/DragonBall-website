//  ---------start_mod-----------  \\
//  ----------- light mod ------------\\
//    const light = document.querySelector(".light");
//    const body = document.querySelector(".body");
//    light.addEventListener("click", function(){
//      body.style.backgroundColor = "white";
//    });
// // ---------------dark mod -----------------\\
//  const dark = document.querySelector(".dark");
//  dark.addEventListener("click", function(){
//    body.style.backgroundColor = "black";
//  });
//  ---------end_mod-----------  \\

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// const moon = document.querySelector(".ri-moon-fill");
// // const sun = document.querySelector(".sun");
// const nav = document.querySelector("nav");
// // sun.addEventListener("click", () => {
// //   nav.classList.remove("bg-dark:slate-800");
// //   nav.classList.add("dark:bg-[#FC5404]");
// // });
// moon.onclick = () => {
//   nav.style.transition = "all .5s";
//   nav.classList.remove("dark:bg-[#FC5404]");
//   nav.classList.add("dark:bg-slate-800");
//   moon.classList.toggle("ri-sun-fill");
//   if (moon.classList.contains("ri-sun-fill")) {
//     moon.onclick = () => {
//       nav.classList.remove("bg-dark:slate-800");
//       nav.classList.add("dark:bg-[#FC5404]");
//     };
//     moon.classList.add("ri-moon-fill");
//   }
// };

function tabs(item) {
  const seasons = document.querySelectorAll(".season");
  item.onclick = () => {
    seasons.forEach((season) => {
      season.classList.remove("show2");
    });
    document.querySelector(`.${item.dataset.div}`).classList.add("show2");
  };
}

window.onload = () => {
  const navItems = document.querySelectorAll("li");
  navItems.forEach((item) => {
    item.onclick = () => {
      tabs(item);
    };
  });
};
