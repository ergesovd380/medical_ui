<template>
  <section class="bulletin">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="bulletin__title">{{ $t('Bulletin') }}</h3>
<!--Button back-->
      <nuxt-link tag="button" to="/bulletin" class="main-btn mt-2 ms-2">{{ $t("Back") }}</nuxt-link>
      <v-spacer></v-spacer>
      <nuxt-link tag="button" :to="'/bulletin/' + id + '/statistic'" class="main-btn mt-2 ms-2">{{ $t('Statistic') }}</nuxt-link>
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
      class="bulletin__value"
      ref="form"
    >
<!--Names inputs-->
      <v-row>
        <v-col>
          <h4 class="ms-4">{{ $t('BulletinData.Name_bulletin_turkmen') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            class="bulletin__input"
            v-model="nameonturkmen"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h4 class="ms-4">{{ $t('BulletinData.Name_bulletin_russian') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            class="bulletin__input"
            v-model="nameonrussian"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
<!--Titul image-->
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">{{ $t('BulletinData.Title_image') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            class="bulletin__input"
            v-model="image"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
<!--HTML-Editor-->
<!--Turkmen Tekst-->
      <v-row>
        <v-col>
          <h4 class="ms-4">{{ $t('BulletinData.Text_turkmen') }}</h4>
          <editor v-model="editorTm" />
        </v-col>
      </v-row>
<!--Russian Tekst-->
      <v-row>
        <v-col>
          <h4 class="ms-4">{{ $t('BulletinData.Text_russian') }}</h4>
          <editor v-model="editorRu"/>
        </v-col>
      </v-row>
<!--Checkboxes-->
      <v-row>
        <v-col class="col-2">
          <v-checkbox
            v-model="readed"
            :label="$t('BulletinData.Checkbox_read')"
            color="var(--blue-color)"
            readonly
          ></v-checkbox>
        </v-col>
        <v-col>
          <v-checkbox
            v-model="show"
            :label="$t('BulletinData.Visible')"
            color="var(--blue-color)"
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
