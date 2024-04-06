import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <>
      <Grid container>
        <Sidebar />
        <Grid sx={{ backgroundColor: "blue", height: "100vh" }} xs={8} >
        <MainContent />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
