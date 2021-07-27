import { Button } from '@material-ui/core'
import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
export default function Contact() {
    return (
        <div className="contact" id="contact">
            <Button variant="outlined" startIcon={<EmailIcon />} href="mailto:Eman.Eid.Alatawi@gmail.com" >Contact Me</Button>
        </div>
    )
}
