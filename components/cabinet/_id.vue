<template>
  <section class="cabinet">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="cabinet__title red--text">{{ $route.params.id }}</h3>
<!--Button back-->
      <nuxt-link tag="button" to="/cabinet" class="main-btn mt-2 ms-2">{{ $t("Back") }}</nuxt-link>
      <v-spacer></v-spacer>
      <v-btn :to="'/cabinet/' + id + '/edit'" icon class="main-filter-btn mt-2">
        <v-icon>
          mdi-pencil
        </v-icon>
      </v-btn>
    </v-app-bar>
<!-- Form edit -->
    <v-form 
      class="cabinet__value"
      ref="form"
    >
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">{{ $t('CabinetData.Name_cabinet') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            class="cabinet__input"
            v-model="nameOfCabinet"
            readonly
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
            class="cabinet__input"
            v-model="phoneNumber"
            readonly
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
            class="cabinet__child-input"
            v-model="numberofCabinet"
            readonly
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">{{ $t('CabinetData.Floor') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            class="cabinet__child-input"
            v-model="floor"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
      <v-checkbox
        v-model="checkbox"
        :label="checkbox ? $t('Active') : $t('Not_active')"
        readonly
        color="var(--blue-color)"
      ></v-checkbox>
    </v-form>
  </section>
</template>

<script lang="ts">
export default {
  props: ['element',],
  data(): any {
    return {
      nameOfCabinet: this.element.nameofcabinet,
      phoneNumber: this.element.phonenumber,
      numberofCabinet: this.element.numberofcabinet,
      floor: this.element.floor,
      id: this.$route.params.id
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
