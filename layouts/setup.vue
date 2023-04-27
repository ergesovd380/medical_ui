<template>
  <v-app style="background-color: rgb(235, 235, 235)">
    <v-layout>
<!--First Navigation-->
      <v-navigation-drawer 
        :mini-variant="miniVariant"
        app
        permanent
        class="nav"
        dense
      >
        <v-btn
          icon
          @click.stop="miniVariant = !miniVariant"
          class="ms-3"
        >
          <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
        </v-btn>
        <div 
          v-if="!miniVariant" 
          class="text-center"
        >
          <img src="@/images/logo.png" width="103px" height="101px" />
          <h1 class="nav__logo">{{ $t("International") }}<br>{{ $t("Hospital") }}</h1>
          <h1 class="nav__title text-left">{{ $t("Administrator") }}</h1>
        </div>
        <v-list
          nav
          dense
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            no-prefetch
            class="my-0"
            exact
          >
            <v-icon class="me-2 nav__icon">{{ item.icon }}</v-icon>
            <v-list-item-title  class="ms-2 nav__item">{{ item.title }}</v-list-item-title>
          </v-list-item>
          <v-list-item>
          <v-icon class="me-2 nav__icon">mdi-earth</v-icon>
          <v-list-item-title class="nav__item">
            <v-select rounded :items="locale" v-model="activeLang" @change="onChange(selectedValue)" color="var(--blue-color)"></v-select>
          </v-list-item-title>
          </v-list-item>
        </v-list>
        <v-btn class="white nav__exit-btn" fixed bottom>
            <v-icon class="me-2">mdi-exit-to-app</v-icon>
            <span v-if="!miniVariant">{{ $t("Out") }}</span>
        </v-btn>
      </v-navigation-drawer>
<!--Second Navigation-->
      <v-navigation-drawer
        :mini-variant="miniVariantSetup"
        permanent
        :class="miniVariant ? 'nav__setupMin' : 'nav__setup'"
        dense
      >
        <v-btn
          icon
          @click.stop="miniVariantSetup = !miniVariantSetup"
          class="ms-3"
        >
          <v-icon>mdi-{{ `chevron-${miniVariantSetup ? 'right' : 'left'}` }}</v-icon>
        </v-btn>
        <v-list
          nav
          dense
        >
          <v-list-item
            v-for="(itemS, i) in itemsSetup"
            :key="i"
            :to="itemS.to"
            router
            no-prefetch
            class="my-0"
            exact
          >
            <v-icon class="me-2">{{ itemS.icon }}</v-icon>
            <v-list-item-title class="ms-2 nav__item">{{ itemS.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="nav__main">
        <v-container fluid>
          <Nuxt />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
export default {
  data () {
    return {
      miniVariant: false,
      miniVariantSetup: false,
      activeLang: this.$i18n.locale,
      locale: [
        { text: "Turkmen", value: "tm" },
        { text: "Русский", value: "ru" },
      ],
      items: [
        {
          icon: 'mdi-alpha-k-box',
          title: this.$t('Nav.Cabinets'),
          to: '/cabinet'
        },
        {
          icon: 'mdi-doctor',
          title: this.$t('Nav.Personals'),
          to: '/personal'
        },
        {
          icon: 'mdi-note-text',
          title: this.$t('Nav.Blanks'),
          to: '/blank'
        },
        {
          icon: 'mdi-heart-flash',
          title: this.$t('Nav.Surveys'),
          to: '/survey'
        },
        {
          icon: 'mdi-card-account-details',
          title: this.$t('Nav.Patients'),
          to: '/patient'
        },
        {
          icon: 'mdi-bulletin-board',
          title: this.$t('Bulletin'),
          to: '/bulletin'
        },
        {
          icon: 'mdi-table-edit',
          title: this.$t('Records'),
          to: '/records'
        },
        {
          icon: 'mdi-chart-bar',
          title: this.$t('Statistic'),
          to: '/statistic'
        },
        {
          icon: 'mdi-shield-account',
          title: this.$t('Nav.Tolerance'),
          to: '/tolerance'
        },
        {
          icon: 'mdi-wrench',
          title: this.$t('Nav.Setup'),
          to: '/setup'
        },
        {
          icon: 'mdi-information-outline',
          title: this.$t('Nav.Info'),
          to: '/'
        }
      ],
      itemsSetup: [
        {
          icon: 'mdi-folder-multiple-image',
          title: this.$t('Nav.Media'),
          to: '/setup'
        },
        {
          icon: 'mdi-briefcase-outline',
          title: this.$t('Nav.Job'),
          to: '/setup/job'
        },
        {
          icon: 'mdi-account-injury-outline',
          title: this.$t('Nav.Group_patient'),
          to: '/setup/patientGroup'
        },
        {
          icon: 'mdi-account-details-outline',
          title: this.$t('Nav.Cityzen_status'),
          to: '/setup/cityzenStatus'
        },
        {
          icon: 'mdi-database-eye-outline',
          title: this.$t('Nav.Disease'),
          to: '/setup/diseaseBase'
        },
        {
          icon: 'mdi-hospital-building',
          title: this.$t('Nav.Policlinic'),
          to: '/setup/polyclinics'
        },
        {
          icon: 'mdi-book-open-page-variant-outline',
          title: this.$t('Nav.Info'),
          to: '/setup/info'
        }
      ],
    }
  },
  methods: {
      onChange(event: any) {
        this.$router.replace(this.switchLocalePath(event));
      }
    },
  watch: {
      activeLang: function changeLang(val) {
        this.$i18n.setLocaleCookie(val);
        console.log(this.$i18n.setLocaleCookie(val))
        window.location.href = this.switchLocalePath(val);
      },
    },
}
</script>
