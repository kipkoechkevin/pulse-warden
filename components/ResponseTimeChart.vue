<template>
  <div class="mt-6">
    <h3 class="text-gray-500 text-xs font-bold uppercase tracking-wide">Response Time</h3>
      <div class="mt-5 h-300 rounded-lg bg-background md:p-3">

      </div>
  </div>
</template>

<script setup>
  import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
  } from 'chart.js'

  import {Line} from 'vue-chartjs';
  import colors from '@/utils/colors';

  ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
  );

  const mode = useColorMode();

  const options = component<ChartOptions<"Line">>(()=>{
    return{
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      tooltip:{
        mode: 'index',
        intersect: false,
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: mode.value === 'dark' ? colors.dark[200] : colors.gray[500],
            font: {
              size: 14,
              family: 'Inter',
            },
          },
        },
        y: {
          grid: {
            color: mode.value === 'dark' ? colors.dark[200] : colors.gray[500],
            borderDash: [3, 3],
            drawBorder: false,
            drawTicks: false,
            zeroLineColor: mode.value === 'dark' ? colors.dark[200] : colors.gray[500],
            zeroLineBorderDash: [3, 3],
            zeroLineBorderDashOffset: 6,
          },
          ticks: {
            color: mode.value === 'dark' ? colors.dark[200] : colors.gray[500],
            font: {
              size: 14,
              family: 'Inter',
            },
          },
        },
      },
    }
  })

</script>

