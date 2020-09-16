import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../layout/layout.css';
import {Card,Button} from 'react-bootstrap';
import logo from '../res/logo.svg';
import chat_icon from '../res/chat-icon.svg';
import question from '../res/question.svg';
import bullet from '../res/bullet.svg';

function Newcard() {
  return (
    <div className="allfont">
            <Card className="backgroundcard">
                    <div className="logo">
                      <img src={logo} className="logo-img" alt="logo" />
                    </div>
                <Card.Title className="secondcardlow" >
                    Frequently Asked Questions <img src={question} className="question" alt="logo" />
                </Card.Title>
                <Card body className="secondcard1"><img src={bullet} className="bullet" alt="." />Can I redeem my FB before the original term?</Card>
                <Card body className="secondcard2"><img src={bullet} className="bullet" alt="." /> How do I pay my Credit card bill?</Card>
                <Card body className="secondcard3"><img src={bullet} className="bullet" alt="." />How can I get my Account Statement?</Card>
                <Card body className="secondcard4"><img src={bullet} className="bullet" alt="." />What is the tenure of Fixed Deposit?</Card>
                <Card body className="secondcard5"><img src={chat_icon} className="chaticon"  alt="chat" />Start a New Conversation</Card>
            </Card>

    </div>
  )
}

export default Newcard
