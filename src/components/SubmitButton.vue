<template>
  <button
    type="button"
    class="build-test__button"
    @click="$emit('submit')"
  >
    <span class="build-test__button-text">
      Let it go...
    </span>
  </button>
</template>

<script>
export default {
  name: 'SubmitButton',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .build-test__button {
  	background: #E91E63;
  	border: none;
  	padding: 0;
    width: 280px;
    max-width: 100%;
    box-shadow: 0 4px 2px;
  	border-radius: 8px;
  }
  .build-test__button-text {
  	font-size: 16px;
  	padding: 16px;
  	color: white;
  	display: inline-block;
    width: 100%;
  }
</style>
