<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <client-only>
          <BarChart :data="chartData" />
        </client-only>
      </div>
      <div class="col-6">
        <client-only>
          <BarChart :data="chartData2" />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    penilaian: {
      type: Object,
      required: true,
    },
  },
  computed: {
    chartData() {
      return {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: '',
            data: [2, 1, 16, 3, 2],
            backgroundColor: '#6AC3EF',
            borderColor: '#6AC3EF',
            borderWidth: 2,
          },
        ],
      }
    },
    chartData2() {
      return {
        labels: [1, 2, 3, 4, 5],
        datasets: [
          {
            label: '',
            data: [2, 4, 13, 5, 2],
            backgroundColor: '#6AC3EF',
            borderColor: '#6AC3EF',
            borderWidth: 2,
          },
        ],
      }
    },
  },
}
</script>
