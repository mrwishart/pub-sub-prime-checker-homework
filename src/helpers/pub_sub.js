const PubSub = {

  publish: function (channel, payload) {
      const event = new CustomEvent(channel, {detail: payload});
      document.dispatchEvent(event);
      console.log(event.detail);
  },

  subscribe: function (channel, callback) {
    document.addEventListener(channel, callback);
  }
}

module.exports = PubSub;
