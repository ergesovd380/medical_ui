<template>
  <patienEdit :element="element"> 
<!--Dialog-->
  <div slot="dialog" class="dialog">
      <v-dialog
        v-model="openDialog"
        width="600"
      >
        <v-card height="256">
          <div class="dialog__title">
            <h3 class="text-center">Вы хотите отменить внесенные изменения?</h3>
            <div class="mt-10 text-center">
              <v-btn class="dialog__btn" color="rgb(235, 235, 235)" @click="dialogResponse(true)">
                Да
              </v-btn>
              <v-btn class="dialog__btn" color="rgb(235, 235, 235)" @click="openDialog = !openDialog">
                Нет
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </patienEdit>
</template>
<script>
import patienEdit from '@/components/patient/edit.vue'
export default {
  data() { 
    return { 
      id: this.$route.params.id
    } 
  },
  mixins: [dialog],
  components: {
    patienEdit
  },
  computed: {
    element() {
      return this.$store.getters.elementByNumberOfCardPatient(this.id)
    }
  }
}
</script>
