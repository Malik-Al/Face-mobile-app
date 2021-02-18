<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <Camera />
    </q-page-container>
  </q-layout>
</template>

<script>
import Camera from './components/Camera.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Camera
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
</style>
