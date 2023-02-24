import React from "react";
import { Generator } from "./email-generator/email-card";
import { Container } from "@mui/material";
import InboxArea from "./inBox/inbox";

function App() {
  return (
    <Container fixed>
     <Generator></Generator>
     <InboxArea></InboxArea>
    </Container>
  );
}

export default App;
