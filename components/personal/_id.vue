<template>
  <section class="personal">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="personal__title red--text">{{ $route.params.id }}</h3>
<!--Button back-->
      <button @click="back" class="main-btn mt-2 ms-2">Назад</button>
      <v-spacer></v-spacer>
      <v-btn icon class="main-filter-btn mt-2" :to="'/personal/' + id + '/edit'">
        <v-icon>
          mdi-pencil
        </v-icon>
      </v-btn>
    </v-app-bar>
<!-- Form edit -->
    <v-form 
      class="personal__value mt-5"
      ref="form"
    >
<!--Image Personal-->
      <v-row>
        <v-col>
          <v-layout>
            <v-flex xs12>
              <img  :src="imageSrc" height="230" width="230" class="personal__img my-3" v-if="image">
              <img  height="230" width="230" class="personal__img my-3" v-else>
            </v-flex>
          </v-layout>
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
              class="personal__input"
              v-model="surnamePersonal"
              readonly
            ></v-text-field>
            <v-text-field
              filled
              rounded
              dense
              class="personal__input mt-6"
              v-model="namePersonal"
              readonly
            ></v-text-field>
            <v-text-field
              filled
              rounded
              dense
              class="personal__input mt-6"
              v-model="fathNamePersonal"
              readonly
            ></v-text-field>
            <h4 class="ms-4 mt-8">Контактные данные</h4>
            <v-text-field
              filled
              rounded
              dense
              class="personal__input"
              v-model="phoneNumberPersonal"
              readonly
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
                    color="var(--blue-color)"
                    v-model="Pn"
                    readonly
                  ></v-checkbox>
                  </v-col>
                  <v-col class="col-7">
                    <v-text-field
                      filled
                      rounded
                      dense
                      color="var(--blue-color)"
                      class="personal__input"
                      type="time"
                      readonly
                      v-model="pnInput"
                    ></v-text-field>
                  </v-col>
                </v-row>
<!--Вт-->
                <v-row class="personal__day-margin">
                  <v-col class="col-3">
                    <v-checkbox
                    label="Вт"
                    color="var(--blue-color)"
                    v-model="Vt"
                    readonly
                  ></v-checkbox>
                  </v-col>
                  <v-col class="col-7">
                    <v-text-field
                      filled
                      rounded
                      dense
                      color="var(--blue-color)"
                      class="personal__input"
                      type="time"
                      readonly
                      v-model="vtInput"
                    ></v-text-field>
                  </v-col>
                </v-row>
<!--Ср-->
                <v-row class="personal__day-margin">
                  <v-col class="col-3">
                    <v-checkbox
                    label="Ср"
                    color="var(--blue-color)"
                    readonly
                    V-model="Sr"
                  ></v-checkbox>
                  </v-col>
                  <v-col class="col-7">
                    <v-text-field
                      filled
                      rounded
                      dense
                      color="var(--blue-color)"
                      class="personal__input"
                      type="time"
                      readonly
                      v-model="srInput"
                    ></v-text-field>
                  </v-col>
                </v-row>
<!--Чт-->
                <v-row class="personal__day-margin">
                  <v-col class="col-3">
                    <v-checkbox
                    label="Чт"
                    color="var(--blue-color)"
                    readonly
                    v-model="Cht"
                  ></v-checkbox>
                  </v-col>
                  <v-col class="col-7">
                    <v-text-field
                      filled
                      rounded
                      dense
                      color="var(--blue-color)"
                      class="personal__input"
                      type="time"
                      readonly
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
                  color="var(--blue-color)"
                  readonly
                  v-model="Pt"
                ></v-checkbox>
                </v-col>
                <v-col class="col-7">
                  <v-text-field
                    filled
                    rounded
                    dense
                    color="var(--blue-color)"
                    class="personal__input"
                    type="time"
                    readonly
                    v-model="ptInput"
                  ></v-text-field>
                </v-col>
                </v-row>
<!--Сб-->
                <v-row class="personal__day-margin">
                <v-col class="col-3">
                  <v-checkbox
                  label="Сб"
                  color="var(--blue-color)"
                  readonly
                  v-model="Sb"
                ></v-checkbox>
                </v-col>
                <v-col class="col-7">
                  <v-text-field
                    filled
                    rounded
                    dense
                    color="var(--blue-color)"
                    class="personal__input"
                    type="time"
                    readonly
                    v-model="sbInput"
                  ></v-text-field>
                </v-col>
                </v-row>
<!--Вс-->
                <v-row class="personal__day-margin">
                <v-col class="col-3">
                  <v-checkbox
                  label="Вс"
                  color="var(--blue-color)"
                  readonly
                  v-model="Vs"
                ></v-checkbox>
                </v-col>
                <v-col class="col-7">
                  <v-text-field
                    filled
                    rounded
                    dense
                    color="var(--blue-color)"
                    class="personal__input"
                    type="time"
                    readonly
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
              class="personal__input"
              v-model="passwordPersonal"
              readonly
            ></v-text-field>
        </v-col>
        <v-col>
            <h4 class="ms-4">Подтвердите пароль</h4>
            <v-text-field
              filled
              rounded
              dense
              class="personal__input"
              v-model="confPasswordPersonal"
              readonly
            ></v-text-field>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Cabinet and Job-->
      <v-row>
        <v-col>
            <h4 class="ms-4">Кабинет</h4>
            <v-text-field
              filled
              rounded
              dense
              class="personal__input"
              readonly
              v-model="personalCabinet"
            >
            </v-text-field>
        </v-col>
        <v-col>
            <h4 class="ms-4">Должность</h4>
            <v-text-field
              filled
              rounded
              dense
              class="personal__input"
              readonly
            >
            </v-text-field>
        </v-col>
      </v-row>
<!--Проводимые приемы, обследования, диагностика-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Проводимые приемы, обследования, диагностика</h4>
          <v-text-field
              filled
              rounded
              dense
              class="personal__input"
              v-model="survey"
              readonly
            >
          </v-text-field>
        </v-col>
      </v-row>
<!---Используемые бланки-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Используемые бланки</h4>
          <v-text-field
              filled
              rounded
              dense
              class="personal__input"
              v-model="blank"
              readonly
            >
          </v-text-field>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Access rights-->
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">Права доступа</h4>
          <v-text-field
            filled
            rounded
            dense
            readonly
            class="personal__input"
          >
          </v-text-field>
          <v-checkbox
              v-model="checkbox"
              :label="checkbox ? 'Активный' : 'Не активный'"
              readonly
              color="var(--blue-color)"
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-form>
  </section>
</template>

<script lang="ts">
export default {
  props: ['element'],
  data(): any {
    return {
      checkbox: false,
      id: this.$route.params.id,
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
      survey: '',
      blank: '',
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
    }
  },
  methods: {
    back() {
      window.history.go(-1)
      return false
    }
  }
}
</script>
