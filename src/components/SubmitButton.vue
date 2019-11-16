<template>
  <div class="build-test__input">
    <button
      type="button"
      @click="$emit('submit')"
    >
      Let it go...
    </button>
  </div>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
