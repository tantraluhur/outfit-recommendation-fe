import dynamic from 'next/dynamic';

import { PercentChartProps } from "@/components/home/types";

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });


export const PercentChart: React.FC<PercentChartProps> = ({percent, hexColor}) => {
    const calcOtherColor = 1 - percent
    const series = [percent, calcOtherColor]

    const options = {
        colors: [hexColor, '#808080'],
        labels: [hexColor, 'Other'],
    }

    return (
        <div>
            <ApexCharts options={options} series={series} type="pie" height={350} width={350}/>
        </div>
    )

}