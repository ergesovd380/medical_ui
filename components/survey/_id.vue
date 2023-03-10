<template>
  <section class="survey">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="survey__title red--text">{{ $route.params.id }}</h3>
<!--Button back-->
      <nuxt-link 
        tag="button" 
        to="/survey" 
        class="main-btn mt-2 ms-2"
      >Назад</nuxt-link>
      <v-spacer></v-spacer>
      <v-btn icon class="main-filter-btn mt-2 ms-2" :to="'/survey/' + id + '/edit'">
        <v-icon>
          mdi-pencil
        </v-icon>
      </v-btn>
    </v-app-bar>
<!-- Form create -->
    <v-form 
      class="survey__value"
      ref="form"
    >
<!--Header inputs-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Кассовый номер</h4>
          <v-text-field
              filled
              rounded
              dense
              class="survey__input-cassa"
              readonly
              v-model="numberOfCassa"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">Название</h4>
          <v-text-field
            filled
            rounded
            dense
            class="survey__input"
            readonly
            v-model="name"
          ></v-text-field>
        </v-col>
      </v-row>
<!--Chid inputs-->
      <v-row>
        <v-col>
            <h4 class="ms-4">Без страховки (TMT)</h4>
            <v-text-field
                filled
                rounded
                dense
                class="survey__child-input"
                readonly
                v-model="withoutInsurance"
            ></v-text-field>
        </v-col>
        <v-col>
            <h4 class="ms-4">Со страховкой (TMT)</h4>
            <v-text-field
                filled
                rounded
                dense
                class="survey__child-input"
                readonly
                v-model="withInsurance"
            ></v-text-field>
        </v-col>
        <v-col>
            <h4 class="ms-4">Иностранец ($)</h4>
            <v-text-field
              filled
              rounded
              dense
              class="survey__child-input"
              readonly
              v-model="foreigner"
            ></v-text-field>
        </v-col>
        <v-col>
            <h4 class="ms-4">Дипломат (TMT)</h4>
            <v-text-field
              filled
              rounded
              dense
              class="survey__child-input"
              readonly
              v-model="diplomat"
            ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
  </section>
</template>
<script lang="ts">
export default {
  props: ['element'],
  data(): any {
    return {
      id: this.element.id,
      name: this.element.pod,
      numberOfCassa: this.element.id,
      foreigner: '',
      withInsurance: '',
      withoutInsurance: '',
      diplomat: ''
    }
  }
}
</script>
