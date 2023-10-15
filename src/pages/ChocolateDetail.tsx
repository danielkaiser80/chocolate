import { Box, Card, CardContent, Typography } from "@mui/material";
import { findChocolate } from "../backend/chocolate.service.ts";
import Header from "../components/Header.tsx";
import { Link } from "wouter";

interface ChocolateDetailProps {
  id: string;
}

const ChocolateDetail = ({ id }: ChocolateDetailProps) => {
  const chocolate = findChocolate(id);
  if (!chocolate) {
    return <Card>Schokolade mit ID {id} wurde nicht gefunden.</Card>;
  }
  const { name, brand, prices } = chocolate;

  return (
    <>
      <Header title={`Details: 🍫${name}`} />
      <Card>
        <CardContent>
          <Box mb={2}>
            <Typography variant="body1">Hersteller: {brand}</Typography>
          </Box>

          {prices.length > 0 ? (
            <Box mb={2}>
              <Typography variant="body2">TO DO</Typography>
            </Box>
          ) : (
            <Box>
              <Typography variant="body2">
                Derzeit nicht verfügbar 😭
              </Typography>
            </Box>
          )}

          <hr />

          <Link href="/">Zurück zur Übersicht</Link>
        </CardContent>
      </Card>
    </>
  );
};

export default ChocolateDetail;
