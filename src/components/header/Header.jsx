import { GiHamburgerMenu } from "react-icons/gi"
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'


const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <header className="bg-black bg-opacity-[.3] absolute w-full">
                <nav className="flex items-center justify-between min-h-[100px] px-2 lg:px-10">
                    <div className="flex items-center justify-start gap-[10px]">
                        <img src="/logo.png" alt="" className="max-h-[45px] md:max-h-[55px] lg:max-h-[60px]" />
                        <img src="/logo2.png" alt="" className="max-h-[18px] md:max-h-[26px] lg:max-h-[30px] mt-1" />
                    </div>
                    <div>
                        <ul className="items-center justify-center lg:text-[18px] gap-[50px] hidden md:flex">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="hidden md:flex">
                        <button className="w-[150px] border border-[#8A54FF] rounded-[10px] flex items-center transition hover:bg-[#8A54FF] justify-center h-[43px] test-[20px] pb-[3px]">
                            Reach out
                        </button>
                    </div>
                    <GiHamburgerMenu onClick={() => setOpen(true)} className="flex md:hidden text-[40px] cursor-pointer" />
                </nav>
            </header>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute right-[25px] top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                <button
                                                    type="button"
                                                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">Close panel</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-[#001125] py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">

                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <ul className="items-center justify-center flex-col lg:text-[18px] gap-[20px] flex text-white">
                                                    <li>Home</li>
                                                    <li>Services</li>
                                                    <li>Contact</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>

    )
}

export default Header
