<template>
  <div class="projectPage" id="projects">
    <div class="header"><p>Projects</p></div>
    <div class="projects">
      <router-link to="#aboutme"
        ><Card
          name="Dumb Calculator (iOS)"
          desc="You were not good at math and feel arrogant towards other calculators?
          Then Dumb Calculator is exactly what you need. Dumb Calculator doesn't
          fool anyone and that's exactly what it doesn't claim to do. Dumb
          Calculator is an honest calculator that makes mistakes sometimes. The
          project is an open source project where anyone can contribute and is
          currently only available for iOS."
          class="component"
      /></router-link>

      <router-link to="#aboutme"
        ><Card
          name="Pathfinder"
          desc="You were not good at math and feel arrogant towards other calculators?
          Then Dumb Calculator is exactly what you need. Dumb Calculator doesn't
          fool anyone and that's exactly what it doesn't claim to do. Dumb
          Calculator is an honest calculator that makes mistakes sometimes. The
          project is an open source project where anyone can contribute and is
          currently only available for iOS."
          class="component"
      /></router-link>
      <router-link to="#aboutme"
        ><Card
          name="Website"
          desc="You were not good at math and feel arrogant towards other calculators?
          Then Dumb Calculator is exactly what you need. Dumb Calculator doesn't
          fool anyone and that's exactly what it doesn't claim to do. Dumb
          Calculator is an honest calculator that makes mistakes sometimes. The
          project is an open source project where anyone can contribute and is
          currently only available for iOS."
          class="component"
      /></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// eslint-disable-next-line
import globalStore from "@/store";

import Card from "@/components/Card.vue";

@Component({
  components: {
    Card,
  },
})
class VueComponent extends Vue {}
export default VueComponent;
</script>

<style scoped lang="scss">
.projectPage {
  width: 100%;
  height: max-content;
  min-height: 100vh;
  background-color: #284b63;
}

.projects {
  justify-content: center;
  box-sizing: border-box;

  padding: 200px;
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
}

a {
  text-decoration: none;
}

.header {
  width: 100%;
  text-align: center;
  padding-top: 70px;
}

p {
  margin: 0;
  padding: 0;
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 3px;
  color: white;
}
</style>
