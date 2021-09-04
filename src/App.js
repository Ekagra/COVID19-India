import React from "react";

import styles from "./App.module.css";
import image from "../src/images/cnb.png";
import mask from "../src/images/mask.png";
import vaccine from "../src/images/vaccine.png";
import sd from "../src/images/distance.png";
import { Typography, Link } from "@material-ui/core";
import Apidata from "../src/getApi/getApiData"

class App extends React.Component {


  render() {


    return (
      <div className={styles.container}>

<div className={styles.box}>
      
        <img src={image} className={styles.image} alt="COVID-19" />

        <Typography style={{ marginTop: "20px" ,color:"#081b33" , fontSize:"18px", textAlign:"center"  }}>

        This is a COVID-19 dashboard containing information about COVID and its spread across various states in India

        </Typography>

        <Typography style={{ marginTop: "10px" ,color:"#081b33" , fontSize:"18px", textAlign:"center" }}>
        
        Made by{" "}
        <Link
        herf ="https://www.github.com/Ekagra/"
        className={styles.lnk}
            target="_blank"
            style={{ color: "#228B22" }}
        >Ekagra</Link>
        
        </Typography>

        <Typography style={{ marginTop: "50px" ,color:"#081b33" , fontSize:"25px", fontWeight:"700", marginLeft:"50px", style:"bold" }} className={styles.text}>
      
      What is COVID?
        
        </Typography>

        <Typography style={{ marginTop: "5px" ,color:"#808080" , fontSize:"18px", marginLeft:"50px" }}>
        COVID-19 is the disease caused by a new coronavirus called SARS-CoV-2.  WHO first learned of this new virus on 31 December 2019, following a report of a cluster of cases of ‘viral pneumonia’ in Wuhan, People’s Republic of China.
        Among those who develop symptoms, most (about 80%) recover from the disease without needing hospital treatment. About 15% become seriously ill and require oxygen and 5% become critically ill and need intensive care.
Complications leading to death may include respiratory failure, acute respiratory distress syndrome (ARDS), sepsis and septic shock, thromboembolism, and/or multiorgan failure, including injury of the heart, liver or kidneys.
In rare situations, children can develop a severe inflammatory syndrome a few weeks after infection. 
        
        </Typography>
        
        <Typography style={{ marginTop: "50px" ,color:"#081b33" , fontSize:"25px", fontWeight:"700", marginLeft:"50px", style:"bold" }} className={styles.text}>
      
      How to safeguard yourself?
        
        </Typography>


        <Typography style={{ marginTop: "5px" ,color:"#808080" , fontSize:"18px", marginLeft:"50px" }} >

        <img src={mask} style={{ width:"30px" , height:"30px", paddingRight:"10px" }} />
        WEAR A MASK: If you are not fully vaccinated and aged 2 or older, you should wear a mask in indoor public places.
        
        </Typography>

        <Typography style={{ marginTop: "10PX" ,color:"#808080" , fontSize:"18px", marginLeft:"50px" }} >

<img src={sd} style={{ width:"30px" , height:"30px", paddingRight:"10px" }} />
STAY SIX FEET AWAY: Avoid close contact with people who are sick.

</Typography>


<Typography style={{ marginTop: "10PX" ,color:"#808080" , fontSize:"18px", marginLeft:"50px" }} >

<img src={vaccine} style={{ width:"30px" , height:"30px", paddingRight:"10px" , verticalAlign:"center" }} />
GET VACCINATED: Authorized COVID-19 vaccines can help protect you from COVID-19.

</Typography>

</div>
        <Apidata/>

   
      </div>
    );
  }
}

export default App;
