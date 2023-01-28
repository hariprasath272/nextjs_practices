import Link from "next/link"

export const getStaticProps= async ()=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data=await res.json()

  return{
    props:{lists:data}
  }
} 

const List=({lists})=>{
return(
  <div>
    <h1>All Users</h1>
    {lists.map(val=><Link legacyBehavior href={"/sample/" + val.id} key={val.id}><a><h3>{val.name}</h3></a></Link>)}
  </div> 
)
}
export default List