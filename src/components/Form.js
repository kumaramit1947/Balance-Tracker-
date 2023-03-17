import { useState, useContext } from 'react';
import { TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ExpenseTrackerContext } from '../context/context';
import { v4 as uuidv } from 'uuid';

import { incomeCategories, expenseCategories } from '../constants/categories';
import { Snackbar } from './';


const initialState = {
    type: 'Income',
    category: 'None',
    amount: 0,
    date: new Date().toISOString().substring(0,10)
};
const Form = () => {
    const [formData, setFormData] = useState(initialState);
    const [open, setOpen] = useState(false);
    const { addTransaction } = useContext(ExpenseTrackerContext);
    const createTransaction = () => {
        if(formData.category !== 'None' && Number(formData.amount) > 0){
            const transaction = { ...formData, amount: Number(formData.amount), id: uuidv() };
            addTransaction(transaction);
            setOpen(true);
        }
        setFormData({...initialState, date: new Date().toISOString().substring(0,10)});
    }
    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;
    return (
        <div>
            <Snackbar open={open} setOpen={setOpen}  />
            <Grid container spacing={1}>
            <Grid item xs={6}>
                <FormControl className='form-fields' variant='standard' fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                        <MenuItem value='Income'>Income</MenuItem>
                        <MenuItem value='Expense'>Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl className='form-fields' variant='standard' fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                        {selectedCategories.map((ele, ind) => {
                            return (
                                <MenuItem value={ele.type} key={ind}>{ele.type}</MenuItem>
                            )
                        })}

                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })} 
                    className='form-fields' variant='standard' type='number' label='Amount' fullWidth />
            </Grid>
            <Grid item xs={6}>
                <TextField value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} 
                    className='form-fields' InputLabelProps={{
                    shrink: true,
                }} variant='standard' type='date' label='Date' fullWidth />
            </Grid>
            <Grid item xs={12} marginTop='15px'>
                <Button onClick={createTransaction} variant='outlined' color='primary' fullWidth>Create</Button>
            </Grid>

        </Grid>
        </div>
    );
}
export default Form;