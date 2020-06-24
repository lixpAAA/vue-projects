<script>
import WS from "./ws";
export default {
  data() {
    return {
      ws: "" // websocket
    };
  },
  render(h) {
    return h();
  },
  created() {
    this.ws = WS.getWebSocket("ws://localhost:3000");
    this.ws.open(() => {
      this.ws.emit("data", { data: "the first data" });
      this.ws.on("data", data => {
        console.log("服务端返回数据：", data);
      });
    });
  },
  methods: {}
};
</script>