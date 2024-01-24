import { useCustomApiData } from "../hooks/useCustomApiData";
import React, { useState } from "react";

const BASE_URL = "http://localhost:4000";
const ENDPOINTS = ["posts", "frenz"];

export default function PQ() {
    const [activeData, setActiveData] = useState(ENDPOINTS[0]);

    const { data: titleData, refetch: titleRefetch } = useCustomApiData(BASE_URL, ENDPOINTS[0], {
        enabled: activeData === ENDPOINTS[0],
    });
    const { data: frenzData, refetch: frenzRefetch } = useCustomApiData(BASE_URL, ENDPOINTS[1], {
        enabled: activeData === ENDPOINTS[1],
    });

    const handleTitleButtonClick = () => {
        setActiveData(ENDPOINTS[0]);
        titleRefetch();
    };

    const handleFrenzButtonClick = () => {
        setActiveData(ENDPOINTS[1]);
        frenzRefetch();
    };

    return (
        <div>
            <div>
                {activeData === ENDPOINTS[0] &&
                    titleData?.data.map((title) => <div key={title.id}>Title: {title.title}</div>)}
                {activeData === ENDPOINTS[1] &&
                    frenzData?.data.map((frenz) => <div key={frenz.id}>Frenz: {frenz.title}</div>)}
            </div>

            <button onClick={handleTitleButtonClick}>RF Title</button>
            <button onClick={handleFrenzButtonClick}>RF Frenz</button>
        </div>
    );
}
