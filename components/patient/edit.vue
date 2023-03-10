<template>
  <section class="patient">
    <v-app-bar
      style="background-color: rgb(235, 235, 235); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="patient__title red--text">{{ numberofcard }}</h3>
<!--Button add or cancel-->
      <nuxt-link tag="button" :to="'/patient/' + id" class="main-btn mt-2 ms-2">Сохранить</nuxt-link>
      <nuxt-link tag="button" :to="'/patient/' + id" class="main-btn mt-2 ms-2">Отмениить</nuxt-link>
    </v-app-bar>
    <v-form 
      class="patient__value mt-5"
      ref="form"
      v-model="valid"
      lazy-validation
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
            color="#6AC3EF"
            class="patient__input"
            placeholder="Фамилия"
            autocomplete="none"
            type="text"
            :rules="rulesInput"
            required
          ></v-text-field>
          <v-text-field
            v-model="namePatient"
            filled
            rounded
            dense
            color="#6AC3EF"
            class="patient__input mt-6"
            placeholder="Имя"
            autocomplete="none"
            type="text"
            :rules="rulesInput"
            required
          ></v-text-field>
          <v-text-field
            v-model="fathNamePatient"
            filled
            rounded
            dense
            color="#6AC3EF"
            class="patient__input mt-6"
            placeholder="Отчество"
            autocomplete="none"
            type="text"
            :rules="rulesInput"
            required
          ></v-text-field>
        </v-col>
      </v-row>
<!--Sex, birthday, PassportSeria-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Пол</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="#6AC3EF"
            class="patient__input"
            placeholder="Выберите"
            no-data-text="Нет данных"
            :rules="rulesInput"
            required
            :items="['Мужской', 'Женский']"
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <h4 class="ms-4">Дата рождения</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            v-model="birthdayPatient"
            :rules="rulesInput"
            type="date"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Пасспорт №</h4>
          <v-text-field
            filled
            rounded
            dense
            class="patient__input"
            color="#6AC3EF"
            placeholder="I-AS 000000"
            v-model="passportSerai"
            :rules="rulesInput"
            type="text"
            required
          ></v-text-field>
        </v-col>
      </v-row>
<!--Status and phonenumber-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Гражданский статус</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="#6AC3EF"
            class="patient__input"
            placeholder="Выберите"
            no-data-text="Нет данных"
            :rules="rulesInput"
            required
            :items="['Гражданин Туркменистана', 'Иностранец', 'Иностранец-дипломат']"
          >
          </v-autocomplete>
        </v-col>
        <v-col>
          <h4 class="ms-4">Номер телефона</h4>
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            class="patient__input"
            placeholder="+993"
            type="number"
            v-model="phonenumberOfPatient"
            :rules="rulesInputForPhone"
            :counter="11"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Номер телефона 2</h4>
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            class="patient__input"
            placeholder="+993"
            type="number"
            v-model="phonenumberOfPatient2"
            :rules="rulesInputForPhone"
            :counter="11"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Poliklinika-->
      <v-row>
        <v-col>
          <h4 class="ms-4">Поликлининка</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="#6AC3EF"
            class="patient__input"
            placeholder="Выберите"
            no-data-text="Нет данных"
            :items="['Поликлиника номер1', 'Поликлиника номер2', 'Поликлиника номер3', 'Поликлиника номер4']"
          >
          </v-autocomplete>
        </v-col>
        <v-col class="mt-6">
          <v-btn class="personal-createP-btn">Нет в списке</v-btn>
        </v-col>
      </v-row>
      <hr class="my-10">
<!--Группа, vip-->
      <v-row>
        <v-col class="col-4">
          <h4 class="ms-4">Группа</h4>
          <v-autocomplete
            filled
            rounded
            dense
            color="#6AC3EF"
            class="patient__input"
            placeholder="Выберите"
            no-data-text="Нет данных"
            :rules="rulesInput"
            required
          >
          </v-autocomplete>
        </v-col>
        <v-col class="mt-4">
          <v-checkbox
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
            type="text"
            color="#6AC3EF"
            rows="10"
            row-height="10"
            class="patient__textarea"
            placeholder="Примечания"
            v-model="notes"
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
            color="#6AC3EF"
            class="patient__input"
            type="text"
            v-model="region"
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Город</h4>
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            class="patient__input"
            type="text"
            v-model="city"
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Район</h4>
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            class="patient__input"
            type="text"
            v-model="area"
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
            color="#6AC3EF"
            class="patient__input"
            type="text"
            v-model="street"
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Дом</h4>
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            class="patient__input"
            type="text"
            v-model="home"
          ></v-text-field>
        </v-col>
        <v-col>
          <h4 class="ms-4">Квартира/Офис</h4>
          <v-text-field
            filled
            rounded
            dense
            color="#6AC3EF"
            class="patient__input"
            type="text"
            v-model="flat"
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
            type="text"
            color="#6AC3EF"
            rows="10"
            row-height="10"
            class="patient__textarea"
            placeholder="Примечания"
            v-model="notes2"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-btn class="patient__secondary-btn" :class="{'d-none': checkbox}">Есть еще один?</v-btn>
      <hr class="my-10">
      <v-checkbox
        v-model="active"
        :label="active ? 'Активный' : 'Не активный'"
        color="#6AC3EF"
      ></v-checkbox>
    </v-form>
    <slot name="dialog"></slot>
  </section>
</template>
<script lang="ts">
export default {
  props: ['element'],
  data (): any {
    return {
      id: this.element.numberofcard,
      valid: true,
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
// Rules for inputs
      rulesInput: [
        (v: any) => !!v || 'Нельзя оставить пустым',
      ],
      rulesInputForPhone: [
        (v: any) => !!v || 'Нельзя оставить пустым',
        (v: any) => v.length === 11 || 'Должен быть 11 цифр',
      ],
    }
  },
  computed: {
    vip() {
      if(this.element.statuspatient === 'VIP'){
        return true
      }else{
        return false
      }
    }
  }
}
</script>
