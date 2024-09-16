
import Users from "./users"
import "./App.css"
function App() {
  
  const users =[
    {
      grid :1,
      name:'kishan',
      email : 'kishan@gmail,com',
      password: 'kishan@235',
      course:["html","css","bootstrap","js"],
      city:"surat"
    },
    {
      grid :2,
      name:'jay',
      email : 'jay@gmail.com',
      password: 'jay@235',
      course:["photoshop","figma","illustator","adobe xd"],
      city:"rajkot"
    },
    {
      grid :3,
      name:'ajay',
      email : 'ajay@gmail.com',
      password: 'ajay@235',
      course:["html","css","btstrap","ndejs"],
      city:"amreli"
    },
    {
      grid :4,
      name:'nisha',
      email : 'nisha@gmail.com',
      password: 'nisha@235',
      course:["html","react js ","css","python"],
      city:"vadodra"
    }
  ]
  
  

  return (
    <div>
      <Users
        us={users}
      />

    </div>
  )
}

export default App
