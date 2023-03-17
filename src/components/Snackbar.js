import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const CustomSnackbar = ({ open, setOpen }) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    }
    return (
        <div>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                onClose={handleClose}
                autoHideDuration={3000}
            >
                <Alert severity='success' onClose={handleClose} elevation={6}
                    variant='filled'
                >
                    Transaction created successfully!
                </Alert>
            </Snackbar>
        </div>
    );

}
export default CustomSnackbar;