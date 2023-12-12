import React, {useState,useEffect} from 'react'
import Card from "../Cards/Cards"
import styles from "./getApiData.css"
import ReactMapGL, {Marker} from "react-map-gl";
import mapboxgl from "mapbox-gl";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Data = () => {


    const[viewport,setViewport] = useState({
        longitude: 78.0792,
        latitude: 27.8913,
        width: "92vw",
        height: "92vh",
        zoom: 5,

    })

    var conf = 0;
    var rec =0;
    var dec =0;


    const states = [{state:"AP",lng:15.91,lat:79.74},
        {state:"AR",lng:28.21,lat:94.72},
        {state:"AS",lng:26.20,lat:92.93},
        {state:"BR",lng:25.09,lat:85.31},
        {state:"CG",lng:21.27,lat:81.86},
        {state:"GA",lng:15.29,lat:74.12},
        {state:"GJ",lng:22.25,lat:71.19},
        {state:"HR",lng:29.05,lat:76.08},
        {state:"HP",lng:31.10,lat:77.17},
        {state:"JK",lng:33.77 ,lat:76.57},
        {state:"JH",lng:23.61,lat:85.27},
        {state:"KA",lng:15.31,lat:75.71},
        {state:"KL",lng:10.85,lat:76.27},
        {state:"MP",lng:22.97,lat:78.65},
        {state:"MH",lng:19.75,lat:75.71},
        {state:"MN",lng:24.66,lat:93.90},
        {state:"ML",lng:25.46,lat:91.36},
        {state:"MZ",lng:23.16,lat:92.93},
        {state:"NL",lng:26.15,lat:94.56},
        {state:"OR",lng:20.95,lat:85.09},
        {state:"PB",lng:31.14,lat:75.34},
        {state:"RJ",lng:27.02,lat:74.21},
        {state:"SK",lng:27.53,lat:88.51},
        {state:"TN",lng:11.12,lat:78.65},
        {state:"TR",lng:23.94,lat:91.98},
        {state:"UT",lng:30.06,lat:79.01},
        {state:"UP",lng:26.84,lat:80.94},
        {state:"WB",lng:22.98,lat:87.85}]


    const [data, setData] = useState([])

    const getData = async () =>{
       const res = await fetch('https://data.covid19india.org/v4/min/data.min.json')
        const newdata = await res.json()
        console.log(newdata)
        setData(newdata)
    }

    useEffect(() => {
        getData();
    }, []);

    return (

        <div className="container">

        {

            Object.entries(data).map(item => {

                conf = conf + parseInt(item["1"]["total"]["confirmed"])
                rec = rec + parseInt(item["1"]["total"]["recovered"])
                dec = dec + parseInt(item["1"]["total"]["deceased"])
            })

        }



         <Card
         conf ={conf/2}
         rec = {rec/2}
         dec = {dec/2}
        />

        <div className = "themap">

             <ReactMapGL 
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiaWFtZWthZ3JhIiwiYSI6ImNrcXhjczljcDB3d2ozMXFweGhkZXdzOGUifQ.Bg1hRtu-lGoR6O79m8wJow"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
                 >     

               {

            Object.entries(data).map(item => {


                    const latm = states.find(x => x.state === item["0"])?.lat;
                    const lngm = states.find(x => x.state === item["0"])?.lng;

        
            if(latm!==undefined && lngm!==undefined){



    return (


<Marker latitude={lngm} longitude={latm}>
       <div className="state"
       >{item["1"]["total"]["confirmed"]} total
       </div>
     </Marker>

)

}

})

}

        </ReactMapGL> 
</div>
   

        </div>


    )
 

}

export default Data
