import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function DataCard({ title, imageURL, text }) {
  return (
    <Card>
      <Typography align='center'> {title}</Typography>
      <CardMedia component="img" height="200px" image={imageURL} sx={{ objectFit:"cover"}}/>
      <CardContent sx={{ pt: 0 }} >
        <Typography align='center'> {text}</Typography>
      </CardContent>
    </Card>
  );
}


