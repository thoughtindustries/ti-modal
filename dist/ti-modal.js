define("templates/ti-modal", ["exports"], function (__exports__) { __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "header", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </h4>\n          <button class=\"close\" type=\"button\" aria-label=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">&times;</button>\n        </div>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <form class=\"form-horizontal\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendAction", "submit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n            <div class=\"modal-body\">\n              ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n          </form>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <div class=\"modal-body\">\n            ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <button ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn className")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendAction", "action", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n        ");
  return buffer;
  }

  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"modal fade in\" style=\"display: block\">\n  <div class=\"modal-dialog\" role=\"dialog\">\n    <div class=\"modal-content\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, {hash:{
    'bubbles': (false)
  },hashTypes:{'bubbles': "BOOLEAN"},hashContexts:{'bubbles': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers['if'].call(depth0, "header", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      <div>\n        ");
  stack1 = helpers['if'].call(depth0, "submit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n\n      <div class=\"modal-footer\">\n        ");
  stack1 = helpers.each.call(depth0, "buttons", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-backdrop in\"></div>\n");
  return buffer;
  
}); });
define("ti-modal", 
  ["exports"],
  function(__exports__) {
    "use strict";
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
      bindClosingBehavior: function() {
        $(document).on('keyup.modal', $.proxy(function(e) {
          if (e.keyCode == 27) {
            this.sendAction('close')
          }
        }, this));
      }.on('didInsertElement'),

      unbindClosingBehavior: function() {
        $(document).off('keyup.modal')
      }.on('willDestroyElement'),    

      actions: {
        close: function() {
          return this.sendAction('close');
        },

        sendAction: function(action) {
          return this.sendAction(action);
        }
      }
    });

    __exports__.ModalRoutingMixin = ModalRoutingMixin;
    __exports__.ModalController = ModalController;
    __exports__.ModalComponent = ModalComponent;
  });
define("ti-modal/initializer", 
  ["templates/ti-modal","ti-modal","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Template = __dependency1__["default"];

    var ModalComponent = __dependency2__.ModalComponent;
    var ModalController = __dependency2__.ModalController;

    __exports__["default"] = Ember.onLoad('Ember.Application', function(application) {
      application.initializer({
        name: 'ti-modal',

        initialize: function(container, application) {
          container.register('template:components/ti-modal', Template);
          container.register('component:ti-modal', ModalComponent);
          container.register('controller:ti-modal', ModalController);
        }
      });
    });
  });
