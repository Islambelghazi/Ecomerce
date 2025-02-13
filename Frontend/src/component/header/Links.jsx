import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const Links = ({title}) => {
  return (
    <Box
      sx={{
        ":hover .show-hover": { display: "block" },
        ":hover": { cursor:"pointer" },

        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

      <Box
        className="show-hover "
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "150px",
          transform: "translatex(-50%)",
          left: "50%",
          display: "none",
          zIndex:2,
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding sx={{
             ":hover .sub-link":{display:"block"},

              }}>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "15px",
                        fontWeight: "300",
                        position:"relative",
                      },
                    }}
                    primary="Product"
                  />
                  <Box flexGrow={1} />

                  <KeyboardArrowRightOutlined sx={{ fontSize: "15px" }} />
                </ListItemButton>
             <Box className="sub-link " display={"none"} sx={{
                position:"absolute",
                top:"0",
                left:"100%"
             }} >
                  <Paper sx={{
                    minWidth:120,
                  }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding sx={{
                            display:"flex",
                            p:0,
                            px:0,
                        }}>
                          <ListItemButton>
                            <ListItemText primary="add product" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding  sx={{
                            display:"flex",
                            p:0,
                            px:0,
                        }}>
                          <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="edit product" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
             </Box >
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": { fontSize: "15px" },
                    }}
                    primary="Order"
                  />
                </ListItemButton>
              </ListItem>{" "}
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": { fontSize: "15px" },
                    }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};

export default Links;
