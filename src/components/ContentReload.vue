<template>
  <div class="content" id="programming">
    <div class="header" data-aos="zoom-in"><p>Projects</p></div>
    <div class="card card-margin-bottom" data-aos="zoom-in">
      <div class="card-header"><p>Dumb Calculator (iOS)</p></div>
      <div class="card-image image-left">
        <img src="../assets/dc_1.png" alt="" />
      </div>
      <div class="card-text text-right">
        <p class="card-text-p">
          You were not good at math and feel arrogant towards other calculators?
          Then Dumb Calculator is exactly what you need. Dumb Calculator doesn't
          fool anyone and that's exactly what it doesn't claim to do. Dumb
          Calculator is an honest calculator that makes mistakes sometimes.<br />The
          project is an open source project where anyone can contribute and is
          currently only available for iOS.
        </p>
      </div>
    </div>
    <div class="card" data-aos="zoom-in">
      <div class="card-header"><p>Pathfinder</p></div>
      <div class="card-text text-left">
        <p class="card-text-p">
          You were not good at math and feel arrogant towards other calculators?
          Then Dumb Calculator is exactly what you need. Dumb Calculator doesn't
          fool anyone and that's exactly what it doesn't claim to do. Dumb
          Calculator is an honest calculator that makes mistakes sometimes.<br />The
          project is an open source project where anyone can contribute and is
          currently only available for iOS.
        </p>
      </div>
      <div class="card-image image-right">
        <img class="image-extra-margin" src="../assets/pf_2.gif" alt="" />
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
.content {
  width: 1000px;
  min-height: 100vh;
  height: min-content;
  //background-color: rgb(255, 255, 255);
  margin-left: auto;
  margin-right: auto;
}

.header {
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 3.5rem;
  font-weight: 300;
  padding: 30px;
  letter-spacing: 4px;
}

.card {
  width: 900px;
  height: max-content;
  background-color: rgba(250, 250, 250, 0.8);
  margin-left: auto;
  margin-right: auto;
  border-radius: 50px;
  box-shadow: 30px 30px 70px rgba(0, 0, 0, 0.253);
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 150px;
}

.card-header {
  width: 100%;
  height: min-content;
  font-size: 2rem;
  font-weight: 300;
  flex: 1 100%;
  text-align: center;
}

.card-image {
  padding: 40px;

  text-align: center;
  flex: 1;
  width: 500px;
}

img {
  width: 400px;
}

.card-text {
  font-size: 1.3rem;
  text-align: justify;
  flex: 1;
  width: 500px;
  padding: 40px;
  line-height: 1.7;
  letter-spacing: 3px;
  font-weight: 400;
  margin-bottom: 20px;
}

.card-text-p {
  margin: 0;
}

.image-left {
  padding-bottom: 20px;
  padding-right: 20px;
}

.text-right {
  padding-bottom: 20px;
  padding-left: 20px;
}

.image-right {
  padding-bottom: 20px;
  padding-left: 20px;
}

.text-left {
  padding-bottom: 20px;
  padding-right: 20px;
}

.image-extra-margin {
}

@media only screen and (max-width: 1115px) {
  .content {
    width: 100%;
  }

  .card {
    width: 80%;
  }

  .card-text {
    font-size: 1.2rem;
    padding: 20px;
    order: 3;
    flex: 1 100%;
  }

  .card-image {
    padding: 20px;
    order: 2;
    flex: 1 100%;
  }
}
</style>
