<template>
  <section class="patient">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Input Search-->
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        class="main-search"
        color="var(--blue-color)"
        solo
        flat
      ></v-text-field>
<!--Button add-->
      <nuxt-link tag="button" to="/records/create" class="main-btn mt-2 ms-2">{{ $t("Add") }}</nuxt-link>
<!--Button back-->
      <nuxt-link tag="button" :to="'/patient/' + id" class="main-btn mt-2 ms-2" no-prefetch>{{ $t("Back") }}</nuxt-link>
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
            <v-subheader @click="sortByFilter('id')" class="menu-items">{{ $t('Default') }}</v-subheader>
            <v-subheader @click="sortByFilter('numberofcard')" class="menu-items">{{ $t('By_number_card') }}</v-subheader>
            <v-subheader @click="sortByFilter('numberofrecord')" class="menu-items">{{ $t('By_number_record') }}</v-subheader>
            <v-subheader @click="sortByFilter('namesurnameofpatient')" class="menu-items">{{ $t('By_NSF') }}</v-subheader>
            <v-subheader @click="sortByFilter('statuspatient')" class="menu-items">{{ $t('By_status') }}</v-subheader>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
<!--Table-->
    <v-data-table
      :headers="headers"
      hide-default-header
      :footer-props="{
        itemsPerPageAllText: $t('All'),
        itemsPerPageText: $t('Rows_page'),
        disablePagination: true,
        nextIcon: '',
        prevIcon: ''
      }"
      :search="search"
      :no-data-text="$t('No_data')"
      :no-results-text="$t('No_data')"
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
          color="var(--blue-color)"
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
        headers: [
          { text: 'ID', value: 'id' },
          { text: this.$t('PatientData.Number_card'), value: 'numberofcard' },
          { text: this.$t('RecordData.Number_record'), value: 'numberofrecord' },
          { text: this.$t('PatientData.NSF_patient'), value: 'namesurnameofpatient' },
          { text: this.$t('Status'), value: 'statuspatient' },
        ],
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
      elements(){
        return this.$store.getters.elementByNumberOfCardRecord(this.id)
      }
    }
  }
</script>
