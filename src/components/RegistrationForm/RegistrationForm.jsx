import { useState } from "react"
import { RegForm, RegInputContainer, RegInput, RegLabel, RegCheckboxContainer, RegCheckboxLabel, RegCheckboxInput, RegButton } from "./RegistrationForm.styled"

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
         <RegForm onSubmit={handleSubmit}>
                <RegInputContainer>
                    <RegLabel htmlFor="inputTel" >Phone number</RegLabel>
                <RegInput type="tel" maxLength={15} onChange={handleChange} id="inputTel" name='tel' value={tel} />
                </RegInputContainer>
                <RegInputContainer >
                    <RegLabel htmlFor="inputEmail1" >Email address</RegLabel>
                <RegInput type="email" onChange={handleChange}  id="inputEmail1" aria-describedby="emailHelp" name='email' value={email} />
                </RegInputContainer>
                <RegInputContainer >
                    <RegLabel htmlFor="inputPassword" >Password</RegLabel>
                <RegInput type="password" onChange={handleChange}  id="inputPassword" name='password' value={password} />
                </RegInputContainer>
                <RegInputContainer >
                    <RegLabel htmlFor="inputCountry" >Country</RegLabel>
                    <RegInput type="text" onChange={handleChange}  id="inputCountry" name='country' value={country} />
                </RegInputContainer>
                <RegInputContainer >
                    <RegLabel htmlFor="inputCity">City</RegLabel>
                    <RegInput type="text" onChange={handleChange}  id="inputCity" name='city' value={city} />
                </RegInputContainer>
                <RegCheckboxContainer>
                    <RegCheckboxLabel htmlFor="inputAgreement">I give my consent for the processing of my personal data</RegCheckboxLabel>
                    <RegCheckboxInput type="checkbox" onChange={handleChange}  id="inputAgreement" name='agreement' checked={agreement} />
                </RegCheckboxContainer>

                <RegButton type="submit" disabled={!agreement}>Register</RegButton>
            </RegForm>
    )
}

export default RegistrationForm