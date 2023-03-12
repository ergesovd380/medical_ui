<template>
  <surveyId :element="element" />
</template>
<script lang="ts">
import surveyId from '@/components/survey/_id.vue'
export default {
  data(): any {
    return {
      id: this.$route.params.id
    }
  },
  components: {
    surveyId
  },
  computed: {
    element(): any {
      const id: any = this.id
      return this.$store.getters.elementByIDSurvey(id)
    }
  }
}
</script>
