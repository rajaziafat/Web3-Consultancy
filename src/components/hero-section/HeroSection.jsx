
const HeroSection = () => {
    return (
        <div className="w-full sm:mb-0 min-h-screen hero-bg flex flex-col items-start justify-center px-3 md:px-[90px]">
            <div className="w-full md:max-w-[530px]  flex flex-col items-start justify-center gap-[20px] sm:gap-[40px] mt-[80px]">
                <h1 className="text-center md:text-start  text-[30px] leading-[34px] sm:text-[48px] font-[600] sm:leading-[50px] text-[#ffffff]">
                    Web3-native consulting for a decentralized future.
                </h1>
                <p className="text-center md:text-start text-[#ffffff]">​​Bankless Consulting is the world's first web3-native consulting firm. Whether you're a DAO or a traditional enterprise, we’ll help you capture the potential of the rapidly expanding decentralized economy.</p>
                <div className="flex justify-center md:justify-start items-center md:items-start gap-[10px] sm:gap-[30px] w-full">
                    <button className="w-[110px] sm:w-[150px] bg-[#8A54FF] transition hover:bg-transparent border border-[#8A54FF] rounded-[10px] flex items-center justify-center h-[40px] test-[20px] pb-[3px]">
                        Take a tour
                    </button>
                    <button className="w-[110px] sm:w-[150px] border border-[#8A54FF] hover:bg-[#8A54FF] rounded-[10px] flex items-center justify-center h-[40px] test-[20px] pb-[3px]">
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
