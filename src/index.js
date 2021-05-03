import "./styles/style.scss";

document.querySelector('.header__btn-menu').onclick = function() {
  console.log('click menu');
  // document.querySelector('.nav_link').classList.toggle('active');
  if(document.querySelector('.nav_link').style.display == "none" ) {
      document.querySelector('.nav_link').style.display = "grid";
    }
  else {  document.querySelector('.nav_link').style.display = "none"; }


}