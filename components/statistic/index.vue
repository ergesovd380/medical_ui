<template>
  <section class="statistic">
<!--Header-->
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="statistic__title">Статистика</h3>
      <v-spacer></v-spacer>
      <v-btn icon class="mt-2 ms-2 main-filter-btn">
        <v-icon>
          mdi-printer-outline
        </v-icon>
      </v-btn>
    </v-app-bar>
    <div class="statistic__value">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <div class="row">
              <div class="col text-center">
                <h4>Пациенты</h4>
              </div>
            </div>
            <client-only>
              <BarChart :data="chartData" />
            </client-only>
            <div class="row">
              <div class="col text-center">
                <nuxt-link tag="v-btn" to="/statistic/patient" class="statistic__secondary-btn">Посмотреть</nuxt-link>
              </div>
            </div>
          </div>
          <div class="offset-1 col-5">
            <div class="row">
              <div class="col text-center">
                <h4>Записы</h4>
              </div>
            </div>
            <client-only>
              <BarChart :data="chartData2" />
            </client-only>
            <div class="row">
              <div class="col text-center">
                <nuxt-link tag="v-btn" to="/statistic/records" class="statistic__secondary-btn">Посмотреть</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-5">
            <div class="row">
              <div class="col text-center">
                <h4>Касса</h4>
              </div>
            </div>
            <client-only>
              <LineChart :data="chartData3" />
            </client-only>
            <div class="row">
              <div class="col text-center">
                <v-btn class="statistic__secondary-btn">Посмотреть</v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
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
          }
        ],
      }
    },
    chartData2() {
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
    chartData3() {
      return {
        labels: ['', '', '', '', '', '', '', '', '', 'Янв1', '', '', '', '', '', '', '', '', '', '10', '', '', '', '', '', '', '', '', '', '20','', '', '', '', '', '', '', '', '', ''],
        datasets: [
          {
            label: 'Blue',
            data: [0.5, 1, 1.2, 1.3, 1.5, 1.2, 1.7, 2, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 10.5, 10.1, 10, 9.8, 9.7, 9.6, 9.5, 9.4, 9.3, 9.2, 9.1, 9, 8.7, 8.8, 8.5],
            backgroundColor: 'transparent',
            borderColor: '#0089B5',
            borderWidth: 2,
          },
          {
            label: 'Red',
            data: [0, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11, 11.1, 11.2, 11.3],
            backgroundColor: 'transparent',
            borderColor: '#FE5151',
            borderWidth: 2,
          },
          {
            label: 'Green',
            data: [0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.7, 2.6, 2.5, 2.4, 2.3, 2.5, 2.9, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6, 6.1, 6.2, 6.2, 6.1, 6, 5.9, 5.8],
            backgroundColor: 'transparent',
            borderColor: '#009332',
            borderWidth: 2,
          },
          {
            label: 'Accent Color',
            data: [0, 1.2, 1.3, 1.4, 1.5, 1.6, 1.8, 2, 2.2, 2.3, 2.4, 2.4, 2.5, 2.5, 2.5, 2.5, 2.7, 3, 3.5, 3, 3.5, 4, 4.5, 4, 3.9, 3.7, 3.5, 2, 2.5, 2.5, 2.5, 2.6, 2.6, 3.1, 3.2, 3.2, 6.1, 6, 6.5, 6],
            backgroundColor: 'transparent',
            borderColor: '#6AC3EF',
            borderWidth: 2,
          },
        ],
      }
    },
  }
}
</script>
