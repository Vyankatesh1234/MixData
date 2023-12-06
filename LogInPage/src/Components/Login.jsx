import { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
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
        if (!formData.email) {
            newErrors.email = 'Email is required';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log('Form Data:', formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-10 rounded-md' style={{ maxWidth: '400px',margin: '0 auto',padding: '20px',border: '1px solid #ccc',
                borderRadius: '15px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}
        >
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color:'white', textAlign: 'left' ,fontSize: '20px'}}>Email:</label>
                <input type="email" id="email" name="email" placeholder='Please enter your E-Mail' required value={formData.email} onChange={handleInputChange}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', borderRadius:'10px' }} />
                {errors.email && <span style={{ color: '#ff0000', fontSize: '14px', marginTop: '5px' }}>{errors.email}</span>}
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color:'white',textAlign: 'left' ,fontSize: '20px' }}>Password:</label>
                <input type="password" id="password" name="password" placeholder='Please enter your Password' value={formData.password} onChange={handleInputChange}
                    required style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', borderRadius:'10px'}} />
                {errors.password && <span style={{ color: '#ff0000', fontSize: '14px', marginTop: '5px' }}>{errors.password}</span>}
            </div>

            <button type="submit" style={{
                backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none',
                borderRadius: '10px', cursor: 'pointer', width: '88px', fontSize: '20px', textAlign: 'center'
            }}>
                Login
            </button>
        </form>
    );
};

export default LoginForm;

