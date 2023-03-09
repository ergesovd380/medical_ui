<template>
  <section>
    <v-app-bar
      style="background-color: rgb(235, 235, 235); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="create-id">Бюллетень</h3>
<!--Button back-->
      <nuxt-link tag="button" to="/bulletin" class="main-btn mt-2 ms-2">Назад</nuxt-link>
      <v-spacer></v-spacer>
      <nuxt-link tag="button" :to="'/bulletin/' + id + '/statistic'" class="main-btn mt-2 ms-2">Статистика</nuxt-link>
      <v-btn icon class="ms-4 mt-2 main-filter-btn" :to="'/bulletin/' + id + '/view'">
        <v-icon>
          mdi-bulletin-board
        </v-icon>
      </v-btn>
      <v-btn icon class="ms-4 mt-2 main-filter-btn" :to="'/bulletin/' + id + '/edit'">
        <v-icon>
          mdi-pencil
        </v-icon>
      </v-btn>
    </v-app-bar>
<!-- Form create -->
    <v-form 
    class="create-value-personal"
    ref="form"
    >
<!--Names inputs-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Название на туркменском</h4>
          <v-text-field
            filled
            rounded
            dense
            class="create-main-input"
            v-model="nameonturkmen"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h4 class="ms-4">Название на русском</h4>
          <v-text-field
            filled
            rounded
            dense
            class="create-main-input"
            v-model="nameonrussian"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
<!--Titul image-->
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">Титульное фото</h4>
          <v-text-field
            filled
            rounded
            dense
            class="create-main-input"
            v-model="image"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
<!--HTML-Editor-->
<!--Turkmen Tekst-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Текст на туркменском</h4>
          <editor v-model="editorTm" />
        </v-col>
      </v-row>
<!--Russian Tekst-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Текст на русском</h4>
          <editor v-model="editorRu"/>
        </v-col>
      </v-row>
<!--Checkboxes-->
      <v-row>
        <v-col class="col-2">
          <v-checkbox
            v-model="readed"
            label="Галочка Прочитал"
            color="#6AC3EF"
            readonly
          ></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox
            v-model="show"
            label="Скрыть"
            color="#6AC3EF"
            readonly
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-form>
  </section>
</template>
<script lang="ts">
import Editor from '../modules/editor.vue'
export default {
  props: ['element'],
  data(): any {
    return {
      id: this.element.nameturkmen,
      valid: true,
      nameonturkmen: this.element.nameturkmen,
      nameonrussian: this.element.namerussian,
// image
      image: null,
//Checkbox
      readed: true,
      show: false,
      editorTm: this.element.nameturkmen,
      editorRu: this.element.namerussian
    }
  },
  components: {
    Editor
  }
}
</script>
