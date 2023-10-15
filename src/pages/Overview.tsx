import { Grid } from "@mui/material";
import { getChocolatesWithInfo } from "../backend/chocolates.service.ts";
import { chocolateData } from "../backend/chocolate-data.ts";
import ChocolateCard from "../components/ChocolateCard.tsx";
import Header from "../components/Header.tsx";

const Overview = () => {
  const chocolates = getChocolatesWithInfo(chocolateData.data);
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        {chocolates.map(({ id, brand, name, priceInfo }) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
            <ChocolateCard
              name={name}
              brand={brand}
              priceInfo={priceInfo}
              id={id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Overview;
