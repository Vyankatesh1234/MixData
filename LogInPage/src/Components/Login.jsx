import { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        uname: '',
        email: '',
        cno: '',
        password: '',
        cpassword: '',
        gender: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        uname: '',
        email: '',
        cno: '',
        password: '',
        cpassword: '',
        gender: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
        if (!formData.uname) {
            newErrors.uname = 'User name is required';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
        }
        if (!formData.cno) {
            newErrors.cno = 'Contact number is required';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }
        if (!formData.cpassword) {
            newErrors.cpassword = 'Confirm Password is required';
        }
        if (!formData.gender) {
            newErrors.gender = 'Gender is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log('Form Data:', formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-10 rounded-md' style={{
            maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc',
            borderRadius: '15px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        }}
        >
        <div style={{ marginBottom: '5px' }}>
            <h1 style={{ fontSize:'30px',fontFamily:'sans-serif',color:'white'}}>Registration Page</h1>
        </div>
            <div style={{ marginBottom: '2px' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: 'white', textAlign: 'left', fontSize: '20px' }}>Name :</label>
                <input type="text" id="name" name="name" placeholder='Please enter your Name' required value={formData.name} onChange={handleInputChange}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', borderRadius: '10px' }} />
                {errors.name && <span style={{ color: '#ff0000', fontSize: '14px', marginTop: '5px' }}>{errors.name}</span>}
            </div>
            <div style={{ marginBottom: '2px' }}>
                <label htmlFor="uname" style={{ display: 'block', marginBottom: '5px', color: 'white', textAlign: 'left', fontSize: '20px' }}>Username :</label>
                <input type="text" id="uname" name="uname" placeholder='Please enter your Username' required value={formData.uname} onChange={handleInputChange}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', borderRadius: '10px' }} />
                {errors.uname && <span style={{ color: '#ff0000', fontSize: '14px', marginTop: '5px' }}>{errors.uname}</span>}
            </div>
            <div style={{ marginBottom: '2px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: 'white', textAlign: 'left', fontSize: '20px' }}>Email :</label>
                <input type="email" id="email" name="email" placeholder='Please enter your E-Mail' required value={formData.email} onChange={handleInputChange}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', borderRadius: '10px' }} />
                {errors.email && <span style={{ color: '#ff0000', fontSize: '14px', marginTop: '5px' }}>{errors.email}</span>}
            </div>
            <div style={{ marginBottom: '2px' }}>
                <label htmlFor="cno" style={{ display: 'block', marginBottom: '5px', color: 'white', textAlign: 'left', fontSize: '20px' }}>Contact Number :</label>
                <input type="number" id="cno" name="cno" placeholder='Please enter your Contact number' required value={formData.cno} onChange={handleInputChange}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', borderRadius: '10px' }} />
                {errors.cno && <span style={{ color: '#ff0000', fontSize: '14px', marginTop: '5px' }}>{errors.cno}</span>}
            </div>
            <div className="form-group flex">
                <label className="text-white block mb-2 mr-4" style={{fontSize: '20px', textAlign: 'left' }}>Gender :</label>
                <div className="flex">
                    <label className="mr-4" style={{fontSize: '17px', color:'white'}}>
                        <input type="radio" name="gender" value="male" onChange={handleInputChange}
                            checked={formData.gender === 'male'} className="mr-3 mt-3" />
                        Male
                    </label>
                    <label style={{fontSize: '17px', color:'white'}}>
                        <input type="radio" name="gender" value="female" onChange={handleInputChange}
                            checked={formData.gender === 'female'} className="mr-2 mt-3" />
                        Female
                    </label>
                </div>
                {errors.gender && <span className="error">{errors.gender}</span>}
            </div>
            <div style={{ marginBottom: '2px' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: 'white', textAlign: 'left', fontSize: '20px' }}>Password :</label>
                <input type="password" id="password" name="password" placeholder='Please enter your Password' value={formData.password} onChange={handleInputChange}
                    required style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', borderRadius: '10px' }} />
                {errors.password && <span style={{ color: '#ff0000', fontSize: '14px', marginTop: '5px' }}>{errors.password}</span>}
            </div>
            <div style={{ marginBottom: '2px' }}>
                <label htmlFor="cpassword" style={{ display: 'block', marginBottom: '5px', color: 'white', textAlign: 'left', fontSize: '20px' }}>Confirm Password :</label>
                <input type="password" id="cpassword" name="cpassword" placeholder='Please enter your Confirm Password' value={formData.cpassword} onChange={handleInputChange}
                    required style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', borderRadius: '10px' }} />
                {errors.cpassword && <span style={{ color: '#ff0000', fontSize: '14px', marginTop: '5px' }}>{errors.cpassword}</span>}
            </div>
            <button type="submit" style={{
                backgroundColor: 'green', color: '#fff', padding: '10px', border: 'none',
                borderRadius: '10px', cursor: 'pointer', width: '130px', fontSize: '20px', textAlign: 'center', margin: '15px'
            }}>
                Registration
            </button>
            <button type="submit" style={{
                backgroundColor: 'orange', color: '#fff', padding: '10px', border: 'none',
                borderRadius: '10px', cursor: 'pointer', width: '70px', fontSize: '20px', textAlign: 'center'
            }}>
                Reset
            </button>
        </form>
    );
};

export default LoginForm;

