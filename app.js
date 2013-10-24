// Your code goes here.
(function(){
  return {
    appID: 'createTicketApp',
    targetSpoke: this.$('#zendeskSelect').val() || '',
    events: {
      'click .submitSpoke': 'createTicketValues',
      'createTicket.done': 'processData',
      'click .displayForm': 'switchToReqester'
    }, //end events
    requests: {
      createTicket: function(data) {
        return {
          url: data,
          dataType: 'JSON'
        };
      }
    }, //end requests
    processData: function(data, response, responseText) {
      console.log(responseText);
      this.switchTo('description', {
        newTicket: data.message,
        spoke: this.targetSpoke
      });
    },
    createTicketValues: function() {
      this.targetSpoke = this.$('#zendeskSelect').val();
      var spoke = 'http://'+ this.$('#zendeskSelect').val()+'/requests/embedded/create.json?';
        spoke += 'subject='+ this.$('#userSub').val()+'&';
        spoke += 'description='+this.$('#ticketDesc').val()+'&';
        spoke += 'name='+this.$('#userName').val()+'&';
        spoke += 'email='+ encodeURI(this.$('#userEmail').val())+'&';
      this.ajax('createTicket', spoke);
    },
    switchToReqester: function(data) {
      this.switchTo('requester', {});
    }
  };//end first return
}());
