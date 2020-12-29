import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import "./LoginForm.css";

const LoginForm = ({ authenticated, setAuthenticated }) => {
	const [errors, setErrors] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onLogin = async (e) => {
		e.preventDefault();
		const user = await login(email, password);
		if (!user.errors) {
			setAuthenticated(true);
		} else {
			setErrors(user.errors);
		}
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	if (authenticated) {
		return <Redirect to="/" />;
	}

	return (
		<div className="login-form-div h-100vh pattern-cross-dots-xl yellow-light bg-yellow flex justify-center items-center bg-fixed">
			<form onSubmit={onLogin} className="login-form">
				<div>
					{errors.map((error) => (
						<div>{error}</div>
					))}
				</div>
				<div className="input-wrapper">
					<h1 className="form-title">Medium</h1>
					<h3 className="form-sub">Login</h3>
					<label>Email</label>
					<input
						className="input"
						name="email"
						type="text"
						value={email}
						onChange={updateEmail}
					/>
				</div>
				<div className="input-wrapper">
					<label>Password</label>
					<input
						className="input"
						name="password"
						type="password"
						value={password}
						onChange={updatePassword}
					/>
				</div>
				<button type="submit" className="login-button">
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
