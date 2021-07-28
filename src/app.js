import component from './component';

//image
import sweat from './images/sweat.jpg'

//styles
import './styles/style.css';

const img = document.createElement('img');
img.src = sweat;
document.body.appendChild(img);

document.body.appendChild(component());