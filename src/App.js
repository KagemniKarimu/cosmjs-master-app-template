import React, { useEffect, useState } from "react";
import { StargateClient } from "@cosmjs/stargate";
import WalletAddressForm from './components/WalletInput.js'
import TxHashForm from "./components/TxInput.js";

const App = () =>{
    const [client, setClient] = useState();
    const [balances, setBalances] = useState([]);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        connectStargate();
      }, []);


    const connectStargate = async () => {
        try {
            const stargateClient = await StargateClient.connect(
              'https://g.w.lavanet.xyz:443/gateway/cos5t/rpc-http/a43dd98c9ea68afa4f167969f48770bb'
            );
            setClient(stargateClient);
            console.log("CosmJS Stargate Connected @",await stargateClient.getChainId());
          } catch (error) {
            console.error('Error connecting to Stargate:', error);
          }
      };

      const handleGetBalance = async (address) => {
        if (client) {
          try {
            const balances = await client.getAllBalances(address);
            setBalances(balances);
          } catch (error) {
            console.error("Error retrieving balances:", error);
          }
        } else {
          console.log("Stargate client is not available");
        }
      };

      const handleGetTx = async (hash) => {
        if (client) {
          try {
            const tx = await client.getTx(hash);
            setTransactions([tx]);
          } catch (error) {
            console.error("Error retrieving transaction:", error);
          }
        } else {
          console.log("Stargate client is not available");
        }
      };

    return (
      <center>
      <div>
      <h1>The Beginning of a Masterful App!</h1>
      <WalletAddressForm onGetBalance={handleGetBalance} />
      <br />
      <TxHashForm onGetTx={handleGetTx} />
      <div>
        <h2>Balances:</h2>
        <ul>
          {balances.map((balance, index) => (
            <li key={index}>
              {balance.amount} {balance.denom}
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div>
        <h2>Transactions:</h2>
        <ul>
          {transactions.map((tx, index) => (
            <li key={index}>{JSON.stringify(tx)}</li>
          ))}
        </ul>
      </div>
    </div>
    </center>
  );
};


export default App
