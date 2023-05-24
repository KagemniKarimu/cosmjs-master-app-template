import React, { useEffect } from "react";
import { StargateClient } from "@cosmjs/stargate";

const App = () =>{
    useEffect(() => {
        connectStargate();
      }, []);


    const connectStargate = async () => {
        const client = await StargateClient.connect(
          "https://g.w.lavanet.xyz:443/gateway/cos5t/rpc-http/a43dd98c9ea68afa4f167969f48770bb"
        );
        console.log(await client.getChainId());
      };

    return (
        <h1> 
            <center>The Beginning of a Masterful dApp!</center>
        </h1>
    )
}


export default App
