import React from 'react'
import { BiComment } from 'react-icons/bi'
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoIosStats } from 'react-icons/io'
import { BsBookmark } from 'react-icons/bs'
import ImgsGrid from './ImgsGrid'
interface Props {
    userimg?: string,
    name?: string,
    username?: string,
    title?: string,
    imgs?: [],
    stats?: number,
    likes?: number,
    retweets?: number
}
function    Tweet({ userimg = "", name = "", username = "", title = "", imgs = [], stats = 0, likes = 0, retweets = 0 }: Props) {
    return (
        <div className='flex w-auto mx-auto p-2 bg-slate-800  cursor-pointer rounded-lg'>

            <div className='mr-5 min-w-fit grow-0'>
                <img
                    src={'data:image/jpeg;base64,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'} alt="userProfile"
                    className='w-12 rounded-full'

                />

            </div>
            <div className='grow px-3'>
                <div className='space-x-1'>
                    <span className='font-bold '>Bonaparte bro</span>
                    <span className='font-thin text-sm text-gray-400'>@bonahehe</span>
                </div>
                <div>
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias sapiente aliquam sunt amet fugiat velit eum veniam alias, quasi repudiandae molestiae sint nihil sit iste consequuntur vel rerum ad nemo!
                </div>
                <ImgsGrid />
                <div className='w-full flex justify-between text-md mt-6 pb-2 items-center'>

                    <BiComment />
                    <FaRetweet />
                    <AiOutlineHeart />
                    <IoIosStats />
                    <BsBookmark />

                </div>

            </div>

        </div>
    )
}

export default Tweet