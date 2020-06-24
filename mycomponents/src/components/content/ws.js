export default class WS {
  ws = null
  constructor(url) {
    this.ws = !!this.ws ? this.ws : new WebSocket(url)
  }
  emit(type, data) {
    if (this.ws) {
      this.ws.send({ [type]: data });
    }
  }
  static getWebSocket(url) {
    if (!!this.ws && this.ws instanceof WS) {
      return this.ws
    } else {
      return new WS(url)
    }
  }
  open(func) {
    if (this.ws) {
      this.onOpen(func);
    }
    // this.ws = new WebSocket(url);
    // // debugger;
  }
  onOpen(func, err) {
    if (this.ws) {
      this.ws.onopen = function (evt) {
        func.call(null, evt);
      };
    } else {
      console.log("打开失败");
      err.call(null, 'error')
    }
  }
  close(func) {
    if (this.ws) {
      this.ws.close();
      this.onClose(func);
    }
  }
  onClose(func) {
    if (this.ws) {
      this.ws.onclose = function (evt) {
        func.call(null, evt);
      };
    }
  }
  on(type, func) {
    switch (type) {
      case 'data': this.onMessage(func); break
      case 'room': this.onMessage(func); break
      case 'logout': this.onMessage(func); break
      case 'disconnect': this.close(func); break
      default: this.close(func); break
    }
  }
  onMessage(func) {
    if (this.ws) {
      this.ws.onmessage = function (evt) {
        func.call(null, evt.data);
      };
    }
  }
}