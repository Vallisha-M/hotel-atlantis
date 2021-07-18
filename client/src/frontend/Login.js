import "./css/login.css";
import "./css/loading.css";
import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import load from "./img/loading.gif";
const Login = () => {
	const [pass, setPass] = useState();
	const [email, setEmail] = useState();
	var res = { isAllowed: false };

	let history = useHistory();

	async function check() {
		const params = {
			email: email,
			password: pass,
		};
		console.log(params);

		var flag = false;
		$(".loading").css("display", "block");
		await axios

			.post(
				"https://hotel-atlantis-project.herokuapp.com/users/login",
				params
			)
			.then((response) => {
				$(".loading").css("display", "none");
				res = response.data;
				flag = Boolean(res.isAllowed);
			})
			.catch((error) => {
				$(".loading").css("display", "none");
				alert(error);
				console.log(error);
			});
		console.log(flag);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		await check().then(() => {
			var url_var = "/";

			var patt =
				/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
			var result = email.match(patt);
			var spaceFlag = true;
			if (result != null)
				spaceFlag = true ? result.indexOf(" ") > -1 : false;
			{
				if (spaceFlag || result == null) {
					$(".lmain").css("height", 310);
					url_var = "/unvailablelogin";
					$("#email").css("border-color", "red");
					$("#email").css("background-color", "rgba(255,0,0,0.3)");
					document.getElementById("fail1").innerHTML =
						"Invalid email";
					e.preventDefault();
				} else {
					$(".lmain").css("height", 285);
					$("#email").css("border-color", "#ffc800");
					$("#email").css("background-color", "white");
					document.getElementById("fail1").innerHTML = null;
				}
			}
			{
				if (
					((res.isAllowed != null && res.isAllowed == false) ||
						res.isAllowed == null) &&
					url_var == "/"
				) {
					url_var = "/unvailablelogin";
					$(".lmain").css("height", 310);
					document.getElementById("fail2").innerHTML =
						"Password or email is wrong";
					$("#password").css("border-color", "red");
					$("#password").css("background-color", "rgba(255,0,0,0.3)");
					$("#email").css("border-color", "red");
					$("#email").css("background-color", "rgba(255,0,0,0.3)");
					e.preventDefault();
				} else {
					$(".lmain").css("height", 285);

					$("#email").css("border-color", "#ffc800");
					$("#email").css("background-color", "white");
					document.getElementById("fail2").innerHTML = null;

					$("#password").css("border-color", "#ffc800");
					$("#password").css("background-color", "white");
				}
			}
			{
				if (pass == "") {
					url_var = "/unvailablelogin";
					e.preventDefault();
				}
			}
			if (url_var === "/") {
				localStorage.setItem("loggedIn", res.isAllowed);
				e.preventDefault();
			}

			if (url_var == "/") {
				localStorage.setItem("email", email);
				localStorage.setItem("token", res.token);
				var proceed = localStorage.getItem("proceed");
				if (proceed != null && proceed != "null") {
					history.push(proceed);
					localStorage.removeItem("proceed");
				} else {
					history.push("/");
				}
			}
		});
	}

	return (
		<div>
			<Helmet>
				<title>Hotel Atlantis | Login</title>

				<meta charset="utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>

				<link
					href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap"
					rel="stylesheet"
				/>

				<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

				<link
					rel="stylesheet"
					href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
				/>
				<link
					href="http://fonts.googleapis.com/css?family=Cookie"
					rel="stylesheet"
					type="text/css"
				/>
			</Helmet>

			<body id="lbody">
				<div className="loverlay">
					&nbsp;&nbsp;
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<div class="loading" id="loading">
						<img class="load" src={load} />
					</div>
					<div className="lmain">
						<div style={{ fontSize: "30px", paddingTop: "8px" }}>
							Login
						</div>
						<br />
						<form
							id="login"
							className="login"
							name="login"
							onSubmit={handleSubmit}
							action={"http://localhost:3000/"}
						>
							<div style={{ fontSize: "18px" }}>
								E-mail&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
								<input
									type="text"
									id="email"
									name="email"
									placeholder="username@example.domain"
									onChange={(e) =>
										setEmail(e.target.value.toLowerCase())
									}
									required
								/>
							</div>
							<div id="fail1" />
							<br />
							<div style={{ fontSize: "18px" }}>
								Password :
								<input
									type="text"
									id="password"
									name="password"
									placeholder="Password"
									onChange={(e) => setPass(e.target.value)}
									required
								/>
							</div>
							<div id="fail2" />
							<div
								style={{
									paddingTop: "18px",
									paddingBottom: "9px",
								}}
							>
								<input type="submit" defaultValue="Login" />

								<div id="signup">
									Don't have an account?&nbsp;
									<a href="signup">Sign Up</a>
								</div>
								<br />
								<div id="signup">
									<a href="forgot">Forgot Password</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</body>
		</div>
	);
};

export default Login;
