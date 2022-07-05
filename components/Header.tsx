import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/Link'
import { getCategories } from '../services'
import waynium from '../images/images/waynium2.jpg'
import Image from 'next/image'

const Header = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((newCategories) => setCategories(newCategories))
    }, []);

    return (
        <div className="container mx-auto px-10 mb-8 md:items-center">
            <div className="border-b w-full inline-block border-blue-400 py-8 md:justify-center">
                <div className="flex flex-col items-center justify-center"> {/**md => medium devices  */}
                    <div>   
                        <Link href="/">
                            <span className="cursor-pointer font-bold text-4xl text-white lg:mr-6"> 
                                {/* 
                                    background: #fff;
                                    text-transform: capitalize;
                                    text-align: left;
                                    margin-bottom: 50px;
                                    margin-top: -70px;
                                    color: #1a1a1a;
                                    background-clip: text; 
                                    -webkit-background-clip: text; => bg-clip-text
                                    -webkit-text-stroke: 8px transparent; => stroke-transparent
                                */}

                                <div className="bg-clip-text stroke-cyan-500 hover:stroke-cyan-700">
                                    Welcome to my Blog
                                </div>
                            </span>
                        </Link>
                    </div>
                    <strong className="inline text-gray-700 text-lg lg:mr-6">Wandile Nyembe</strong>
                    <div className="mb-2 mt-2 w-full lg:w-auto inline">
                        <Image
                            alt="Wandile"
                            height="110px"
                            width="100px"
                            className="align-middle rounded-full"  
                            src={waynium}
                        />
                    </div>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header