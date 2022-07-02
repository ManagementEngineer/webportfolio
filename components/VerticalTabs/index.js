import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box
                sx={{ bgcolor: 'background.paper', display: 'flex', height: '100%', width: '8vw', position: 'fixed', justifyContent: 'center', alignItems: 'center' }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    scrollButtons="auto"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="Portfolio" {...a11yProps(1)} />
                    <Tab label="About" {...a11yProps(2)} />
                    <Tab label="Engineering" {...a11yProps(3)} />
                    <Tab label="Contact" {...a11yProps(4)} />
                </Tabs>
            </Box>
        </>
    );
}