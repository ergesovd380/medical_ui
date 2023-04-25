<template>
  <section class="patient">
    <v-app-bar
      style="background-color: var(--secondary-color); margin: 15px -15px;"
      dense
      elevation="0"
    >
<!--Page name-->
      <h3 class="patient__title my-2">{{ $t('PatientData.New_patient') }}</h3>
<!--Button add-->
      <nuxt-link tag="button" to="/patient" class="main-btn my-2 ms-2">{{ $t("Save") }}</nuxt-link>
      <nuxt-link tag="button" to="/patient" class="main-btn my-2 ms-2">{{ $t("Cancel") }}</nuxt-link>
    </v-app-bar>
    <v-form 
      class="patient__value mt-5"
      ref="form"
      v-model="valid"
      lazy-validation
    >
<!--Number of MedCard and Checkbox-->
      <v-row>
        <v-col class="col-4">
          <h4 class="ms-4">{{ $t("PatientData.Number_card")}}</h4>
          <v-text-field
            filled
            rounded
            dense
            color="var(--blue-color)"
            class="patient__input"
            :placeholder="$t('PatientData.Number_card')"
            v-model="numberofcard"
            autocomplete="none"
            type="text"
            :rules="rulesInput"
            required
          ></v-text-field>
        </v-col>
        <v-col class="mt-4">
          <v-checkbox
          :label="$t('PatientData.No_data_patient')"
          color="var(--blue-color)"
          v-model="checkbox"
          ></v-checkbox>
        </v-col>
      </v-row>
<!--F.I.O patient-->
        <v-row>
          <v-col class="col-6">
            <h4 class="ms-4">{{ $t("PatientData.NSF_patient") }}</h4>
            <v-text-field
              v-model="surnamePatient"
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input"
              :placeholder="$t('Surname')"
              autocomplete="none"
              type="text"
              :rules="rulesInput"
              :disabled="checkbox"
              required
            ></v-text-field>
            <v-text-field
              v-model="namePatient"
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input mt-6"
              :placeholder="$t('Name')"
              autocomplete="none"
              type="text"
              :rules="rulesInput"
              :disabled="checkbox"
              required
            ></v-text-field>
            <v-text-field
              v-model="fathNamePatient"
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input mt-6"
              :placeholder="$t('Fath_name')"
              autocomplete="none"
              type="text"
              :disabled="checkbox"
            ></v-text-field>
          </v-col>
        </v-row>
<!--Sex, birthday, PassportSeria-->
        <v-row>
          <v-col>
            <h4 class="ms-4">{{ $t('PatientData.Sex') }}</h4>
            <v-autocomplete
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input"
              :placeholder="$t('Choose')"
              :no-data-text="$t('No_data')"
              :rules="rulesInput"
              required
              :items="['Мужской', 'Женский']"
              :disabled="checkbox"
            >
            </v-autocomplete>
          </v-col>
          <v-col>
            <h4 class="ms-4">{{ $t("PatientData.Birthday") }}</h4>
            <v-text-field
              filled
              rounded
              dense
              class="patient__input"
              v-model="birthdayPatient"
              :rules="rulesInput"
              type="date"
              required
              :disabled="checkbox"
            ></v-text-field>
          </v-col>
          <v-col>
            <h4 class="ms-4">{{ $t('PatientData.Passport') }}</h4>
            <v-text-field
              filled
              rounded
              dense
              class="patient__input"
              color="var(--blue-color)"
              placeholder="I-AS 000000"
              v-model="passportSerai"
              :rules="rulesInput"
              type="text"
              required
              :disabled="checkbox"
            ></v-text-field>
          </v-col>
        </v-row>
<!--Status and phonenumber-->
        <v-row>
          <v-col>
            <h4 class="ms-4">{{ $t('PatientData.Citizen_status') }}</h4>
            <v-autocomplete
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input"
              :placeholder="$t('Choose')"
              :no-data-text="$t('No_data')"
              :rules="rulesInput"
              required
              :items="['ГражДанин Туркменистана', 'Иностранец', 'Иностранец-дипломат']"
              :disabled="checkbox"
            >
            </v-autocomplete>
          </v-col>
          <v-col>
            <h4 class="ms-4">{{ $t('Phone_number') }}</h4>
            <v-text-field
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input"
              placeholder="+993"
              type="number"
              v-model="phonenumberOfPatient"
              :rules="rulesInputForPhone"
              :disabled="checkbox"
              :counter="11"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <h4 class="ms-4">{{ $t('Phone_number') }}2</h4>
            <v-text-field
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input"
              placeholder="+993"
              type="number"
              v-model="phonenumberOfPatient2"
              :disabled="checkbox"
              :counter="11"
            ></v-text-field>
          </v-col>
        </v-row>
        <hr class="my-10">
