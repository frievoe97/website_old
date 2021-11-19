<template>
  <div class="aboutme"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AboutMe extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.aboutme {
  width: 100%;
  height: 1000px;
  background-color: black;
}
</style>
