import { Divider, Typography, Grid, Box } from "@mui/material";

const LeftBar = () => {

    return (
        <>
            <Grid container sx={{ display: 'flex', flexDirection: 'row', transform: 'rotate(270deg)', alignItems: 'center', position: 'absolute', width: 800 }}>
                <Grid item>
                    <Typography variant="h6">
                        Ramuel Batuigas
                    </Typography>
                </Grid>
                <Grid item sx={{ flexGrow: 1 }}>
                    <Box sx={{ height: 2, backgroundColor: '#555' }} />
                </Grid>
            </Grid>
        </>
    )


}

export default LeftBar;