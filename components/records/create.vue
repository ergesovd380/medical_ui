<template>
  <section>
    <v-app-bar
      style="background-color: rgb(235, 235, 235); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="create-id my-2">Новый запись</h3>
<!--Button add-->
      <nuxt-link tag="button" to="/records" class="main-btn main-create-back-btn my-2 ms-2">Сохранить</nuxt-link>
      <nuxt-link tag="button" to="/records" class="main-btn main-create-back-btn my-2 ms-2">Отмениить</nuxt-link>
    </v-app-bar>
    <v-form 
      class="create-value-personal mt-5"
      ref="form"
      v-model="valid"
      lazy-validation
    >
<!--Number of card -->
      <v-row>
          <v-col>
            <h4 class="ms-4">Номер записи</h4>
            <v-text-field
              filled
              rounded
              dense
              color="#6AC3EF"
              class="main-element"
              placeholder="Номер мед карты"
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
              color="#6AC3EF"
              class="create-main-input"
              append-icon="mdi-magnify"
              placeholder="Поиск пациента"
              no-data-text="Нет данных"
              v-model="patient"
              :items="elementByNameSurnameOfPatient"
            >
          </v-autocomplete>
        </v-col>
        <v-col>
          <nuxt-link tag="v-btn" no-prefetch :to="'/patient/create'" class="personal-createP-btn">
            Новый пациент?
          </nuxt-link>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Cabnet and Doctor-->
      <v-row>
          <v-col>
            <h4 class="ms-4">Доктор</h4>
            <v-autocomplete
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input"
              placeholder="Выберите"
              no-data-text="Нет данных"
              v-model="editedItem.personal"
              :items="elementByNameSurname"
            >
            </v-autocomplete>
          </v-col>
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
              v-model="editedItem.nameofcabinet"
              :items="elementCabinetByNamePersonal"
            >
            </v-autocomplete>
          </v-col>
      </v-row>
<!--Surey-->
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
            <h4 class="ms-4">Дата</h4>
            <v-text-field
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input"
              type="date"
              v-model="editedItem.date"
            ></v-text-field>
            <v-btn class="personal-createP-btn" @click="save">
            Добавить
          </v-btn>
          </v-col>
          <v-col class="col-4">
            <h4 class="ms-4">Время</h4>
            <v-text-field
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input"
              type="time"
              v-model="editedItem.time"
            ></v-text-field>
          </v-col>
      </v-row>
      <hr class="my-10">
<!--Приечания-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Примечание</h4>
          <v-textarea
              filled
              rounded
              auto-grow
              dense
              type="text"
              color="#6AC3EF"
              rows="10"
              row-height="10"
              class="create-main-textarea"
              v-model="notes"
          ></v-textarea>
          <v-btn class="personal-createP-btn" @click="showConsole">
            Добавить
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
          no-data-text="Нет данных"
          no-results-text="Нет данных"
        >
<!--Table header-->
          <template v-slot:header="{ props: { headers } }">
            <thead>
              <tr>
                <th 
                  v-for="h in headersRecordCreate" 
                  style="color: white;" 
                  :class="'main-table-head-th'"
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
      <h3 class="ms-4">Дополнительная оплата</h3>
      <v-row>
          <v-col class="col-6">
            <h4 class="ms-4">Название</h4>
            <v-text-field
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input"
              type="text"
              v-model="name"
            ></v-text-field>
          </v-col>
      </v-row>
<!--Price-->
      <v-row>
          <v-col class="col-3">
            <h4 class="ms-4">Сумма</h4>
            <v-text-field
              filled
              rounded
              dense
              color="#6AC3EF"
              class="create-main-input"
              type="text"
              v-model="price"
            ></v-text-field>
          </v-col>
      </v-row>
<!--Приечания-->
      <v-row>
          <v-col>
            <h4 class="ms-4">Примечание</h4>
            <v-textarea
              filled
              rounded
              auto-grow
              dense
              type="text"
              color="#6AC3EF"
              rows="10"
              row-height="10"
              class="create-main-textarea"
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
        (v: any) => !!v || 'Нельзя оставить пустым',
      ],
//Table
      headersRecordCreate: [
        { text: 'Кабинет', value: 'nameofcabinet' },
        { text: 'Сотрудник', value: 'personal' },
        { text: 'Дата', value: 'date' },
        { text: 'Время', value: 'time' },
        { text: 'Обследования', value: 'survey' },
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
    },
    showConsole() {
      console.log(this.elementsRecordCreate)
    }
  }
}
</script>
