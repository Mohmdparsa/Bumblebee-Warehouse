import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { useSelector , useDispatch} from "react-redux";
import { deleteStoreData } from "../feature/ProductSlice";

const MainContent = () => {
  const dispatch = useDispatch()
  const ProductData = useSelector((state) => state.product.data);
  const handleDelete = (index)=>{
    dispatch(deleteStoreData(index))
  }
  return (
    <div>
      {ProductData.map((data, index) => (
        <Grid item key={index} sm={11} md={12}>
          <Card
            sx={{
              height: "45vh",
              marginTop: "35px",
              marginLeft: "44px",
              marginRight: "15px",
              marginBottom: "30px",
              backgroundColor: "primary.main",
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
                <Typography>{data.Rating}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                style={{ marginRight: "auto" }}
                variant="contained"
                sx={{ backgroundColor: "primary.dark" }}
              >
                Edit
              </Button>
              <Button
                size="small"
                color="primary"
                style={{ marginLeft: "auto" }}
                variant="contained"
                sx={{ backgroundColor: "primary.dark" }}
                onClick={()=> handleDelete(index)}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </div>
  );
};

export default MainContent;
