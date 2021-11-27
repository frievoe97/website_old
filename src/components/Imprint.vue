<template>
  <div class="imprint" id="imprint">
    <div class="imprint-content">
      <div class="header"><p>Impressum</p></div>
      <div class="imprint-text">
        <div class="imprint-text-subheader">Angaben gem. § 5 TMG:</div>
        <div class="imprint-text-content">
          Friedrich Völkers<br />Berliner Allee 123<br />12345 Berlin <br />+49
          160 753 7858 <br />info@friedrichvoelkers.de
        </div>
        <div class="imprint-text-subheader">Umsatzsteuer-ID</div>
        <div class="imprint-text-content">
          Umsatzsteuer-Identifikationsnummer gem. § 27 a Umsatzsteuergesetz:
          <br />
          DE XXX XXX XXX
        </div>
        <div class="imprint-text-subheader">
          Haftungsausschluss – Disclaimer:
        </div>
        <div class="imprint-text-subsubheader">Haftung für Inhalte</div>
        <div class="imprint-text-content">
          Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und
          nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit
          und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung
          möglich. Bei Bekanntwerden von den o.g. Rechtsverletzungen werden wir
          diese Inhalte unverzüglich entfernen.
        </div>
        <div class="imprint-text-subsubheader">
          Haftungsbeschränkung für externe Links
        </div>
        <div class="imprint-text-content">
          Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die
          Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir
          keinen Einfluss. Daher können wir für die „externen Links“ auch keine
          Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der
          externen Links sind die jeweilige Anbieter oder Betreiber (Urheber)
          der Seiten verantwortlich. Die externen Links wurden zum Zeitpunkt der
          Linksetzung auf eventuelle Rechtsverstöße überprüft und waren im
          Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten. Eine
          ständige inhaltliche Überprüfung der externen Links ist ohne konkrete
          Anhaltspunkte einer Rechtsverletzung nicht möglich. Bei direkten oder
          indirekten Verlinkungen auf die Webseiten Dritter, die außerhalb
          unseres Verantwortungsbereichs liegen, würde eine
          Haftungsverpflichtung ausschließlich in dem Fall nur bestehen, wenn
          wir von den Inhalten Kenntnis erlangen und es uns technisch möglich
          und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu
          verhindern. Diese Haftungsausschlusserklärung gilt auch innerhalb des
          eigenen Internetauftrittes „Name Ihrer Domain“ gesetzten Links und
          Verweise von Fragestellern, Blogeinträgern, Gästen des
          Diskussionsforums. Für illegale, fehlerhafte oder unvollständige
          Inhalte und insbesondere für Schäden, die aus der Nutzung oder
          Nichtnutzung solcherart dargestellten Informationen entstehen, haftet
          allein der Diensteanbieter der Seite, auf welche verwiesen wurde,
          nicht derjenige, der über Links auf die jeweilige Veröffentlichung
          lediglich verweist. Werden uns Rechtsverletzungen bekannt, werden die
          externen Links durch uns unverzüglich entfernt.
        </div>
        <div class="imprint-text-subsubheader">Urheberrecht</div>

        <div class="imprint-text-content">
          Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen
          dem deutschen Urheberrecht
          (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf) . Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
          des geistigen Eigentums in ideeller und materieller Sicht des Urhebers
          außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen
          schriftlichen Zustimmung des jeweiligen Urhebers i.S.d.
          Urhebergesetzes
          (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf ).
          Downloads und Kopien dieser Seite sind nur für den privaten und nicht
          kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite
          nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu
          beachten. Die Inhalte Dritter werden als solche kenntlich gemacht.
          Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
          werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
          von Rechtsverletzungen werden wir derartige Inhalte unverzüglich
          entfernen. Dieses Impressum wurde freundlicherweise von jurarat.de zur
          Verfügung gestellt.
        </div>
      </div>
    </div>
    <Footer class="component" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Footer from "@/components/Footer.vue";
// eslint-disable-next-line
import globalStore from "@/store";

@Component({
  components: { Footer },
})
/*
export default class Imprint extends Vue {
  // globalStore.commit('setFullScreen', true)
}
*/
class VueComponent extends Vue {}
export default VueComponent;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.imprint {
  width: 100%;
  min-height: 100vh;
  height: min-content;
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

.imprint-content {
  width: 1000px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.header {
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 3rem;
  font-weight: 300;
  padding: 30px;
}

.imprint-text {
  text-align: justify;
  font-size: 1.3rem;
  letter-spacing: 1px;
  font-weight: 300;
  line-height: 1.5;
}

.imprint-text-content,
.imprint-text-subheader,
.imprint-text-subsubheader {
  margin-bottom: 30px;
}

.imprint-text-subheader {
  font-weight: bold;
}
</style>
