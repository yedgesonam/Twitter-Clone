import React from 'react';
import { Grid, Typography } from "@mui/material";
import Navigation from "../Navigation/Navigation";



const Homepage = () => {
    return (
        <Grid container spacing={3} className='px-5 lg:px-36'>
            <Grid item xs={false} lg={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <Navigation/>
            </Grid>
            <Grid item xs={12} lg={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <Typography>middle part</Typography>
            </Grid>
            <Grid item xs={false} lg={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <Typography>right part</Typography>
            </Grid>
        </Grid>
    );
};

export default Homepage;
