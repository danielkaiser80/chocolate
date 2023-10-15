import {
  Box,
  Card,
  CardContent,
  Link as MUILink,
  Typography,
} from "@mui/material";
import { Price } from "../backend/types.ts";
import { calculatePricePer100g } from "../backend/prices.service.ts";
import { NUMBER_FORMAT } from "./shared.ts";

interface PriceCardProps {
  price: Price;
  cheapestPricePer100g?: number;
}

const PriceCard = ({
  price: { amount, link, price, shop, unit },
  cheapestPricePer100g,
}: PriceCardProps) => {
  const highlight =
    calculatePricePer100g(unit, amount, price) === cheapestPricePer100g;
  return (
    <Card>
      <CardContent>
        <Box my={1}>
          <Typography
            variant="h5"
            sx={highlight ? { fontWeight: "bold", color: "red" } : {}}
          >
            Preis: {price.toLocaleString("de", NUMBER_FORMAT)} €
          </Typography>
          <Typography variant="body1">Anbieter: {shop}</Typography>
          <Typography variant="body1">
            Menge: {amount.toLocaleString("de")} {unit}
          </Typography>

          <MUILink href={link}>Jetzt kaufen</MUILink>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PriceCard;
