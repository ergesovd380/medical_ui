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
                color="var(--blue-color)"
              ></v-radio>
              <v-radio
                label="Со страховки (TMT)"
                value="Со страховки (TMT)"
                color="var(--blue-color)"
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
                  color="var(--blue-color)"
                  class="records__checkbox-for-pay"
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
                  color="var(--blue-color)"
                  class="records__checkbox-for-pay"
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
                  color="var(--blue-color)"
                  class="records__checkbox-for-pay"
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
            <v-btn class="records__btn-for-pay" color="var(--secondary-color)" @click="dialog = !dialog">
              Оплатить
            </v-btn>
            <v-btn class="records__btn-for-pay" color="rgb(--secondary-color)" @click="dialog = !dialog">
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
