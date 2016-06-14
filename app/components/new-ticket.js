import Ember from 'ember';
import moment from 'moment';


export default Ember.Component.extend({
  addNewTicket: false,
  actions: {
    ticketFormShow() {
      this.set('addNewTicket', true);
    },
    save(){
      var params = {
        author:this.get('author'),
        topic:this.get('topic'),
        question:this.get('question'),
        timeStamp:moment().format('MMMM Do YYYY, h:mm:ss a'),
      };
      this.set('addNewTicket', false);
      this.set('author', ""); //sets inputs back to empty
      this.set('topic', "");
      this.set('question', "");
      this.sendAction('save', params);
    }
  }
});
