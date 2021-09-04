import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import { active, recovered, death } from "../images/index";

import styles from "./Cards.module.css";

const Cards = (props) => {
  return (

    <div className={styles.container}>
        <Grid container spacing={3} justify="center">

        <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <img src={active} className={styles.smallimage} alt="active" />
              <Typography style={{marginTop:"10px",fontSize:"20px"}}>
                <CountUp
                  start={0}
                  end={props.conf}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography style={{fontSize:"25px", fontWeight:"700", paddingRight:"50px"}}>
               Confirmed Cases
              </Typography>
            </CardContent>
          </Grid>

          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <img src={recovered} className={styles.smallimage} alt="recover" />
              <Typography style={{marginTop:"10px",fontSize:"20px"}}>
                <CountUp
                  start={0}
                  end={props.rec}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography style={{fontSize:"25px", fontWeight:"700", paddingRight:"50px"}}>
               Recovered Cases
              </Typography>
            </CardContent>
          </Grid>


          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <img src={death} className={styles.smallimage} alt="dec" />
              <Typography style={{marginTop:"10px", fontSize:"20px"}}>
                <CountUp
                  start={0}
                  end={props.dec}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography style={{fontSize:"25px", fontWeight:"700", paddingRight:"50px"}}>
               Unfortunately Died
              </Typography>
            </CardContent>
          </Grid>


        </Grid>

    </div>
  );
};

export default Cards;
