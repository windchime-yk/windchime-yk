<template>
  <section id="skill" class="contents">
    <h2 class="contents__title">Skill</h2>
    <radar-chart :chart-data="chartData" :options="options" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import RadarChart from '~/components/RadarChart.vue'
import { skill } from '~/assets/json/skill.json'

interface Skill {
  name: string
  percentage: number
}

export default Vue.extend({
  components: {
    RadarChart
  },
  data() {
    return {
      skill,
      options: {
        responsive: true,
        legend: {
          display: false
        },
        scale: {
          angleLines: {
            display: false
          },
          ticks: {
            suggestedMin: 0
          }
        }
      }
    }
  },
  computed: {
    chartData() {
      return {
        // @ts-ignore
        labels: this.extractSkillData('name'),
        datasets: [
          {
            backgroundColor: 'rgba(31, 46, 85, .4)',
            // @ts-ignore
            data: this.extractSkillData('percentage')
          }
        ]
      }
    }
  },
  methods: {
    extractSkillData(key: keyof Skill) {
      return skill.map((val) => val[key])
    }
  }
})
</script>
