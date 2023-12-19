import React from "react";
import team1 from "../photos/team-1-user-3.jpg";
import team2 from "../photos/team-3-user-3.jpg";
import team4 from "../photos/team-3-user-1.jpg";

export const Team = () => {

    return (
        <div className="bg-[#FAFAFA]">
            <div className="flex flex-col flex-wrap justify-between pt-28 sm:px-48 px-12">

                <div className="flex flex-col gap-4 flex-wrap items-center justify-center ">
                    <p className="text-[#252B42] text-[2.5rem] font-bold">Meet Our Team</p>
                    <p className="text-[#737373] text-center text-sm font-normal">Problems trying to resolve the conflict between<br />
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>

                <div className="flex sm:flex-row flex-wrap justify-between py-28 flex-col sm:gap-0 gap-8">

                    <div className="px-10 py-8 flex flex-col justify-between items-center border rounded-md bg-[#FFF] gap-2">
                        <img src={team1} className="bg-top w-32 h-32 rounded-full object-cover" />
                        <p className="text-[#23A6F0] text-sm font-bold">Founder</p>
                        <p className="text-[#252B42] text-base font-bold">Kristin Watson</p>
                        <p className="text-[#737373] text-sm font-normal">the quick fox jumps<br />
                            over the lazy dog</p>
                    </div>
                    <div className="px-10 py-8 flex flex-col justify-between items-center border rounded-md bg-[#FFF] gap-2">
                        <img src={team2} className="bg-top w-32 h-32 rounded-full object-cover" />
                        <p className="text-[#23A6F0] text-sm font-bold">Founder</p>
                        <p className="text-[#252B42] text-base font-bold">Kristin Watson</p>
                        <p className="text-[#737373] text-sm font-normal">the quick fox jumps<br />
                            over the lazy dog</p>
                    </div>
                    <div className="px-10 py-8 flex flex-col justify-between items-center border rounded-md bg-[#FFF] gap-2">
                        <img src={team1} className="bg-top w-32 h-32 rounded-full object-cover" />
                        <p className="text-[#23A6F0] text-sm font-bold">Founder</p>
                        <p className="text-[#252B42] text-base font-bold">Kristin Watson</p>
                        <p className="text-[#737373] text-sm font-normal">the quick fox jumps<br />
                            over the lazy dog</p>
                    </div>
                    <div className="px-10 py-8 flex flex-col justify-between items-center border rounded-md bg-[#FFF] gap-2">
                        <img src={team4} className="bg-top w-32 h-32 rounded-full object-cover" />
                        <p className="text-[#23A6F0] text-sm font-bold">Founder</p>
                        <p className="text-[#252B42] text-base font-bold">Kristin Watson</p>
                        <p className="text-[#737373] text-sm font-normal">the quick fox jumps<br />
                            over the lazy dog</p>
                    </div>

                </div>

            </div>
        </div>
    )
}