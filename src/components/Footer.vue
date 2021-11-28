<template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-top-content">
        <div class="footer-sub">
          <p class="footer-head">Über Mich</p>
        </div>
        <div class="footer-sub">
          <p class="footer-head">Projekte</p>
          <ul class="footer-list">
            <li>Dumb Calculator (iOS)</li>
            <li>Pathfinder</li>
          </ul>
        </div>
        <div class="footer-sub">
          <p class="footer-head">Musik</p>
          <ul class="footer-list">
            <li>Equitment</li>
            <li>Projekte</li>
            <li>Preise</li>
          </ul>
        </div>
        <div class="footer-sub">
          <p class="footer-head">Über Mich</p>
        </div>
        <div class="footer-sub">
          <p class="footer-head">Projekte</p>
          <ul class="footer-list">
            <li>Dumb Calculator (iOS)</li>
            <li>Pathfinder</li>
          </ul>
        </div>
        <div class="footer-sub">
          <p class="footer-head">Musik</p>
          <ul class="footer-list">
            <li>Equitment</li>
            <li>Projekte</li>
            <li>Preise</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <ul class="ul-bottom">
        <li class="li-bottom">
          <router-link to="/imprint" class="router-link-style"
            >Impressum</router-link
          >
        </li>
        <li class="li-bottom">Privacy Policy</li>
        <li class="li-bottom">
          <router-link to="#contact" class="router-link-style"
            >Kontakt</router-link
          >
        </li>
        <li class="li-bottom">Sitemap</li>
        <li class="li-bottom">
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
  color: white;
}

.footer-top-content {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: unset;
}

.footer-sub {
  width: 250px;
}

.footer-list {
  color: white;
  display: inline;
}

.footer-bottom {
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
  height: 100px;

  position: relative;
}

.ul-bottom {
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

@media only screen and (max-width: 1115px) {
  .footer-bottom {
    width: 100%;
  }

  li {
    padding: 0;
  }
}
</style>
