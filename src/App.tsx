import "./App.css";

import { Grid } from "@mui/material";
import { getChocolatesWithInfo } from "./backend/chocolates.service.ts";
import { chocolateData } from "./backend/chocolate-data.ts";
import ChocolateCard from "./components/ChocolateCard.tsx";

const App = () => {
  const chocolates = getChocolatesWithInfo(chocolateData.data);
  return (
    <Grid container spacing={2}>
      {chocolates.map(({ brand, name, priceInfo }, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <ChocolateCard name={name} brand={brand} priceInfo={priceInfo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default App;
