const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_list = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');
const menu_bar = document.querySelectorAll('.header .nav-bar .nav-list ul a')


 hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('activity');
    mobile_list.classList.toggle('activity')
 })
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c"
    }
    else{
        header.style.backgroundColor = "transparent"
    }
});
// menu_bar.forEach(menufunction)
//   function menufunction(item){
//     item.addEventListener('click', ()=>{
//         hamburger.classList.toggle('activity');
//         mobile_list.classList.toggle('activity')
//      })
//   }
//below  is an alternative code

  let i = 0;
  let len = menu_bar.length;
  for(i;i<len;i++){
       menu_bar[i].addEventListener("click",()=>{
        // hamburger.classList.toggle('activity');
        mobile_list.classList.toggle('activity')
     })
  }