import '../style/FormComponent.css';
import {useState} from 'react';

const FormComponent = ()=>{
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repassword,setRepassword] = useState('');

    const [errorUsername,setErrorUsername] = useState('');
    const [errorEmail,setErrorEmail] = useState('');
    const [errorPassword,setErrorPassword] = useState('');
    const [errorRePassword,setErrorRePassword] = useState('');

    const [userNamecolor,setUserNameColor] = useState('');
    const [emailColor,setEmailColor] = useState('');
    const [passwordColor,setPasswordColor] = useState('');
    const [rePasswordColor,setRePasswordColor] = useState('');

    const validateForm = (e)=>{
        e.preventDefault();

        if(userName.length>8){
            setErrorUsername('');
            setUserNameColor('green');
        }
        else{
            setErrorUsername('กรุณาป้อนชื่อผู้ใช้จำนวน 8 ตัวอักษร');
            setUserNameColor('red');
        }

        if(email.includes("@")){
            setErrorEmail('');
            setEmailColor('green');
        }
        else{
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('red');
        }

        if(password.length>8){
            setErrorPassword('');
            setPasswordColor('green');
        }
        else{
            setErrorPassword('รหัสผ่านต้องมีจำนวน 8 ตัวอักษร');
            setPasswordColor('red');
        }

        if(repassword != "" && repassword === password){
            setErrorRePassword('');
            setRePasswordColor('green');
        }
        else{
            setErrorRePassword('รหัสผ่านไม่ตรงกัน');
            setRePasswordColor('red');
        }
    }

    return(
        <div className='container'>
            <form className='form' onSubmit={validateForm}>
                <h2 style={{textAlign:"center",margin:"0 0 0 20px"}}>แบบฟอร์มลงทะเบียน</h2>
                <div className='form-control'>
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" value={userName} onChange={(e)=>{
                        setUserName(e.target.value);
                    }} style={{borderColor:userNamecolor}}/>
                    <small style={{color:userNamecolor}}>{errorUsername}</small>
                </div>

                <div className='form-control'>
                    <label>อีเมล</label>
                    <input type="email" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} style={{borderColor:emailColor}}/>
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>

                <div className='form-control'>
                    <label>รหัสผ่าน</label>
                    <input type="password" value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} style={{borderColor:passwordColor}} />
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>

                <div className='form-control'>
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" value={repassword} onChange={(e)=>{
                        setRepassword(e.target.value)
                    }} style={{borderColor:rePasswordColor}} />
                    <small style={{color:rePasswordColor}}>{errorRePassword}</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    )
}

export default FormComponent