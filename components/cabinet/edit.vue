<template>
  <section class="cabinet">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="cabinet__title red--text">{{ $route.params.id }}</h3>
<!--Button add-->
      <nuxt-link no-prefetch tag="button" :to="'/cabinet/' + id" class="main-btn mt-2 ms-2">{{ $t("Save") }}</nuxt-link>
      <nuxt-link no-prefetch tag="button" :to="'/cabinet/' + id" class="main-btn mt-2 ms-2">{{ $t("Cancel") }}</nuxt-link>
    </v-app-bar>
<!-- Form edit -->
    <v-form 
      class="cabinet__value"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">{{ $t('CabinetData.Name_cabinet') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="cabinet__input"
            placeholder="Trawmatolog"
            autocomplete="none"
            v-model="nameOfCabinet"
            :rules="rulesInput"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">{{ $t('Phone_number') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="cabinet__input"
            type="number"
            placeholder="+993612345678"
            autocomplete="none"
            v-model="phoneNumber"
            :rules="rulesInputForPhone"
            :counter="11"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-2">
          <h4 class="ms-4">{{ $t('CabinetData.Number_cabinet') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="cabinet__child-input"
            placeholder="401"
            autocomplete="none"
            type="text"
            v-model="numberofCabinet"
            :rules="rulesInput"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">{{ $t('CabinetData.Floor') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="cabinet__child-input"
            type="number"
            placeholder="4"
            autocomplete="none"
            v-model="floor"
            :rules="rulesInput"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-checkbox
        v-model="checkbox"
        :label="checkbox ? $t('Active') : $t('Not_active')"
        color="var(--blue-color)"
      ></v-checkbox>
    </v-form>
    <slot name="dialog"></slot>
  </section>
</template>

<script lang="ts">
export default {
  props: ['element',],
  data(): any {
    return {
      valid: true,
      nameOfCabinet: this.element.nameofcabinet,
      id: this.$route.params.id,
      phoneNumber: this.element.phonenumber,
      numberofCabinet: this.element.numberofcabinet,
      floor: this.element.floor,
      rulesInput: [
        (v: any) => !!v || this.$t('Not_empty'),
      ],
      rulesInputForPhone: [
        (v: any) => !!v || this.$t('Not_empty'),
        (v: any) => v.length == 11 || this.$t('Symbols_11'),
      ],
    }
  },
  computed: {
    checkbox (): any {
      if (this.element.status === 'Активный') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
