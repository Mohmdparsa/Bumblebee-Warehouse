import { Grid } from "@mui/material";
import Sidebar from "../component/Sidebar";
import MainPage from "../component/MainPage";

const Home = () => {
  return (
    <>
      <Grid container>
        <Sidebar />
        <Grid
          sx={{
            backgroundColor: "secondary.dark",
            height: "100vh",
            overflowY: "auto",
          }}
          xs={7}
          md={8}
          lg={9}
        >
          <MainPage />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
