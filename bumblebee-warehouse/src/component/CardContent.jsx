
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Card,
  CardContent,
  Typography
} from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteStoreData } from "../feature/ProductSlice";

const CardsContent = ({ filteredProducts }) => {
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteStoreData(index));
  };
  return (
    <>
    <Grid container sx={{display:"flex" , overflowY:"auto"}}>
      {filteredProducts?.map((data, index) => (
        <Grid item key={index} sm={8} md={6} >
          <Card
            sx={{
              height: "300px",
              marginTop: "35px",
              marginLeft: "30px",
              marginRight: "15px",
              marginBottom: "20px",
              backgroundColor: "secondary.main",
              minWidth:"240px"
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  <span style={{ color: "red" }}>Name:</span>
                  {data.name}
                </Typography>
                <Typography gutterBottom component="div">
                  <span style={{ color: "red" }}>Model:</span> {data.model}
                </Typography>
                <Typography gutterBottom component="div">
                  <span style={{ color: "red" }}>price:</span> {data.price}$
                </Typography>
                <Typography gutterBottom color="text.secondary">
                  <span style={{ color: "red" }}>Description:</span>{" "}
                  {data.description}
                </Typography>
                <Typography gutterBottom component="div">
                  <span style={{ color: "red" }}>Entrance date:</span>
                  {data.day} / {data.month}/ {data.year}
                </Typography>
                <Typography>
                  <span style={{ color: "red" }}>number of product : </span>
                  {data.count}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                style={{ marginLeft: "auto" , color:"white" }}
                variant="contained"
                sx={{ backgroundColor: "primary.main" }}
                onClick={() => handleDelete(index)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
      </Grid>
    </>
  );
};

export default CardsContent;
