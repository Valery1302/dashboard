import { Grid } from '@mui/material';
import HeaderUI from "./components/HeaderUI.tsx";
import AlertUI from './components/AlertUI.tsx';
import SelectorUI from './components/SelectorUI.tsx';

function App() {
  return (
    <Grid container spacing={5} justifyContent="right" alignItems="center">

      {/* Encabezado */}
      <Grid size={12}><HeaderUI/></Grid>

      {/* Alertas */}
      <Grid size={12}><AlertUI description="No se preveen lluvias"/></Grid>
      

      {/* Selector */}
      <Grid size={{ xs: 12, md: 3 }}><SelectorUI/></Grid>

      {/* Indicadores */}
      <Grid size={{ xs: 12, md: 9 }}>Elemento: Indicadores</Grid>

      {/* Gráfico */}
      <Grid size={{xs: 12, md: 6}} sx={{ display: { xs: "none", md: "block"} }} >Elemento: Gráfico</Grid>

      {/* Tabla */}
       <Grid 
            size= {{xs: 12, md: 6}}sx={{ display: { xs: "none", md: "block" } }}>
            Elemento: Tabla
         </Grid>

      {/* Información adicional */}
      <Grid>Elemento: Información adicional</Grid>

    </Grid>
  );
}

export default App;