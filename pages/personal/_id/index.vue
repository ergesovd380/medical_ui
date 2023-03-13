<template>
  <personalId :element="element" />
</template>
<script lang="ts">
import personalId from '@/components/personal/_id.vue'
export default {
  data(): any {
    return {
      id: this.$route.params.id
    }
  },
  components: {
    personalId
  },
  computed: {
    element() {
      return this.$store.getters.elementByNamePersonal(this.id)
    }
  }
}
</script>

