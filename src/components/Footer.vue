<template>
  <div class="footer">
    <div class="footer-top"></div>
    <div class="footer-bottom">
      <ul>
        <li>
          <router-link to="/imprint" class="router-link-style"
            >Impressum</router-link
          >
        </li>
        <li>Privacy Policy</li>
        <li>
          <router-link to="#contact" class="router-link-style"
            >Kontakt</router-link
          >
        </li>
        <li>Sitemap</li>
        <li>
          <router-link to="#startpage" class="router-link-style"
            >Friedrich Völkers</router-link
          >
        </li>
      </ul>
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
.footer {
  width: 100%;
  height: 500px;
  background: linear-gradient(90deg, rgb(0, 0, 0) (22px - 2px), transparent 1%)
      center,
    linear-gradient(rgb(0, 0, 0) (22px - 2px), transparent 1%) center,
    rgb(61, 61, 61);
  background-size: 22px 22px;
}

.footer-top {
  background-color: rgba(87, 87, 87, 0.336);
  height: 400px;
}

.footer-bottom {
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  height: 100px;
  position: relative;
}

ul {
  position: absolute;
  padding: 0;
  margin: 0;
  font-size: 1.3rem;
  left: 0;
  right: 0;
  text-align: center;
  bottom: 30px;
}

li {
  font-weight: 300;
  letter-spacing: 3px;
  display: inline;
  text-decoration: none;
  padding-right: 50px;
  color: rgb(184, 184, 184);
}
li:last-child {
  padding: 0;
}

.router-link-style {
  color: rgb(184, 184, 184);
  text-decoration: none;
}
</style>
