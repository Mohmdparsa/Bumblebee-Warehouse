import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <>
      <Grid container>
        <Sidebar />
        <Grid sx={{ backgroundColor: "secondary.main", height: "100vh" ,  overflowY: "auto",}} xs={7} md={8} lg={9}>
        <MainContent/>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
