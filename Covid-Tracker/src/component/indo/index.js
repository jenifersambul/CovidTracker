import React from 'react'
import JumlahIndo from "./JumlahIndo"
import '../../App.css'
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DataIndo = () => {
    return (
        <div>
            <center>
            <Card border="primary" style={{
                    marginTop: '40px',
                    width: '35rem', 
                    textAlign: 'center' }}>
                <Card.Header>Jumlah kasus Covid-19 di Indonesia</Card.Header>
                    <Card.Body>
                        <Card.Title> <JumlahIndo/> </Card.Title>
                    </Card.Body>
            </Card>
            </center>
        </div>
    )
}

export default DataIndo;