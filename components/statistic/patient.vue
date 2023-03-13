<template>
  <section class="statistic">
<!--Header-->
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="statistic__title">Пациенты</h3>
<!--Button add-->
      <nuxt-link tag="button" to="/statistic" class="main-btn mt-2 ms-2">Назад</nuxt-link>
      <v-spacer></v-spacer>
<!--Button filter-->
      <v-menu open-on-click transition="slide-x-transition" offset-y>
        <template v-slot:activator="{ on, attrs }">
            <button v-bind="attrs" color="var(--light-color)" v-on="on" class="main-btn mr-3">
              Экспорт отчета
              <v-icon
                right
              >
                mdi-chevron-down
              </v-icon>
            </button>
        </template>
        <v-card class="mx-auto" width="222px" tile>
            <v-list dense>
                <v-subheader @click="sortByFilter('id')" class="menu-items">По умолчанию</v-subheader>
                <v-subheader @click="sortByFilter('numberofcard')" class="menu-items">По номеру мед.карты</v-subheader>
                <v-subheader @click="sortByFilter('namesurnameofpatient')" class="menu-items">По Ф.И.О пациента</v-subheader>
                <v-subheader @click="sortByFilter('birthday')" class="menu-items">По дате рождения</v-subheader>
                <v-subheader @click="sortByFilter('phonenumberpatient')" class="menu-items">По номеру телефона</v-subheader>
                <v-subheader @click="sortByFilter('statuspatient')" class="menu-items">По статусу</v-subheader>
            </v-list>
        </v-card>
      </v-menu>
      <v-menu open-on-click transition="slide-x-transition" offset-y>
        <template v-slot:activator="{ on, attrs }">
            <button v-bind="attrs" v-on="on" class="main-btn">
              Посл. 30 дней
              <v-icon
                right
              >
                mdi-chevron-down
              </v-icon>
            </button>
        </template>
        <v-card class="mx-auto" width="222px" tile>
            <v-list dense>
                <v-subheader @click="sortByFilter('id')" class="menu-items">По умолчанию</v-subheader>
                <v-subheader @click="sortByFilter('numberofcard')" class="menu-items">По номеру мед.карты</v-subheader>
                <v-subheader @click="sortByFilter('namesurnameofpatient')" class="menu-items">По Ф.И.О пациента</v-subheader>
                <v-subheader @click="sortByFilter('birthday')" class="menu-items">По дате рождения</v-subheader>
                <v-subheader @click="sortByFilter('phonenumberpatient')" class="menu-items">По номеру телефона</v-subheader>
                <v-subheader @click="sortByFilter('statuspatient')" class="menu-items">По статусу</v-subheader>
            </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
    <div class="statistic__value">
      <div class="row">
        <div class="col">
<!--Patient charts-->
          <client-only>
            <BarChart :height="height" :data="chartData" />
          </client-only>
        </div>
      </div>
      <div class="row">
        <div class="col">
<!--Table-->
          <v-data-table
            :headers="headers"
            hide-default-header
            :footer-props="{
              itemsPerPageAllText: 'Все',
              itemsPerPageText: 'Строк в странице',
              disablePagination: true,
              nextIcon: '',
              prevIcon: '',
              itemsPerPageOptions: [ 10, 15, 20, -1]
            }"
            :items="elements"
            :items-per-page="itemsPerPage"
            :search="search"
            no-data-text="Нет данных"
            no-results-text="Нет данных"
            :page.sync="page"
            @page-count="pageCount = $event"
            @dblclick:row="openRow"
            :sort-by="sortBy.toLowerCase()"
            :sort-desc="sortDesc"
          >
  <!--Table header-->
            <template v-slot:header="{ props: { headers } }">
              <thead>
                <tr>
                  <th 
                    v-for="h in headers" 
                    style="color: white;" 
                    :class="'table-head-th'"
                    class="text-center"
                  >
                    <span>{{h.text}}</span>
                  </th>
                </tr>
              </thead>
            </template>
  <!--Table footer-->
            <template #footer.page-text="props">
              <v-pagination
                v-model="page"
                :length="pageCount"
                :total-visible="4"
                circle
                color="var(--blue-color)"
                class="table-pagination"
              ></v-pagination>
            </template>
          </v-data-table>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data(): any {
    return {
      search: '',
      page: 1,
      pageCount: 0,
      sortBy: 'name',
      sortDesc: false,
      itemsPerPage: 15
    }
  },
  methods: {
    openRow(...item: any) {
      const id = item[1].item.numberofcard
      this.$router.push('/patient/' + id)
    },
    sortByFilter(e: any) {
      this.sortBy = e
    }
  },
  computed: {
    chartData() {
      return {
        labels: ['', '', '', '', '', '', '', '', '', 'Янв1', '', '', '', '', '', '', '', '', '', '10', '', '', '', '', '', '', '', '', '', '20','', '', '', '', '', '', '', '', '', ''],
        datasets: [
          {
            label: '',
            data: [2, 1, 14, 3, 5, 2, 7, 16, 3, 8, 2, 3, 11, 3, 4, 8, 9, 10, 6, 5, 2, 1, 15, 4, 2, 2, 5, 4, 6, 8, 9, 5, 17, 6, 8, 9, 11, 14, 8, 9],
            backgroundColor: '#6AC3EF',
            borderColor: '#6AC3EF',
            borderWidth: 2,
          }
        ],
      }
    },
    headers(): any {
      return this.$store.getters.headersPatient
    },
    elements(): any {
      return this.$store.getters.elementsPatient
    }
  },
  props: {
    height: {
      type: Number,
      default: 300
    },
  }
}
</script>
