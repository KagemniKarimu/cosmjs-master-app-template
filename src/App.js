import React, { useEffect, useState } from "react";
import { StargateClient } from "@cosmjs/stargate";
import WalletAddressForm from './components/WalletInput.js'
import TxHashForm from "./components/TxInput.js";

const App = () =>{
    const [client, setClient] = useState();

    useEffect(() => {
        connectStargate();
      }, []);


    const connectStargate = async () => {
        try {
            const stargateClient = await StargateClient.connect(
              'https://g.w.lavanet.xyz:443/gateway/cos5t/rpc-http/a43dd98c9ea68afa4f167969f48770bb'
            );
            setClient(await stargateClient);
            console.log("CosmJS Stargate Connected @",await stargateClient.getChainId());
          } catch (error) {
            console.error('Error connecting to Stargate:', error);
          }
      };

    return (
        <h1> 
            <center>The Beginning of a Masterful dApp!
            <br />
            <br />
            <WalletAddressForm />
            <br />
            <TxHashForm />
            </center>
        </h1>
    )
}


export default App
