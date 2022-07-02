import React from "react";
import { motion } from "framer-motion";
import { Grid, Typography } from "@mui/material";
import MurakamiFlower from "../components/MurakamiFlower";
import Petal from "../components/MurakamiFlower/Petal";



export default function App() {
  return (
    <Grid container sx={{ minHeight: '100vh', minWidth: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <MurakamiFlower />
      </Grid>
    </Grid >
  );
}
