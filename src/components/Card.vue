<template>
  <div class="card">
    <div>
      <div class="header">
        <p class="header-text">{{ name }}</p>
      </div>
      <div class="content">
        <p class="content-text">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

// eslint-disable-next-line
import globalStore from "@/store";

@Component
class VueComponent extends Vue {
  @Prop() private color!: string;
  @Prop() private name!: string;
  @Prop() private desc!: string;
}
export default VueComponent;
</script>

<style scoped lang="scss">
.header-text {
  margin: 0;
  padding: 0;
  font-size: 2rem;
  color: black;
  padding-top: 60px;
}

.content-text {
  font-size: 1.3rem;
  margin: 0;
  font-weight: 300;
  color: white;
  letter-spacing: 2px;
}

.card {
  width: 500px;
  height: 600px;
  border-radius: 40px;
  margin: 40px;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 20px 20px 30px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.header {
  height: 150px;
  width: 100%;
  background-color: #f4f9e9;
  text-align: center;
}

.content {
  height: 450px;
  width: 100%;
  background-color: #153243;
  text-align: justify;
  padding: 20px;
  box-sizing: border-box;
  line-height: 1.7;
}
</style>
