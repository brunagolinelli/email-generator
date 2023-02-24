import React from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { Content} from "./style";
import TextField from '@mui/material/TextField'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export function Generator (){

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