import React from 'react'
import ListProvinsi from './ListProvinsi'
import '../../App.css'


const DataProvinsi = () => {
    return (
        <div>
            <center>
           <h3>
               Jumlah Kasus Covid-19 Per Provinsi
            </h3>
            <ListProvinsi/>
            </center>
        </div>
    )
}

export default DataProvinsi;