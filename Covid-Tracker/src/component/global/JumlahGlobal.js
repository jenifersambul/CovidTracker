import React, {useEffect, useState } from 'react';
import axios from "axios"
import NumberFormat from "react-number-format";

const JumlahGlobal = () => {
  const [jumlahKasus, setJumlahKasus] = useState("");
  const [sembuh, setSembuh] = useState("");
  const [meninggal, setMeninggal] = useState("");
  useEffect(() => {
    axios 
     .get("https://covid19.mathdro.id/api")
     .then((response) => { 
     setJumlahKasus(response.data.confirmed.value);
     setSembuh(response.data.recovered.value);
     setMeninggal(response.data.deaths.value);
    })  
 }, []);
 return(
    <>
        <tr>
            <th>
                <h3 className="one">
                    <p>Positif</p>
                    <NumberFormat value={jumlahKasus} thousandSeparator={true} displayType={'text'}/>
                </h3>
            </th>
            <th>
                <h3 className="two">
                    <p>Sembuh</p>
                    <NumberFormat value={sembuh} thousandSeparator={true} displayType={'text'}/>
                </h3>
            </th>
            <th>
                <h3 className="three">
                    <p>Meninggal</p>
                    <NumberFormat value={meninggal} thousandSeparator={true} displayType={'text'}/>
                </h3>
            </th>
        </tr>
    </>
); 
};

export default JumlahGlobal;