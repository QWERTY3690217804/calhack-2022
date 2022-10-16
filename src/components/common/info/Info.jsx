import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './Info.css'

function Info() {
    return (
        <Form className="info">
            <Form.Group>
                <img className="shopping-cart" src="https://cdn.discordapp.com/attachments/1031065709679222886/1031197169698488331/carbon_shopping-cart.png"></img>
                <Form.Label className="info-title">Upload grocery receipts</Form.Label>
            </Form.Group>
            <Form.Group>
                <img className="coin" src="https://cdn.discordapp.com/attachments/1031065709679222886/1031197166598889573/bx_coin.png"></img>
                <Form.Label className="info-text">Earn [crypto] for each nutritional benchmark your weekly grocery haul meets</Form.Label>
            </Form.Group>
        </Form>
    );
}

export default Info;