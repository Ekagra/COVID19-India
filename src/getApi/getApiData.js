import React, {useState,useEffect} from 'react'
import Card from "../Cards/Cards"
import ReactMapGL, {Marker} from "react-map-gl";
import styles from "./getApiData.css";

const Data = () => {

    const[viewport,setViewport] = useState({
        longitude: 78.0792,
        latitude: 27.8913,
        width: "80vw",
        height: "80vh",
        zoom: 5,
    })

    var act = 0;
    var rec =0;
    var dec =0;

    const states = [{state:"Andhra Pradesh",lng:15.91,lat:79.74},
        {state:"Arunachal Pradesh",lng:28.21,lat:94.72},
        {state:"Assam",lng:26.20,lat:92.93},
        {state:"Bihar",lng:25.09,lat:85.31},
        {state:"Chhattisgarh",lng:21.27,lat:81.86},
        {state:"Goa",lng:15.29,lat:74.12},
        {state:"Gujarat",lng:22.25,lat:71.19},
        {state:"Haryana",lng:29.05,lat:76.08},
        {state:"Himachal Pradesh",lng:31.10,lat:77.17},
        {state:"Jammu and Kashmir",lng:33.77 ,lat:76.57},
        {state:"Jharkhand",lng:23.61,lat:85.27},
        {state:"Karnataka",lng:15.31,lat:75.71},
        {state:"Kerala",lng:10.85,lat:76.27},
        {state:"Madhya Pradesh",lng:22.97,lat:78.65},
        {state:"Maharashtra",lng:19.75,lat:75.71},
        {state:"Manipur",lng:24.66,lat:93.90},
        {state:"Meghalaya",lng:25.46,lat:91.36},
        {state:"Mizoram",lng:23.16,lat:92.93},
        {state:"Nagaland",lng:26.15,lat:94.56},
        {state:"Odisha",lng:20.95,lat:85.09},
        {state:"Punjab",lng:31.14,lat:75.34},
        {state:"Rajasthan",lng:27.02,lat:74.21},
        {state:"Sikkim",lng:27.53,lat:88.51},
        {state:"Tamil Nadu",lng:11.12,lat:78.65},
        {state:"Tripura",lng:23.94,lat:91.98},
        {state:"Uttarakhand",lng:30.06,lat:79.01},
        {state:"Uttar Pradesh",lng:26.84,lat:80.94},
        {state:"West Bengal",lng:22.98,lat:87.85}]

    const [data, setData] = useState([])

    const getData = async () =>{
       const res = await fetch('https://api.covid19india.org/data.json')
        const newdata = await res.json()
        console.log(newdata)
        setData(newdata.statewise)
    }

    useEffect(() => {
        getData();
    }, []);

    return (

        <div className="container">

        {

            
            data.map((ele, ind) => {

                const latm = states.find(x => x.state === ele.state)?.lat
                const lngm = states.find(x => x.state === ele.state)?.lng

            if(ind < 1){ 
               act = act + parseInt(ele.active);
               rec = rec + parseInt(ele.recovered);
               dec = dec + parseInt(ele.deaths);
                }


            })
        }

        <Card
         active ={act}
         rec = {rec}
         dec = {dec}
        />

                        <ReactMapGL 
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoiaWFtZWthZ3JhIiwiYSI6ImNrcXhjczljcDB3d2ozMXFweGhkZXdzOGUifQ.Bg1hRtu-lGoR6O79m8wJow"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
                  >

                  {

                      
            
            data.map((ele, ind) => {

const latm = states.find(x => x.state === ele.state)?.lat;
const lngm = states.find(x => x.state === ele.state)?.lng;

if(latm!==undefined && lngm!==undefined){
    return (

<Marker latitude={lngm} longitude={latm}>
       <div className="state"
       >{ele.active} active
       </div>
     </Marker>

)
}


})

}

        </ReactMapGL>


        </div>


    )
 

}

export default Data