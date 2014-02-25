import Template from 'templates/ti-modal';

import { ModalComponent, ModalController } from 'ti-modal';

export default Ember.onLoad('Ember.Application', function(application) {
  application.initializer({
    name: 'ti-modal',

    initialize: function(container, application) {
      container.register('template:components/ti-modal', Template);
      container.register('component:ti-modal', ModalComponent);
      container.register('controller:ti-modal', ModalController);
    }
  });
});
