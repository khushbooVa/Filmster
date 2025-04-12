import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/reducers/login-reducer/LoginReducer';
import { validateEmail, validatePassword } from '../../../config/constants';
import { login } from '../../../redux/slices/login-slice/LoginSlice';
import { useNavigate } from 'react-router';
import { RouterPathName } from '../../../routes/config';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
const navigate=useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validate form fields
    if (name === 'email' && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: 'Enter Valid Email.' }));
    } else if (name === 'email') {
      setErrors((prev) => ({ ...prev, email: '' }));
    }

    if (name === 'password' && !validatePassword(value)) {
      setErrors((prev) => ({
        ...prev,
        password: 'Password must be at least 6 characters long.',
      }));
    } else if (name === 'password') {
      setErrors((prev) => ({ ...prev, password: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({ ...prev, email: 'Email is Required.' }));
    }
    if (!validatePassword(formData.password)) {
      setErrors((prev) => ({
        ...prev,
        password: 'Password is Required.',
      }));
    }
    if (validateEmail(formData.email) && validatePassword(formData.password)) {
      dispatch(login(formData));
       toast.success('Login successful!');
       setTimeout(() => {
        navigate(RouterPathName.home);
      }, 5000);
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer/>
      <div className="row justify-content-center">
        <div className="col-md-5 p-5">
          <div className="card shadow-lg p-4">
            <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email address</label>
                <input
                  type="email"
                  className="form-control p-2"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  
                />
                {errors.email && <div className="text-danger fs-6">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold ">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control p-2"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.password && <div className="text-danger fs-6" >{errors.password}</div>}
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 mb-8 mt-7"
                disabled={errors.email || errors.password}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
