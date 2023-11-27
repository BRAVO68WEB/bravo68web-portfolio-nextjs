import { useState } from "react";
import { ContactStyle } from "./contact.style";
import axios from "handlers/axios";

function Contact() {
	const [input, setInput] = useState({
		senderName: "",
		email: "",
		message: "",
		topic: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	function changeInput(evt) {
		const { name, value } = evt.target;
		setInput({
			...input,
			[name]: value,
		});
	}
	function submitForm(evt) {
		evt.preventDefault();
		axios.post("/contactme/postQuery", input);
		setIsSubmitted(true);
	}
	return (
		<ContactStyle>
			<div className="form-group-main row">
				<div className="column">
					<div className="prewritten-info">
						<div className="prewritten-info-content">
							<h1>
								<u>Contact Me</u>
							</h1>
							<p>
								If you have any questions, feel free to contact
								me. I am always open to discussing new projects
								and opportunities.
							</p>
							<br />
							<p>
								<h3>
									<strong>Email:</strong>
								</h3>
								<a href="mailto:portfolio@b68.dev">
									hi@b68.dev
								</a>
							</p>
							<br />
							<p>
								<h3>
									<strong>Phone:</strong>
								</h3>
								<a href="tel:+916291559872">+91 6291559872</a>
							</p>
							<br />
							<p>
								<h3>
									<strong>Discord:</strong>
								</h3>
								<a href="https://discord.com/users/457039372009865226">
									bravo68web
								</a>
							</p>
							<br />
							<p>
								<h3>
									<strong>Extra:</strong>
								</h3>
								<a href="https://calendly.com/bravo68web">
									Calendly
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="column">
					<form onSubmit={submitForm} className="contact-us">
						<div className="form-group">
							<label htmlFor="email">Email Address </label>
							<br />
							<input
								name="email"
								required
								value={input.email}
								onChange={changeInput}
								type="email"
								className="form-control"
								id="email"
								placeholder="Your email"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="senderName">Your Name </label>
							<br />
							<input
								name="senderName"
								value={input.senderName}
								onChange={changeInput}
								type="text"
								className="form-control"
								id="senderName"
								placeholder="Your Name"
							/>
						</div>
						<div className="form-group">
							<label htmlFor="topic">Subject </label>
							<br />
							<input
								name="topic"
								value={input.topic}
								onChange={changeInput}
								type="text"
								className="form-control"
								id="topic"
								placeholder="I want to talk about..."
							/>
						</div>
						<div className="form-group">
							<label htmlFor="senderName">Message </label>
							<br />
							<textarea
								name="message"
								value={input.message}
								onChange={changeInput}
								type="text"
								className="form-control"
								id="message"
								placeholder="Your message"
							/>
						</div>
						<button
							type="submit"
							className="btn btn-primary"
							disabled={isSubmitted}
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</ContactStyle>
	);
}

export default Contact;
