import React, {useState} from 'react'
import login from "../../../assets/ship2.jpg"
import "./authForm.css"
import axios from "axios"
import auth from "./AuthServices/AuthService"
import {Link, useHistory} from "react-router-dom"
import jwt from "jwt-decode"
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const AuthForm = () => {


	const [token, setToken] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [credentials, setCredentials] = useState([])
	const [error, setError] = useState([])

	const history = useHistory()

	let tkt

	const handleEmail = (e) => {
		setEmail(e.target.value)
	}

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}

	const data = {email, password}

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post("http://localhost:8080/api/login", data)
			.then(res => {
				setError(null)
				console.log(res.data)
				tkt = res.data
				localStorage.setItem("token", tkt)
				history.push("/dashboard/home")
			})
			.catch(err => {
				setError(err.response.data)
				console.log(err.response)
			})
		}
		
		return (
			<div className="authform">
			{
				error ? (
					<div className="service-quotation-small-inputs">
						<div className="error-section">
							<FontAwesomeIcon icon={faExclamationTriangle} size="2x"/>
							<p className="error-section-p">{error}</p>
						</div>
					</div>
				): null
			}
				<div className="auth-content">
					<div className="auth-left">
						<img className="auth-form-image" src={login} alt="Rhino jon gold shippment"/>
					</div>
					<form onSubmit={handleSubmit} className="auth-form">
						<div className="form-group">
								<label>Email</label>
								<input
									onChange={handleEmail}
									value={email}
									name="email"
									required
									type="email"
									placeholder="Enter your email here..."
								/>
						</div>
						<div className="form-group">
								<label>password</label>
								<input
								onChange={handlePassword}
								value={password}
								name="password"
								required
								type="password"
								placeholder="Enter your password here..."
								/>
						</div>
						<p className="form-alt-p">
							Forgot your password? <Link to="/reset">Reset now!!</Link>
						</p>
						<br/>
						<button type="submit">Sign in</button>
					</form>
				</div>
			</div>
		)
}

export default AuthForm
