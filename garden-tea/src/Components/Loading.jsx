import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../store/productSlice';

function Loading() {
    const { loading } = useSelector(state => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        setTimeout(() => {
            dispatch(setLoading(false));
        }, 1000);
    }, [])


    return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
            <CircularProgress color="inherit" />
        </Backdrop>

    )
}

export default Loading
