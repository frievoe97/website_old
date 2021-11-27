<template>
  <div class="linebreak" id="linebreak"></div>
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
.linebreak {
  width: 1000px;
  height: 3px;
  width: 0;
  height: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: black;
}
</style>
