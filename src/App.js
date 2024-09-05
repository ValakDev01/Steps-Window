import { useState } from "react";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

const App = () => {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	// If we don't want to execute our state method immediately, we need to wrap it
	// inside a function because functions can be executed when the concrete event
	// occurred.

	// These conditions are necessary because our paragraph would display texts like
	// Step 4,5,6 etc. The same in the second example, we would have Step -1,-2 etc.

	function handleNext() {
		if (step < 3) setStep((s) => s + 1);
	}

	function handlePrevious() {
		if (step > 1) setStep((s) => s - 1);
	}

	// When we want to update the value of our state variable we should never update
	// this directly. We should always create a function with 1 parameter and then
	// do the actualization of the state variable.

	return (
		<div>
			<button className="close" onClick={() => setIsOpen((is) => !is)}>
				&times;
			</button>
			{isOpen && (
				<div className="steps">
					<div className="numbers">
						<div className={step >= 1 ? "active" : ""}>1</div>
						<div className={step >= 2 ? "active" : ""}>2</div>
						<div className={step >= 3 ? "active" : ""}>3</div>
					</div>

					<p className="message">
						Step {step}: {messages[step - 1]}
					</p>

					{/* we want to make reusable button component using children prop instead these two */}

					<div className="buttons">
						{/* <button
							onClick={handlePrevious}
							style={{ backgroundColor: "#7950f2", color: "#fff" }}
						>
							Previous
						</button>
						<button
							onClick={handleNext}
							style={{ backgroundColor: "#7950f2", color: "#fff" }}
						>
							Next
						</button> */}
						<Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
							<span>👈🏻</span> Previous
						</Button>

						<Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
							Next <span>👉🏻</span>
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;

// When using this component, we can provide any data between its tags because we
// used children property which says, that user can provide any value between
// tags, and they will be displayed properly.

function Button({ textColor, bgColor, onClick, children }) {
	return (
		<button
			onClick={onClick}
			style={{ backgroundColor: bgColor, color: textColor }}
		>
			{children}
		</button>
	);
}
