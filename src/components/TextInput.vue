<template>
  <div class="build-test-u-flex-column build-test-u-spacer">
    <label class="build-test-u-spacer build-test-u-lightgrey-color">
      Kindly asking you to provide your feedback about the content
    </label>
    <textarea
      v-model="innerValue"
      class="build-test__textarea build-test-u-spacer"
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
  .build-test__textarea {
    border-color: #dfdfdf;
    width: 280px;
    max-width: 100%;
    height: 120px;
    border-radius: 8px;
    box-shadow: 0 6px 4px;
    padding: 8px 16px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    .build-test__textarea {
      height: 80px;
    }
  }
</style>
