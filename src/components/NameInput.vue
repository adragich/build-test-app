<template>
  <div class="build-test-u-flex-column build-test-u-spacer">
    <label class="build-test__input-label build-test-u-spacer build-test-u-lightgrey-color">
      Kindly asking you to provide your name
    </label>
    <input
      v-model="innerValue"
      type="text"
      class="build-test__input build-test-u-spacer"
      placeholder="Jhon Doe 😎"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'NameInput',
  props: {
    name: {
      type: String,
      required: true
    }
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
  .build-test__input {
    border: 1px solid #dfdfdf;
    line-height: 32px;
    width: 280px;
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 1px;
    padding: 0 16px;
    font-size: 16px;
    font-family: inherit;
  }
</style>
