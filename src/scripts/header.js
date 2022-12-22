import "../styles/global.css";
import "../styles/index.css";
import "../styles/about.css";
import "../styles/services.css";
import "../styles/service.css";

import "../graphics/image-icon.svg";

// 	Header

class header extends HTMLElement {

    connectedCallback() {

        this.innerHTML = 
        `
        <header class="headerSection">

        <a href="./index.html">
          <img src="./image-icon.svg" alt="" class="headerSection-logo">
        </a>

        <nav class="">
          <ul class="headerMenu">
    
            <li class="headerMenu-linkContainer">
              <a class="linkContainer-link" href="./services.html">Services ▿</a>
    
              <ul class="linkContainer-dropdown">
                <li class="headerMenu-linkContainer">
                  <a class="linkContainer-link" href="./service-1.html">Service 1</a>
                </li>
    
                <li class="headerMenu-linkContainer">
                  <a class="linkContainer-link" href="./service-2.html">Service 2</a>
                </li>
    
                <li class="headerMenu-linkContainer">
                  <a class="linkContainer-link" href="./service-3.html">Service 3</a>
                </li>
              </ul>
    
            </li>
    
            <li class="headerMenu-linkContainer">
              <a class="linkContainer-link" href="./equipment.html">Equipment ▿</a>
    
              <ul class="linkContainer-dropdown">
                <li class="headerMenu-linkContainer">
                  <a class="linkContainer-link" href="http://">Equipment 1</a>
                </li>
    
                <li class="headerMenu-linkContainer">
                  <a class="linkContainer-link" href="http://">Equipment 2</a>
                </li>
    
                <li class="headerMenu-linkContainer">
                  <a class="linkContainer-link" href="http://">Equipment 3</a>
                </li>
              </ul>
    
            </li>
    
            <li class="headerMenu-linkContainer">
              <a class="linkContainer-link" href="./contact.html">Contact</a>
            </li>
    
            <li class="headerMenu-linkContainer">
              <a class="linkContainer-link" href="./about.html">About</a>
            </li>
    
            <li class="headerMenu-linkContainer">
              <a class="linkContainer-link" href="./blog.html">Blog</a>
            </li>
            
          </ul>
        </nav>
      </header>
        `;
    }
}

customElements.define("header-component", header);