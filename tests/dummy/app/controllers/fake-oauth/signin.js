import Controller from '@ember/controller';
import window from 'ember-window-mock';

export default Controller.extend({
  actions: {
    login() {
      window.location = 'http://localhost:4200/login#something'
    }
  }
});
