<template>
  <div class="contact" id="contact">
    <div class="header">Contact</div>
    <div class="card">
      <!-- <div class="header">Contact</div> -->
      <div class="carddiv" data-aos="zoom-in">
        <div class="contact-formula">
          <div class="text-input" id="firstName">
            <div class="element" id="one">
              <input
                type="text"
                class=""
                placeholder="Vorname"
                required
              /><span></span>
            </div>
          </div>
          <div class="text-input" id="lastName">
            <div class="element" id="two">
              <input type="text" class="" placeholder="Nachname" required />
            </div>
          </div>
          <div class="text-input one-elements">
            <div class="element" id="three">
              <input type="text" class="" placeholder="E-Mail" required />
            </div>
          </div>
          <div class="text-input one-elements">
            <div class="element" id="four">
              <input type="text" class="" placeholder="Betreff" required />
            </div>
          </div>
          <div class="text-area one-elements">
            <div class="element" id="five">
              <input
                rows="3"
                type="text"
                placeholder="Nachricht"
                class="form-control"
                required
              />
            </div>
          </div>
          <div class="send-button one-elements">
            <div class="element" id="six">
              <button class="square-button" @click="readInputData()">
                Senden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// eslint-disable-next-line
import globalStore from "@/store";

@Component
class VueComponent extends Vue {
  private readData = {
    firstName: "",
    lastName: "",
    mail: "",
    betreff: "",
    message: "",
  };

  private readInputData(): void {
    this.readData.firstName = document.getElementsByTagName("input")[0].value;
    this.readData.lastName = document.getElementsByTagName("input")[1].value;
    this.readData.mail = document.getElementsByTagName("input")[2].value;
    this.readData.betreff = document.getElementsByTagName("input")[3].value;
    this.readData.message = document.getElementsByTagName("input")[4].value;
    return;
  }
}
export default VueComponent;

/*
export default class Contact extends Vue {
  private readData = {
    firstName: "",
    lastName: "",
    mail: "",
    betreff: "",
    message: "",
  };

  readInputData(): void {
    this.readData.firstName = document.getElementsByTagName("input")[0].value;
    this.readData.lastName = document.getElementsByTagName("input")[1].value;
    this.readData.mail = document.getElementsByTagName("input")[2].value;
    this.readData.betreff = document.getElementsByTagName("input")[3].value;
    this.readData.message = document.getElementsByTagName("input")[4].value;
    return;
  }
  
}
*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact {
  max-width: 1000px;
  height: max-content;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
}

.header {
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  text-align: center;
  font-size: 3.5rem;
  font-weight: 300;
  padding: 30px;
  letter-spacing: 4px;

  margin-top: 56px;
  margin-bottom: 56px;
}

.card {
  width: 900px;
  height: max-content;
  background-color: rgba(250, 250, 250, 0.8);
  margin-left: auto;
  margin-right: auto;
  border-radius: 50px;
  box-shadow: 30px 30px 70px rgba(0, 0, 0, 0.253);
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 150px;
  padding: 40px;
  box-sizing: border-box;
}

.carddiv {
  height: max-content;
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

input {
  box-sizing: border-box;
  padding: 20px;
  margin: 20px;
  width: calc(100% - 40px);
  border: 0;
}

.element {
  box-sizing: border-box;
}

.form-control {
  height: 150px;
}

.send-button {
  height: 50px;
  margin: 20px;
  padding-bottom: 30px;
}

button {
  width: 100%;
  height: 75px;
  border: 0;
}

button,
input {
  border-bottom: 3px solid black;
  background-color: rgba(250, 250, 250, 0.8);
}

button {
  //border: 10px solid black;
}

// Style placeholder, text
button,
input {
  font-size: 1.1rem;
  letter-spacing: 2px;
  font-weight: 300;
  color: black;
  opacity: 1;
}

@media only screen and (max-width: 1020px) {
  .one-elements,
  #firstName,
  #lastName {
    flex: 1 100%;
  }

  .card {
    width: 80%;
  }
}
</style>
