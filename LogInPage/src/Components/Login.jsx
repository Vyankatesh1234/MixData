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
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px',margin: '0 auto',padding: '20px',border: '1px solid #ccc',
                borderRadius: '5px',boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',backgroundColor: 'black',
            }}
        >
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', }} />
                {errors.email && <span style={{ color: '#ff0000', fontSize: '14px', marginTop: '5px' }}>{errors.email}</span>}
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange}
                    required style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', }} />
                {errors.password && <span style={{ color: '#ff0000', fontSize: '14px', marginTop: '5px' }}>{errors.password}</span>}
            </div>

            <button type="submit" style={{
                backgroundColor: '#007bff', color: '#fff', padding: '10px', border: 'none',
                borderRadius: '5px', cursor: 'pointer',
            }}>
                Login
            </button>
        </form>
    );
};

export default LoginForm;

