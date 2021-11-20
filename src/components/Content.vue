<template>
  <div class="content" id="programming">
    <div data-aos="zoom-in"><p>Projekte</p></div>
    <div class="element">
      <div class="left-element picture" data-aos="fade-right">
        <img src="../assets/dc_1.png" alt="" />
      </div>
      <div class="element-space"></div>
      <div class="right-element" data-aos="fade-left">
        <p class="header-element">Dumb Calculator (iOS)</p>
        <p class="text">
          You were not good at math and feel arrogant towards other calculators?
          Then Dumb Calculator is exactly what you need. Dumb Calculator doesn't
          fool anyone and that's exactly what it doesn't claim to do. Dumb
          Calculator is an honest calculator that makes mistakes sometimes.<br />The
          project is an open source project where anyone can contribute and is
          currently only available for iOS.
        </p>
      </div>
    </div>
    <div class="element">
      <div class="left-element" data-aos="fade-right">
        <p class="header-element">Dijkstra Pathfinder</p>
        <p class="text">
          You were not good at math and feel arrogant towards other calculators?
          Then Dumb Calculator is exactly what you need. Dumb Calculator doesn't
          fool anyone and that's exactly what it doesn't claim to do. Dumb
          Calculator is an honest calculator that makes mistakes sometimes.<br />The
          project is an open source project where anyone can contribute and is
          currently only available for iOS.
        </p>
      </div>
      <div class="element-space"></div>
      <div class="right-element picture" data-aos="fade-left">
        <img src="../assets/pf_2.gif" alt="" />
      </div>
    </div>
    <div class="element" id="programming">
      <div class="left-element picture" data-aos="fade-right">
        <img src="../assets/dc_1.png" alt="" />
      </div>
      <div class="element-space"></div>
      <div class="right-element" data-aos="fade-left">
        <p class="header-element">Dumb Calculator (iOS)</p>
        <p class="text">
          You were not good at math and feel arrogant towards other calculators?
          Then Dumb Calculator is exactly what you need. Dumb Calculator doesn't
          fool anyone and that's exactly what it doesn't claim to do. Dumb
          Calculator is an honest calculator that makes mistakes sometimes.<br />The
          project is an open source project where anyone can contribute and is
          currently only available for iOS.
        </p>
      </div>
    </div>
    <div class="element">
      <div class="left-element" data-aos="fade-right">
        <p class="header-element">Dijkstra Pathfinder</p>
        <p class="text">
          You were not good at math and feel arrogant towards other calculators?
          Then Dumb Calculator is exactly what you need. Dumb Calculator doesn't
          fool anyone and that's exactly what it doesn't claim to do. Dumb
          Calculator is an honest calculator that makes mistakes sometimes.<br />The
          project is an open source project where anyone can contribute and is
          currently only available for iOS.
        </p>
      </div>
      <div class="right-element picture" data-aos="fade-left">
        <img src="../assets/pf_2.gif" alt="" />
      </div>
    </div>
    <div class="element" id="programming">
      <div class="left-element picture" data-aos="fade-right">
        <img src="../assets/dc_1.png" alt="" />
      </div>
      <div class="element-space"></div>
      <div class="right-element" data-aos="fade-left">
        <p class="header-element">Dumb Calculator (iOS)</p>
        <p class="text">
          You were not good at math and feel arrogant towards other calculators?
          Then Dumb Calculator is exactly what you need. Dumb Calculator doesn't
          fool anyone and that's exactly what it doesn't claim to do. Dumb
          Calculator is an honest calculator that makes mistakes sometimes.<br />The
          project is an open source project where anyone can contribute and is
          currently only available for iOS.
        </p>
      </div>
    </div>
    <div class="element">
      <div class="left-element" data-aos="fade-right">
        <p class="header-element">Dijkstra Pathfinder</p>
        <p class="text">
          You were not good at math and feel arrogant towards other calculators?
          Then Dumb Calculator is exactly what you need. Dumb Calculator doesn't
          fool anyone and that's exactly what it doesn't claim to do. Dumb
          Calculator is an honest calculator that makes mistakes sometimes.<br />The
          project is an open source project where anyone can contribute and is
          currently only available for iOS.
        </p>
      </div>
      <div class="element-space"></div>
      <div class="right-element picture" data-aos="fade-left">
        <img src="../assets/pf_2.gif" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Content extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
  height: max-content;
  width: 100vw;
  max-width: 100%;
}

p {
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 3rem;
  font-weight: 300;
  padding: 30px;
}

.element {
  padding-top: 100px;
  height: 700px;
  width: 1000px;
  //background-color: white;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  font-size: 1.3rem;
}

.header-element {
  font-size: 2rem;
}

.right-element {
  //background-color: rgb(250, 240, 250);
  width: 490px;
  height: max-content;
}

.left-element {
  //background-color: rgb(250, 250, 240);
  width: 490px;
  height: 700px;
}

.element-space {
  width: 20px;
  height: 700px;
}

img {
  max-height: 90%;
  max-width: 90%;
}

.picture {
  margin-top: 30px;
  text-align: center;
}

.header-element {
  font-weight: 400;
  margin: 0;
  margin-top: 30px;
}

.text {
  text-align: justify;
  font-size: 1.5rem;
  letter-spacing: 1px;
  font-weight: 300;
  line-height: 1.5;
}

// Animations
</style>
