<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-white text-grey-10"
      bordered
    >
      <q-toolbar class="constrain">
        <q-btn
          to="/camera"
          class="large-screen-only q-mr-sm"
          flat
          icon="eva-camera-outline"
          size="18px"
          dense
        />
        <q-separator
          class="large-screen-only"
          vertical
          spaced
        />
        <q-toolbar-title class="text-grand-hotel text-bold">
          Quasagram
        </q-toolbar-title>
        <q-btn
          to="/"
          class="large-screen-only"
          flat
          round
          icon="eva-home-outline"
          size="18px"
          dense
        />
      </q-toolbar>
    </q-header>

    <q-footer
      class="bg-white small-screen-only"
      bordered
    >
        <q-tabs
          class="text-grey-10"
          active-color="primary"
          indicator-color="transparent"
        >
          <q-route-tab
            to="/"
            icon="eva-home-outline"
          />
          <q-route-tab
            to="/camera"
            icon="eva-camera-outline"
          />
        </q-tabs>
    </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false)

    return {

    }
  }
})
</script>

<style lang="sass">
.q-toolbar
  @media (min-width: $breakpoint-sm-min)
    height: 77px
.q-toolbar__title
  font-size: 30px
  @media (max-width: $breakpoint-xs-max)
    text-align: center
.q-footer
  .q-tab__icon
    font-size: 30px
</style>
