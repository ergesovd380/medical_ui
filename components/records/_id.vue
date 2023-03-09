<template>
  <section>
    <v-app-bar
      style="background-color: rgb(235, 235, 235); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="create-id red--text">{{ $route.params.id }} / {{ elementByNumberOfCardRecord.numberofrecord }}</h3>
<!--Button back-->
      <nuxt-link 
        tag="button" 
        to="/records" 
        class="main-btn mt-2 ms-2"
      >Назад</nuxt-link>
      <v-spacer></v-spacer>
      <app-pay :dataOfCard="elementByNumberOfCardRecord" />
      <v-btn icon class="mt-2 main-filter-btn">
        <v-icon>
          mdi-printer-outline
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-form 
      class="create-value-personal mt-5"
      ref="form"
      v-model="valid"
      lazy-validation
    >
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
            @dblclick:row="openRow"
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
<!--Addtional-->
      <h3 class="ms-4">Дополнительно</h3>
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
              readonly
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
              readonly
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
              readonly
              v-model="notes2"
            ></v-textarea>
          </v-col>
      </v-row>
    </v-form>
  </section>
</template>
<script lang="ts">
import appPay from './pay.vue'
export default {
  data (): any {
    return {
      id: this.$route.params.id,
      name: 'Название процедуры',
      price: 'Цена',
      notes2: 'Примечание какое-то',
    }
  },
  methods: {
    openRow(...item: any) {
      const survey = item[1].item.id
      this.$router.push('/records/' + this.id + '/' + survey)
    },
  },
  computed: {
    elementByNumberOfCardRecord() {
      return this.$store.getters.elementByNumberOfCardRecord(this.id)
    },
    headersRecordCreate() {
      return this.$store.getters['indexRecordCreate/headersRecordCreate']
    },
    elementsRecordCreate() {
      return this.$store.getters['indexRecordCreate/elementsRecordCreate']
    }
  },
  components: {
    appPay
  }
}
</script>
