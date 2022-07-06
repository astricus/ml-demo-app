import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header({
  isSignedIn,
  onSignOut,
  children,
}: {
  isSignedIn: any;
  onSignOut: any;
  children: any;
}) {

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            ML-Demo-App
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            onClick={onClick}
            style={{ marginLeft: 'auto' }}
          >
            {isSignedIn ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </React.Fragment>
  );
}
