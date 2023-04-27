<template>
  <v-app style="background-color: rgb(235, 235, 235)">
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
          <v-icon class="me-2">{{ item.icon }}</v-icon>
          <v-list-item-title class="ms-2 nav__item">{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-icon class="me-2">mdi-earth</v-icon>
          <v-list-item-title>
            <v-select rounded :items="locale" v-model="activeLang" @change="onChange(selectedValue)" color="var(--blue-color)"></v-select>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-btn class="white nav__exit-btn" fixed bottom>
          <v-icon class="me-2">mdi-exit-to-app</v-icon>
          <span v-if="!miniVariant">{{ $t("Out") }}</span>
      </v-btn>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  export default {
    data () {
      return {
        miniVariant: false,
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
      }
    },
    methods: {
      onChange(event: any) {
        this.$router.replace(this.switchLocalePath(event));
      }
    },
    // computed: {
    //   items(): any {
    //     return this.$store.getters['indexDefault/items']
    //   }
    // },
    watch: {
      activeLang: function changeLang(val) {
        this.$i18n.setLocaleCookie(val);
        console.log(this.$i18n.setLocaleCookie(val))
        window.location.href = this.switchLocalePath(val);
      },
    },
  }
</script>
