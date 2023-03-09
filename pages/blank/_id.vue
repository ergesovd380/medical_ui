<template>
  <blankID1 v-if="$route.params.id === '1'"/>
  <blankID2 v-else-if="$route.params.id === '2'"/>
  <blankID4 v-else-if="$route.params.id === '4'"/>
  <blankID5 v-else-if="$route.params.id === '5'"/>
  <blankID6 v-else-if="$route.params.id === '6'"/>
  <blankID13 v-else-if="$route.params.id === '13'"/>
  <blankID14 v-else-if="$route.params.id === '14'"/>
  <blankID15 v-else-if="$route.params.id === '15'"/>
  <blankID0 v-else/>
</template>
<script lang="ts">
import blankID1 from '@/components/blank/ID1.vue'
import blankID2 from '@/components/blank/ID2.vue'
import blankID4 from '~/components/blank/ID4.vue'
import blankID5 from '~/components/blank/ID5.vue'
import blankID6 from '~/components/blank/ID6.vue'
import blankID13 from '~/components/blank/ID13.vue'
import blankID14 from '~/components/blank/ID14.vue'
import blankID15 from '~/components/blank/ID15.vue'
import blankID0 from '~/components/blank/ID0.vue'
export default {
  components: {
    blankID1,
    blankID2,
    blankID4,
    blankID5,
    blankID6,
    blankID13,
    blankID14,
    blankID15,
    blankID0
  }
}
</script>
