<i18n>
en:
  aboutMe: 'About Me'
  projects: 'Projects'
  music: 'Music'
  contact: 'Contact'
de:
  aboutMe: 'Über Mich'
  projects: 'Projekte'
  music: 'Musik'
  contact: 'Kontakt'
</i18n>
<template>
  <div class="startpage" id="startpage">
    <div class="content">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu2">
            <a href="#"
              ><li>
                <router-link to="#aboutme" class="underline-animation"
                  >About Me</router-link
                >
              </li></a
            >
            <a href="#"
              ><li>
                <router-link to="#programming" class="underline-animation"
                  >Projects</router-link
                >
              </li></a
            >
            <a href="#"
              ><li>
                <router-link to="" class="underline-animation"
                  >Music</router-link
                >
              </li></a
            >
            <a href="#"
              ><li>
                <router-link to="#contact" class="underline-animation"
                  >Contact</router-link
                >
              </li></a
            >
            <a href="#"
              ><li>
                <router-link to="" class="underline-animation"
                  >DE/ENG</router-link
                >
              </li></a
            >
          </ul>
        </div>
      </nav>
      <div class="language">
        <div class="languageBox">
          <p class="language-selector">DE</p>
          <p class="language-selector">/</p>
          <p class="language-selector">ENG</p>
        </div>
      </div>
      <div class="title">
        <div class="title-box">
          <p class="title-content" id="vorname">FRIEDRICH</p>
          <p class="title-content" id="nachname">VÖLKERS</p>
        </div>
      </div>
      <ul class="menue">
        <li>
          <router-link to="#aboutme" class="underline-animation"
            >About Me</router-link
          >
        </li>
        <li>
          <router-link to="#programming" class="underline-animation"
            >Projects</router-link
          >
        </li>

        <li>
          <router-link to="" class="underline-animation">Music</router-link>
        </li>
        <li>
          <router-link to="#contact" class="underline-animation"
            >Contact</router-link
          >
        </li>
      </ul>
      <div class="scrollUp">
        <router-link to="#startpage" class="arrowRouter"
          ><img class="arrow" src="@/assets/icons/arrow_top.png"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// eslint-disable-next-line
import globalStore from "@/store";

@Component
class VueComponent extends Vue {}
export default VueComponent;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.startpage {
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-color: #f4f9e9;
  /*   background: linear-gradient(
        90deg,
        rgb(255, 255, 255) (22px - 2px),
        transparent 1%
      )
      center,
    linear-gradient(rgb(255, 255, 255) (22px - 2px), transparent 1%) center,
    rgba(80, 80, 80, 0.466);
  background-size: 22px 22px; */
}

nav {
  visibility: hidden;
  height: 0;
}

.content {
  display: flex;
  flex-flow: column;
  height: 100%;
}

p,
ul {
  margin: 0;
  padding: 0;
}

.title {
  font-weight: 300;
  letter-spacing: 10px;
  font-size: 4rem;

  text-align: center;
  height: 15vh;
  padding-top: 35vh;
  padding-bottom: 0vh;
  margin-left: auto;
  margin-right: auto;
  //min-width: max-content;
  //width: 500px;
}

.title-content {
  display: inline-block;
  color: black;
}

#vorname {
  margin-right: 40px;
}

ul {
  text-align: center;
  font-size: 2rem;
  height: 50vh;
}

li {
  font-weight: 300;
  letter-spacing: 3px;
  display: inline;
  text-align: center;
  text-decoration: none;
  padding-right: 50px;
}

li:last-child {
  padding: 0;
}

// Animation
.underline-animation {
  position: relative;
  padding-bottom: 5px;
}

.underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.521);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

a {
  color: black;
  text-decoration: none;
}

.language {
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: right;
  font-size: 1.5rem;

  width: 100%;
  font-weight: 300;
  letter-spacing: 3px;
  right: -15px;
}

.language-selector {
  display: inline;
}

.languageBox {
  margin: 20px;
}

.scrollUp {
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: right;
  right: -15px;
  bottom: 0;
}

.arrowRouter {
  width: 100%;
}

.arrow {
  width: 50px;
  margin: 20px;
}

@media only screen and (max-width: 1115px) {
  .content {
    position: relative;
  }

  li {
    display: block;
  }

  .title {
    padding: 0;
    text-align: right;
    top: 0;
    left: 0;
    font-size: max(4rem);
  }

  .title-content {
    width: 100%;
  }

  .scrollUp {
    width: 0;
    left: 0;
  }

  .arrowRouter {
    width: 0;
  }

  .arrow {
    width: 0;
  }

  .title-box {
    //margin: 50px;
    margin-top: 136px;
    //margin-top: 150px;
    //margin-right: 37px;
  }

  #vorname {
    margin: 0;
    margin-bottom: 20px;
  }

  #nachname {
    margin: 0;
  }

  .language {
    visibility: hidden;
    height: 0;
  }

  .arrow {
    visibility: hidden;
  }

  .menue {
    visibility: hidden;
    height: 0;
  }

  // Menue
  nav {
    height: 0;
    width: 100%;
    top: 0;
    left: 0;
    visibility: inherit;
  }

  #menuToggle {
    width: calc(100% - 37px);
    display: block;
    position: relative;
    top: 50px;
    left: 37px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle a {
    text-decoration: none;
    color: #232323;
    transition: color 0.5s ease;
  }

  #menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  #menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: black;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  #menu2 {
    position: absolute;
    top: -50px;
    left: -37px;
    width: calc(100vw - 15px);
    height: calc(100vh);
    //margin: -100px 0 0 -50px;
    //padding: 50px;
    //padding-top: 125px;
    padding: 100px;
    box-sizing: border-box;
    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu2 li {
    padding: 20px 0;
    font-size: 22px;
  }

  #menuToggle input:checked ~ ul {
    transform: none;
  }
}
</style>
