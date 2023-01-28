export async function getStaticProps() {
 
    // Fetch data from external API
  const res=await fetch(`https://jsonplaceholder.typicode.com/users/1`)
  const data=await res.json()
  
    // Returning the fetched data
    return { 
        props:{list:data }
     }
  }
  
  function SSRPage({ list }) {
    console.log(list);
    // Displaying the data to the client
    return(
        <div>
            <h1>User List</h1>
      <h3>{list.name}</h3>
      <h3>{list.address.city}</h3>
      </div>
    )
  }
  
  export default SSRPage