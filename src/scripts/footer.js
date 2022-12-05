import "../graphics/image-icon.svg";

class footer extends HTMLElement {

  connectedCallback() {

    this.innerHTML = `
    <footer>

    <div class="contactsContainer">

      <a class="contactItem" href="tel:+260 95 5700701">
        <img class="contactIcon" src="./image-icon.svg">
        +260 95 5700701
      </a>

      <p class="contactItem">
        <img class="contactIcon" src="./image-icon.svg">
        Lusaka, Zambia
      </p>

      <a class="contactItem" href="https:/wa.me/260955700701/">
        <img class="socialMediaIcon" src="./image-icon.svg">
      </a>

      <a class="contactItem" href="https:/facebook.com/">
        <img class="socialMediaIcon" src="./image-icon.svg">
      </a>

      <a class="contactItem" href="https:/instagram.com/">
        <img class="socialMediaIcon" src="./image-icon.svg">
      </a>
    
    </div>
    
    <nav class="menu">

      <a class="link" href="https:/rodionlee.github.io/kalahari-biocare/">
        Home
      </a>

      <a class="link" href="https:/rodionlee.github.io/kalahari-biocare/about">
        About
      </a>

      <a class="link" href="https:/rodionlee.github.io/kalahari-biocare/contact">
        Contact
      </a>

      <a class="link" href="https:/rodionlee.github.io/kalahari-biocare/products">
        Services
      </a>

      <a class="link" href="https:/rodionlee.github.io/kalahari-biocare/products">
        Equipment
      </a>
      
      <a class="link" href="https:/rodionlee.github.io/kalahari-biocare/blog">
        Blog
      </a>

      <a class="link" href="https:/rodionlee.github.io/kalahari-biocare/privacy">
        Privacy
      </a>

      <a class="link" href="https:/rodionlee.github.io/kalahari-biocare/terms">
        Terms
      </a>
    
    </nav>

    <p id="footerCopyright"></p>
          
  </footer>
  `;}
}

customElements.define("footer-component", footer);

const footerCopyright = document.querySelector("#footerCopyright");
const currentYear = new Date().getFullYear();
footerCopyright.innerHTML = `Copyright © ${currentYear} Nzimu Apiculture Services`
