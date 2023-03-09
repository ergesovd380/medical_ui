<template>
  <patientId :element="element" />
</template>
<script lang="ts">
import patientId from '@/components/patient/_id.vue'
export default {
  data(): any {
    return {
      id: this.$route.params.id
    }
  },
  components: {
    patientId
  },
  computed: {
    element() {
      return this.$store.getters.elementByNumberOfCardPatient(this.id)
    }
  }
}
</script>
