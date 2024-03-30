import React from 'react';
import CookieConsent from "react-cookie-consent";
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import style from "./Root.module.css";

// Default implementation, that you can customize
export default function Root({ children }) {
    return <>
        <CookieConsent
            location="bottom"
            buttonText="Approve"
            flipButtons
            enableDeclineButton
            declineButtonText="Reject"
            containerClasses={style.cContainer}
            onAccept={() => {
                //@ts-expect-error
                window.clarity('consent');
                console.log("consented");
            }}
        >
            We improve ZilaWS by using Microsoft Clarity to see how you use our website. By using our site, you agree that we and Microsoft can collect and use this data. Our <a href="/privacy-statement.pdf" target="_blank" rel="noopener noreferrer">privacy statement</a> has more details.
        </CookieConsent>
        {children}
    </>;
}