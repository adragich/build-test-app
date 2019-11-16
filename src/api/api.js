import Firebase from 'firebase/app';
import 'firebase/database';

import config from '../../firebase.js';

Firebase.initializeApp(config);

const database = Firebase.database();

export function sendFeedback (postData) {
  var newFeedbackKey = database.ref().child('feedbacks').push().key;

  var updates = {};
  updates['/feedbacks/' + newFeedbackKey] = postData;

  return database.ref().update(updates);
}
