import { Box, Card, CardContent, Link, Typography } from "@mui/material";

interface PriceInfo {
  cheapestPricePer100g: number;
  cheapestShopLink: string;
  averagePricePer100g: number;
}
interface ChocolateCardProps {
  name: string;
  brand: string;
  priceInfo?: PriceInfo;
}

const NUMBER_FORMAT = {
  maximumFractionDigits: 2,
};
const ChocolateCard = ({ name, brand, priceInfo }: ChocolateCardProps) => (
  <Card>
    <CardContent>
      <Box mb={2}>
        <Typography variant="h5">🍫 {name}</Typography>
        <Typography variant="body1">Hersteller: {brand}</Typography>
      </Box>

      {priceInfo ? (
        <>
          <Box mb={2}>
            <Typography variant="body2">
              Günstigster Preis:{" "}
              {priceInfo.cheapestPricePer100g.toLocaleString(
                "de",
                NUMBER_FORMAT,
              )}{" "}
              € je 100g
            </Typography>
            <Link href={priceInfo.cheapestShopLink}>Jetzt kaufen</Link>
          </Box>
          <Box>
            <Typography variant="body2">
              Durchschnittspreis:{" "}
              {priceInfo.averagePricePer100g.toLocaleString(
                "de",
                NUMBER_FORMAT,
              )}{" "}
              € je 100g
            </Typography>
          </Box>
        </>
      ) : (
        <Box>
          <Typography variant="body2">Derzeit nicht verfügbar 😭</Typography>
        </Box>
      )}
    </CardContent>
  </Card>
);

export default ChocolateCard;
