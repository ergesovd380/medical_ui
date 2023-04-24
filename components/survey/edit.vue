<template>
  <section class="survey">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="survey__title red--text">{{ $route.params.id }}</h3>
      <!--Button add-->
      <nuxt-link tag="button" :to="'/survey/' + id" class="main-btn mt-2 ms-2">{{ $t("Save") }}</nuxt-link>
      <nuxt-link tag="button" :to="'/survey/' + id" class="main-btn mt-2 ms-2">{{ $t("Cancel") }}</nuxt-link>
    </v-app-bar>
<!-- Form create -->
    <v-form 
      class="survey__value"
      ref="form"
      v-model="valid"
      lazy-validation
    >
<!--Header inputs-->
      <v-row>
        <v-col>
          <h4 class="ms-4">{{ $t('SurveyData.Cassa_number') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="survey__input-cassa"
            autocomplete="none"
            v-model="numberOfCassa"
            :rules="rulesInput"
            required
            type="number"
            :placeholder="$t('SurveyData.Cassa_number')"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">{{ $t('SurveyData.Name_survey') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="survey__input-cassa"
            type="text"
            :placeholder="$t('SurveyData.Name_survey')"
            autocomplete="none"
            v-model="name"
            :rules="rulesInput"
            required
          ></v-text-field>
        </v-col>
      </v-row>
<!--Chid inputs-->
      <v-row>
        <v-col>
            <h4 class="ms-4">{{ $t('SurveyData.Not_insurance') }}</h4>
            <v-text-field
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="survey__input-cassa"
              autocomplete="none"
              type="number"
              v-model="withoutInsurance"
            ></v-text-field>
        </v-col>
        <v-col>
            <h4 class="ms-4">{{ $t('SurveyData.With_insurance') }}</h4>
            <v-text-field
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="survey__input-cassa"
              type="number"
              autocomplete="none"
              v-model="withInsurance"
            ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">{{ $t('SurveyData.Forigner') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="survey__input-cassa"
            type="number"
            autocomplete="none"
            v-model="foreigner"
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">{{ $t('SurveyData.Diplomat') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="survey__input-cassa"
            type="number"
            autocomplete="none"
            v-model="diplomat"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
    <slot name="dialog"></slot>
  </section>
</template>
<script lang="ts">
export default {
  props: ['element'],
  data(): any {
    return {
      id: this.$route.params.id,
      valid: true,
      name: this.element.pod,
      numberOfCassa: this.element.id,
      foreigner: '',
      withInsurance: '',
      withoutInsurance: '',
      diplomat: '',
      disabled: false,
      dialog: false,
      rulesInput: [
        (v: any) => !!v || this.$t('Not_empty'),
      ]
    }
  }
}
</script>
