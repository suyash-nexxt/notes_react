import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useModals } from '../../hooks/useModals';
import useStyles from './styles';

export const Image = ({ title, url, isNew }) => {
  const { handleOpenNew } = useModals();
  const classes = useStyles();

  return (
    <Box className={classes.imageContainer}>
      <Typography className={classes.imageTitle}>{title}</Typography>
      <Box
        className={classes[url]}
        onClick={isNew ? handleOpenNew : null}
      ></Box>
    </Box>
  );
};
