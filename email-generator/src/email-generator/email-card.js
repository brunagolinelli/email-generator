import React, { useEffect, useRef } from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { Content} from "./style";
import TextField from '@mui/material/TextField'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { main } from "../urls/url";


export function Generator ({data}){
  
  console.log("Email temporario criado!!!", data);

  //  let tempMailObject = useRef({}); 
  
  // useEffect (()=>{
  //  main(data.introduceSession.addresses[0].address)
  //  tempMailObject.current = data.introduceSession
  // })
  
 
  // main().catch((error) => console.error(error))

    return (
            <Content>
            <CardContent>
              <Typography sx={{ fontSize: 16 }}  gutterBottom>
                Temporary emial address
              </Typography>
              <TextField id="outlined-basic" variant="outlined" InputProps={{
            readOnly: true,}} />
            <Button>
              <ContentCopyIcon/>
              </Button>
              <Typography variant="body2">
                <br />
                {'Auto Refresh in'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"> Refresh
                <ReplayRoundedIcon/>
              </Button>
            </CardActions>
            </Content>
    )
}