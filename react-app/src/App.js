import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import { authenticate } from "./services/auth";
import DefaultHeader from "./components/DefaultHeader";
import "./index.css";
import Story from "./components/Page/Story";
import CreateStory from "./components/Page/CreateStory";
import UsersList from "./components/Page/UserList";
import Footer from "./components/Footer";
import MostRecent from "./components/MostRecent";

function App() {
	const [authenticated, setAuthenticated] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(async () => {
			const user = await authenticate();
			if (!user.errors) {
				setAuthenticated(true);
			}
			setLoaded(true);
		})();
	}, []);

	if (!loaded) {
		return null;
	}

	return (
		<BrowserRouter>
			<NavBar
				setAuthenticated={setAuthenticated}
				authenticated={authenticated}
			/>

			<Switch>
				<Route path="/login" exact={true}>
					<LoginForm
						setAuthenticated={setAuthenticated}
						authenticated={authenticated}
					/>
					<ProtectedRoute
						path="/users/:userId"
						exact={true}
						authenticated={authenticated}
						setAuthenticated={setAuthenticated}
					/>
				</Route>
				<Route path="/sign-up" exact={true}>
					<SignUpForm
						authenticated={authenticated}
						setAuthenticated={setAuthenticated}
					/>
				</Route>
				<ProtectedRoute
					path="/users/:userId"
					exact={true}
					authenticated={authenticated}
				>
					<User />
				</ProtectedRoute>
				<Route path="/" exact={true}>
					<DefaultHeader
						authenticated={authenticated}
						className="header"
					/>
					<MostRecent />
					<Footer />
				</Route>
				<Route path="/stories/:id">
					<Story authenticate={authenticate} />
				</Route>
				<Route path="/stories">
					<CreateStory authenticate={authenticate} />
					<Footer />
				</Route>
				<Route path="/users" component={UsersList} />
				<Route path="/users/:id" component={User} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
