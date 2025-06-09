"use client"

import { get } from "http"
import { Button } from "./ui/button"
import { getAurinkoAuthUrl } from "@/lib/aurinko"

export default function LinkAccountButton() {
    return(
        <Button onClick={ async ()=>{
            const authUrl = await getAurinkoAuthUrl('Google');
            console.log("Auth URL:", authUrl);
        }}>
            Link Account
        </Button>
    )
}