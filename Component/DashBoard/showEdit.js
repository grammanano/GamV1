import React, { useEffect, useState, useContext } from 'react'
import useInput from '../../hook/custom-hook.js';
import axios from 'axios';
import {  Col, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
    FormText,
    Nav, 
    NavItem, 
    NavLink,
    Container,
    Row  } 
    from 'reactstrap';

function ShowEdit (props) {

    

    const { inputs, handleInputChange } = useInput({ 
        productUPC: 'no', 
        productName: 'no', 
        productBrand: 'no', 
        productType: 'no', 
        productImage: 'no',
        productPrice:'no',
        notax:'no',
        tax:'no',
        availability:'no',
        weight:'no' });

    //const [name, setName] = useState ('no')

        /*useEffect(() => {
            setName(props.movie.productName);
        });*/

        async function Edit(){
            console.log("ID:"+props.movie._id)  
            
            await axios
            .post("/api/product/edit", {inputs})
            .then(res => {
            console.log(res)
            })
            .catch(err => {
            console.log(err);
            })
     
        }

        return (
            <div>
                
                <p>Eiei </p>       
                <p>old : {props.movie.productName}</p>

              <FormGroup row>
                <Label for="productName" sm={2}>Product Name :</Label>
                  <Col sm={10}>
                    <Input type="text" name="productName"  onChange={handleInputChange}  />
                  </Col>
              </FormGroup>

              <button onClick={Edit}>EDIT!</button>

            </div>
        )
}

export default ShowEdit;


/*<input value={props.movie.productName} onChange={handleInputChange} ></input>

{console.log(inputs)}

<p>new : {inputs}</p>*/