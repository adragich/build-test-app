<template>
  <button
    type="button"
    class="build-test__button"
    :class="{ 'build-test__button--disabled': disabled }"
    @click="submit"
  >
    <span class="build-test__button-text">
      <template v-if="disabled">
      	First give me some data...
      </template>
      <template v-else>
      	Let it go!
      </template>
    </span>
  </button>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    submit() {
      !this.disabled && this.$emit('submit');
    }
  }
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
    box-shadow: 0 2px 1px;
  	border-radius: 8px;
  	position: relative;
  	overflow: hidden;
  	cursor: pointer;
  }
  .build-test__button:before {
  	content: '';
  	position: absolute;
  	left: 0;
  	bottom: 0;
  	height: 0;
  	transition: 0.3s ease;
  	background: #F44336;
  	width: 100%;
  }
  .build-test__button--disabled {
  	opacity: 0.5;
  	cursor: default;
  }
  .build-test__button-text {
  	font-size: 16px;
  	padding: 16px;
  	color: white;
  	display: inline-block;
    width: 100%;
    cursor: default;
    position: relative;
    cursor: inherit;
  }

  @media (min-width: 768px) {
	  .build-test__button:not(.build-test__button--disabled):hover:before {
	  	height: 100%;
	  }
  }
</style>
