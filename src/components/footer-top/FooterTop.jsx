
const FooterTop = () => {
    return (
        <div className="bg-[#D6D6D6] lg:min-h-screen flex items-center justify-center w-full overflow-hidden">
            <div className="flex items-center justify-center flex-col md:flex-row gap-[30px] md:gap-[50px] xl:gap-[120px] md:pl-[20px] xl:pl-[90px]">
                <div className="flex-1 flex w-full px-4 md:px-0 z-10">
                    <form className="text-[#343434] w-full pt-[10px] sm:pt-0">
                        <h1 className="text-[29px] sm:text-[26px] md:text-[30px] lg:text-[34px] xl:text-[38px] text-start font-[600]">Talk to us</h1>
                        <p className="text-[16px] sm:text-[15px] md:text-[16px] tlg:text-[17px] xl:text-[19px] text-start lg:mt-1">We would love to hear what you’re building</p>
                        <div className="flex flex-col gap-[10px] xl:gap-[20px] mt-[15px] xl:mt-[35px] w-full">
                            <input type="text" placeholder="Name" className="bg-[#B8B8B8] text-[#000000] px-3 placeholder:text-[#000000] outline-none py-[6px] xl:py-[9px] w-full" />
                            <input type="text" placeholder="Email" className="bg-[#B8B8B8] text-[#000000] px-3 placeholder:text-[#000000] outline-none py-[6px] xl:py-[9px] w-full" />
                            <textarea placeholder="Description" className="bg-[#B8B8B8] text-[#000000] px-3 placeholder:text-[#000000] outline-none xl:py-[9px] py-[6px] w-full" cols="20" rows="6"></textarea>
                            <button className="w-[150px] font-[500] border border-[#8A54FF] bg-[#8A54FF] rounded-[10px] flex items-center text-black transition  justify-center h-[43px] test-[20px] pb-[3px]">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 flex">
                    <img src="/Frame 5.png" alt="" className="h-full w-full object-cover xl:scale-[1.2]" />
                </div>
            </div>
        </div>
    )
}

export default FooterTop
