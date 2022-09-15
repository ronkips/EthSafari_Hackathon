import React from 'react'
import { Web3Storage } from "web3.storage"
const ChechStatus = () => {
    async function getAccessToken () {
        return process.env.WEB3STORAGE_TOKEN;
    }
    function makeStorageClient() {
        return new Web3Storage({token: getAccessToken()})
    }
    async function ChechStatus(cid) {
        const client = makeStorageClient()
        const status = await client.status(cid)
        console.log(status) 
        if (status) {
            console.log("Shoe the status of the IPFS:");
        }
    }
    ChechStatus("bafybeiflzrqu2uwo5ux523ta42ebufunost7efl3ucexkrcfk6x2wmtum4");
  return (
    <></>
  )
}

export default ChechStatus