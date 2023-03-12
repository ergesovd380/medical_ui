<template>
  <div class="container">
    <div class="row">
      <div class="col-5">
        <h4>Клиенты</h4>
        <client-only>
          <BarChart :data="chartData" />
        </client-only>
        <button>Knopka</button>
      </div>
      <div class="offset-1 col-5">
        <h4>Бараны</h4>
        <client-only>
          <BarChart :data="chartData2" />
        </client-only>
        <button>Knopka</button>
      </div>
    </div>
    <div class="row">
      <div class="col-5">
        <h4>Касса</h4>
        <client-only>
          <BarChart :data="chartData2" />
        </client-only>
        <button>Knopka</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  computed: {
    chartData() {
      return {
        labels: ['', '', '', '', '', '', '', '', '', 'Янв1', '', '', '', '', '', '', '', '', '', '10', '', '', '', '', '', '', '', '', '', '20','', '', '', '', '', '', '', '', '', ''],
        datasets: [
          {
            label: '',
            data: [2, 1, 14, 3, 5, 2, 7, 16, 3, 8, 2, 3, 11, 3, 4, 8, 9, 10, 6, 5, 2, 1, 15, 4, 2, 2, 5, 4, 6, 8, 9, 5, 17, 6, 8, 9, 11, 14, 8, 9],
            backgroundColor: '#6AC3EF',
            borderColor: '#6AC3EF',
            borderWidth: 2,
          },
        ],
      }
    },
    chartData2() {
      return {
        labels: ['Янв', 'Янв', 'Янв', 'Янв', 'Янв', 'Янв', 'Янв', 'Янв', 'Янв', 'Янв', '', '', '', '', '', '', '', '', '', '10', '', '', '', '', '', '', '', '', '', '20','', '', '', '', '', '', '', '', '', ''],
        datasets: [
          {
            label: '',
            data: [2, 1, 14, 3, 5, 2, 7, 16, 3, 8, 2, 3, 11, 3, 4, 8, 9, 10, 6, 5, 2, 1, 15, 4, 2, 2, 5, 4, 6, 8, 9, 5, 17, 6, 8, 9, 11, 14, 8, 9],
            backgroundColor: '#6AC3EF',
            borderColor: '#6AC3EF',
            borderWidth: 2,
          },
        ],
      }
    },
  }
}
</script>
