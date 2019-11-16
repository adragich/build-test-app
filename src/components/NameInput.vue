<template>
  <div class="build-test__input">
    <label>
      Kindly asking you to provide your name
    </label>
    <input
      v-model="innerValue"
      type="text"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'NameInput',
  props: {
    name: String
  },
  data: function () {
    return {
      innerValue: this.name,
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
