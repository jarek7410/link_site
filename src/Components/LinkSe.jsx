import React from "react"
import {Card, CardBody, CardLink, CardText, CardTitle} from "reactstrap";
import styles from"./LinkSe.module.css"


export const LinkSe =({title, herf, children})=>{
    return(

        <a href={herf} className={styles.a}>
      <Card >
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