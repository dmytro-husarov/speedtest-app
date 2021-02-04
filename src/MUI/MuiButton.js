import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const MuiButton = memo(({color = 'default', handler, children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color={color} size="small" onClick={handler}>
        {children}
      </Button>
    </div>
  );
})
export default MuiButton