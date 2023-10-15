import { Box, Card, Typography, Link as MUILink } from "@mui/material";
import { findChocolate } from "../backend/chocolate.service.ts";
import Header from "../components/Header.tsx";
import { Link } from "wouter";
import PriceCard from "../components/PriceCard.tsx";
import { Fragment } from "react";

interface ChocolateDetailProps {
  id: string;
}

const ChocolateDetail = ({ id }: ChocolateDetailProps) => {
  const chocolate = findChocolate(id);
  if (!chocolate) {
    return <Card>Schokolade mit ID {id} wurde nicht gefunden.</Card>;
  }
  const { name, brand, prices, cheapestPricePer100g } = chocolate;

  return (
    <>
      <Header title={`Details: 🍫${name}`} />

      <Box mb={2}>
        <Typography variant="h5">Hersteller: {brand}</Typography>
      </Box>

      {prices.length > 0 ? (
        prices.map((price) => (
          <Fragment key={price.shop + price.price}>
            <PriceCard
              price={price}
              cheapestPricePer100g={cheapestPricePer100g}
            />
            <hr />
          </Fragment>
        ))
      ) : (
        <Box>
          <Typography variant="body2">Derzeit nicht verfügbar 😭</Typography>
        </Box>
      )}

      <Typography variant="body1">
        Der günstigste Preis je 100 Gramm ist rot hervorgehoben!
      </Typography>

      <Box>
        <Link href="/">
          <MUILink>Zurück zur Übersicht</MUILink>
        </Link>
      </Box>
    </>
  );
};

export default ChocolateDetail;
