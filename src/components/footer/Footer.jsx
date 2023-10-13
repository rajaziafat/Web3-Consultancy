
const Footer = () => {
    return (
        <div className="flex items-center justify-between py-[20px] sm:py-[30px] px-[40px] bg-[#000812] flex-col sm:flex-row gap-[20px] sm:gap-0">
            <img src="/logo.png" alt="" className="max-h-[45px] md:max-h-[40px] lg:max-h-[50px]" />
            <ul className="items-center justify-center text-[15px] lg:text-[16px] gap-[25px] md:gap-[50px] flex">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
        </div>
    )
}

export default Footer
