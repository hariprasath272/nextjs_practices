import React from 'react'

export const getStaticPaths=async ()=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data=await res.json();
  
  const paths=data.map(val=>{
    return{
      params:{id:val.id.toString()}
    }
  })

return{
  paths,
  fallback:false
}

}
export const getStaticProps=async(context)=>{
  const id=context.params.id;
  const res=await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data=await res.json();
 return{
  props:{lists:data}
  
 }
}
const UserId = ({lists}) => {
  return (
    <div>
    <h1>{lists.name}</h1>
    <h1>{lists.email}</h1>
    <p>{lists.address.city}</p>
     
    </div>
  )
}


export default UserId