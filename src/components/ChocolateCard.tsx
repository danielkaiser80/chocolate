import { Card, CardContent, Typography } from "@mui/material";

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
const ChocolateCard = ({ name, brand, priceInfo }: ChocolateCardProps) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body1">{brand}</Typography>

      {priceInfo && (
        <>
          <Typography variant="body2">
            Price: {priceInfo.cheapestPricePer100g} EUR per 100g
          </Typography>
          <a href={priceInfo.cheapestShopLink}>Buy Now</a>
          <Typography variant="body2">
            Average Price for all stores: {priceInfo.averagePricePer100g} EUR
            per 100g
          </Typography>
        </>
      )}
    </CardContent>
  </Card>
);

export default ChocolateCard;
