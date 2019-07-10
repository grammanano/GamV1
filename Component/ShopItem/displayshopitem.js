import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import 'bootstrap-css-only/css/bootstrap.min.css';
export default function Displayshopitem  (props) {
    const {productImage,productName,_id,fullPrice} = props.movie
    function changeMessage(){
        Router.push({
            pathname: '/Shop/post',
            query: {    name:productName
                    },
          }) 
    }
    return (
            <div class="col-lg-3 col-md-5 mb-3" key={productName}>
                <div class="card h-80">
                    <Link >
                        <a>
                            <img onClick={changeMessage} class="card-img-top img-for-shopcard" src={productImage } alt=""/>
                        </a>
                    </Link>
                    <div class="card-footer">
                        <h4 class="card-title" >
                                <a onClick={changeMessage}>
                                {productName }
                                </a>
                        </h4>
                        <h5>{fullPrice}</h5>
                    </div>
                </div>
            </div>
      );
}