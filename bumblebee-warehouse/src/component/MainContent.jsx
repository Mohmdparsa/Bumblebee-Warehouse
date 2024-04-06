import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions} from "@mui/material";
import { useSelector } from "react-redux";

const MainContent = () => {
  const ProductData = useSelector((state) => state.product.data);
  return (
    <div>
      {ProductData.map((data, index) => (
        <Card sx={{ maxWidth: 345, height: 300, margin: 6 }} key={index}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {data.model}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.description}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {data.price}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {data.day} / {data.month}/ {data.year}
              </Typography>
              <Typography>{data.Rating}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Delete
            </Button>
            <Button
              size="small"
              color="primary"
              style={{ marginLeft: "200px" }}
            >
              Edit
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default MainContent;
