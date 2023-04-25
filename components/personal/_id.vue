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
      <nuxt-link tag="button" to="/personal" class="main-btn mt-2 ms-2">{{ $t("Back") }}</nuxt-link>
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
            <h4 class="ms-4">{{ $t('PersonalData.NSF_personal') }}</h4>
            <v-text-field
              filled
              rounded
              dense
              class="personal__input"
              v-model="surnamePersonal"
              :placeholder="$t('Name')"
              readonly
            ></v-text-field>
            <v-text-field
              filled
              rounded
              dense
              class="personal__input mt-6"
              v-model="namePersonal"
              :placeholder="$t('Surname')"
              readonly
            ></v-text-field>
            <v-text-field
              filled
              rounded
              dense
              class="personal__input mt-6"
              v-model="fathNamePersonal"
              :placeholder="$t('Fath_name')"
              readonly
            ></v-text-field>
            <h4 class="ms-4 mt-8">{{ $t('PersonalData.Contact_data') }}</h4>
            <v-text-field
              filled
              rounded
              dense
              class="personal__input"
              v-model="phoneNumberPersonal"
              :placeholder="$t('Phone_number')"
              readonly
            ></v-text-field>
        </v-col>
<!--Work day and time-->
        <v-col>
            <h4 class="ms-4">{{ $t('PersonalData.Work_days') }}</h4>
            <v-row>
              <v-col>
<!--Пн-->
                <v-row>
                  <v-col class="col-3">
                    <v-checkbox
                    :label="$t('PersonalData.Monday')"
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
                    :label="$t('PersonalData.Tuesday')"
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
                    :label="$t('PersonalData.Wednesday')"
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
                    :label="$t('PersonalData.Thursday')"
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
                  :label="$t('PersonalData.Friday')"
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
                  :label="$t('PersonalData.Saturday')"
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
                  :label="$t('PersonalData.Sunday')"
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
            <h4 class="ms-4">{{ $t('PersonalData.Pass') }}</h4>
            <v-text-field
              filled
              rounded
              dense
              class="personal__input"
              v-model="passwordPersonal"
              :placeholder="$t('PersonalData.Pass')"
              readonly
            ></v-text-field>
        </v-col>
        <v-col>
            <h4 class="ms-4">{{ $t('PersonalData.Confirm_pass') }}</h4>
            <v-text-field
              filled
              rounded
              dense
              class="personal__input"
              v-model="confPasswordPersonal"
              :placeholder="$t('PersonalData.Confirm_pass')"
              readonly
            ></v-text-field>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Cabinet and Job-->
      <v-row>
        <v-col>
            <h4 class="ms-4">{{ $t('Cabinet') }}</h4>
            <v-text-field
              filled
              rounded
              dense
              class="personal__input"
              readonly
              v-model="personalCabinet"
              :placeholder="$t('Cabinet')"
            >
            </v-text-field>
        </v-col>
        <v-col>
            <h4 class="ms-4">{{ $t('PersonalData.Job') }}</h4>
            <v-text-field
              filled
              rounded
              dense
              class="personal__input"
              readonly
              :placeholder="$t('PersonalData.Job')"
            >
            </v-text-field>
        </v-col>
      </v-row>
<!--Проводимые приемы, обследования, диагностика-->
      <v-row>
        <v-col>
          <h4 class="ms-4">{{ $t('PersonalData.Survey_a_diagnostics') }}</h4>
          <v-text-field
              filled
              rounded
              dense
              class="personal__input"
              v-model="survey"
              readonly
              :placeholder="$t('PersonalData.Survey_a_diagnostics')"
            >
          </v-text-field>
        </v-col>
      </v-row>
<!---Используемые бланки-->
      <v-row>
        <v-col>
          <h4 class="ms-4">{{ $t('PersonalData.Use_blanks') }}</h4>
          <v-text-field
              filled
              rounded
              dense
              class="personal__input"
              v-model="blank"
              readonly
              :placeholder="$t('PersonalData.Use_blanks')"
            >
          </v-text-field>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Access rights-->
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">{{ $t('PersonalData.Access') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            readonly
            class="personal__input"
            :placeholder="$t('PersonalData.Access')"
          >
          </v-text-field>
          <v-checkbox
              v-model="checkbox"
              :label="checkbox ? $t('Active') : $t('Not_active')"
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
  }
}
</script>
