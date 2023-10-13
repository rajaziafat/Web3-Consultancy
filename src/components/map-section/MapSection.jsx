
const MapSection = () => {
    return (
        <div className="lg:min-h-[600px] flex items-center justify-center sm:py-[40px] py-3 md:py-8 lg:py-0">
            <div className="flex items-center justify-center flex-col md:flex-row">
                <div className="flex-1 min-w-[50%] p-[20px] lg:pl-[100px]  flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[50px]">
                    <h1 className="text-center md:max-w-[480px] md:text-start text-[35px] leading-[38px] sm:text-[45px] sm:leading-[40px] md:text-[30px] lg:text-[42px] font-[600] lg:leading-[50px] text-[#ffffff]">
                        Creating the roadmap for successful DAOs.</h1>
                    <p className="text-center md:max-w-[420px] md:text-start text-[#ffffff] text-[16px] sm:text-[17px] md:text-[15px] lg:text-[18px]">Across web3, DAOs are unlocking the power of the blockchain to create value for their communities. We live in your world. Our field-tested solutions will accelerate your path to standing up a DAO that will stand the test of time.</p>
                    <div className="flex items-center gap-[20px] justify-center md:justify-start">
                        <a href="#" className="flex items-center gap-[10px] text-[17px] md:text-[15px] lg:text-[18px] text-[#8A54FF]">Tell us about your project </a>
                        <img src="/Vector 3.png" alt="" className="h-[15px]" />
                    </div>
                </div>
                <div className="flex-1 min-w-[50%] flex flex-col gap-[20px] lg:gap-[30px] p-2 sm:p-[25px] lg:p-[50px]">
                    <img src="/map.png" alt="" className="" />

                </div>
            </div>
        </div>
    )
}

export default MapSection