<!--Poliklinika-->
        <v-row>
          <v-col>
            <h4 class="ms-4">{{ $t('PatientData.Policlinic') }}</h4>
            <v-autocomplete
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input"
              :placeholder="$t('Choose')"
              :no-data-text="$t('No_data')"
              :items="['Поликлиника номер1', 'Поликлиника номер2', 'Поликлиника номер3', 'Поликлиника номер4']"
              :disabled="checkbox"
            >
            </v-autocomplete>
          </v-col>
          <v-col class="mt-6">
            <v-btn class="personal-createP-btn">{{$t('No_list')}}</v-btn>
          </v-col>
        </v-row>
        <hr class="my-10">
<!--Группа, vip-->
        <v-row>
          <v-col class="col-4">
            <h4 class="ms-4">{{ $t('PatientData.Group') }}</h4>
            <v-autocomplete
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input"
              :placeholder="$t('Choose')"
              :no-data-text="$t('No_data')"
              :rules="rulesInput"
              :disabled="checkbox"
              required
            >
            </v-autocomplete>
          </v-col>
          <v-col class="mt-4">
            <v-checkbox
            label="VIP"
            color="var(--blue-color)"
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
              color="var(--blue-color)"
              rows="10"
              row-height="10"
              class="patient__textarea"
              :placeholder="$t('Notes')"
              v-model="notes"
            ></v-textarea>
          </v-col>
        </v-row>
        <hr class="my-10">
        <h4 class="ms-4">{{$t('Adress')}}</h4>
<!--Region, City-->
        <v-row>
          <v-col>
            <h4 class="ms-4">{{$t('Region')}}</h4>
            <v-text-field
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input"
              type="text"
              v-model="region"
              :disabled="checkbox"
            ></v-text-field>
          </v-col>
          <v-col>
            <h4 class="ms-4">{{$t('City')}}</h4>
            <v-text-field
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input"
              type="text"
              v-model="city"
              :disabled="checkbox"
            ></v-text-field>
          </v-col>
          <v-col>
            <h4 class="ms-4">{{$t('Area')}}</h4>
            <v-text-field
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input"
              type="text"
              v-model="area"
              :disabled="checkbox"
            ></v-text-field>
          </v-col>
        </v-row>
<!--Street, home-->
        <v-row>
          <v-col>
            <h4 class="ms-4">{{$t('Street')}}</h4>
            <v-text-field
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input"
              type="text"
              v-model="street"
              :disabled="checkbox"
            ></v-text-field>
          </v-col>
          <v-col>
            <h4 class="ms-4">{{$t('Home')}}</h4>
            <v-text-field
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input"
              type="text"
              v-model="home"
              :disabled="checkbox"
            ></v-text-field>
          </v-col>
          <v-col>
            <h4 class="ms-4">{{$t('Flat')}}</h4>
            <v-text-field
              filled
              rounded
              dense
              color="var(--blue-color)"
              class="patient__input"
              type="text"
              v-model="flat"
              :disabled="checkbox"
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
              color="var(--blue-color)"
              rows="10"
              row-height="10"
              class="patient__textarea"
              :placeholder="$t('Notes')"
              v-model="notes2"
              :disabled="checkbox"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-btn class="patient__secondary-btn">{{ $t('Else_one') }}</v-btn>
        <hr class="my-10">
        <v-checkbox
          v-model="active"
          :label="active ? $t('Active') : $t('Not_active')"
          color="var(--blue-color)"
        ></v-checkbox>
    </v-form>
    <slot name="dialog"></slot>
  </section>
</template>
<script lang="ts">
export default {
  data (): any {
    return {
      valid: true,
      checkbox: false,
      vip: false,
      active: false,
      numberofcard: '',
      surnamePatient: '',
      namePatient: '',
      fathNamePatient: '',
      birthdayPatient: '',
      passportSerai: '',
      phonenumberOfPatient: '',
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
        (v: any) => !!v || this.$t('Not_empty'),
      ],
      rulesInputForPhone: [
        (v: any) => !!v || this.$t('Not_empty'),
        (v: any) => v.length === 11 || this.$t('Symbols_11'),
      ],
    }
  },
}
</script>
