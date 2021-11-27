<template>
  <div class="aboutme" id="aboutme">
    <!-- <div class="aboutme-content">
      <div class="header" data-aos="zoom-in"><p>About Me</p></div>
      <div class="aboutme-subcontent" data-aos="zoom-in">
        <div class="picture">
          <img class="picture-element" src="../assets/me_1.jpeg" alt="" />
        </div>
        <div class="text">
          <p>
            Hey. <br />
            <br />
            I am a web and IOS developer and music producer. If you are
            interested, you can contact me here. The projects published here are
            all open source and you can also view them on my GitHub account.

            <br />
            <br />

            I am currently studying Applied Computer Science at HTW Berlin and
            have a degree in Transportation Engineering at TU Berlin (B. Sc.).
          </p>
        </div>
      </div>
      <div class="qualifications">
        <div class="qualifications-left">
          <p class="qualifications-subheader">Programmiersprachen</p>
          <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>C</li>
            <li>Swift</li>
          </ul>
        </div>
        <div class="qualifications-right">
          <p class="qualifications-subheader">Frameworks</p>
          <ul>
            <li>Vue.js</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </div> -->
    <div class="header" data-aos="zoom-in"><p>About Me</p></div>
    <div class="card" data-aos="zoom-in">
      <div class="card-image"><img src="../assets/me_1.jpeg" alt="" /></div>
      <div class="card-text">
        <p>
          Hey! <br />
          <br />
          I am a web and IOS developer and music producer. If you are
          interested, you can contact me here. The projects published here are
          all open source and you can also view them on my GitHub account.

          <br />
          <br />

          I am currently studying Applied Computer Science at HTW Berlin and
          have a degree in Transportation Engineering at TU Berlin (B. Sc.).

          <br />
          <br />

          In my transportation studies, I found my liking for computer science
          and continued my education in the field. Besides my studies I work as
          a student assistant at the Department of Transportation Systems
          Planning and Traffic Telematics at the TU Berlin as a tutor for Java
          and help to develop the website www.covid-sim.info.

          <br />
          <br />
          Here is a small overview of the programming languages and frameworks I
          work with:
        </p>
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
.aboutme {
  width: 1000px;
  height: min-content;
  min-height: 100vh;

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
  margin-bottom: 150px;
}

.card-image {
  width: 100%;
  text-align: center;
  height: max-content;
}

img {
  width: 200px;
  height: 200px;
  border-radius: 200px;
  margin: 40px;
  object-fit: cover;
}

.card-text {
  font-size: 1.3rem;
  text-align: justify;
  padding: 40px;
  line-height: 1.7;
  letter-spacing: 3px;
  font-weight: 400;
  padding-top: 0;
}
</style>
