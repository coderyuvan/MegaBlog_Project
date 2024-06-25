import React,{useState,useEffect} from 'react'
import appwriteService from "../appwrite/config"
import { Container,Postcard } from '../components'
function Allpost() {
 const [posts,setposts]=useState([])
 useEffect(()=>{},[])
 appwriteService.getPosts([]).then((posts)=>{
    if(posts&&posts.documents) {
        setposts(posts.documents)
    }
    else{
        setposts([])
    }
 } )
return(
<div className='w-full py-8'>
    <Container>
         <div className='flex flex-wrap'>
            {posts.map((post)=>(

            <div key={post.$id} className='p-2 w-1/4'>
                 <Postcard {...post} />
            </div>
))}
         </div>
    </Container>
</div>
)
}

export default Allpost
