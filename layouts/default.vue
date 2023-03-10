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
          <v-icon class="me-2">{{ item.icon }}</v-icon>
          <v-list-item-title class="ms-2 nav__item">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-btn class="white nav__exit-btn" fixed bottom>
          <v-icon class="me-2">mdi-exit-to-app</v-icon>
          <span v-if="!miniVariant"> Выйти</span>
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
    }
  },
  computed: {
    items(): any {
      return this.$store.getters['indexDefault/items']
    }
  }
}
</script>
