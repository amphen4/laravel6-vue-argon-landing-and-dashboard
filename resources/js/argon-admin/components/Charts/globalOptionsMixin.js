import Chart from 'chart.js';
import { initGlobalOptions } from "@argon-admin/components/Charts/config";
export default {
  mounted() {
    initGlobalOptions(Chart);
  }
}
