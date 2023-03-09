<template>
  <cabinetId :element="element" />
</template>
<script lang="ts">
import cabinetId from '@/components/cabinet/_id.vue'
export default {
  data(): any {
    return {
      id: this.$route.params.id
    }
  },
  components: {
    cabinetId
  },
  computed: {
    element() {
      return this.$store.getters.elementByIDCabinet(this.id)
    }
  }
}
</script>
