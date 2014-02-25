var ModalController, ModalComponent, ModalRoutingMixin;

ModalRoutingMixin = Ember.Mixin.create({
  actions: {
    openModal: function(modalName, model) {
      this.controllerFor(modalName).set('model',model);
      return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
    },

    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});

ModalController = Ember.ObjectController.extend({
  header: null,
  buttons: null,

  actions: {
    close: function() {
      return this.send('closeModal');
    }
  }
});

ModalComponent = Ember.Component.extend({
  actions: {
    close: function() {
      return this.sendAction('close');
    },

    sendAction: function(action) {
      return this.sendAction(action);
    }
  }
});

export { ModalRoutingMixin, ModalController, ModalComponent };
