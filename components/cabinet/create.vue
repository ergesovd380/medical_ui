<template>
  <section>
    <v-app-bar
      style="background-color: rgb(235, 235, 235); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="create-id">Новый кабинет</h3>
<!--Button add-->
      <nuxt-link tag="button" no-prefetch to="/cabinet" class="main-btn mt-2 ms-2">Сохранить</nuxt-link>
      <nuxt-link tag="button" no-prefetch to="/cabinet" class="main-btn mt-2 ms-2">Отмениить</nuxt-link>
    </v-app-bar>
<!-- Form create -->
    <v-form 
    class="create-value"
    ref="form"
    v-model="valid"
    lazy-validation
    >
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">Название кабинета</h4>
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            class="create-main-input"
            placeholder="Trawmatolog"
            autocomplete="none"
            v-model="nameOfCabinet"
            :rules="rulesInput"
            required
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">Номер телефона</h4>
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            class="create-main-input"
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
          <h4 class="ms-4">Номер кабинета</h4>
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            class="create-child-input"
            placeholder="401"
            autocomplete="none"
            type="text"
            v-model="numberofCabinet"
            :rules="rulesInput"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Этаж</h4>
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            class="create-child-input"
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
          :label="checkbox ? 'Активный' : 'Не активный'"
          color="#6AC3EF"
      ></v-checkbox>
    </v-form>
    <slot name="dialog"></slot>
  </section>
</template>
<script lang="ts">
export default {
  data(): any {
    return {
      valid: true,
      checkbox: false,
      nameOfCabinet: '',
      rulesInput: [
        (v: any) => !!v || 'Нельзя оставить пустым',
      ],
      rulesInputForPhone: [
        (v: any) => !!v || 'Нельзя оставить пустым',
        (v: any) => v.length == 11 || 'Должен быть 11 цифр',
      ],
      phoneNumber: '',
      numberofCabinet: '',
      floor: ''
    }
  },
  methods: {
    showConsole() {
      console.log(this.nameOfCabinet)
    }
  }
}
</script>
