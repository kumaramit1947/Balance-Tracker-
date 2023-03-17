import { useContext } from 'react';
import { ExpenseTrackerContext } from '../context/context';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@mui/material';
import { Delete, MoneyOff } from '@mui/icons-material';

const List = () => {
    const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);

    return (
        <MUIList dense={true} className='mui-list' >
            {transactions.map((transaction) => {
                return (
                    <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                        <ListItem sx={{ height: '50px', mb: '5px' }}>
                            <ListItemAvatar>
                                <Avatar className={`avatar-${transaction.type.toLowerCase()}`}>
                                    <MoneyOff />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText sx={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}
                                primary={transaction.category}
                                secondary={`$${transaction.amount} - ${transaction.date.split('-').reverse().join('/')}`} />
                            <ListItemSecondaryAction>
                                <IconButton edge='end' aria-label='delete'
                                    onClick={() => { deleteTransaction(transaction.id) }}>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                )
            })}
        </MUIList>
    );
}
export default List;