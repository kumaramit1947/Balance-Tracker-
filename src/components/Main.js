import {useContext} from 'react';
import { Form, List } from './';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@mui/material';
import { ExpenseTrackerContext } from '../context/context';
const Main = () => {
    const {balance} = useContext(ExpenseTrackerContext);
    return (
        <Card className='main'>
            <CardHeader title='Balance Tracker' />
            <CardContent>
                <Typography variant='h6' align='center'>Total Balance : ${balance}</Typography>
                <Divider sx={{marginBottom: '15px'}} />
                <Form />
            </CardContent>
            <CardContent>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
export default Main;