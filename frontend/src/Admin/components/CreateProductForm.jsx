import { useState } from "react";
import { FormControl, Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../State/Product/Action";
// import { createProduct } from "../../Redux/customers/State/Product/Action";

const initialSizes = [
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
];

const CreateProductForm = () =>{

  const [productData , setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    topLavelCategory: "",
    secondLavelCategory: "",
    thirdLavelCategory: "",
    describtion: "",
  });

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

    const handleChange = (e) =>{
      const { name , value } = e.target;
      setProductData((prevState) =>({
        ...prevState,
        [name]: value,
      }));
    };

    const handleSizeChange = (e , index) =>{
      let { name , value } = e.target;
      name === "size_quantity"?name="quantity":name=e.target.name;

      const sizes = [...productData.size];
      sizes[index][name] = value;
      setProductData( (prevState) =>({
        ...prevState,
        size:sizes,
      }));
    };

    const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch(createProduct({data:productData,jwt}))
      console.log("product data : ", productData);
    };

    return (
      <div className="p-10">

        <Typography
          variant="h3"
          sx={{textAlign:"center"}}
          className="py-10 text-center"
        >
          Add New Product
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="createProductContainer min-h-screen"
        >

          <Grid container spacing={2}>


            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name="imageUrl"
                value={productData.imageUrl}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Brand"
                name="brand"
                value={productData.brand}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={productData.title}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Color"
                name="color"
                value={productData.color}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Quantity"
                name="quantity"
                value={productData.quantity}
                onChange={handleChange}
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                value={productData.price}
                onChange={handleChange}
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Discounted Price"
                name="discountedPrice"
                value={productData.discountedPrice}
                onChange={handleChange}
                type="number"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Discount Percentage"
                name="discountPersent"
                value={productData.discountPersent}
                onChange={handleChange}
                type="number"
              />
            </Grid>

            <Grid item xs={6} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Top Level Category</InputLabel>
                <Select
                  name="topLavelCategory"
                  value={productData.topLavelCategory}
                  onChange={handleChange}
                  label="Top Level Category"
                >
                  <MenuItem value="men" >Men</MenuItem>
                  <MenuItem value="women" >Women</MenuItem>
                  <MenuItem value="kids" >Kids</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Second Level Category</InputLabel>
                <Select
                  name="secondLavelCategory"
                  value={productData.secondLavelCategory}
                  onChange={handleChange}
                  label="Second Level Category"
                >
                  <MenuItem value="clothing" >Clothing</MenuItem>
                  <MenuItem value="accessories" >Accessories</MenuItem>
                  <MenuItem value="brands" >Brands</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6} sm={4}>
              <FormControl fullWidth>
                <InputLabel>Third Level Category</InputLabel>
                <Select
                  name="thirdLavelCategory"
                  value={productData.thirdLavelCategory}
                  onChange={handleChange}
                  label="Third Level Category"
                >
                  {/* <MenuItem value="top" >Tops</MenuItem> */}
                  {/* <MenuItem value="women_dress" >Dresses</MenuItem> */}
                  {/* <MenuItem value="t-shirts" >T-Shirts</MenuItem> */}
                  {/* <MenuItem value="saree" >Saree</MenuItem> */}
                  {/* <MenuItem value="lengha_choli" >Lengha Choli</MenuItem> */}
                  <MenuItem value="mens_kurta" >Mens Kurta </MenuItem>
                  <MenuItem value="womens" >Womens Kurta </MenuItem>


                  <MenuItem value="pants" >Pants</MenuItem>
                  <MenuItem value="sweaters" >Sweaters</MenuItem>
                  <MenuItem value="T-Shirts" >T-Shirts</MenuItem>
                  <MenuItem value="jackets" >Jackets</MenuItem>
                  <MenuItem value="activewear" >Activewear</MenuItem>

                  <MenuItem value="watches" >Watches</MenuItem>
                  <MenuItem value="wallets" >Wallets</MenuItem>
                  <MenuItem value="bags" >Bags</MenuItem>
                  <MenuItem value="sunglasses" >Sunglasses</MenuItem>
                  <MenuItem value="hats" >Hats</MenuItem>
                  <MenuItem value="belts" >Belts</MenuItem>

                  <MenuItem value="FullNelson" >Full Nelson</MenuItem>
                  <MenuItem value="MyWay" >My Way</MenuItem>
                  <MenuItem value="ReArranged" >Re-Arranged</MenuItem>
                  <MenuItem value="counterfeit" >Counterfeit</MenuItem>
                  <MenuItem value="SignificantOther" >Significant Other</MenuItem>

                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Description"
                multiline
                name="describtion"
                rows={3}
                onChange={handleChange}
                value={productData.describtion}
              />
            </Grid>

            {productData.size.map((size , index)=>(
              <Grid container item spacing={3}>
                <Grid item xs={12} sm={6} >
                  <TextField
                    label="Size Name"
                    name="name"
                    value={size.name}
                    onChange={(event)=>handleSizeChange(event , index)}
                    required
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="quantity"
                    name="size_quantity"
                    type="number"
                    onChange={(event) => handleSizeChange(event , index)}
                    required
                    fullWidth
                  />
                </Grid>
              </Grid>
            ))}

            <Grid item xs={12}>
              <Button
                variant="contained"
                sx={{p:1.8}}
                className="py-20"
                size="large"
                type="submit"
              >
                Add New Product
              </Button>
            </Grid>
            
          </Grid>

        </form>

      </div>
    );

};

export default CreateProductForm;