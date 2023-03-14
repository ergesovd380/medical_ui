<template>
  <recordsCreate>
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
              <v-btn class="dialog__btn" color="var(--secondary-color)" @click="dialogResponse(true)">
                Да
              </v-btn>
              <v-btn class="dialog__btn" color="var(--secondary-color)" @click="openDialog = !openDialog">
                Нет
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </recordsCreate>
</template>
<script>
import recordsCreate from '@/components/records/create.vue'
import dialog from '~/mixins/dialog'
export default {
  components: {
    recordsCreate
  },
  mixins: [dialog]
}
</script>
