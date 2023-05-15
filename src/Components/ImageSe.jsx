import React from "react"
import {Card, CardBody, CardTitle} from "reactstrap";

export const ImageSe = ({title="",src})=>{
    return (
    (title==="")?
        <Card>
            <img src={src} alt={title}/>
        </Card>
    :
        <Card>
            <CardBody>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardBody>
            <img src={src} alt={title}/>
        </Card>
    );
}