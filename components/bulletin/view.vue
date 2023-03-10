<template>
  <section class="bulletin">
    <v-app-bar
      style="background-color: rgb(235, 235, 235); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="bulletin__title">Бюллетень просмотр</h3>
<!--Button lang-->
      <button class="main-btn mt-2 ms-2">Туркменский</button>
      <button class="main-btn mt-2 ms-2">Русский</button>

<!--Button back-->
      <v-spacer></v-spacer>
      <nuxt-link tag="button" :to="'/bulletin/' + id" class="main-btn mt-2 me-2">Бюллетень</nuxt-link>
    </v-app-bar>
<!-- Form edit -->
    <v-form 
      class="bulletin__value mt-5"
      ref="form"
    >
      <v-row>
        <v-col>
          <h4>DD/MM/YYYY</h4>
          <img src="@/images/bulletin.png">
        </v-col>
      </v-row>
      <div>
        {{ textturkmen }}
      </div>
    </v-form>
  </section>
</template>

<script lang="ts">
export default {
  data(): any {
    return {
      textturkmen: `
      <h1>Saglygy goraýyş we derman senagaty ministrliginiň bildirişi</h1> 
      <br> 
      <p>Şu günler howanyň düzüminde tozan bölejikleriniň möçberiniň kadadan 21 göterim artmagy bilen baglanyşykly häzirki wagtda howa şertleriniň adam bedenine ýetirýän oňaýsyz täsirleriniň öňüni almak üçin, köçelerde we beýleki jemgyýetçilik ýerlerinde bolýan wagtyňyz agyz-burun örtüklerini ulanmagy maslahat berýäris. Saglygyňyzy goraň — agyz-burun örtüklerini ulanyň!</p>
      <p>Hormatly okyjylar! <br>
      Aşakda ýerleşdirilen habarlar hem Siziň ünsiňiz çekip biler, şol sebäpli gök bilen ýazylan habarlary hem okamagy Size maslahat berýäris!</p>
      `,
      id: this.$route.params.id
    }
  },
}
</script>
