import {Card, CardBody, CardTitle} from "reactstrap";

export const ImageSe = ({title,src})=>{
    return (
        <Card>
            <CardBody>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardBody>
            <img src={src} alt={title}/>
        </Card>
    )
}