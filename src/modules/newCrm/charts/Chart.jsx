import ChartWrapper from './parts/Wrapper'
import ChartHeader from './parts/Header'
import ChartTitle from './parts/Title'
import ChartActionTab from './parts/ActionTab'
import ChartBody from './parts/Body'
import './_chart.scss'

// Các thành phần con

// Component Card
const Chart = {
    // '':ChartWrapper,
    Wrapper: ChartWrapper,
    Header: ChartHeader,
    Title: ChartTitle,
    ActionTab: ChartActionTab,
    Body: ChartBody,
};

export default Chart;