<template>
  <section class="tolerance">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="tolerance__title">{{ id }}</h3>
<!--Button add-->
      <nuxt-link tag="button" no-prefetch to="/tolerance" class="main-btn mt-2 ms-2">{{ $t("Save") }}</nuxt-link>
      <nuxt-link tag="button" no-prefetch to="/tolerance" class="main-btn mt-2 ms-2">{{ $t("Cancel") }}</nuxt-link>
    </v-app-bar>
<!-- Form create -->
    <v-form 
      class="tolerance__value"
      ref="form"
    >
<!--Name-->
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">{{ $t('SurveyData.Name_survey') }}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="tolerance__input"
            autocomplete="none"
            v-model="nameOfTolerance"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
<!--Value-->
      <v-row>
<!--Tolerance-->
        <v-col class="col-5">
<!--Tolerance search-->
          <v-row>
            <v-col>
              <v-text-field
                filled
                rounded
                dense
                color="var(--blue-color)"
                v-model="searchTolerance"
                append-icon="mdi-magnify"
                class="tolerance__input"
                autocomplete="none"
                type="search"
              ></v-text-field>
            </v-col>
          </v-row>
<!--Tolerance table-->
          <v-data-table
            v-model="selected"
            :headers="headers"
            hide-default-footer
            :items="elementtolerance"
            :items-per-page="100"
            :search="searchTolerance"
            :no-data-text="$t('No_data')"
            :no-results-text="$t('No_data')"
            item-key="name"
            show-select
            class="elevation-1"
            color="var(--blue-color)"
          >
          </v-data-table>
        </v-col>
<!--Btns-->
        <v-col class="col-1 tolerance__btn-group">
          <div class="tolerance__btns">
            <v-btn class="tolerance__btn" @click="addTolerance" icon><v-icon>mdi-chevron-right</v-icon></v-btn>
            <v-btn class="tolerance__btn" @click="removeTolerance" icon><v-icon>mdi-chevron-left</v-icon></v-btn>
          </div>
        </v-col>
<!--Checked-->
        <v-col class="col-5">
<!--Checked search-->
          <v-row>
            <v-col>
              <v-text-field
                filled
                rounded
                dense
                color="var(--blue-color)"
                v-model="searchCreate"
                append-icon="mdi-magnify"
                class="tolerance__input"
                autocomplete="none"
                type="search"
              ></v-text-field>
            </v-col>
          </v-row>
<!--Checked Table-->
          <v-data-table
            v-model="selected2"
            :headers="headers"
            hide-default-footer
            :items="elementsToleranceCreate"
            :items-per-page="100"
            :no-data-text="$t('No_data')"
            :no-results-text="$t('No_data')"
            item-key="name"
            :search="searchCreate"
            show-select
            class="elevation-1"
          >
          </v-data-table>
        </v-col>
      </v-row>
    </v-form>
    <slot name="dialog"></slot>
  </section>
</template>
<script lang="ts">
export default {
  props: ['element'],
  data () {
    return {
      nameOfTolerance: this.element.nametolerance,
      selected: [],
      selected2: [],
      searchTolerance: '',
      searchCreate: '',
      id: this.element.nametolerance,
      headers: [
        {
          text: this.$t('PersonalData.Access'),
          align: 'start',
          sortable: false,
          value: 'name',
        },
      ],
      elementtolerance: [
        {
          name: this.$t('ToleranceData.Cabinet_show'),
        },
        {
          name: this.$t('ToleranceData.Create_cabinet'),
        },
        {
          name: this.$t('ToleranceData.Change_cabinet'),
        },
        {
          name: this.$t('ToleranceData.Delete_cabinet'),
        },
        {
          name: this.$t('ToleranceData.Personal_show'),
        },
        {
          name: this.$t('ToleranceData.Create_personal'),
        },
        {
          name: this.$t('ToleranceData.Change_personal'),
        },
        {
          name: this.$t('ToleranceData.Delete_personal'),
        },
        {
          name: this.$t('ToleranceData.Survey_show'),
        },
        {
          name: this.$t('ToleranceData.Create_survey'),
        },
        {
          name: this.$t('ToleranceData.Change_survey'),
        },
        {
          name: this.$t('ToleranceData.Delete_survey'),
        },
      ],
      elementsToleranceCreate: [],
    }
  },
  methods: {
    addTolerance () {
      const tolerance = this.elementtolerance
      const toleranceCreate = this.elementsToleranceCreate
      const selected = this.selected
      toleranceCreate.push(...selected)
      const tol = tolerance.filter(item => !selected.includes(item))
      tolerance.splice(0, tolerance.length)
      tolerance.push(...tol)
      selected.splice(0, selected.length)
    },
    removeTolerance () {
      const tolerance = this.elementtolerance
      const toleranceCreate = this.elementsToleranceCreate
      const selected = this.selected2
      tolerance.push(...selected)
      const tol = toleranceCreate.filter(item => !selected.includes(item))
      toleranceCreate.splice(0, toleranceCreate.length)
      toleranceCreate.push(...tol)
      selected.splice(0, selected.length)
    },
  }
}
</script>
