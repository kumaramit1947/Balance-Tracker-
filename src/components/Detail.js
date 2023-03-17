import { Card, CardHeader, CardContent } from '@mui/material';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../hooks/useTransactions';
const Detail = ({ title }) => {
    const { total, chartData } = useTransactions(title);
    return (
        <Card className={title.toLowerCase()}
            sx={{
                height: '250px', display: 'flex', flexDirection: 'column', pb: 0
            }}>
            <CardHeader title={`${title} :  $${total}`} className={`card-head-${title.toLowerCase()}`}/>
            <CardContent sx={{
                height: '65%',
                padding: 0,   
            }}>
                <div className='doughnut'>
                <Doughnut sx={{margin: '0 auto'}} data={chartData} options={{
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }} />
                </div>

            </CardContent>
        </Card>
    );
}
export default Detail;