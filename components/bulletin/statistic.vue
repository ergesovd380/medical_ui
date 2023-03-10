<template>
  <section class="bulletin">
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
        autocomplete="none"
        flat
      ></v-text-field>
<!--Button add-->
      <v-spacer></v-spacer>
      <nuxt-link tag="button" :to="'/bulletin/' + id" class="bulletin__btn mt-2 me-2">Бюллетень</nuxt-link>
<!--Button filter-->
      <v-menu open-on-click transition="slide-x-transition" offset-y>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" class="bulletin__filter-btn mt-2 ms-2">
                <v-icon>
                  mdi-filter-variant
                </v-icon>
              </v-btn>
          </template>
          <v-card class="mx-auto" width="222px" tile>
              <v-list dense>
                  <v-subheader @click="sortByFilter('id')" class="menu-items">По умолчанию</v-subheader>
                  <v-subheader @click="sortByFilter('nameturkmen')" class="menu-items">По названию на туркменском</v-subheader>
                  <v-subheader @click="sortByFilter('namerussian')" class="menu-items">По названию на русском</v-subheader>
                  <v-subheader @click="sortByFilter('personal')" class="menu-items">По персоналу</v-subheader>
                  <v-subheader @click="sortByFilter('cabinet')" class="menu-items">По кабинетам</v-subheader>
                  <v-subheader @click="sortByFilter('readed')" class="menu-items">По дате</v-subheader>
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
        prevIcon: '',
        itemsPerPageOptions: [ 10, 15, 20, -1]
      }"
      :items="[elements]"
      :items-per-page="itemsPerPage"
      :search="search"
      no-data-text="Нет данных"
      no-results-text="Нет данных"
      :page.sync="page"
      @page-count="pageCount = $event"
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
        itemsPerPage: 15,
        id: this.$route.params.id
      }
    },
    methods: {
      sortByFilter(e: any) {
        this.sortBy = e
      }
    },
    computed: {
      headers(): any {
        return this.$store.getters.headersBulletinRecord
      },
      elements(): any {
        return this.$store.getters.elementsBulletinRecord(this.id)
      }
    }
  }
</script>
