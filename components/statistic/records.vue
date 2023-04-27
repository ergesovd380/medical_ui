<template>
  <section class="statistic">
<!--Header-->
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="statistic__title">{{ $t('Records') }}</h3>
<!--Button add-->
      <nuxt-link tag="button" to="/statistic" class="main-btn mt-2 ms-2">{{ $t("Back") }}</nuxt-link>
      <v-spacer></v-spacer>
<!--Button filter-->
      <v-menu open-on-click transition="slide-x-transition" offset-y>
        <template v-slot:activator="{ on, attrs }">
            <button v-bind="attrs" color="var(--light-color)" v-on="on" class="main-btn mr-3">
              {{ $t('StatisticData.Eks_report')}}
              <v-icon
                right
              >
                mdi-chevron-down
              </v-icon>
            </button>
        </template>
        <v-card class="mx-auto" width="222px" tile>
          <v-list dense>
            <v-subheader @click="sortByFilter('id')" class="menu-items">{{ $t('Default') }}</v-subheader>
            <v-subheader @click="sortByFilter('numberofrecord')" class="menu-items">{{ $t('By_number_record') }}</v-subheader>
            <v-subheader @click="sortByFilter('namesurnameofpatient')" class="menu-items">{{ $t('By_NSF') }}</v-subheader>
            <v-subheader @click="sortByFilter('numberofcard')" class="menu-items">{{ $t('By_number_card') }}</v-subheader>
            <v-subheader @click="sortByFilter('statuspatient')" class="menu-items">{{ $t('By_status') }}</v-subheader>
          </v-list>
        </v-card>
      </v-menu>
      <v-menu open-on-click transition="slide-x-transition" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <button v-bind="attrs" v-on="on" class="main-btn">
            {{ $t('StatisticData.Last_30')}}
            <v-icon
              right
            >
              mdi-chevron-down
            </v-icon>
          </button>
        </template>
        <v-card class="mx-auto" width="222px" tile>
          <v-list dense>
            <v-subheader @click="sortByFilter('id')" class="menu-items">{{ $t('Default') }}</v-subheader>
            <v-subheader @click="sortByFilter('numberofrecord')" class="menu-items">{{ $t('By_number_record') }}</v-subheader>
            <v-subheader @click="sortByFilter('namesurnameofpatient')" class="menu-items">{{ $t('By_NSF') }}</v-subheader>
            <v-subheader @click="sortByFilter('numberofcard')" class="menu-items">{{ $t('By_number_card') }}</v-subheader>
            <v-subheader @click="sortByFilter('statuspatient')" class="menu-items">{{ $t('By_status') }}</v-subheader>
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
              itemsPerPageAllText: $t('All'),
              itemsPerPageText: $t('Rows_page'),
              disablePagination: true,
              nextIcon: '',
              prevIcon: '',
              itemsPerPageOptions: [ 10, 15, 20, -1]
            }"
            :items="elements"
            :items-per-page="itemsPerPage"
            :search="search"
            :no-data-text="$t('No_data')"
            :no-results-text="$t('No_data')"
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
      itemsPerPage: 15,
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
    elements(): any {
      return this.$store.getters.elementsRecords
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
