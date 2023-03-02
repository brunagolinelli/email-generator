import React, { useEffect, useRef, useState } from "react";
import { Generator } from "./email-generator/email-card";
import { Container } from "@mui/material";
import InboxArea from "./inBox/inbox";
import { createEmailSession, checkEmails } from "../src/urls/url";

function App() {
  const [sessionId, setSessionId] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [tempMail, setTempMail] = useState("");
  const [emails, setEmails] = useState([]);

  const intervalRef = useRef();

  const fetchEmail = () => {
    createEmailSession().then((data) => {
      setEmails([]);
      setSessionId(data.introduceSession.id);
      setTempMail(data.introduceSession.addresses[0].address);
      setExpiresAt(data.introduceSession.expiresAt);
    });
  };

  useEffect(() => {
    fetchEmail();
  }, []);

  useEffect(() => {
    if (sessionId) {
      intervalRef.current = setInterval(async () => {
        const emails = await checkEmails(sessionId);
        setEmails(emails.session.mails);
      }, 10000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [sessionId]);

  return (
    <Container fixed>
      <Generator
        email={tempMail}
        expiresAt={expiresAt}
        onRefresh={fetchEmail}
      />
      <InboxArea emails={emails} />
    </Container>
  );
}

export default App;
