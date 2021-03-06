import React  from 'react'
import Mensagem from "./Mensagem"
import { Grid } from 'semantic-ui-react'


const Mensagens = ({messages,user}) => {


        let keys = Object.keys(0);
        if(messages != null) {
            keys = Object.keys(messages);
        }


        return keys.map(c=>{

            return <Grid columns={2} divided='vertically'>
                     <Mensagem user={user} mensagem={messages[c]} />
                   </Grid>

        })

    }
export default Mensagens
