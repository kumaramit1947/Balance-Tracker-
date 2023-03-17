import {Detail, Main} from './components';
import { Grid } from '@mui/material';

import './index.css';
const App = () => {
    return (
        <div>
            <Grid container spacing={2} alignItems='center' justifyContent='center'
                sx={{ height: '100vh' }}>
                    <Grid item xs={12} sm={4}>
                        <Detail title='Income'/>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Main />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Detail title='Expense'/>
                    </Grid>
            </Grid>
        </div>
    );
}
export default App;