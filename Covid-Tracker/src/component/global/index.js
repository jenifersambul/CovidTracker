import React from 'react'
import JumlahGlobal from "./JumlahGlobal"
import '../../App.css'
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DataGlobal = () => {
    return(
        <div>
            <center>
            <Card border="primary" style={{
                    marginTop: '40px',
                    width: '35rem', 
                    textAlign: 'center' }}>
                <Card.Header>Jumlah Kasus Covid-19 di Seluruh Dunia</Card.Header>
                    <Card.Body>
                        <Card.Title><JumlahGlobal/></Card.Title>
                    </Card.Body>
            </Card>
            </center>
        </div>
    );
};

export default DataGlobal;