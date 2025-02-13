/* eslint-disable react/prop-types */
 
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

const ProductDetails = ({ clickedProduct }) => {
    console.log(clickedProduct?.productImg?.data);

  const [selectedImg, setselectedImg] = useState(0);

  const productImages = clickedProduct?.productImg?.data || [];

  return (
    
    <Box

      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
     
      <Box sx={{ display: "flex" }}>
        {productImages.length > 0 && (
          <img
            width={360}
            // @ts-ignore
            src= {clickedProduct?.productImg[selectedImg]}
            alt="Product"
          />
        )}
      </Box>

      <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">{clickedProduct?.productTitle}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${clickedProduct?.productPrice}
        </Typography>
        <Typography variant="body1">
          {clickedProduct?.productDescription}
        </Typography>

        {/* عرض الصور المصغرة لاختيار صورة المنتج */}
        {productImages.length > 0 && (
          <Stack
            sx={{ justifyContent: { xs: "center", sm: "left" } }}
            direction={"row"}
            gap={1}
            my={2}
          >
            <ToggleButtonGroup
              value={selectedImg}
              exclusive
              sx={{
                ".Mui-selected": {
                  border: "1px solid royalblue !important",
                  borderRadius: "5px !important",
                  opacity: "1",
                  backgroundColor: "initial",
                },
              }}
            >
              {productImages.map((item, index) => (
                <ToggleButton
                  key={item.id}
                  value={index}
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p: "0",
                    opacity: "0.5",
                  }}
                  onClick={() => setselectedImg(index)}
                >
                  <img
                    style={{ borderRadius: 3 }}
                    height={"100%"}
                    width={"100%"}
                    // @ts-ignore
                    src="{$item.url}"
                    alt={`Product ${index + 1}`}
                  />
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Stack>
        )}

        {/* زر الشراء */}
        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
