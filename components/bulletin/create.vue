<template>
  <section class="bulletin">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="bulletin__title">Новый бюллетень</h3>
<!--Button add-->
      <nuxt-link tag="button" to="/bulletin" class="main-btn mt-2 ms-2">Сохранить</nuxt-link>
      <nuxt-link tag="button" to="/bulletin" class="main-btn mt-2 ms-2">Отмениить</nuxt-link>
    </v-app-bar>
<!-- Form create -->
    <v-form 
    class="bulletin__value"
    ref="form"
    v-model="valid"
    lazy-validation
    >
<!--Names inputs-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Название на туркменском</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="bulletin__input"
            type="text"
            autocomplete="none"
            v-model="nameonturkmen"
            :rules="rulesInput"
            required
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
            color="var(--blue-color)"
            class="bulletin__input"
            type="text"
            autocomplete="none"
            v-model="nameonrussian"
            :rules="rulesInput"
            required
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
            color="var(--blue-color)"
            class="bulletin__input"
            autocomplete="none"
            type="text"
            v-model="image"
            readonly
          ></v-text-field>
        </v-col>
        <v-col class="mt-6">
          <v-btn class="bulletin__secondary-btn" @click="triggerFile">Выбрать</v-btn>
          <input
            type="file"
            class="d-none"
            accept="image/*"
            @change="changeFile"
            ref="fileRef"
          >
        </v-col>
      </v-row>
<!--HTML-Editor-->
<!--Turkmen Tekst-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Текст на туркменском</h4>
          <editor v-model="editorTm"/>
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
            color="var(--blue-color)"
          ></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox
            v-model="show"
            label="Скрыть"
            color="var(--blue-color)"
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-form>
    <slot name="dialog"></slot>
  </section>
</template>
<script lang="ts">
import Editor from '../modules/editor.vue'
export default {
  data(): any {
    return {
      valid: true,
      nameonturkmen: '',
      nameonrussian: '',
// image
      image: null,
      imageSrc: '',
      rulesInput: [
        (v: any) => !!v || 'Нельзя оставить пустым',
      ],
//Checkbox
      readed: false,
      show: false,
      editorTm: ``,
      editorRu: ``
    }
  },
  methods: {
    triggerFile () {
      this.$refs.fileRef.click()
    },
    changeFile (event: any) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file.name
    }
  },
  components: {
    Editor
  }
}
</script>
