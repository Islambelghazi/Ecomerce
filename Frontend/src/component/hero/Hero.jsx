// @ts-nocheck

import { ArrowForward,} from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography, } from "@mui/material";
import { Navigation } from 'swiper/modules';

import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import './slider.css';

    
const mySlider = [
  { text: "MEN", link: "src/images/slider1.jpg" },
  { text: "WOMEN", link: "src/images/slider2.jpg" },
];
const Hero = () => {
    return (
       <Container sx={{
        mt:2.5,
        display:"flex",
        alignItems:"center",
        gap:1,
       }}>
         

         <Swiper navigation={true} modules={[Navigation]} className="mySwiper" loop={true}>
{mySlider.map((item)=> {
return(
<SwiperSlide key={item.link} className="img-slider"> 
          <img src={item.link} alt="" />
       <Box   className="box-slider"
         position={"absolute"} 
         left={"10%"}
          textAlign={"left"}
        >
       <Typography
                    sx={{
                      color: "#000",
                    }}
                    variant="h5"
                  >
                    LIFESTYLE COLLECTION
                  </Typography>

                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 500,
                      my: 1,
                    }}
                    variant="h3"
                  >
                    {item.text}
                  </Typography>
                  <Stack
                   
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color={"#000"} mr={1} variant="h4">
                      SALE UP TO
                    </Typography>
                    <Typography color={"red"} variant="h4">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 300,
                      my: 1,
                    }}
                    variant="body1"
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>

                  <Button 
                   onClick={() => {
                    const section = document.getElementById("main-section");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#000",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    shop now
                  </Button>

       </Box>
        </SwiperSlide>

)
})}


        



        
      
      </Swiper>

         

         <Box sx={{display:{xs:"none",md:"block",minWidth:"31.8%"}}}>
           <Box position={"relative"}>
            <img width={"100%"} src=".\src\images\pexels-kaip-996329.jpg" alt="" />
            <Stack  sx={{
                position:"absolute",
                top:"20%",
                transform:"translate(-50%)",
                left:100
            }} >
            
                <Typography
                    variant="caption"
                    sx={{
                      color: "#000",
                      fontSize: "18px",
                      WebkitTextStroke:"2px #fff"

                    }}
                  >
                    NEW ARRIVALS
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#000",
                      lineHeight: "16px",
                      mt: 1,
                      WebkitTextStroke:"2px #fff"

                    }}
                  >
                    SUMMER
                  </Typography>
                  <Typography
                variant="h6"
                sx={{
                  color: "#000",
                  WebkitTextStroke:"2px #fff",
                  mt: 1,
                }}
              >
                SALE 20% OFF
              </Typography>
              <Link
               onClick={() => {
                const section = document.getElementById("main-section");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
                sx={{
                  ml:3,
                  mt: 1,
                  color: "red",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  WebkitTextStroke:"2px red",


                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "20px" }} />
              </Link>

            </Stack >
           </Box>
           <Box  position={"relative"}>
            <img width={"100%"} src=".\src\images\shoes.jpg" alt="" />

            <Stack  sx={{
                position:"absolute",
                top:"20%",
                transform:"translate(-50%)",
                left:100
            }} >
            
                <Typography
                    variant="caption"
                    sx={{
                      color: "#fff",
                      fontSize: "18px",
                      WebkitTextStroke:"2px #000"

                    }}
                  >
                    NEW ARRIVALS
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                      lineHeight: "16px",
                      mt: 1,
                      WebkitTextStroke:"2px #000"

                    }}
                  >
                    SUMMER
                  </Typography>
                  <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  WebkitTextStroke:"2px #000",
                  mt: 1,
                }}
              >
                SALE 20% OFF
              </Typography>
              <Link
               onClick={() => {
                const section = document.getElementById("main-section");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
                sx={{
                  ml:3,
                  mt: 1,
                  color: "red",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  WebkitTextStroke:"2px red",


                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "20px" }} />
              </Link>

            </Stack >
                
           </Box>
         </Box>
        
       </Container>
       

       
    );
}

export default Hero;
