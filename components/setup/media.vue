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
        Удалить
      </button>
      <button class="main-btn mt-2 ms-2" @click="addDialog = !addDialog">Добавить</button>
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
      show-select
      v-model="selected"
      no-data-text="Нет данных"
      no-results-text="Нет данных"
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
    <div slot="dialog" class="dialog">
      <v-dialog
        v-model="deleteDialog"
        width="600"
      >
        <v-card height="256">
          <div class="dialog__title">
            <h3 class="text-center">Вы хотите удалить выбранные медиафайлы?</h3>
            <div class="mt-10 text-center">
              <v-btn class="dialog__btn" color="var(--secondary-color)" @click="deleteMedia">
                Да
              </v-btn>
              <v-btn class="dialog__btn" color="var(--secondary-color)" @click="deleteDialog = !deleteDialog">
                Нет
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </div>

<!--Add Dialog-->
    <div slot="dialog" class="dialog">
      <v-dialog
        v-model="addDialog"
        width="600"
      >
        <v-card height="256">
          <div class="dialog__title">
            <div class="mt-10 text-center">
              <h4 class="ms-4">Название</h4>
              <v-text-field
                filled
                rounded
                dense
                color="var(--blue-color)"
                class="dialog__input"
                autocomplete="none"
                v-model="nameOfTolerance"
                type="text"
              ></v-text-field>
              <v-btn class="dialog__btn" color="var(--secondary-color)" @click="deleteMedia">
                Сохранить
              </v-btn>
              <v-btn class="dialog__btn" color="var(--secondary-color)" @click="addDialog = !addDialog">
                Отмена
              </v-btn>
            </div>
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
            text: 'Название',
            value: 'name',
            
          },
        ],
        elements: [
          {
            id: '1',
            name: 'Главный администратор'
          },
          {
            id: '2',
            name: 'Администратор'
          },
          {
            id: '3',
            name: 'Администратор помощник'
          },
          {
            id: '4',
            name: 'Администратор помощник помощника'
          },
        ]
      }
    },
    methods: {
      deleteMedia() {
        const media = this.elements
        const selected = this.selected
        const med = media.filter(item => !selected.includes(item))
        media.splice(0, media.length)
        media.push(...med)
        selected.splice(0, selected.length)
        this.deleteDialog = !this.deleteDialog
      }
    }
  }
</script>
