<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- [![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]-->
[![LinkedIn][linkedin-shield]][linkedin-url]
[![site-status]](https://taq-challenge.vercel.app)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!--
  <a href="https://github.com/OuthBack/taq-challenge">
    <img src=".github/logo.png" alt="Logo" width="80" height="80">
  </a> 
  -->

  <h3 align="center">Sentineler</h3>

  <p align="center">
    The package is a "sentinel" that trigger a function when is visible. 
    <br />
    <br />
    <a href="https://taq-challenge.vercel.app">View Preview</a>
    ·
    <a href="https://github.com/OuthBack/taq-challenge/issues">Report Bug</a>
    ·
    <a href="https://github.com/OuthBack/taq-challenge/issues">Require Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Content Tabel</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the project</a>
      <ul>
        <li><a href="#built-with">Built with:</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Requirements</a></li>
        <li><a href="#installation">Instalation</a></li>
        <li><a href="#props">Instalation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Site Preview</a></li>
    <li><a href="#license">Licence</a></li>
    <li><a href="#contact">Contact</a></li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## 📖 About the project

The package is a "sentinel" that trigger a function when is visible. 

### 🔋 Built with:

- [React.js](https://pt-br.reactjs.org)
- [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

<!-- GETTING STARTED -->

## :scroll: Getting Started

To run the project it is just:

### :warning: Requirements

- npm
  ```sh
  npm install npm@latest -g
  ```

### :gear: Installation

1. Install the package
   ```sh
   npm install sentineler
   ```
   ou
   ```sh
   yarn add sentineler
   ```
2. Import the package
   ```tsx
   import Sentinel from "sentinel";
   ```
3. Call the compoenent and give the callback 
   ```tsx
   <Sentinel callback={() => {console.log('test')}} />
   ```
Example:
   ```tsx
    import Sentinel from "sentinel";

    const App = () => {
      return (
        <Sentinel callback={() => {console.log('test')}} />
      );
    }

    export default App;

   ```

<!-- Site Preview -->


## :bone: Props 

| Prop                  | Type             | Default    | Description                                                                                                                                                      |
| --------------------- | ---------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` (required) | Function         | –          | Callback function to run when the Sentineler is visible


## 🖥️ Site Preview

[![site-status]](https://taq-challenge.vercel.app)

I made this infinite scroll using this component.
<br/>

<!-- [![Product Name Screen Shot][product-screenshot]](https://taq-challenge.vercel.app) -->
See the Site Preview:
https://taq-challenge.vercel.app

## :dart: Test

To contribute to the project you just need:

1. Clone the repository
   ```sh
   git clone https://github.com/OuthBack/sentineler
   ```
2. Install the packages
   ```sh
   npm install
   ```
   ou
   ```sh
   yarn
   ```
3. For now you can create a link, but soon I will create a react application
   ```
   yarn link
   ```
4. In another project that you are using react
   ```sh
   yarn link "sentineler"
   ```
5. Now it is just follow the example

<!-- LICENÇA -->

## :pencil: Licence

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## :telephone_receiver: Contact

Henrique Figueiredo - riquessan@gmail.com

Project Linl: [https://github.com/OuthBack/sentineler](https://github.com/OuthBack/sentineler)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/OuthBack/sentineler/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/OuthBack/sentineler/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/OuthBack/sentineler.svg?style=for-the-badge
[forks-url]: https://github.com/OuthBack/sentineler/network/members
[stars-shield]: https://img.shields.io/github/stars/OuthBack/sentineler.svg?style=for-the-badge
[stars-url]: https://github.com/OuthBack/sentineler/stargazers
[issues-shield]: https://img.shields.io/github/issues/OuthBack/sentineler.svg?style=for-the-badge
[issues-url]: https://github.com/OuthBack/sentineler/issues
[license-shield]: https://img.shields.io/github/license/OuthBack/sentineler.svg?style=for-the-badge
[license-url]: https://github.com/OuthBack/sentineler/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/henrique-figueiredo-0396921a7/
[product-screenshot]: .github/screenshot.png
[site-status]: https://img.shields.io/website/https/vercel.com/outhback/sentineler/path/to/page.html.svg.?style=for-the-badge
