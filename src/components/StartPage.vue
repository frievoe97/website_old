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
      <ul>
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
</style>
