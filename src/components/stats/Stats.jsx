import React from 'react'


const Stats = () => {
    return (
        <div className='flex bg-greencolor ss:w-full justify-center flex-wrap items-center px-4 pt-4 pb-8 sm:pb-8 border-4 border-[#1ECD97]'>
            <div className='justify-center items-center mr-[0px] w-1/2 md:flex md:mr-[2em]  md:w-auto'>
                <div>
                    <div className='flex flex-row justify-center items-center sm:mr-[3em]'>
                        <h1 className="font-poppins font-light ss:text-[55px] text-[46px] text-black mt-10">
                            <span className="text-white">4</span>
                        </h1>
                        <p className='font-light text-[#F8F8F8] mt-8 ml-4 ss:ml-8'>Years of <br /> Experiences</p>
                    </div>
                </div>
                <div className="hidden font-poppins text-[28px] mt-10 ml-[3px] h-16 w-[1px] bg-[#F8F8F8] md:block"></div>
            </div>

            <div className='justify-center mr-[0px] items-center w-1/2 md:flex md:mr-[2em] md:w-auto'>
                <div>
                    <div className='flex flex-row justify-center items-center sm:mr-[3em]'>
                        <h1 className="font-poppins font-light ss:text-[55px] text-[46px] text-black mt-10">
                            <span className="text-white">3K</span>
                        </h1>
                        <p className='font-light text-[#F8F8F8] mt-8 ml-4 ss:ml-8'>Happy <br /> Customer</p>
                    </div>
                </div>
                <div className="hidden font-poppins text-[28px] mt-10 ml-[3px] h-16 w-[1px] bg-[#F8F8F8] md:block"></div>
            </div>

            <div className='justify-center items-center mr-[0px] w-1/2 md:flex md:mr-[2em]  md:w-auto'>
                <div>
                    <div className='flex flex-row justify-center items-center sm:mr-[3em]'>
                        <h1 className="font-poppins font-light ss:text-[55px] text-[46px] text-black mt-10">
                            <span className="text-white">1K+</span>
                        </h1>
                        <p className='font-light text-[#F8F8F8] mt-8 ml-4 ss:ml-8'>Trained <br /> Doctors</p>
                    </div>
                </div>
                <div className="hidden font-poppins text-[28px] mt-10 ml-[3px] h-16 w-[1px] bg-[#F8F8F8] md:block"></div>
            </div>

            <div className='justify-center  items-center mr-[0px] w-1/2 md:flex md:w-auto'>
                <div>
                    <div className='flex flex-row justify-center items-center sm:mr-[3em]'>
                        <h1 className="font-poppins font-light ss:text-[55px] text-[46px] text-black mt-10">
                            <span className="text-white">4.3</span>
                        </h1>
                        <p className='font-light text-[#F8F8F8] mt-8 ml-4 ss:ml-8'>Overall <br /> Ratings</p>
                    </div>
                </div>
                {/* <div className="hidden font-poppins text-[28px] mt-10 ml-[3px] h-16 w-[1px] bg-[#F8F8F8] md:block"></div> */}
            </div>

        </div>
    )
}
export default Stats