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
          <nuxt-link no-prefetch to="/"><img src="@/images/logo.png" width="103px" height="101px" /></nuxt-link>
          <h1 class="nav__logo">Международный <br> центр травматологии</h1>
          <h1 class="nav__title text-left">Главный администратор</h1>
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
        </v-list>
        <v-btn class="white nav__exit-btn" fixed bottom>
            <v-icon class="me-2">mdi-exit-to-app</v-icon>
            <span v-if="!miniVariant"> Выйти</span>
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
      miniVariantSetup: false
    }
  },
  computed: {
    items(): any {
      return this.$store.getters['indexDefault/items']
    },
    itemsSetup(): any {
      return this.$store.getters['indexSetup/items']
    }
  }
}
</script>
