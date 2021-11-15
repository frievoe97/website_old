<template>
  <div class="main">
    <StartPage class="component" />
    <Content class="component" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StartPage from "@/components/StartPage.vue"; // @ is an alias to /src
import Content from "@/components/Content.vue"; // @ is an alias to /src

@Component({
  components: { StartPage, Content },
})
export default class Main extends Vue {}
</script>

<style lang="scss"></style>
