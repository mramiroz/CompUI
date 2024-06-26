"use client";
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import removeLike from '@/actions/Like/removeLike';
import addLike from '@/actions/Like/addLike';
import getUserLikeStatus from '@/actions/Like/getLikesAndUserLikeStatus';

export default
function Like({compId, likes}: {compId: string, likes: number}){
    let { data: session} = useSession();
    const [liked, setLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(0)
    const user = session?.user;
    const id = (user as any)?._id || (user as any)?.id;
    
    useEffect(() => {
        const fetchData = async () =>
        {
            setLikesCount(likes);
            if (user){
                const {userHasLiked} = await getUserLikeStatus({compId, userId: id});
                setLiked(userHasLiked);
            }
        }
        fetchData();
    },[session, compId])
    
    const handleLike = async () => {
        if (liked) {
            await removeLike({id: compId, userId: id});
            setLiked(false);
            setLikesCount(likesCount - 1);
        }
        else {
            await addLike({id: compId, userId: id});
            setLiked(true);
            setLikesCount(likesCount + 1);
        }
    }

    return (
        <div className="flex items-center mt-4">
            <div 
                onClick={handleLike}
                className={`transition-all duration-200 ease-in-out transform ${liked ? 'scale-110' : 'scale-100'}`}
            >
                <Image 
                    src={liked ? "/like-fill.svg" : "/like.svg"} 
                    alt="like" width={30} height={30} 
                    className="mr-4 cursor-pointer" />
            </div>
            <span className='font-bold'>{likesCount}</span>
        </div>
    )
}