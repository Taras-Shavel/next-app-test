"use client"


function Header() {
    return(
        <div className="w-full h-[90px] mt-10 bg-white flex justify-center items-center">
            <div className="w-[1367px] h-[45px] flex items-center justify-between">
                <div className="h-full flex items-center">
                    <img src="./Images/Engagement.png" alt="Engagement"/>
                    <p className="m-0 text-[16px] font-bold ml-2">GREATESTDAY</p>
                </div>
                <div>
                    <button className="w-[130px] h-[45px] bg-black rounded-md text-white border-0 text-[14px] font-bold mr-5 cursor-pointer">
                        Our wedding</button>
                    <button className="w-[146px] h-[45px] bg-[#FAEBE3] rounded-md border-0 text-[14px] font-bold cursor-pointer">
                        Sign out</button>
                </div>
            </div>
        </div>
    )
}
export {Header}