import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import UseState from '../components/useState/Speedtest';
import UseStatePlusProps from '../components/useStatePlusProps/Speedtest';
import ContextPlusUseState from '../components/ContextPlusUseState/Speedtest';
import ContextPlusUseReducer from '../components/ContextPlusUseReducer/Speedtest';
import Redux from '../components/Redux/Speedtest';
import Recoil from '../components/Recoil/Speedtest';
import MobX from '../components/MobX/Speedtest';
import Effector from '../components/Effector/Speedtest';
import Zustand from '../components/Zustand/Speedtest';
import Jotai from '../components/Jotai/Speedtest';
import Valtio from '../components/Valtio/Speedtest';
import XState from '../components/XState/Speedtest';

const CustomBox = withStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
    '& h4': {
      borderBottom: `1px solid ${theme.palette.divider}`,
      textAlign: 'center',
    },
    '& p': {
      color: '#3f51b5',
    }
  },
}))(Box);

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
        <CustomBox>
          {children}
        </CustomBox>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 440,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    
    '& span': {
      textTransform: 'none',
      alignItems: 'start',
    },
    '& button': {
      minHeight: 35,
    }
  },
  tabpanel: {
    flexGrow: 1,
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="useState" {...a11yProps(0)} />
        <Tab label="useState+Props" {...a11yProps(1)} />
        <Tab label="Context+useState" {...a11yProps(2)} />
        <Tab label="Context+useReducer" {...a11yProps(3)} />
        <Tab label="Redux" {...a11yProps(4)} />
        <Tab label="Recoil" {...a11yProps(5)} />
        <Tab label="Mobx" {...a11yProps(6)} />
        <Tab label="Effector" {...a11yProps(7)} />
        <Tab label="Zustand" {...a11yProps(8)} />
        <Tab label="Jotai" {...a11yProps(9)} />
        <Tab label="Valtio" {...a11yProps(10)} />
        <Tab label="XState" {...a11yProps(11)} />
      </Tabs>
      <TabPanel className={classes.tabpanel} value={value} index={0}>
        <UseState />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={1}>
        <UseStatePlusProps />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={2}>
        <ContextPlusUseState />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={3}>
        <ContextPlusUseReducer />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={4}>
        <Redux />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={5}>
        <Recoil />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={6}>
        <MobX />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={7}>
        <Effector />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={8}>
        <Zustand />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={9}>
        <Jotai />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={10}>
        <Valtio />
      </TabPanel>
      <TabPanel className={classes.tabpanel} value={value} index={11}>
        <XState />
      </TabPanel>
    </div>
  );
}
