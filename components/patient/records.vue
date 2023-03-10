<template>
  <section class="patient">
    <v-app-bar
      style="background-color: rgb(235, 235, 235); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Input Search-->
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        class="main-search"
        color="#6AC3EF"
        solo
        flat
      ></v-text-field>
<!--Button add-->
      <nuxt-link tag="button" to="/records/create" class="main-btn mt-2 ms-2">Добавить</nuxt-link>
<!--Button back-->
      <nuxt-link tag="button" :to="'/patient/' + id" class="main-btn mt-2 ms-2" no-prefetch>Назад</nuxt-link>
      <v-spacer></v-spacer>
<!--Button filter-->
      <v-menu open-on-click transition="slide-x-transition" offset-y>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" class="main-filter-btn">
                <v-icon>
                  mdi-filter-variant
                </v-icon>
              </v-btn>
          </template>
          <v-card class="mx-auto" width="222px" tile>
              <v-list dense>
                  <v-subheader @click="sortByFilter('id')" class="menu-items">По умолчанию</v-subheader>
                  <v-subheader @click="sortByFilter('numberofcard')" class="menu-items">По номеру мед.карты</v-subheader>
                  <v-subheader @click="sortByFilter('numberofrecord')" class="menu-items">По номеру записи</v-subheader>
                  <v-subheader @click="sortByFilter('namesurnameofpatient')" class="menu-items">По Ф.И.О пациента</v-subheader>
                  <v-subheader @click="sortByFilter('statuspatient')" class="menu-items">По статусу</v-subheader>
              </v-list>
          </v-card>
      </v-menu>
    </v-app-bar>
<!--Table-->
    <v-data-table
      :headers="headers"
      hide-default-header
      :footer-props="{
        itemsPerPageAllText: 'Все',
        itemsPerPageText: 'Строк в странице',
        disablePagination: true,
        nextIcon: '',
        prevIcon: ''
      }"
      :search="search"
      no-data-text="Нет данных"
      no-results-text="Нет данных"
      :items="[elements]"
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
          color="#6AC3EF"
          class="table-pagination"
        ></v-pagination>
      </template>
    </v-data-table>
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
        id: this.$route.params.id,
      }
    },
    methods: {
      openRow(...item: any) {
        const id = item[1].item.numberofcard
        this.$router.push('/records/' + id)
      },
      sortByFilter(e: any) {
        this.sortBy = e
      }
    },
    computed: {
      headers(): any {
        return this.$store.getters.headersRecords
      },
      elements(){
        return this.$store.getters.elementByNumberOfCardRecord(this.id)
      }
    }
  }
</script>
