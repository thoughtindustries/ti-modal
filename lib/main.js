var ModalController, ModalComponent, ModalRoutingMixin, ModalView;

ModalRoutingMixin = Ember.Mixin.create({
  actions: {
    openModal: function(modalName, model) {
      this.controllerFor(modalName).set('model',model);
      return this.render(modalName, {
        into: 'application',
        view: 'ti-modal',
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

ModalView = Ember.View.extend({
  bindClosingBehavior: function() {
    // close if the user hits escape
    $(document).on('keyup.modal', $.proxy(function(e) {
      if (e.keyCode == 27) {
        this.get('controller').send('close');
      }
    }, this));
  }.on('didInsertElement'),

  unbindClosingBehavior: function() {
    $(document).off('keyup.modal')
  }.on('willDestroyElement'),

  click: function(e) {
    // close when the user clicks on the outside of the modal
    if ($(e.target).hasClass('modal')) {
      this.get('controller').send('close');
    }
  }
});

export { ModalRoutingMixin, ModalController, ModalComponent, ModalView };
