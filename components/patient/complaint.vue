<template>
  <section class="patient">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="patient__title red--text">{{ element.numberofcard }}</h3>
<!--Button back-->
      <nuxt-link 
        tag="button" 
        :to="'/patient/' + id" 
        class="main-btn mt-2 ms-2"
        no-prefetch
      >{{ $t("Back") }}</nuxt-link>
    </v-app-bar>
    <div class="patient__complaint-value mt-5">
      <v-row>
        <v-col>
          <h4 class="ms-4">Жалоба</h4>
          <v-textarea
            filled
            rounded
            auto-grow
            dense
            type="text"
            color="var(--blue-color)"
            rows="10"
            row-height="10"
            class="patient__textarea"
            placeholder="Примечания"
            v-model="notes2"
          ></v-textarea>
          <v-btn class="patient__secondary-btn" elevation="1">{{ $t("Add") }}</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-2">Дата: {{ element.birthday }}</v-col>
        <v-col class="col-3">Больной: {{ element.namesurnameofpatient }}</v-col>
        <v-col class="col-2">Статус: {{ element.statuspatient }}</v-col>
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
  computed: {
    element() {
      return this.$store.getters.elementByNumberOfCardPatient(this.id)
    },
  }
}
</script>
