<template>
  <section class="index">
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
      <nuxt-link tag="button" to="/cabinet/create" class="index__btn mt-2 ms-2">Добавить</nuxt-link>
      <v-spacer></v-spacer>
<!--Button filter-->
      <v-menu open-on-click transition="slide-x-transition" offset-y>
          <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" class="index__filter-btn">
                <v-icon>
                  mdi-filter-variant
                </v-icon>
              </v-btn>
          </template>
          <v-card class="mx-auto" width="222px" tile>
              <v-list dense>
                  <v-subheader @click="sortByFilter('id')" class="menu-items">По умолчанию</v-subheader>
                  <v-subheader @click="sortByFilter('nameofcabinet')" class="menu-items">По названию кабинета</v-subheader>
                  <v-subheader @click="sortByFilter('phonenumber')" class="menu-items">По номеру телефона</v-subheader>
                  <v-subheader @click="sortByFilter('numberofcabinet')" class="menu-items">По номеру кабинета</v-subheader>
                  <v-subheader @click="sortByFilter('floor')" class="menu-items">По этажам</v-subheader>
                  <v-subheader @click="sortByFilter('status')" class="menu-items">По статусу</v-subheader>
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
        itemsPerPage: 15
      }
    },
    methods: {
      openRow(...item: any) {
        const id = item[1].item.id
        this.$router.push('/cabinet/' + id)
      },
      sortByFilter(e: any) {
        this.sortBy = e
      }
    },
    computed: {
      headers(): any {
        return this.$store.getters.headersCabinet
      },
      elements(): any {
        return this.$store.getters.elementsCabinet
      }
    }
  }
</script>
