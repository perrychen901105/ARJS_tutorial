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
    console.log(data.event);
    console.log(el);
    if (data.event) {
      el.addEventListener(data.event, function () {
        console.log("click successful");
        // window.location.href = "../singlePage.html";
        // window.history.replaceState({}, "page 2", "http://127.0.0.1:7000/singlePage.html")
        alert("clicked");

      });

      // console.log(window.location);
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