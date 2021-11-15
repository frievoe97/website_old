<template>
  <div class="startpage">
    <div class="content">
      <div class="title">
        <div class="title-box">
          <a href=""
            ><p class="title-content" id="vorname">FRIEDRICH</p>
            <p class="title-content" id="nachname">VÖLKERS</p></a
          >
        </div>
      </div>
      <ul>
        <li><a href="#page-programming">Programmieren</a></li>
        <li><a href="">Musik</a></li>
        <li><a href="">Über Mich</a></li>
        <li><a href="">Kontakt</a></li>
      </ul>
      <div class="language"><p id="language-selector">DE/ENG</p></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class StartPage extends Vue {
  //@Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.startpage {
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background: linear-gradient(
        90deg,
        rgb(255, 255, 255) (22px - 2px),
        transparent 1%
      )
      center,
    linear-gradient(rgb(255, 255, 255) (22px - 2px), transparent 1%) center,
    rgba(80, 80, 80, 0.5);
  background-size: 22px 22px;
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
}

#vorname {
  margin-right: 40px;
}

ul {
  text-align: center;
  font-size: 2rem;
  height: 45vh;
}

.language {
  font-size: 1.5rem;
  height: 10vh;
  position: relative;
  font-weight: 300;
  letter-spacing: 3px;
}

#language-selector {
  position: absolute;
  bottom: 20px;
  right: 20px;
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

a {
  color: black;
  text-decoration: none;
}
</style>
