import React from 'react';
import { motion } from "framer-motion";


function Card(props) {
    return (
        <>

            <motion.div drag className='box'>
                <div class="nft">
                    <div class='main'>
                        <img class='tokenImage' src={props.data.img} alt="NFT" />
                        <h2>{props.data.Title}</h2>
                        <p class='description'>{props.data.p}</p>
                        <div class='tokenInfo'>
                            <div class="price">
                                <ins>◘</ins>
                                <p>{props.data.Title}</p>
                            </div>
                            <div class="duration">
                                <ins>◷</ins>
                                <p>{props.data.time}</p>
                            </div>
                        </div>
                        <hr />
                        <div class='creator'>
                            <div class='wrapper'>
                                <img src={props.data.logo_img} alt="Creator" />
                            </div>
                            <p><ins>Creation of</ins> Kiberbash</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Card
