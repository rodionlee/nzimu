// import { AsyncDependenciesBlock } from 'webpack';
import "./style.css";
// import "../graphics/123.jpg"

const footerCopyright = document.querySelector("#footerCopyright");
const currentYear = new Date().getFullYear();
footerCopyright.innerHTML = `Copyright © ${currentYear} Nzimu Apiculture Services`
