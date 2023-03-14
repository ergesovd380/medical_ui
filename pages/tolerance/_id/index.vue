<template>
  <toleranceId :element="element" />
</template>
<script lang="ts">
import toleranceId from '@/components/tolerance/_id.vue'
export default {
  data(): any {
    return {
      id: this.$route.params.id
    }
  },
  components: {
    toleranceId
  },
  computed: {
    element(): any {
      const id: any = this.id
      return this.$store.getters.elementByIDTolerance(id)
    }
  }
}
</script>
