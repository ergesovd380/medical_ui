<template>
  <section class="index">
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
        autocomplete="none"
        flat
      ></v-text-field>
      <v-spacer></v-spacer>
      <button 
        class="main-btn mt-2 ms-2" 
        :class="selected.length < 1 ? 'd-none' : 'd-block'" 
        @click="deleteDialog = !deleteDialog"
      >
        {{ $t("Delete") }}
      </button>
      <button class="main-btn mt-2 ms-2" @click="addDialog = !addDialog">{{ $t("Add") }}</button>
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
        prevIcon: '',
        itemsPerPageOptions: [ 10, 15, 20, -1]
      }"
      :items="elements"
      :items-per-page="itemsPerPage"
      :search="search"
      show-select
      v-model="selected"
      :no-data-text="$t('No_data')"
      :no-results-text="$t('No_data')"
      :page.sync="page"
      @page-count="pageCount = $event"
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

<!--Delete Dialog-->
    <div>
      <v-dialog
        v-model="deleteDialog"
        width="600"
      >
        <v-card height="256">
          <div class="dialog__title">
            <h3 class="text-center">{{ $t('SetupData.Delete_job') }}</h3>
            <div class="mt-10 text-center">
              <v-btn class="dialog__btn" color="var(--secondary-color)" @click="deleteJob">
                {{ $t('Yes') }}
              </v-btn>
              <v-btn class="dialog__btn" color="var(--secondary-color)" @click="deleteDialog = !deleteDialog">
                {{ $t('No') }}
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </div>

<!--Add Dialog-->
    <div>
      <v-dialog
        v-model="addDialog"
        width="600"
        class="dialog"
      >
        <v-card height="256">
          <div class="container">
            <h4 class="mt-10 ms-4 mb-2">{{ $t('SurveyData.Name_survey') }}</h4>
            <v-text-field
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="dialog__input"
              autocomplete="none"
              v-model="editedItem.nameJob"
              type="text"
            ></v-text-field>
          </div>
          <div class="mt-10 text-center">
            <v-btn class="dialog__btn" color="var(--secondary-color)" :disabled="editedItem.nameJob.length < 3" @click="addJob">
              {{ $t("Save") }}
            </v-btn>
            <v-btn class="dialog__btn" color="var(--secondary-color)" @click="cancelMedia">
              {{ $t('Cancel') }}
            </v-btn>
          </div>
        </v-card>
      </v-dialog>
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
        itemsPerPage: 15,
        selected: [],
        deleteDialog: false,
        addDialog: false,
        headers: [
          {
            text: 'ID',
            value: 'id',
            align: 'center',
          },
          {
            text: this.$t('SurveyData.Name_survey'),
            value: 'nameJob',
          },
        ],
        elements: [
          {
            id: 1,
            nameJob: 'Доктор'
          },
          {
            id: 2,
            nameJob: 'Модератор'
          },
          {
            id: 3,
            nameJob: 'Кассир'
          },
          {
            id: 4,
            nameJob: 'Бухгалтер'
          },
        ],
        editedItem: {
          nameJob: '',
        },
        defaultItem: {
          nameJob: '',
        }
      }
    },
    methods: {
      deleteJob() {
        const job = this.elements
        const selected = this.selected
        const newJob = job.filter(item => !selected.includes(item))
        job.splice(0, job.length)
        job.push(...newJob)
        selected.splice(0, selected.length)
        this.deleteDialog = !this.deleteDialog
      },
      addJob () {
        const job = this.elements
        this.editedItem.id = this.elements[this.elements.length - 1].id + 1
        job.push(this.editedItem)
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
        })
        this.addDialog = !this.addDialog
      },
      cancelMedia() {
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
        })
        this.addDialog = !this.addDialog
      },
    }
  }
</script>
