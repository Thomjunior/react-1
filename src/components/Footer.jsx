import React from "react";
const date = new Date().getFullYear()

function Footer(){
    return(
       
            <footer>
                <p>
                    created by Thompson {date}
                </p>
            </footer>
        
    )
}
export default Footer;