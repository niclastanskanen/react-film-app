import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import { useGetActorsDetailsQuery } from '../../services/TMDB.js';

const Actors = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isFetching, error } = useGetActorsDetailsQuery(id);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">
          Go back
        </Button>
      </Box>
    );
  }

  return (
    <div>
      {id}
    </div>
  );
};

export default Actors;
