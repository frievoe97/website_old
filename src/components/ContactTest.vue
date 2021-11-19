<template>
  <div class="contact" id="contact">
    <div data-aos="zoom-in">
      <p>Kontakt</p>
      <v-icon name="beer" class="icon" />
      <div class="contact-formula">
        <div class="text-input" id="firstName">
          <input
            type="text"
            class=""
            placeholder="Vorname"
            required
          /><span></span>
        </div>
        <div class="text-input" id="lastName">
          <input type="text" class="" placeholder="Nachname" required />
        </div>
        <div class="text-input one-elements">
          <input type="text" class="" placeholder="E-Mail" required />
        </div>
        <div class="text-input one-elements">
          <input type="text" class="" placeholder="Betreff" required />
        </div>
        <div class="text-area one-elements">
          <input
            rows="3"
            type="text"
            placeholder="Nachricht"
            class="form-control"
            required
          />
        </div>
        <div class="send-button one-elements">
          <button class="square-button">Senden</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Contact extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact {
  width: 100%;
  height: 100vh;
}

.contact-formula {
  display: flex;
  flex-wrap: wrap;
}

.one-elements {
  flex: 1 100%;
}

#firstName {
  flex: 1;
}

#lastName {
  flex: 1;
}

p {
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 3rem;
  font-weight: 300;
  padding: 30px;
}

.contact-formula {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

span {
  position: absolute;
  letter-spacing: 2px;
  left: 20px;
  top: 20px;
  font-size: 1.1rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.7);
}

// Could be deleted
input:focus ~ span,
input:valid ~ span {
  display: none;
}

input {
  padding-left: 20px;
  width: calc(100% - 20px);
}

.text-input,
.send-button {
  height: 50px;
  position: relative;
  margin: 10px;
}

.form-control {
  height: 100px;
}

.text-area {
  height: 100px;
  position: relative;
  padding: 10px;
}

textarea {
  resize: none;
  padding: 0;
}

input {
  font-size: 1.1rem;
  letter-spacing: 2px;
  font-weight: 300;
  //padding: 20px;
}

input,
textarea,
button {
  width: 100%;
  height: 100%;
  border: 0;

  background-color: rgb(211, 211, 211);
}

button {
  font-size: 1.1rem;
  letter-spacing: 2px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.7);
  padding: 0;
}

.icon {
  text-align: center;
  height: 100px;
  width: 100px;
}
</style>
