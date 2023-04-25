<template>
  <section class="records">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="records__title my-2">{{ $t('RecordData.New_record') }}</h3>
<!--Button add-->
      <nuxt-link tag="button" to="/records" class="main-btn my-2 ms-2">{{ $t("Save") }}</nuxt-link>
      <nuxt-link tag="button" to="/records" class="main-btn my-2 ms-2">{{ $t("Cancel") }}</nuxt-link>
    </v-app-bar>
    <v-form 
      class="records__value mt-5"
      ref="form"
      v-model="valid"
      lazy-validation
    >
<!--Number of card -->
      <v-row>
        <v-col>
          <h4 class="ms-4">{{ $t('RecordData.Number_record') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="records__element"
            :placeholder="$t('RecordData.Number_record')"
            v-model="numberofcard"
            autocomplete="none"
            type="text"
            :rules="rulesInput"
            required
          ></v-text-field>
        </v-col>
      </v-row>
<!--Patient-->
      <v-row>
        <v-col>
          <v-autocomplete
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="records__input"
            append-icon="mdi-magnify"
            :placeholder="$t('RecordData.Search_patient')"
            :no-data-text="$t('No_data')"
            v-model="patient"
            :items="elementByNameSurnameOfPatient"
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <nuxt-link tag="v-btn" no-prefetch :to="'/patient/create'" class="records__secondary-btn">{{ $t('PatientData.New_patient') }}</nuxt-link>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Cabnet and Doctor-->
      <v-row>
        <v-col>
          <h4 class="ms-4">{{ $t('RecordData.Doctor') }}</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="records__input"
            :placeholder="$t('Choose')"
            no-data-text="Нет Данных"
            v-model="editedItem.personal"
            :items="elementByNameSurname"
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <h4 class="ms-4">{{ $t('Cabinet') }}</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="records__input"
            :placeholder="$t('Choose')"
            :no-data-text="$t('No_data')"
            v-model="editedItem.nameofcabinet"
            :items="elementCabinetByNamePersonal"
          >
          </v-autocomplete>
        </v-col>
      </v-row>
<!--Surey-->
      <v-row>
        <v-col>
          <h4 class="ms-4">{{ $t('PersonalData.Survey_a_diagnostics') }}</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="records__input"
            :placeholder="$t('Choose')"
            :no-data-text="$t('No_data')"
            v-model="editedItem.survey"
            :items="elementSurveyByNamePersonal"
            multiple
          >
          </v-autocomplete>
        </v-col>
      </v-row>
  <!--Date and time-->
      <v-row>
        <v-col class="col-4">
          <h4 class="ms-4">{{ $t('Date') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="records__input"
            type="date"
            v-model="editedItem.date"
          ></v-text-field>
          <v-btn class="records__secondary-btn mt-3" @click="save">
            {{ $t("Add") }}
        </v-btn>
        </v-col>
        <v-col class="col-4">
          <h4 class="ms-4">{{ $t('Time') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="records__input"
            type="time"
            v-model="editedItem.time"
          ></v-text-field>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Приечания-->
      <v-row>
        <v-col>
          <h4 class="ms-4">{{ $t('Notes') }}</h4>
          <v-textarea
            filled
            rounded
            auto-grow
            dense
            type="text"
            color="var(--blue-color)"
            rows="10"
            row-height="10"
            class="records__textarea"
            v-model="notes"
          ></v-textarea>
          <v-btn class="records__secondary-btn" @click="showConsole">
            {{ $t("Add") }}
          </v-btn>
        </v-col>
      </v-row>
<!--Table-->
      <v-row>
        <v-col class="my-10">
        <v-data-table
          :headers="headersRecordCreate"
          hide-default-header
          hide-default-footer
          :items="elementsRecordCreate"
          :no-data-text="$t('No_data')"
          :no-results-text="$t('No_data')"
        >
<!--Table header-->
          <template v-slot:header="{ props: { headers } }">
            <thead>
              <tr>
                <th 
                  v-for="h in headersRecordCreate" 
                  style="color: white;" 
                  :class="'table-head-th'"
                  class="text-center"
                >
                  <span>{{h.text}}</span>
                </th>
              </tr>
            </thead>
          </template>
        </v-data-table>
        </v-col>
      </v-row>
<!--Addtional charges-->
      <h3 class="ms-4">{{ $t('RecordData.Aditional_charges') }}</h3>
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">{{ $t('SurveyData.Name_survey') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="records__input"
            type="text"
            v-model="name"
          ></v-text-field>
        </v-col>
      </v-row>
<!--Price-->
      <v-row>
        <v-col class="col-3">
          <h4 class="ms-4">{{ $t('Sum') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="records__input"
            type="text"
            v-model="price"
          ></v-text-field>
        </v-col>
      </v-row>
<!--Приечания-->
      <v-row>
        <v-col>
          <h4 class="ms-4">{{ $t('Notes') }}</h4>
          <v-textarea
            filled
            rounded
            auto-grow
            dense
            type="text"
            color="var(--blue-color)"
            rows="10"
            row-height="10"
            class="records__textarea"
            v-model="notes2"
          ></v-textarea>
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
      numberofcard: '',
      patient: '',
      notes: '',
      name: '',
      price: '',
      notes2: '',
// Rules for inputs
      rulesInput: [
        (v: any) => !!v || this.$t('Not_empty'),
      ],
//Table
      headersRecordCreate: [
        { text: this.$t('Cabinet'), value: 'nameofcabinet' },
        { text: this.$t('Personal'), value: 'personal' },
        { text: this.$t('Date'), value: 'date' },
        { text: this.$t('Time'), value: 'time' },
        { text: this.$t('Survey'), value: 'survey' },
      ],
      elementsRecordCreate: [],
      editedItem: {
        nameofcabinet: '',
        personal: '',
        date: '',
        time: '',
        survey: [],
      },
      defaultItem: {
        nameofcabinet: '',
        personal: '',
        date: '',
        time: '',
        survey: ''
      }
    }
  },
  computed: {
    elementByNameSurname(): any {
      return this.$store.getters.elementByNameSurname
    },
    elementByNameSurnameOfPatient(): any {
      return this.$store.getters.elementByNameSurnameOfPatient
    },
    elementByNamePersonal(): any {
      return this.$store.getters.elementByNamePersonal(this.editedItem.personal)
    },
    elementCabinetByNamePersonal(): any {
      if(this.editedItem.personal.length > 1){
        let output = []
        output.push(this.elementByNamePersonal.nameofcabinet)
        return output
      } else {
        []
      }
    },
    elementSurveyByNamePersonal(): any {
      if(this.editedItem.personal.length > 1){
        return this.elementByNamePersonal.survey
      } else {
        []
      }
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.elementsRecordCreate = []
    },
    save () {
      this.elementsRecordCreate.push(this.editedItem)
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
      })
    }
  }
}
</script>
