<template>
    <router-view/>
</template>

<script>

export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  name: 'LayoutDefault',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>

</style>
