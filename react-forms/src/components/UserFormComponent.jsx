import { useState } from "react"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css


function UserFormComponent() {
    const [pronounce, setPronounce] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const submit = (data) => {
    confirmAlert({
      message: `${data.firstName} ${data.lastName} Data Added Successfully`, // Custom UI or Component
      buttons: [
        {
        label: 'Close',
        onClick: () => {}
        }
  ],     // Action after Cancel
      overlayClassName: "overlay-custom-class-name"      // Custom overlay class name
    })
  };
    function handleSubmit(e){
        e.preventDefault()
        console.log(firstName, lastName, userName, email, password);
        fetch("http://localhost:3000/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({firstName,lastName,pronounce,userName,email,password,state,country})
        }).then(res=>res.json()).then(data => {
            // alert(`${data.firstName} ${data.lastName} Data Added`)
            submit(data)
        })
        setFirstName("")
        setLastName("")
        setUserName("")
        setEmail("")
        setPassword("")
        setCountry("")
        setState("")
        setPronounce("")

    }

  return (
    <div className="w-full p-12 bg-gray-100 shadow-lg rounded-md">
        {/* <button onClick={submit}>Confirm dialog</button> */}
        <form onSubmit={handleSubmit}>
            <div className="w-full flex">
                <select className="w-4/7 m-3 p-2 rounded-md shadow-md shadow-slate-300 focus:shadow-slate-400 transition" value={pronounce} onChange={(e)=>setPronounce(e.target.value)}>
                    <option selected>Select Pronounce</option>
                    <option value="he/him">he/him</option>
                    <option value="she/her">she/her</option>
                </select>
                <input className="w-full m-3 p-2 rounded-md shadow-md shadow-slate-300 focus:shadow-slate-400 transition" type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name" required></input>
                <input className="w-full m-3 p-2 rounded-md shadow-md shadow-slate-300 focus:shadow-slate-400 transition" type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name" required></input>
            </div>
            <div className="w-full flex">
                <input className="w-full m-3 p-2 rounded-md shadow-md shadow-slate-300 focus:shadow-slate-400 transition" type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="Username" required></input>
            </div>
            <div className="w-full flex">
                <input className="w-full m-3 p-2 rounded-md shadow-md shadow-slate-300 focus:shadow-slate-400 transition" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required></input>
            </div>
            <div className="w-full flex">
                <input className="w-full m-3 p-2 rounded-md shadow-md shadow-slate-300 focus:shadow-slate-400 transition" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required></input>
            </div>
            <div className="w-full flex">
                <input className="w-full m-3 p-2 rounded-md shadow-md shadow-slate-300 focus:shadow-slate-400 transition" type="text" value={country} onChange={(e)=>setCountry(e.target.value)} placeholder="Country" required></input>
                <input className="w-full m-3 p-2 rounded-md shadow-md shadow-slate-300 focus:shadow-slate-400 transition" type="text" value={state} onChange={(e)=>setState(e.target.value)} placeholder="State" required></input>
            </div>
            <div className="w-full flex">
                <input className="w-full m-3 p-2 rounded-sm bg-green-500 cursor-pointer" type="submit" value="Submit"></input>
            </div>
        </form>
    </div>
  )
}

export default UserFormComponent