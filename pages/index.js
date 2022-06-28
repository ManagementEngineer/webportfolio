import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Home from './home';
import { Grid } from '@mui/material';
import About from './about';
import Header from '../components/Header';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container xl={12} sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw' }}>
          {value != 0 &&
            <Grid item>
              {/* -----------head--------- */}
              <Header title={props.title} />
            </Grid>
          }
          <Grid item sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {children}
          </Grid>
          <Grid item>
            {/* -----------Footer-------- */}
            <Typography>
              Hi, Im RJ
            </Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

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
    <Box
      sx={{ bgcolor: 'background.paper', display: 'flex', height: '100%', position: 'fixed', justifyContent: 'center', alignItems: 'center' }}
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
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1} title='Portfolio'>
        Portfolio
      </TabPanel>
      <TabPanel value={value} index={2} title='About Me'>
        <About />
      </TabPanel>
      <TabPanel value={value} index={3} title='My Engineering Experience'>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4} title='Contact Me'>
        Item Five
      </TabPanel>
    </Box>

  );
}