import React from 'react'
import Button from '@mui/material/Button';




const Pagination = ({total,postperpage,paginate}) => {

    let posts=[]

for(let i=1 ; i<=Math.ceil(total/postperpage); i++){
    posts.push(i)

}
  return (
    <div>
    {posts.map((e)=><Button color='warning'  variant="contained" onClick={()=>paginate(e)}>{e}  </Button>)}
    
    </div>
  )
}

export default Pagination