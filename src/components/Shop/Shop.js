import React from 'react'
import logo from "../../img/logo.svg";
import houseIcon from '../../assets/houseIcon.svg'
import { Link } from 'react-router-dom';
import burglariesIcon from '../../assets/burglariesIcon.svg'
import floodIcon from '../../assets/floodIcon.svg'
import fireIcon from '../../assets/fireIcon.svg'
import Questions from '../Riders/Questions';
import Footer from '../Footer';

const Shop = () => {
    return (
        <div>

            <div className='flex items-center justify-center'>
                <Link to='/' >
                    <img src={logo} alt='logo' />
                </Link>
            </div>
            <section className='px-4 md:px-8 lg:px-24  pt-4 md:pt-16 pb-6  flex justify-center items-center flex-col '>

                <div className='flex gap-5 md:gap-10 flex-col md:flex-row items-center justify-center 2xl:max-w-[1600px]'>
                    <img src={houseIcon} alt="" className='w-[200px] sm:w-[400px] lg:w-full' />

                    <div className='text-left'>
                        <h1 className='text-[#20262A] text-3xl sm:text-5xl lg:text-6xl mb-4 sm:mb-8 font-bold'>Shop protection plan</h1>
                        <p className='mb-4 sm:mb-8'>A shop protection plan  is a type of protection plan  designed to cover for a shop’s property and the contents within.<br />At Tutela, our shop protection plan covers for fire and natural calamities such as floods and earthquakes through our Standard Fire & Special Perils.</p>
                        <div className='flex  gap-3   flex-row justify-center'>
                            <div className='border border-[#008080] p-2  flex items-center justify-center text-black'>
                                <p className="text-sm font-normal">Zero  Paper Work</p>
                            </div>
                            <div className='border border-[#008080] p-3  flex items-center justify-center text-black'>
                                <p className="text-sm font-normal">Quick Claim Process</p>
                            </div>
                            <div className='border border-[#008080] p-3  flex items-center justify-center text-black'>
                                <p className="text-sm font-normal">Affordable Premium</p>
                            </div>
                        </div>

                        <div className='mt-5 w-full flex items-center justify-center'>
                            <button className='text-white bg-[#008080] px-2 py-3 rounded-xl font-medium '>Start for Free</button>
                        </div>
                    </div>


                </div>


                <div className='flex gap-5 md:gap-10 flex-col  items-center justify-center 2xl:max-w-[1600px] mt-10 md:mt-20'>

                    <h1 className='text-[#20262A] text-3xl sm:text-5xl lg:text-6xl mb-4 sm:mb-8 font-bold'>What’s <span className='text-primary'>Covered</span> in Shop  protection plan?</h1>

                    <div className='flex flex-col sm:flex-row flex-wrap gap-10 md:gap-16 lg:gap-36 items-center justify-center mb-4 sm:mb-8'>
                        <div className='w-[206px] h-[238px] border border-primary flex flex-col items-center justify-center gap-8 relative bg-white'>
                            <img src={burglariesIcon} alt='' />
                            <p className='text-2xl font-semibold w-full text-center'>Burglaries</p>

                            <div className='w-[206px] h-[238px] bg-[#046B5F] absolute top-[14px] left-[14px] z-[-1]'>

                            </div>

                        </div>
                        <div className='w-[206px] h-[238px] border border-primary flex flex-col items-center justify-center gap-4 relative bg-white'>
                            <img src={fireIcon} alt='' />
                            <p className='text-2xl font-semibold w-full text-center'>Fire</p>

                            <div className='w-[206px] h-[238px] bg-[#046B5F] absolute top-[14px] left-[14px] z-[-1]'>

                            </div>

                        </div>
                        <div className='w-[206px] h-[238px] border border-primary flex flex-col items-center justify-center gap-2 relative bg-white'>
                            <img src={floodIcon} alt='' />
                            <p className='text-2xl font-semibold w-full text-center'>Flood</p>

                            <div className='w-[206px] h-[238px] bg-[#046B5F] absolute top-[14px] left-[14px] z-[-1]'>

                            </div>

                        </div>
                    </div>

                    <div>
                        <h1 className='text-[#20262A] text-3xl sm:text-5xl lg:text-6xl mb-4  font-bold'>What’s <span className='text-primary'>not</span> Covered</h1>

                        <p className='text-xl max-w-[900px]'>It is equally important to know what’s not covered in your shop protection plan,  so that there are no surprises when you make a claim. Here are some such situations:</p>
                    </div>
                </div>

                <div className='flex gap-5 md:gap-10   2xl:max-w-[1600px] mt-10 md:mt-20 text-xl px-6'>
                    <ul>
                        <li className='text-start list-disc mb-2'>Damages and losses caused in shops that are in basements are not covered.</li>
                        <li className='text-start list-disc mb-2'>Fixed structures, fittings and electrical installations are not covered</li>
                        <li className='text-start list-disc mb-2'>Any consequential losses aren’t covered for.</li>
                        <li className='text-start list-disc mb-2'>Mysterious disappearances and unexplained losses will not be covered.</li>
                        <li className='text-start list-disc mb-2'>Portable assets like laptops, mobiles, iPads and cameras will not be covered. (unless you’re dealing with the sale of these items)</li>
                        <li className='text-start list-disc mb-2'>Valuables like Curios, Art and Jewlery unless the shop deals with the sale of these items will not be covered.</li>
                        <li className='text-start list-disc mb-2'>Machinery breakdowns that aren’t a result of a natural calamity, fire, explosion, implosion, etc will not be covered.</li>
                        <li className='text-start list-disc mb-2'>Losses caused due to a war, or nuclear disaster will not be covered</li>
                    </ul>

                </div>

                <div className='flex gap-5 md:gap-10 flex-col  items-center justify-center 2xl:max-w-[1600px] mt-10 md:mt-20'>

                    <h1 className='text-[#20262A] text-3xl sm:text-5xl lg:text-6xl  font-bold'><span className='text-primary'>Types</span> of Shop Protection Plans
                    </h1>

                    <div>
                        <table className='bg-[#45AAA940] hidden md:inline-block'>
                            <tr>
                                <th className='border-[2px] border-[#FDFDFD] p-4 text-lg '>Option 1</th>
                                <th className='border-[2px] border-[#FDFDFD] p-4 text-lg '>Option 2</th>
                                <th className='border-[2px] border-[#FDFDFD] p-4 text-lg '>Option 3</th>
                            </tr>
                            <tr>
                                <td className='border-[2px] border-[#FDFDFD] p-4  '>Covers only contents of your shop.</td>
                                <td className='border-[2px] border-[#FDFDFD] p-4  '>Covers both your shop building and contents of your shop.</td>
                                <td className='border-[2px] border-[#FDFDFD] p-4 max-w-[369px] text-justify'>Covers your building, contents of your shop and, valuables such as the cash in your shop counter.</td>
                            </tr>
                        </table>

                        <div className='md:hidden flex flex-col gap-2'>
                            <div className='bg-[#45AAA940] '>
                                <h1 className='border-[1px] border-[#FDFDFD] p-4 text-lg '>Option 1</h1>
                                <p className='border-[1px] border-[#FDFDFD] p-4 '> Covers only contents of your shop.</p>

                            </div>
                            <div className='bg-[#45AAA940] '>
                                <h1 className='border-[1px] border-[#FDFDFD] p-4 text-lg '>Option 2</h1>
                                <p className='border-[1px] border-[#FDFDFD] p-4 '>Covers both your shop building and contents of your shop.</p>

                            </div>
                            <div className='bg-[#45AAA940] '>
                                <h1 className='border-[1px] border-[#FDFDFD] p-4 text-lg '>Option 3</h1>
                                <p className='border-[1px] border-[#FDFDFD] p-4 '>Covers your building, contents of your shop and, valuables such as the cash in your shop counter.</p>

                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 md:gap-10   2xl:max-w-[1600px] mt-10 md:mt-20 text-xl '>

                        <h1 className='text-[#20262A] text-3xl sm:text-5xl lg:text-6xl  text-left font-bold'> Things to
                            <span className='text-primary'> know</span> about Shop Insurance</h1>
                        <ul className='pl-8'>
                            <li className='text-start list-disc mb-2'>What is <span className='text-[#046B5F]'>‘content’</span> in Shop protection plan : Contents in a Shop protection plan refers to the primary items in your shop. For example; if you run a Clothing Boutique, the contents here would refer to all the different garments you have present in your shop, for sale.</li>
                            <li className='text-start list-disc mb-2'>  What do you mean by <span className='text-[#046B5F]'>‘building’</span> in Shop protection plan : Building in Shop protection plan refers to the physical aspect of your store.</li>

                        </ul>

                    </div>

                    <div className='flex gap-5 md:gap-10 flex-col  items-center justify-center 2xl:max-w-[1600px] mt-10 md:mt-20'>

                        <h1 className='text-[#20262A] text-3xl sm:text-5xl lg:text-6xl  font-bold'>Your <span className='text-primary'>questions</span> answered
                        </h1>


                        <Questions
                            que={
                                <div>
                                    How to file a <span>Claim</span>
                                </div>
                            }
                            ans={
                                <div>
                                    <p>1. Notify Tutela within 48 hours of the event.</p>
                                    <p>
                                        2. Provide documents or evidence like pictures, videos, letter
                                        from the hospital or police.
                                    </p>
                                    <p>3. Receive Claim in your provided account number.</p>
                                </div>
                            }
                        />
                        <Questions
                            que={
                                <div>
                                    How <span>long</span> do I need to wait before I file a claim?
                                </div>
                            }
                            ans={
                                <div>
                                    To file a claim, there is a 30 days waiting period, in which you
                                    must have paid your premium. After which you would be eligible to
                                    file a claim.
                                </div>
                            }
                        />
                        <Questions
                            que={
                                <div>
                                    How can my policy can be <span>cancelled </span>?
                                </div>
                            }
                            ans={
                                <div>
                                    If you send us an email to do so or terminate it yourself via any of
                                    our agent. if you If you violate any of our terms and conditions
                                </div>
                            }
                        />


                    </div>




                </div>


                <Footer />




            </section>

        </div>
    )
}

export default Shop