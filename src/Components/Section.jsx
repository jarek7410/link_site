import {Button, Collapse, Row, Container} from "reactstrap";
import React, {useState} from "react";
import "./Section.css"


export const Section=({title,children,open=false})=>{
    const [isOpen, setIsOpen] = useState(open);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <Container className="my-2">
            <Row>
                    <Button color="dark"  onClick={toggle}>
                        {title}
                    </Button>
            </Row>
            <Row>
                <Collapse isOpen={isOpen}>
                    {children}
                </Collapse>
            </Row>
        </Container>

    )
}