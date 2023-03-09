<template>
  <personalEdit :element="element"> 
<!--Dialog-->
    <div slot="dialog">
      <v-dialog
        v-model="openDialog"
        width="600"
      >
        <v-card height="256">
          <div class="survey-edit-dialog">
            <h3 class="text-center">Вы хотите отменить внесенные изменения?</h3>
            <div class="mt-10 text-center">
              <v-btn class="survey-edit-dialog-btn" color="rgb(235, 235, 235)" @click="dialogResponse(true)">
                Да
              </v-btn>
              <v-btn class="survey-edit-dialog-btn" color="rgb(235, 235, 235)" @click="openDialog = !openDialog">
                Нет
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </personalEdit>
</template>
<script>
import personalEdit from '@/components/personal/edit.vue'
export default {
  data() { 
    return { 
      openDialog: false, 
      functionResolve: null,
      id: this.$route.params.id
    } 
  },
  beforeRouteLeave(to, from, next) {
      this.openDialog = true
      this.createPromise().then(res => {
        next(res)
      })
  },
  methods: {
    createPromise() {
      return new Promise(resolve => {
        this.functionResolve = resolve;
      })
    },
    dialogResponse(response) {
      this.functionResolve(response)
    },
  },
  components: {
    personalEdit
  },
  computed: {
    element() {
      return this.$store.getters.elementByIDPersonal(this.id)
    }
  }
}
</script>
