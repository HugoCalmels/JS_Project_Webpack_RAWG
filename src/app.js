/*
import component from './component';

//image
import sweat from './images/sweat.jpg';

//styles
import './styles/style.scss';
import './styles/woof.css';

const img = document.createElement('img');
img.src = sweat;
document.body.appendChild(img);
document.body.appendChild(component());
*/

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());