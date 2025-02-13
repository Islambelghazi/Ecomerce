import {
  Box,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WatchIcon from "@mui/icons-material/Watch";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DoNotStepIcon from "@mui/icons-material/DoNotStep";
import { Close,  } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// @ts-ignore
import Links from "./links";



const Header3 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };




  
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt:5
      }}
    >
      <Box>
        <Button
          //className="border"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ width: 222 }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: 0,
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ ".MuiPaper-root": { width: 210 } }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <WatchIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>watch</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <CheckroomIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>clothes</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DoNotStepIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>shoes</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      {useMediaQuery('(min-width:1200px)') && (
       <Stack gap={10} direction={"row"} alignItems={"center"}>
         <Links title={"home"}/>
         <Links title={"pages"}/>
         <Links title={"User"}/>
         <Links title={"vendor"}/>
       </Stack >
      )
}
    
     
      {useMediaQuery('(max-width:1200px)') && ( <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>  )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-k1yagv-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{ width: 444, mx: "auto", mt: 6, position: "relative", pt: 10 }}
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "10000deg", transition: "7s" },
              position: "absolute",
              top: 0,
              right: "20px",
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {[
            { mainLink: "home", subLink: ["product", "order","profile"] },
            { mainLink: "pages", subLink: ["link1", "link2"] },
            { mainLink: "contact", subLink: ["link1", "link2"] },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Header3;
