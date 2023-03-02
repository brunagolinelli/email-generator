import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import { Content } from "./style";
import TextField from "@mui/material/TextField";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export function Generator({ email, expiresAt, onRefresh }) {
  const copy = () => {
    const value = document.getElementById("emailValue").value;
    navigator.clipboard
      .writeText(value)
      .then(() => {
        alert("Email: " + value + " copiado com sucesso");
      })
      .catch(() => {
        alert("Erro ao copiar");
      });
  };

  return (
    <Content>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} gutterBottom>
          Temporary email address
        </Typography>
        <TextField
          id="emailValue"
          variant="outlined"
          value={email}
          InputProps={{
            readOnly: true,
          }}
        />
        <Button>
          <ContentCopyIcon onClick={copy} />
        </Button>
        <Typography variant="body2">
          <br />
          {`Auto Refresh in: ${expiresAt}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onRefresh()}>
          {" "}
          Refresh
          <ReplayRoundedIcon />
        </Button>
      </CardActions>
    </Content>
  );
}
