<template>
  <section class="blank">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Header-->
      <nuxt-link tag="button" to="/blank" class="main-btn mt-2 ms-2">{{ $t("Back") }}</nuxt-link>
      <v-spacer></v-spacer>
      <label class="mx-3">Görnüşiň şertli belgisi</label>
      <v-text-field
        class="blank__element"
        autocomplete="none"
        color="var(--blue-color)"
        type="text"
        solo
        flat
      ></v-text-field>
      <label class="mx-3">Edaranyň şertli belgisi</label>
      <v-text-field
        class="blank__element"
        color="var(--blue-color)"
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
        <h1 class="blank__name">Immunoferment derňeiniň netijesi №</h1>
        </v-col>
        <v-col class="col-2">
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
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
            color="var(--blue-color)"
            class="blank__input2"
            autocomplete="none"
            type="date"
          ></v-text-field>
        </v-col>
      </v-row>
<!--Cabinet, Toleg belgisi-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Töleg belgisi</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            placeholder="Выберите"
            no-data-text="Нет Данных"
            required
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <h4 class="ms-4">Kabinet</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            placeholder="Выберите"
            no-data-text="Нет Данных"
            :items="cabinetCheck"
          >
          </v-autocomplete>
        </v-col>
      </v-row>
<!--Nasag-->
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">Näsag</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            append-icon="mdi-magnify"
            placeholder="Lukman gözlegi"
            no-data-text="Нет Данных"
            :items="elementByNameSurnameOfPatient"
          >
          </v-autocomplete>
        </v-col>
      </v-row>
<!--Spisok-->
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">Testiň gönüşi</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">Anti-HCV Ig G</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">Anti-HCV-NS</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">HBs Ag</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">Anti-HBe (anti- CORE)</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">Anti-HBs Ag</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">Anti-HDV</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">HIV</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">Helicobacter pylori Ig G</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">Chlamydia trachomatis IgM</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">Chlamydia trachomatis IgG</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">Toxoplazma IgM</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">Toxoplazma IgG</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">CMV IgM</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">CMV IgG</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">Ureaplazma Ig G</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-4">
          <h1 class="ms-4 blank__name">Mycoplazma Ig G</h1>
        </v-col>
        <v-col>        
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
<!--Result-->
      <v-row>
        <v-col>
          <h1 class="ms-4 blank__name">Netije</h1>
          <v-textarea
            filled
            rounded
            auto-grow
            dense
            type="text"
            color="var(--blue-color)"
            rows="10"
            row-height="20"
            class="blank__textarea"
          ></v-textarea>
        </v-col>
      </v-row>
<!--Doctor-->
      <v-row>
        <v-col class="col-1">
          <h1 class="ms-4 mt-2 blank__name">Lukman</h1>
        </v-col>
        <v-col class="col-6">
          <v-autocomplete
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="blank__create-input"
            append-icon="mdi-magnify"
            placeholder="Lukman gözlegi"
            no-data-text="Нет Данных"
            :items="elementByNameSurname"
          >
          </v-autocomplete>
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
    elementByNameSurname(): any {
      return this.$store.getters.elementByNameSurname
    },
    elementByNameSurnameOfPatient(): any {
      return this.$store.getters.elementByNameSurnameOfPatient
    }
  }
}
</script>
