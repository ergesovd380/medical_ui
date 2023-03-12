<template>
  <personalCreate> 
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
  </personalCreate>
</template>
<script>
import personalCreate from '@/components/personal/create.vue'
import dialog from '~/mixins/dialog'
export default {
  components: {
    personalCreate
  },
  mixins: [dialog]
}
</script>
