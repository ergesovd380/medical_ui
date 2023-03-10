<template>
  <section class="records">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="records__title red--text">{{ $route.params.id }}</h3>
<!--Button back-->
      <button
        @click="goBack"
        class="main-btn mt-2 ms-2"
      >Назад</button>
      <v-spacer></v-spacer>
      <v-btn icon class="mt-2 main-filter-btn">
        <v-icon>
          mdi-printer-outline
        </v-icon>
      </v-btn>
    </v-app-bar>
    <div class="records__value mt-5">
<!--Result of survey-->
      <v-row>
        <v-col class="col-10">
          <h4 class="ms-4">Результат</h4>
          <div class="records__name">{{ elementsRecordCreate[0].survey }}</div>
        </v-col>
        <v-col class="col-2 mt-8">
          <v-btn class="records__secondary-btn" elevation="1">Посмотреть</v-btn>
        </v-col>
        <v-col class="col-10">
          <div class="records__name">{{ elementsRecordCreate[1].survey }}</div>
        </v-col>
        <v-col class="col-2 mt-2">
          <v-btn class="records__secondary-btn" elevation="1">Посмотреть</v-btn>
        </v-col>
        <v-col class="col-10">
          <div class="records__name">{{ elementsRecordCreate[2].survey }}</div>
        </v-col>
        <v-col class="col-2 mt-2">
          <v-btn class="records__secondary-btn" elevation="1">Посмотреть</v-btn>
        </v-col>
      </v-row>
<!--Survey-->
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">Диагноз</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="records__input"
            placeholder="Выберите"
            no-data-text="Нет данных"
          >
          </v-autocomplete>
        </v-col>
        <v-col class="mt-6">
          <v-btn class="records__secondary-btn" elevation="1">Нет в списке?</v-btn>
        </v-col>
      </v-row>
<!--Lecheniye-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Лечение</h4>
          <v-textarea
            filled
            rounded
            auto-grow
            dense
            type="text"
            color="var(--blue-color)"
            rows="10"
            row-height="10"
            class="records__textarea"
            v-model="notes2"
          ></v-textarea>
          <v-btn class="records__secondary-btn" elevation="1">Добавить</v-btn>
        </v-col>
      </v-row>
<!--Comments-->
      <v-row>
        <v-col class="col-2">Дата: </v-col>
        <v-col class="col-3">Больной: </v-col>
        <v-col class="col-2">Статус: </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente ipsa amet quasi temporibus, necessitatibus aperiam culpa et voluptate. Hic odit illum totam, quam ipsum veniam   facere. Nam, corrupti vitae animi sint consequuntur sapiente minima quibusdam tempora, reprehenderit quod rerum voluptate iure unde labore. Magni eos rem id doloribus ex eius?
          </div>
        </v-col>
      </v-row>
      <hr class="my-5">
    </div>
  </section>
</template>
<script lang="ts">
export default {
  data (): any {
    return {
      id: this.$route.params.id,
    }
  },
  methods: {
    goBack() {
      window.history.go(-1)
      return false
    }
  },
  computed: {
    elementsRecordCreate() {
      return this.$store.getters['indexRecordCreate/elementsRecordCreate']
    }
  }
}
</script>
