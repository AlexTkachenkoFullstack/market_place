import { useState } from "react"

const RegistrationForm = () => {
const [tel, setTel]=useState('')
const [email, setEmail]=useState('')
const [password, setPassword] = useState('')
const [country, setCountry]=useState('')
const [city, setCity]=useState('')
const [agreement, setAgreement]=useState(false)


    
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'tel':
                setTel(e.target.value);
                break
            case 'email':
                setEmail(e.target.value);
                break
            case 'password':
                setPassword(e.target.value);
                break
            case 'country':
                setCountry(e.target.value);
                break
            case 'city':
                setCity(e.target.value);
                break
            case 'agreement':
                setAgreement(e.target.checked);
                break
            default: return;   
        }
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.dir(e.target)
        if (!tel || !password || !email || !country || !city || !agreement) {
            alert('Please fill in all fields of the form')
            return
        }
        setTel('');
        setEmail('');
        setPassword('')
        setCountry('')
        setCity('')
        setAgreement(false)
    }

    return (
         <form onSubmit={handleSubmit} style={{width:500, marginLeft:'auto', marginRight:'auto', display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:10}}>
                    <label htmlFor="inputTel" >Phone number</label>
                <input type="tel" maxLength={15} onChange={handleChange} id="inputTel" name='tel' value={tel} />
                </div>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:10}}>
                    <label htmlFor="inputEmail1" >Email address</label>
                <input type="email" onChange={handleChange}  id="inputEmail1" aria-describedby="emailHelp" name='email' value={email} />
                </div>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:10}}>
                    <label htmlFor="inputPassword" >Password</label>
                <input type="password" onChange={handleChange}  id="inputPassword" name='password' value={password} />
                </div>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:10}}>
                    <label htmlFor="inputCountry" >Country</label>
                    <input type="text" onChange={handleChange}  id="inputCountry" name='country' value={country} />
                </div>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:10}}>
                    <label htmlFor="inputCity">City</label>
                    <input type="text" onChange={handleChange}  id="inputCity" name='city' value={city} />
                </div>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:10}}>
                    <label htmlFor="inputAgreement">I give my consent for the processing of my personal data</label>
                    <input type="checkbox" onChange={handleChange}  id="inputAgreement" name='agreement' checked={agreement} />
                </div>

                <button type="submit" disabled={!agreement}  style={{width: 100, height:50, backgroundColor:'#bfdbe84a'}}>Register</button>
            </form>
    )
}

export default RegistrationForm