import React from "react";
import {Container} from "reactstrap";
export const Sections=({children})=>{
    return(
        <Container className="bg-light border" fluid>
            {children}
        </Container>
    )
}