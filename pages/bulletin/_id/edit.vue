<template>
  <bulletinEdit :element="element"> 
<!--Dialog-->
      <div slot="dialog" class="dialog">
      <v-dialog
        v-model="openDialog"
        width="600"
      >
        <v-card height="256">
          <div class="dialog__title">
            <h3 class="text-center">{{ $t("Cancel_changes") }}</h3>
            <div class="mt-10 text-center">
              <v-btn class="dialog__btn" color="var(--secondary-color)" @click="dialogResponse(true)">
                {{ $t("Yes") }}
              </v-btn>
              <v-btn class="dialog__btn" color="var(--secondary-color)" @click="openDialog = !openDialog">
                {{ $t("No") }}
              </v-btn>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </bulletinEdit>
</template>
<script>
import bulletinEdit from '@/components/bulletin/edit.vue'
import dialog from '~/mixins/dialog'
export default {
  data() { 
    return { 
      id: this.$route.params.id
    } 
  },
  mixins: [dialog],
  components: {
    bulletinEdit
  },
  computed: {
    element() {
      return this.$store.getters.elementByNameOfBulletin(this.id)
    }
  }
}
</script>
