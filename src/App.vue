<template>
  <div
    id="app"
    class="build-test__wrapper"
  >
    <template v-if="showFeedbackForm">
      <h2 class="build-test-u-white-color build-test__title">
        Frontend Developer Love in Eindhoven,
        <br>
        This is <em>Anastasia Dragich</em> with <em>"Building Test Strategy Topic"</em>...
      </h2>

      <NameInput
        :name="postData.name"
        @input="setName"
      />

      <TextInput
        :feedback="postData.feedback"
        @input="setFeedback"
      />

      <SubmitButton
        :disabled="isSubmitButtonDisabled"
        @submit="sendFeedback"
      />

      <div v-if="isRequestVisible">
        <h3>
          Guest name: {{ postData.name }}
        </h3>

        <hr>

        <p>
          Feedback: {{ postData.feedback }}
        </p>
      </div>
    </template>
    <div
      v-else
      id="thank_you"
    >
      <h2 class="build-test-u-white-color build-test__title">
        Thanks a lot!
        <br>
        <em>Anastasia Dragich</em> appreciates your input
      </h2>

      <br>

      <div class="build-test-u-flex-column">
        <img
          class="build-test-app__image"
          :src="require(`./assets/thank${randomNumber}.gif`)"
          alt="Thank you!"
        >
      </div>
    </div>
  </div>
</template>

<script>
import NameInput from './components/NameInput.vue';
import TextInput from './components/TextInput.vue';
import SubmitButton from './components/SubmitButton.vue';
import { sendFeedback } from './api/api';

import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {
    NameInput,
    TextInput,
    SubmitButton
  },
  data: function() {
    return {
      showFeedbackForm: true
    };
  },
  computed: {
    ...mapState([
      'postData',
      'isRequestVisible'
    ]),
    isSubmitButtonDisabled() {
      return !this.postData.feedback;
    },
    randomNumber() {
      return Math.floor(Math.random() * Math.floor(9));
    }
  },
  methods: {
    ...mapMutations([
      'setName',
      'setFeedback',
    ]),
    sendFeedback() {
      sendFeedback(this.postData).then(this.showThankYou);
    },
    showThankYou() {
      this.showFeedbackForm = false;
    }
  }

}
</script>

<style>
body {
  margin: 0;
  background: aquamarine;
}
* {
  box-sizing: border-box;
}
.build-test__wrapper {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 16px 24px;
  height: 70vh;
  background: #3F51B5;
  background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='150' preserveAspectRatio='none' viewBox='0 0 100 100'%3E%3Cpath d='M0,0Q30,150,100,1V100H0' fill='aquamarine'/%3E%3C/svg%3E%0A");
  background-position: 0 100%;
  background-size: 100% 50px;
  background-repeat: no-repeat;
}
.build-test-u-flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.build-test-u-spacer {
  margin-bottom: 12px;
}
.build-test-u-lightgrey-color {
  color: #dfdfdf;
}
.build-test-u-white-color {
  color: white;
}
.build-test-app__image {
  max-width: 100%;
}

@media (max-width: 768px) {
  .build-test__title {
    font-size: 22px;
  }
}
</style>
