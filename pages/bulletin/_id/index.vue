<template>
  <bulletinId :element="element" /> 
</template>
<script lang="ts">
import bulletinId from '@/components/bulletin/_id.vue'
export default {
  data(): any {
    return {
      id: this.$route.params.id
    }
  },
  components: {
    bulletinId
  },
  computed: {
    element() {
      return this.$store.getters.elementByNameOfBulletin(this.id)
    }
  }
}
</script>
