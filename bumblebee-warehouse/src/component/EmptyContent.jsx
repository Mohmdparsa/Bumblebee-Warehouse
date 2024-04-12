import {  Typography , Grid } from "@mui/material";

const EmptyContent = () => {
  return (
    <>
      <Grid
        sx={{
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          justifyItems:"center",
          width:{xs:"37vw",md:"40vw",lg:"50vw"},
          height:{xs:"38vh" , md:"30vh"},
          margin:"auto",
          marginTop:"170px"
        }}
      >
        <Typography sx={{paddingTop:"65px" , color:"primary.dark"}} variant="h4">There is no content</Typography>
      </Grid>
    </>
  );
};

export default EmptyContent;
