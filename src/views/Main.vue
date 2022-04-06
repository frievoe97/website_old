<template>
  <div class="main">
    <!--     <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        background: {
          color: {
            value: '#f2f2f2',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#c2c2c2',
          },
          links: {
            color: '#c2c2c2',
            distance: 150,
            enable: true,
            opacity: 0.7,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }"
    /> -->
    <StartPage class="component" />
    <Projects class="component" />
    <Linebreak class="component" />
    <AboutMe class="component" />
    <Linebreak class="component" />
    <!-- <Content class="component" /> -->
    <ContentReload class="component" />
    <Linebreak class="component" />
    <Contact class="component" />
    <Linebreak class="component" />
    <Footer class="component" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StartPage from "@/components/StartPage.vue";
import Content from "@/components/Content.vue";
import AboutMe from "@/components/AboutMe.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import Linebreak from "@/components/Linebreak.vue";
import ContentReload from "@/components/ContentReload.vue";
import Projects from "@/components/Projects.vue";

@Component({
  components: {
    StartPage,
    Content,
    AboutMe,
    Contact,
    Footer,
    Linebreak,
    ContentReload,
    Projects,
  },
})
export default class Main extends Vue {}
</script>

<style lang="scss">
.main {
  background: linear-gradient(
        90deg,
        rgb(255, 255, 255) (22px - 2px),
        transparent 1%
      )
      center,
    linear-gradient(rgb(255, 255, 255) (22px - 2px), transparent 1%) center,
    rgba(90, 90, 90, 0.5);
  background-size: 22px 22px;
}
</style>
