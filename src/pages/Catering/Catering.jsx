import { StyleSheetContext } from "styled-components";
import styles from "./Catering.module.css";

export default function Catering() {
	console.log("catering");
	return (
		<section className={styles["section"]}>
			<form className={styles["form"]}>
				<h1 className={styles["title"]}>catering</h1>
				<div className={styles["info-div"]}>
					<p className={styles["info"]}>
						We recommend 72 hour notice. Please note that a submission is not a
						confirmation!
						<br />
						<br />
						You will receive a confirmation email.
					</p>
				</div>

				<div className={styles["sub-form-div"]}>
					<div className={styles["input-div"]}>
						<label className={styles["label"]} htmlFor="firstName">
							First Name
						</label>
						<input
							className={styles["input"]}
							type="text"
							id="firstName"
							name="firstName"
							required
						/>
					</div>

					<div className={styles["input-div"]}>
						<label className={styles["label"]} htmlFor="firstName">
							Last Name
						</label>
						<input
							className={styles["input"]}
							type="text"
							id="firstName"
							name="firstName"
							required
						/>
					</div>

					<div className={styles["input-div"]}>
						<label className={styles["label"]} htmlFor="firstName">
							Email
						</label>
						<input
							className={styles["input"]}
							type="email"
							id="email"
							pattern=".+@example\.com"
							size="30"
							required
						/>
					</div>

					<div className={styles["input-div"]}>
						<label className={styles["label"]} htmlFor="firstName">
							Phone Number
						</label>
						<input
							className={styles["input"]}
							type="tel"
							id="phone"
							name="phone"
							placeholder="xxx-xxx-xxxx"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							required
						/>
					</div>

					<div className={styles["input-div"]}>
						<label className={styles["label"]} htmlFor="firstName">
							Date
						</label>
						<input
							className={styles["input"]}
							type="date"
							id="date"
							name="date"
							required
						/>
					</div>

					<div className={styles["input-div"]}>
						<label className={styles["label"]} htmlFor="firstName">
							Time
						</label>
						<input
							className={styles["input"]}
							type="time"
							id="time"
							name="time"
							required
						/>
					</div>
				</div>
				<textarea
					className={styles["text-area"]}
					id="message"
					name="message"
					placeholder="tell us about your order. ex what you'd like to order and the quantities"
					required
				/>

				<button className={styles["submit-btn"]}>Submit</button>
			</form>
		</section>
	);
}
