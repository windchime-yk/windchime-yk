<script lang="ts">
import Vue, { PropType } from 'vue'
import Chart from 'chart.js'
import { Radar, mixins } from 'vue-chartjs'

export default Vue.extend({
  name: 'RadarChart',
  extends: Radar,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: Object as PropType<Chart.ChartData>,
      default: () => [],
    },
    options: {
      type: Object as PropType<Chart.ChartOptions>,
      default: () => [],
    },
  },
  mounted() {
    // TODO: ts-ignore使わない方法を探す
    // @ts-ignore
    this.renderChart(this.chartData, this.options)
  },
})
</script>
