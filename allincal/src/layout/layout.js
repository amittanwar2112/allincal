import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.css';
import {Card,Button} from 'react-bootstrap';
import hand from '../res/waving-hand.svg';


class Layout extends Component {
  render() {
    return (
      <div className="allfont">
        <Card className="cardbackgraound">
           
            <Card.Body>
                <Card.Title className="title" >
                    IRIS
                </Card.Title>
                <Card.Title className="title2">
                    <span>Hello</span><img src={hand} alt="logo" class="hand" />
                </Card.Title>
                <Card.Text className="title3">
                I am Iris, a Virtual Assistant How may I help you?
                </Card.Text>
            </Card.Body>
            

        </Card>
        <Card className="cardbackgraound1">

        </Card>

      </div>
    )
  }
}

export default Layout
