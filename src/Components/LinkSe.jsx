import React from "react"
import {Card, CardBody, CardText, CardTitle} from "reactstrap";
import styles from"./LinkSe.module.css"
import cardStyle from "./Card.module.css"


export const LinkSe =({title, herf, children})=>{
    return(

        <a href={herf} className={styles.a}>
      <Card className={cardStyle.card_hover}>
          <CardBody>
              <CardTitle >
                  {title}
              </CardTitle>
              <CardText>
                  {children}
              </CardText>
          </CardBody>
      </Card>
         </a>
    );
}