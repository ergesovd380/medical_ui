<template>
  <section>
    <v-app-bar
      style="background-color: rgb(235, 235, 235); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="create-id red--text">{{ $route.params.id }}</h3>
<!--Button add-->
      <nuxt-link tag="button" :to="'/personal/' + id" class="main-btn main-create-back-btn mt-2 ms-2">Сохранить</nuxt-link>
      <nuxt-link tag="button" :to="'/personal/' + id" class="main-btn main-create-back-btn mt-2 ms-2">Отмениить</nuxt-link>
    </v-app-bar>
<!-- Form edit -->
    <v-form 
      class="create-value-personal mt-5"
      ref="form"
      v-model="valid"
      lazy-validation
    >
<!--Image Personal-->
      <v-row>
        <v-col>
          <v-layout>
            <v-flex xs12>
              <img  :src="imageSrc" height="230" width="230" class="image-personal my-3" v-if="image">
              <img  height="230" width="230" class="image-personal my-3" v-else @click="triggerFile">
            </v-flex>
          </v-layout>
          <input
            type="file"
            class="d-none"
            accept="image/*"
            @change="changeFile"
            ref="fileRef"
          >
        </v-col>
      </v-row>
      <v-row>
<!--F.I.O personal-->
        <v-col>
            <h4 class="ms-4">Ф.И.О сотрудника</h4>
            <v-text-field
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input"
              placeholder="Фамилия"
              v-model="surnamePersonal"
              autocomplete="none"
              type="text"
              :rules="rulesInput"
              required
            ></v-text-field>
            <v-text-field
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input mt-6"
              placeholder="Имя"
              v-model="namePersonal"
              autocomplete="none"
              type="text"
              :rules="rulesInput"
              required
            ></v-text-field>
            <v-text-field
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input mt-6"
              placeholder="Отчество"
              v-model="fathNamePersonal"
              autocomplete="none"
              type="text"
            ></v-text-field>
            <h4 class="ms-4 mt-8">Контактные данные</h4>
            <v-text-field
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input"
              placeholder="Номер телефона"
              v-model="phoneNumberPersonal"
              autocomplete="none"
              type="number"
              :rules="rulesInputForPhone"
              :counter="11"
              required
            ></v-text-field>
        </v-col>
<!--Work day and time-->
        <v-col>
            <h4 class="ms-4">Рабичие дни и часы приема</h4>
            <v-row>
              <v-col>
<!--Пн-->
                <v-row>
                  <v-col class="col-3">
                    <v-checkbox
                    label="Пн"
                    color="#6AC3EF"
                    v-model="Pn"
                  ></v-checkbox>
                  </v-col>
                  <v-col class="col-7">
                    <v-text-field
                      filled
                      rounded
                      dense
                      color="#6AC3EF"
                      class="create-main-input"
                      autocomplete="none"
                      type="time"
                      v-model="pnInput"
                    ></v-text-field>
                  </v-col>
                </v-row>
<!--Вт-->
                <v-row class="personal-createP-day">
                  <v-col class="col-3">
                    <v-checkbox
                    label="Вт"
                    color="#6AC3EF"
                    v-model="Vt"
                  ></v-checkbox>
                  </v-col>
                  <v-col class="col-7">
                    <v-text-field
                      filled
                      rounded
                      dense
                      color="#6AC3EF"
                      class="create-main-input"
                      autocomplete="none"
                      type="time"
                      v-model="vtInput"
                    ></v-text-field>
                  </v-col>
                </v-row>
<!--Ср-->
                <v-row class="personal-createP-day">
                  <v-col class="col-3">
                    <v-checkbox
                    label="Ср"
                    color="#6AC3EF"
                    V-model="Sr"
                  ></v-checkbox>
                  </v-col>
                  <v-col class="col-7">
                    <v-text-field
                      filled
                      rounded
                      dense
                      color="#6AC3EF"
                      class="create-main-input"
                      autocomplete="none"
                      type="time"
                      v-model="srInput"
                    ></v-text-field>
                  </v-col>
                </v-row>
<!--Чт-->
                <v-row class="personal-createP-day">
                  <v-col class="col-3">
                    <v-checkbox
                    label="Чт"
                    color="#6AC3EF"
                    v-model="Cht"
                  ></v-checkbox>
                  </v-col>
                  <v-col class="col-7">
                    <v-text-field
                      filled
                      rounded
                      dense
                      color="#6AC3EF"
                      class="create-main-input"
                      autocomplete="none"
                      type="time"
                      v-model="chtInput"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
<!--Пт-->
                <v-row>
                  <v-col class="col-3">
                    <v-checkbox
                    label="Пт"
                    color="#6AC3EF"
                    v-model="Pt"
                  ></v-checkbox>
                  </v-col>
                  <v-col class="col-7">
                    <v-text-field
                      filled
                      rounded
                      dense
                      color="#6AC3EF"
                      class="create-main-input"
                      autocomplete="none"
                      type="time"
                      v-model="ptInput"
                    ></v-text-field>
                  </v-col>
                </v-row>
