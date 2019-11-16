<template>
  <div class="build-test__input">
    <label>
      Kindly asking you to provide your feedback
    </label>
    <textarea
      v-model="innerValue"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    feedback: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      innerValue: this.feedback,
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
