<template>
  <section class="patient">
    <v-app-bar
      style="background-color: rgb(235, 235, 235); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="patient__title red--text">{{ numberofcard }}</h3>
<!--Button back-->
      <nuxt-link 
        tag="button" 
        to="/patient" 
        class="main-btn mt-2 ms-2"
      >Назад</nuxt-link>
      <v-spacer></v-spacer>
      <div class="me-5">
        <nuxt-link tag="button" :to="'/patient/' + numberofcard + '/complaint'" class="main-btn mt-2 ms-2">Жалобы</nuxt-link>
        <nuxt-link tag="button" :to="'/patient/' + numberofcard + '/records'" class="main-btn mt-2 ms-2">Записи</nuxt-link>
      </div>
      <v-btn icon class="main-filter-btn mt-2" :to="'/patient/' + id + '/edit'">
        <v-icon>
          mdi-pencil
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-form 
      class="patient__value mt-5"
      ref="form"
    >
<!--F.I.O patient-->
      <v-row>
        <v-col class="col-6">
          <h4 class="ms-4">Ф.И.О пациента</h4>
          <v-text-field
            v-model="surnamePatient"
            filled
            rounded
            dense
            class="patient__input"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="namePatient"
            filled
            rounded
            dense
            class="patient__input mt-6"
            readonly
          ></v-text-field>
          <v-text-field
            v-model="fathNamePatient"
            filled
            rounded
            dense
            class="patient__input mt-6"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
<!--Sex, birthday, PassportSeria-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Пол</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            readonly
            v-model="sex"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Дата рождения</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            v-model="birthdayPatient"
            readonly
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Пасспорт №</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            v-model="passportSerai"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
<!--Status and phonenumber-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Гражданский статус</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            readonly
            v-model="cityzenStatus"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Номер телефона</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            v-model="phonenumberOfPatient"
            readonly
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Номер телефона 2</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            v-model="phonenumberOfPatient2"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Poliklinika-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Поликлининка</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            v-model="poliklinika"
            readonly
          >
          </v-text-field>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Группа, vip-->
      <v-row>
          <v-col class="col-4">
            <h4 class="ms-4">Группа</h4>
            <v-text-field
              filled
              rounded
              dense
              class="patient__input"
              readonly
            >
            </v-text-field>
          </v-col>
          <v-col class="mt-4">
            <v-checkbox
              readonly
              label="VIP"
              color="#6AC3EF"
              v-model="vip"
            ></v-checkbox>
          </v-col>
      </v-row>
<!--Примечания-->
      <v-row>
        <v-col>
          <v-textarea
            filled
            rounded
            auto-grow
            dense
            rows="10"
            row-height="10"
            class="patient__textarea"
            v-model="notes"
            readonly
          ></v-textarea>
        </v-col>
      </v-row>
      <hr class="my-10">
      <h4 class="ms-4">Адрес</h4>
<!--Region, City-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Регион</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            v-model="region"
            readonly
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Город</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            v-model="city"
            readonly
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Район</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            v-model="area"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
<!--Street, home-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Улица</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            v-model="street"
            readonly
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Дом</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            v-model="home"
            readonly
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Квартира/Офис</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            v-model="flat"
            readonly
          ></v-text-field>
        </v-col>
      </v-row>
<!--Примечания-->
      <v-row>
        <v-col>
          <v-textarea
            filled
            rounded
            auto-grow
            dense
            rows="10"
            row-height="10"
            class="patient__textarea"
            v-model="notes2"
            readonly
          ></v-textarea>
        </v-col>
      </v-row>
      <hr class="my-10">
      <v-checkbox
        v-model="active"
        readonly
        :label="active ? 'Активный' : 'Не активный'"
        color="#6AC3EF"
      ></v-checkbox>
    </v-form>
  </section>
</template>
<script lang="ts">
export default {
  props: ['element'],
  data (): any {
    return {
      id: this.element.numberofcard,
      active: false,
      numberofcard: this.element.numberofcard,
      surnamePatient: this.element.namesurnameofpatient,
      namePatient: this.element.namesurnameofpatient,
      fathNamePatient: '',
      birthdayPatient: this.element.birthday,
      passportSerai: '',
      phonenumberOfPatient: this.element.phonenumberpatient,
      phonenumberOfPatient2: '',
      region: '',
      city: '',
      area: '',
      street: '',
      home: '',
      flat: '',
      notes: '',
      notes2: '',
      sex: '',
      cityzenStatus: '',
      poliklinika: '',
    }
  }
}
</script>
