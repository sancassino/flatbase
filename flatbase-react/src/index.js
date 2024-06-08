import React from 'react';
import ReactDOM from 'react-dom/client';
import { Networks, useIsConnected, XRPLClient } from "@nice-xrpl/react-xrpl";

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <XRPLClient network={Networks.Testnet}>
    <App />
    </XRPLClient>
);