<!--Сб-->
                <v-row class="personal-createP-day">
                  <v-col class="col-3">
                    <v-checkbox
                    label="Сб"
                    color="#6AC3EF"
                    v-model="Sb"
                  ></v-checkbox>
                  </v-col>
                  <v-col class="col-7">
                    <v-text-field
                      filled
                      rounded
                      dense
                      color="#6AC3EF"
                      class="create-main-input"
                      autocomplete="none"
                      type="time"
                      v-model="sbInput"
                    ></v-text-field>
                  </v-col>
                </v-row>
<!--Вс-->
                <v-row class="personal-createP-day">
                  <v-col class="col-3">
                    <v-checkbox
                    label="Вс"
                    color="#6AC3EF"
                    v-model="Vs"
                  ></v-checkbox>
                  </v-col>
                  <v-col class="col-7">
                    <v-text-field
                      filled
                      rounded
                      dense
                      color="#6AC3EF"
                      class="create-main-input"
                      autocomplete="none"
                      type="time"
                      v-model="vsInput"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Password and Confirm Password-->
      <v-row>
        <v-col>
            <h4 class="ms-4">Пароль</h4>
            <v-text-field
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input"
              placeholder="Пароль"
              v-model="passwordPersonal"
              :counter="6"
              :rules="passRules"
              type="password"
              required
            ></v-text-field>
        </v-col>
        <v-col>
            <h4 class="ms-4">Подтвердите пароль</h4>
            <v-text-field
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input"
              placeholder="Подтвердите пароль"
              v-model="confPasswordPersonal"
              :counter="6"
              :rules="confPassRules"
              type="password"
              required
            ></v-text-field>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Cabinet and Job-->
      <v-row>
        <v-col>
            <h4 class="ms-4">Кабинет</h4>
            <v-autocomplete
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input"
              placeholder="Выберите"
              no-data-text="Нет данных"
              required
              :items="cabinetCheck"
              v-model="personalCabinet"
            >
            </v-autocomplete>
        </v-col>
        <v-col>
            <h4 class="ms-4">Должность</h4>
            <v-autocomplete
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input"
              placeholder="Выберите"
              no-data-text="Нет данных"
              :readonly="disabled"
              required
              :items="jobCheck"
            >
            </v-autocomplete>
        </v-col>
      </v-row>
<!--Проводимые приемы, обследования, диагностика-->
<!--Используемые бланки-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Проводимые приемы, обследования, диагностика</h4>
          <v-autocomplete
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input"
              placeholder="Выберите"
              no-data-text="Нет данных"
              required
              v-model="survey"
              :items="surveyCheck"
              multiple
            >
          </v-autocomplete>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Access rights-->
      <v-row>
        <v-col class="col-6">
            <h4 class="ms-4">Права доступа</h4>
            <v-autocomplete
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input"
              placeholder="Выберите"
              no-data-text="Нет данных"
              required
            >
            </v-autocomplete>
            <v-checkbox
            v-model="checkbox"
            :label="checkbox ? 'Активный' : 'Не активный'"
            color="#6AC3EF"
            ></v-checkbox>
        </v-col>
      </v-row>
    </v-form>
    <slot name="dialog"></slot>
  </section>
</template>

<script lang="ts">
export default {
  props: ['element'],
  data(): any {
    return {
      valid: true,
      checkbox: false,
      id: this.element.id,
// time checkbox and input
      Pn: false,
      Vt: false,
      Sr: false,
      Cht: false,
      Pt: false,
      Sb: false,
      Vs: false,
      pnInput: '',
      vtInput: '',
      srInput: '',
      chtInput: '',
      ptInput: '',
      sbInput: '',
      vsInput: '',
      survey1: '',
      survey2: '',
      survey3: '',
      blank1: '',
      blank2: '',
      blank3: '',
// image
      image: null,
      imageSrc: '',
// Inputs
      surnamePersonal: this.element.namesurname,
      namePersonal: this.element.namesurname,
      fathNamePersonal: '',
      phoneNumberPersonal: this.element.phonenumber,
      personalCabinet: this.element.cabinet,
      passwordPersonal: '',
      confPasswordPersonal: '',
      // Rules for inputs
      rulesInput: [
        (v: any) => !!v || 'Нельзя оставить пустым',
      ],
      rulesInputForPhone: [
        (v: any) => !!v || 'Нельзя оставить пустым',
        (v: any) => v.length === 11 || 'Должен быть 11 цифр',
      ],
      passRules: [
      (v: any) => !!v || 'Нельзя оставить пустым',
        (v: any) => v.length >= 6 || 'Должен минимум быть 6 элементов',
      ],
      confPassRules: [
        (v: any) => !!v || 'Нельзя оставить пустым',
        (v: any) => v && v.length >= 6 || 'Должен минимум быть 6 элементов',
        (v: any) => v === this.passwordPersonal || ' Пароли не совподают',
      ],
    }
  },
  computed: {
    cabinetCheck(): any {
      return this.$store.getters.elementByCabinetName
    },
    jobCheck(): any {
      return this.$store.getters.elementByJob
    },
    surveyCheck(): any {
      return this.$store.getters.elementBySurvey
    },
    blankCheck(): any {
      return this.$store.getters.elementByBlank
    }
  },
  methods: {
    triggerFile () {
      this.$refs.fileRef.click()
    },
    changeFile (event: any) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    }
  }
}
</script>
