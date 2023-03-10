<template>
  <section class="blank">
    <v-app-bar
      style="background-color: rgb(235, 235, 235); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Header-->
      <nuxt-link tag="button" to="/blank" class="main-btn mt-2 ms-2">Назад</nuxt-link>
      <v-spacer></v-spacer>
      <label class="mx-3">Görnüşiň şertli belgisi</label>
      <v-text-field
        class="blank__element"
        autocomplete="none"
        color="#6AC3EF"
        type="text"
        solo
        flat
      ></v-text-field>
      <label class="mx-3">Edaranyň şertli belgisi</label>
      <v-text-field
        class="blank__element"
        color="#6AC3EF"
        autocomplete="none"
        type="text"
        solo
        flat
      ></v-text-field>
      <v-btn icon class="mt-2 ms-2 main-filter-btn">
        <v-icon>
          mdi-printer-outline
        </v-icon>
      </v-btn>
    </v-app-bar>
<!-- Form create -->
    <v-form 
      class="blank__value"
      ref="form"
      v-model="valid"
      lazy-validation
    >
<!--Shapka-->
      <v-row>
        <v-col class="text-center">
          <h1 class="blank__name">Türkmenistanyň Saglygy goraýyş we derman <br> senagaty ministrligi</h1>
          <h1 class="mt-5 blank__name">Şikesleri bejeriş halkara merkezi</h1>
        </v-col>
        <v-col class="text-center">
          <img src="@/images/logo.png" width="103px" height="101px">
        </v-col>
        <v-col>
          <h1 class="blank__name">499/h görnüşli saglygy goraýyş resminamasy Türkmenistanyň SD we DS ministrligi tarapyndan 18.11.2006ý. №230-njy buýruk esasynda tassyklanan</h1>
        </v-col>
      </v-row>
<!--Название болезни-->
      <v-row>
        <v-col class="col-4">
        <h1 class="blank__name">GANYŇ TOPARY WE REZUS-FAKTOR <br>BARLAGYNYŇ NETIJESI</h1>
        </v-col>
        <v-col class="col-2">
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            class="blank__input"
            autocomplete="none"
            type="text"
          ></v-text-field>
        </v-col>
        <v-col class="col-3 offset-3">
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            class="blank__input2"
            autocomplete="none"
            type="date"
          ></v-text-field>
        </v-col>
      </v-row>
<!--Cabinet, Toleg belgisi-->
      <v-row>
        <v-col>
          <div class="ms-4">Töleg belgisi</div>
          <v-autocomplete
            filled
            rounded
            dense
            color="#6AC3EF"
            class="blank__create-input"
            placeholder="Выберите"
            no-data-text="Нет данных"
            required
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <div class="ms-4">Kabinet</div>
          <v-autocomplete
            filled
            rounded
            dense
            color="#6AC3EF"
            class="blank__create-input"
            placeholder="Выберите"
            no-data-text="Нет данных"
            :items="cabinetCheck"
          >
          </v-autocomplete>
        </v-col>
      </v-row>
<!--Nasag-->
      <v-row>
        <v-col class="col-6">
          <div class="ms-4">Näsag</div>
          <v-autocomplete
            filled
            rounded
            dense
            color="#6AC3EF"
            class="blank__create-input"
            append-icon="mdi-magnify"
            placeholder="Näsag gözlegi"
            no-data-text="Нет данных"
            :items="elementByNameSurnameOfPatient"
          >
          </v-autocomplete>
        </v-col>
      </v-row>
<!--Name of Doctor-->
      <div class="ms-4 mt-4">Çäk edilen ganyň topary (bölümde kesgitlenen)</div>
      <v-row>
        <v-col class="col-3">
          <div class="ms-4 mt-4">Bölümiň lukmany (FAAA)</div>
        </v-col>
        <v-col class="col-6">
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            type="text"
            class="blank__create-input"
          ></v-text-field>
        </v-col>
        <v-col class="col-1">
          <div class="mt-4">goly</div>
        </v-col>
        <v-col class="col-2">
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            type="text"
            class="blank__create-input"
          ></v-text-field>
        </v-col>
      </v-row>
<!--Result-->
      <div class="my-10">
        <h1 class="blank__name text-center">Barlagyň netijesi</h1>
      </div>
      <v-row>
        <v-col class="col-4">
          <h1 class="blank__name ms-4 mt-4">Ganyň topary</h1>
        </v-col>
        <v-col class="col-7">
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            type="text"
            class="blank__create-input"
          ></v-text-field>
        </v-col>
        <v-col class="col-1">
          <h1 class="blank__name mt-4">mmol/l</h1>
        </v-col>
        <v-col class="col-4">
          <h1 class="blank__name ms-4 mt-4">Rezus-faktor</h1>
        </v-col>
        <v-col class="col-7">
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            type="text"
            class="blank__create-input"
          ></v-text-field>
        </v-col>
        <v-col class="col-1">
          <h1 class="blank__name mt-4">mmol/l</h1>
        </v-col>
      </v-row>
<!--Footer date-time-->
      <v-row>
        <v-col class="col-4">
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            type="date"
            class="blank__create-input"
          ></v-text-field>
        </v-col>
        <v-col class="col-2">
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            type="time"
            class="blank__create-input"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </section>
</template>
<script lang="ts">
export default {
  data(): any {
    return {
      valid: true,
    }
  },
  computed: {
    cabinetCheck(): any {
      return this.$store.getters.elementByCabinetName
    },
    elementByNameSurnameOfPatient(): any {
      return this.$store.getters.elementByNameSurnameOfPatient
    }
  }
}
</script>
