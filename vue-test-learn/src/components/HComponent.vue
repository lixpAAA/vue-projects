<script>
import { resolve } from 'q';
export default {
  name: 'hcomponent',
  components: {},
  props: {
    eleType: {
      default: 'button',
      type: String
      // validator: (val) => {
      //   if (typeof val !== 'string') {
      //     console.error(
      //       // new Error('child component eleType prop need data type is String')
      //       'child component eleType prop need data type is String'
      //     );
      //     // console.log('error');
      //     return true;
      //   }
      //   return false;
      // }
    }
  },
  render(h) {
    return h(
      this.eleType,
      {
        class: 'aaaa'
      },
      'this is a test button'
    );
  },
  created() {},
  mounted() {},
  data() {
    return {};
  },
  methods: {}
};
</script>
  <style scoped>
.wrapper {
}
</style>