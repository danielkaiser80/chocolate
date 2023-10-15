import { Typography, Box } from "@mui/material";

interface HeaderProps {
  title?: string;
}
const Header = ({ title }: HeaderProps) => {
  return (
    <Box textAlign="center" my={4}>
      <Typography variant="h3" component="h1">
        {title ?? "Übersicht: Köstliche Schokolade"}
      </Typography>
      <Typography variant="body1">
        Entdecken Sie eine Vielfalt an köstlichen Schokoladen-Tafeln von
        Spitzenmarken.
      </Typography>
      <img
        src="https://www.greenamerica.org/sites/default/files/2020-04/iStock-893183000%20-%20stacked%20chocolate%20bars.jpg"
        alt="Chocolate Bar"
        style={{ maxWidth: "200px" }}
      />
    </Box>
  );
};

export default Header;
