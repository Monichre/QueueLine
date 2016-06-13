import Ember from 'ember';

export default Ember.Component.extend({
  addNewTicket: false,
  actions: {
    ticketFormShow() {
      this.set('addNewTicket', true);
    },
  }
});
