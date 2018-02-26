AFRAME.registerComponent('hello', {
  schema: {
    event: {type: 'string', default: ''},
    message: {type: 'string', default: ''}
  },

  multiple: true,

  init: function () {
    var self = this;
    this.eventHandlerFn = function () { console.log(self.data.message); }
  },

  update: function () {

    var data = this.data
    var el = this.el

    if (data.event) {
      el.addEventListener(data.event, function () {
        var sceneEl = document.querySelector('a-scene');
        var menu = sceneEl.querySelector('#links');
        menu.setAttribute('visible', data.message);

        console.log(data.message)
      });
    } else {

    }
    console.log(this.id);
  }
});

AFRAME.registerComponent('changescene', {
  schema: {
    event: {type: 'string', default: ''},
    linkto: {type: 'string', default: ''}
  },

  multiple: true,

  init: function () {
    var self = this;
  }, 

  update: function () {
    var data = this.data;
    var el = this.el;
    if (data.event) {
      console.log("googd");
      el.addEventListener(data.event, function () {
        console.log("click successful");
        alert("clicked");
      });
    }
  }
});

AFRAME.registerComponent('hello-world', {
  schema: {
  },
  init: function () {
    console.log('Hello, World!');
  }
});