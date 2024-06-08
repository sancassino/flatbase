import React from 'react'
import xrpl from 'xrpl'

export default function NewWallet() {
        let net = "wss://s.altnet.rippletest.net:51233";
        const client = new xrpl.Client(net);
        console.log(net)

  return (
   <>
   <h1>Hello</h1>
   </>
  )
}
