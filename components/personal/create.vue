<template>
  <section class="personal">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="personal__title my-2">{{ $t('PersonalData.New_personal') }}</h3>
<!--Button add-->
      <nuxt-link tag="button" to="/personal" class="main-btn my-2 ms-2">{{ $t("Save") }}</nuxt-link>
      <nuxt-link tag="button" to="/personal" class="main-btn my-2 ms-2">{{ $t("Cancel") }}</nuxt-link>
    </v-app-bar>
    <v-form 
      class="personal__value mt-5"
      ref="form"
      v-model="valid"
      lazy-validation
    >
<!--Image Personal-->
      <v-row>
        <v-col>
          <v-layout>
            <v-flex xs12>
              <img :src="imageSrc" height="230" width="230" class="personal__img my-3" v-if="image">
              <img height="230" width="230" class="personal__img my-3" v-else @click="triggerFile">
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
          <h4 class="ms-4">{{ $t('PersonalData.NSF_personal') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="personal__input"
            :placeholder="$t('Surname')"
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
            color="var(--blue-color)"
            class="personal__input mt-6"
            :placeholder="$t('Name')"
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
            color="var(--blue-color)"
            class="personal__input mt-6"
            :placeholder="$t('Fath_name')"
            v-model="fathNamePersonal"
            autocomplete="none"
            type="text"
          ></v-text-field>
          <h4 class="ms-4 mt-8">{{ $t('PersonalData.Contact_data') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="personal__input"
            :placeholder="$t('Phone_number')"
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
                ></v-checkbox>
                </v-col>
                <v-col class="col-7">
                  <v-text-field
                    filled
                    rounded
                    dense
                    color="var(--blue-color)"
                    class="personal__input"
                    autocomplete="none"
                    type="time"
                    :disabled="!Pn"
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
                ></v-checkbox>
                </v-col>
                <v-col class="col-7">
                  <v-text-field
                    filled
                    rounded
                    dense
                    color="var(--blue-color)"
                    class="personal__input"
                    autocomplete="none"
                    type="time"
                    :disabled="!Vt"
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
                    autocomplete="none"
                    type="time"
                    :disabled="!Sr"
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
                    autocomplete="none"
                    type="time"
                    :disabled="!Cht"
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
                    autocomplete="none"
                    type="time"
                    :disabled="!Pt"
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
                    autocomplete="none"
                    type="time"
                    :disabled="!Sb"
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
                    autocomplete="none"
                    type="time"
                    :disabled="!Vs"
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
            color="var(--blue-color)"
            class="personal__input"
            :placeholder="$t('PersonalData.Pass')"
            v-model="passwordPersonal"
            :counter="6"
            :rules="passRules"
            type="password"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">{{ $t('PersonalData.Confirm_pass') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="personal__input"
            :placeholder="$t('PersonalData.Confirm_pass')"
            v-model="confPasswordPersonal"
            :counter="6"
            :rules="confPassRules"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <hr class="my-10">
      <v-row>
<!--Cabinet and Job-->
        <v-col>
          <h4 class="ms-4">{{ $t('PersonalData.Cabinet') }}</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="personal__input"
            :placeholder="$t('Choose')"
            :no-data-text="$t('No_data')"
            required
            :items="cabinetCheck"
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <h4 class="ms-4">{{ $t('PersonalData.Job') }}</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="personal__input"
            :placeholder="$t('Choose')"
            :no-data-text="$t('No_data')"
            required
            :items="jobCheck"
            autocomplete="none"
          >
          </v-autocomplete>
        </v-col>
      </v-row>
<!--Проводимые приемы, обследования, диагностика-->
      <v-row>
        <v-col>
          <h4 class="ms-4">{{ $t('PersonalData.Survey_a_diagnostics') }}</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="personal__input"
            :placeholder="$t('Choose')"
            :no-data-text="$t('No_data')"
            required
            :items="surveyCheck"
            v-model="survey"
            multiple
          >
          </v-autocomplete>
        </v-col>
      </v-row>
<!--Используемые бланки-->
      <v-row>
        <v-col>
          <h4 class="ms-4">{{ $t('PersonalData.Use_blanks') }}</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="personal__input"
            :placeholder="$t('Choose')"
            :no-data-text="$t('No_data')"
            required
            :items="blankCheck"
            v-model="blank"
            multiple
          >
          </v-autocomplete>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Access rights-->
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">{{ $t('PersonalData.Access') }}</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="personal__input"
            :placeholder="$t('Choose')"
            :no-data-text="$t('No_data')"
            :items="toleranceCheck"
            v-model="personalTolerance"
            required
          >
          </v-autocomplete>
          <v-checkbox
            v-model="checkbox"
            :label="checkbox ? $t('Active') : $t('Not_active')"
            color="var(--blue-color)"
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-form>
    <slot name="dialog"></slot>
  </section>
</template>
<script lang="ts">
export default {
  data (): any {
    return {
      valid: true,
      checkbox: false,
// image
      image: null,
      imageSrc: '',
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
// Inputs
      surnamePersonal: '',
      namePersonal: '',
      fathNamePersonal: '',
      phoneNumberPersonal: '',
      passwordPersonal: '',
      confPasswordPersonal: '',
      personalTolerance: '',
      survey: '',
      blank: '',
// Rules for inputs
      rulesInput: [
        (v: any) => !!v || this.$t('No_empty'),
      ],
      rulesInputForPhone: [
        (v: any) => !!v || this.$t('No_empty'),
        (v: any) => v.length === 11 || this.$t('Symbols_11'),
      ],
      passRules: [
      (v: any) => !!v || this.$t('No_empty'),
        (v: any) => v.length >= 6 || this.$t('Symbols_6'),
      ],
      confPassRules: [
        (v: any) => !!v || this.$t('No_empty'),
        (v: any) => v && v.length >= 6 || this.$t('Symbols_6'),
        (v: any) => v === this.passwordPersonal || 'Пароли не совпо{{ $t("Yes") }}ют',
      ]
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
    },
    toleranceCheck(): any {
      return this.$store.getters.elementByNameTolerance
    },
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
