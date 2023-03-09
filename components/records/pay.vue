<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
<!--Dialog btn-->
      <template v-slot:activator="{ on, attrs }">
        <button
          class="main-btn mt-2"
          v-bind="attrs"
          v-on="on"
        >
          Оплатить
        </button>
      </template>
<!--Card Start-->
      <v-card>
        <v-container>
<!--Card title-->
          <v-card-title>
            <span>Мед.карта № <span class="red--text">{{ dataOfCard.numberofcard }}</span></span>
            <span class="ms-5">Запись № <span class="red--text">{{ dataOfCard.numberofrecord }}</span></span>
          </v-card-title>
          <hr>
<!--Card text-->
          <v-card-text>
<!--Card Radio-->
            <v-radio-group
              v-model="radioGroup"
              row
            >
              <v-radio
                label="Без страховки (TMT)"
                value="Без страховки (TMT)"
                color="#6AC3EF"
              ></v-radio>
              <v-radio
                label="Со страховки (TMT)"
                value="Со страховки (TMT)"
                color="#6AC3EF"
              ></v-radio>
            </v-radio-group>
            <hr>
<!--Card checkboxes-->
            <v-row class="mt-5">
              <v-col class="col-9">
                <v-checkbox
                  v-model="wantPay"
                  label="Невропатолог"
                  value="Невропатолог"
                  color="#6AC3EF"
                  class="check-box-for-pay"
                ></v-checkbox>
              </v-col>
              <v-col class="col-3">
                <h4>Сумма</h4>
              </v-col>
              <v-col class="col-9">
                <v-checkbox
                  v-model="wantPay"
                  label="Офтальмолог"
                  value="Офтальмолог"
                  color="#6AC3EF"
                  class="check-box-for-pay"
                ></v-checkbox>
              </v-col>
              <v-col class="col-3">
                <h4>Сумма</h4>
              </v-col>
              <v-col class="col-9">
                <v-checkbox
                  v-model="wantPay"
                  label="Нейрохирург"
                  value="Нейрохирург"
                  color="#6AC3EF"
                  class="check-box-for-pay"
                ></v-checkbox>
              </v-col>
              <v-col class="col-3">
                <h4>Сумма</h4>
              </v-col>
            </v-row>
            <hr>
<!--Card result price-->
            <v-row class="mt-5">
              <v-col class="col-9">
                <h4>Итого к оплате</h4>
              </v-col>
              <v-col class="col-3">
                <h4>Сумма</h4>
              </v-col>
            </v-row>
          </v-card-text>
<!--Pay buttons-->
          <div class="my-5 text-center">
            <v-btn class="btn-for-pay" color="rgb(235, 235, 235)" @click="dialog = !dialog">
              Оплатить
            </v-btn>
            <v-btn class="btn-for-pay" color="rgb(235, 235, 235)" @click="dialog = !dialog">
              Отмена
            </v-btn>
          </div>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
  export default {
    props: ['dataOfCard'],
    data (): any {
      return {
        dialog: false,
        radioGroup: null,
        wantPay: []
      }
    }
  }
</script>
<style scoped lang="scss">
  .check-box-for-pay{
    margin-top: -7px;
  }
  .btn-for-pay{
    width: 150px;
    height: 42px;
    margin: 10px 20px;
  }
</style>
<style scoped lang="scss">
  .main-btn{
    margin-right: -100px;
  }
</style>
