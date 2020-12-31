import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signUp } from "../../services/auth";
import "./SignUpForm.css";

const SignUpForm = ({ authenticated, setAuthenticated }) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	const onSignUp = async (e) => {
		e.preventDefault();
		if (password === repeatPassword) {
			const user = await signUp(username, email, password);
			if (!user.errors) {
				setAuthenticated(true);
			}
		}
	};

	const updateUsername = (e) => {
		setUsername(e.target.value);
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	const updateRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

	if (authenticated) {
		return <Redirect to="/" />;
	}

	return (
		<div className="signup-form-div h-100vh pattern-cross-dots-xl yellow-light bg-yellow flex justify-center items-center bg-fixed">
			<form
				onSubmit={onSignUp}
				className="signup-form animate__animated animate__bounceInUp"
			>
				<div className="input-wrapper">
					<h1 className="form-title">first_draft</h1>
					<h3 className="form-sub">Sign Up</h3>
					<label>Username</label>
					<input
						type="text"
						className="input"
						name="username"
						onChange={updateUsername}
						value={username}
					></input>
				</div>
				<div className="input-wrapper">
					<label>Email</label>
					<input
						className="input"
						type="text"
						name="email"
						onChange={updateEmail}
						value={email}
					></input>
				</div>
				<div className="input-wrapper">
					<label>Password</label>
					<input
						className="input"
						type="password"
						name="password"
						onChange={updatePassword}
						value={password}
					></input>
				</div>
				<div className="input-wrapper">
					<label>Confirm Password</label>
					<input
						className="input"
						type="password"
						name="repeat_password"
						onChange={updateRepeatPassword}
						value={repeatPassword}
						required={true}
					></input>
				</div>
				<button className="signup-button" type="submit">
					Sign Up
				</button>
				<p className="cta-p">
					Have an account?{" "}
					<a className="cta-a" href="/login">
						Sign in
					</a>
				</p>
			</form>
		</div>
	);
};

export default SignUpForm;
