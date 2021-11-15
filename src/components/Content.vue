<template>
  <div class="content">
    <div class="element" id="page-programming">
      <div class="left-element picture">
        <img src="../assets/dc_1.png" alt="" />
      </div>
      <div class="right-element">
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
      <div class="left-element">
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
      <div class="right-element picture">
        <img src="../assets/pf_2.gif" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Content extends Vue {
  //@Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
  height: max-content;
  width: 100vw;
  max-width: 100%;
  background: linear-gradient(
        90deg,
        rgb(255, 239, 223) (22px - 2px),
        transparent 1%
      )
      center,
    linear-gradient(rgb(255, 239, 223) (22px - 2px), transparent 1%) center,
    rgba(90, 90, 90, 0.5);
  background-size: 22px 22px;
}

.element {
  padding-top: 100px;
  height: 700px;
  max-width: 1000px;
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
  width: 50%;
  min-width: 500px;
  height: max-content;
}

.left-element {
  //background-color: rgb(250, 250, 240);
  width: 50%;
  min-width: 500px;
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
  font-weight: 300;
  margin: 0;
  margin-top: 30px;
}

.text {
  text-align: justify;
  font-weight: 400;
}
</style>
