## ti-modal

Bootstrap-styled modals for Ember.js. Includes header & button support.

Assumes you are using [ember-app-kit](https://github.com/stefanpenner/ember-app-kit) (more specifically [ember-jj-abrams-resolver](https://github.com/stefanpenner/ember-jj-abrams-resolver))

## Usage

Import the initializer before you create your app, e.g.

```js
  import Resolver from 'ember/resolver';
  import 'ti-modal/initializer';

  export default Ember.Application.extend({
    Resolver: Resolver['default']
  });
```

Add the open and close actions to your Application Route:

(in `routes/application.js`)
```js
  import { ModalRoutingMixin } from 'ti-modal';

  export default Ember.Route.extend(ModalRoutingMixin, {
    ... your application-level actions here ...
  });
```

Create a Modal Controller with:

```js
  import {ModalController} from 'ti-modal';

  export default ModalController.extend({
    header: 'This is the modal header',

    buttons: [
      {label: 'Cancel', className: 'btn-default pull-left', action: 'close'},
      {label: 'Checkout', className: 'btn-default', action: 'checkout'}
    ]
  });
```

Create a Modal template with:

```hbs
  {{#ti-modal close="close" checkout="checkout" header=header buttons=buttons}}
    Your modal content here
  {{/ti-modal}}
```

...and finally trigger a modal with:

```hbs
  <a href="#" {{action 'openModal' 'your-modal-controller-name' model}}>Shopping Cart</a>
```

## TODO

Tests!!

## LICENSE

MIT
