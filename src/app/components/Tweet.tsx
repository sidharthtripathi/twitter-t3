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
function  Tweet({ userimg = "", name = "", username = "", title = "", imgs = [], stats = 0, likes = 0, retweets = 0 }: Props) {
    return (
        <div className='flex p-2 space-x-2 rounded-md border-b'>

            <div className='shrink-0'>
                <img
                    src={userimg} alt="userProfile"
                    className='w-10 rounded-full'

                />
            </div>

            <div className='grow'>
                <div className='space-x-1'>
                    <span className='font-bold '>{name}</span>
                    <span className='font-thin text-sm text-gray-400'>@{username}</span>
                </div>
                <p>
                   {title}
                </p>
                {imgs.length>0 && <ImgsGrid />}
                <div className='flex w-full justify-between mt-3'>

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