import React from "react";
import "../index.css";


export const ShopCards = () => {
    return (
        <div className="sm:flex sm:flex-row  sm:pl-52 sm:pr-44 sm:py-20 sm:h-180 sm:justify-between flex-wrap flex flex-col pl-9 pr-9 sm:gap-0 gap-4">

            <div className="bg-shopping-card-1 sm:w-1/2 sm:h-auto bg-no-repeat  bg-scroll  flex flex-col justify-end items-start w-full h-[35rem] sm:bg-left-top bg-center">
                <div className=" sm:w-96 h-56 bg-explore-blue opacity-85 flex flex-col justify-center pl-16 pr-36 w-full mb-2 sm:mb-6">
                    <h3 className="text-white text-2xl font-bold opacity-100">Top Product Of<br /> the Week</h3>
                    <button className="rounded-md bg-explore-blue border-2 opacity-100 border-white text-white text-sm font-bold w-44 h-14">EXPLORE ITEMS</button>

                </div>

            </div>

            <div className="sm:w-1/2 h-auto flex flex-col gap-7 w-full ">
                <div className="bg-shopping-card-2 sm:h-64 w-auto bg-no-repeat bg-center flex flex-col justify-end items-start h-[35rem]">
                    <div className="z-2000 sm:w-80 max-w-80 h-44 max-h-44 relative bg-explore-blue opacity-85 sm:ml-4 flex flex-col justify-center gap-4 pl-9 w-full sm:mb-0 mb-2">
                        <h3 className="text-white text-xl font-bold opacity-100">Top Product Of the Week</h3>
                        <button className="rounded-md bg-explore-blue border-2 opacity-100 border-white text-white text-sm font-bold w-44 h-14">EXPLORE ITEMS</button>

                    </div>

                </div>
                <div className="bg-shopping-card-3 sm:h-64 w-auto bg-no-repeat bg-center flex flex-col justify-end items-start h-[35rem]">
                    <div className="z-2000 sm:w-80 max-w-80 h-44 bg-explore-blue opacity-85 sm:ml-4 flex flex-col justify-center gap-4 pl-9 w-full sm:mb-0 mb-2">
                        <h3 className="text-white text-xl font-bold opacity-100">Top Product Of the Week</h3>
                        <button className="rounded-md bg-explore-blue border-2 opacity-100 border-white text-white text-sm font-bold w-44 h-14">EXPLORE ITEMS</button>

                    </div>
                </div>

            </div>

        </div>



    )
}




/*

*/



/*
 <div className="flex justify-center w-full pb-[4rem]">
            <div className="flex justify-center flex-wrap sm:px-24 px-8 w-full h-full gap-4 sm:py-20 ">
                <div className="relative">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/812e/3845/7d0cc7c0071c4e5eb3752a437fda3d0d?Expires=1703462400&Signature=AXRnbrirQCq8QIT5pNOxDWkh8Q1iBrhF7yuG~OafnYNHPyLPlzYI9LoGghAa8xawga1Vof587osbuIEMnzXgYuzlhf-dB41NbpJddGeRQ-uD4BL-rUGrYPmTwk3q7BPaogVa5-owXIrj5natYqdDYuHgNOafP7aAghPOnoW152q6JZVasobpdeuvMqnw98uTQl8-KgbzVIv1CseOiKOtDySvuciLLSsdGbNI~0T54iMVGe2FJ~15bGORz6Z6pnOBn12nzO61MIsc0OxsMxsQw8RuS4ezM523MOvIFPanuzxmZoKQycWbqpGQNlDBdDgFWAWhV-Kl4pqhNR9SDFo1ZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt="img1"
                        className="object-cover w-full h-1/2 min-h-[34rem]"
                    />
                    <div className="absolute top-[21.5rem] left-0 text-white bg-explore-blue bg-opacity-70 max-w-full max-h-full flex flex-col justify-center gap-4 p-12 hover:bg-opacity-100">
                        <h3 className="text-white text-2xl font-bold opacity-100">Top Product Of the Week</h3>
                        <button className="rounded-md bg-explore-blue border-2 opacity-100 border-white text-white text-sm font-bold w-44 h-14">EXPLORE ITEMS</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center ">
                    <div className="relative h-[17rem] w-[35rem]">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/4587/86e9/d5e9865170a32e0687f0a17d8581b9c8?Expires=1703462400&Signature=Ivt9tp~KtDtKMsTyJc57~0AvBXz8YFATetMSMQ-9-j0R1UQOIA5w-KiULd~SkdPs4h2it4of9YIAbmNjlK4VpDcQAwEIYu~vdScQ27U7mFDQyqqQg7iAfQsjGd-9aantlDJWD83gqedSwCx7rIDRzRh5rveAyhg54QMrPqgQMIBZpM4UK6~WCMjLg5~RHZ5uARx5WsAWPcEeP-2JG-6Mnh~b1ooddIZnxNtUb72ucXWBn7P9h0U~1Ua4SaNCTYm3mWSy8UaqsfsRLn2pLGZb98VtTsVrXBNpS2XgSdxWHLrmRC5DBD6XcwBUdv2z9FoXN7dPR~kTuOQsZzEVmS7N6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt="img2"
                            className="object-cover w-full max-w-lg min-h-[24rem] h-1/2"
                        />
                        <div className="absolute top-0 left-0 text-white bg-explore-blue bg-opacity-70 max-w-full max-h-full flex flex-col justify-center gap-4 p-8 hover:bg-opacity-100">
                            <h3 className="text-white text-xl font-bold opacity-100">Top Product Of the Week</h3>
                            <button className="rounded-md bg-explore-blue border-2 opacity-100 border-white text-white text-sm font-bold w-44 h-14">EXPLORE ITEMS</button>
                        </div>
                    </div>
                    <div className="relative h-[17rem] w-[35rem]">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/81b4/0a6b/ad298edf330ec5747ae93edc6118ce4a?Expires=1703462400&Signature=q8Qmewvs7wJtpE0YFuo~2Eb0u6HckmvtVxxybqI4zZ9JwKCj~C2aynevvKj1ZKM8J2B-n~-xMXDY~BfdpL79N-2-76n~heQCgbQSSIA-Wj1hij4~9DWDUTwvyUx~-uQhSa~htMRRZXE03pOWBHQ3I-Ieffiec8BRjuQvLWwKrIs5EAvoIsyut2M8X8zXLrh9KvanRgCa~RrZaeIILjT7y93fm3SJoailSwWli34jutM1qevYsJK1iK6K1eyf-zVBnX8XolTzD86UxT2ZtAOnmchcftl1jBnfcuk2c~7R9QLuzLtoaiT7HPiJB-zueWkkIVTAKLIuRbxby0C1T4knWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt="img3"
                            className="object-cover w-full max-w-lg min-h-[24rem] h-1/2"
                        />
                        <div className="absolute bottom-0 left-0 text-white bg-explore-blue bg-opacity-70 max-w-full max-h-full flex flex-col justify-center gap-4 p-8 hover:bg-opacity-100">
                            <h3 className="text-white text-2xl font-bold opacity-100">Top Product Of the Week</h3>

                            <button className="rounded-md bg-explore-blue border-2 opacity-100 border-white text-white text-sm font-bold w-44 h-14">EXPLORE ITEMS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >


*/