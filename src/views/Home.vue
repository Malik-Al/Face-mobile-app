<template>
  <q-layout view="lHh Lpr lFf">
    <Camera/>
  </q-layout>
  
</template>
<script>
import Camera from '../views/Camera'
export default {
  name: 'Home',
  components: {
      Camera
  },

  data () {
    return {
      leftDrawerOpen: false
    }
  },

}

</script>
