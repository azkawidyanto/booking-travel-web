import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import "./BookingPage.css";

const BookingPage = () => {
	const { data: todos, error } = async () => await supabase.from();

	const [choosenSeat, setChoosenSeat] = useState([]);
	const [showBookReview, setShowBookReview] = useState(false);

	useEffect(() => {
		if (choosenSeat.length !== 0) {
			setShowBookReview(true);
		}
	}, [choosenSeat]);

	const seatNumber = [];

	let seatStart = 1;
	const seatEnd = 60;

	while (seatStart <= seatEnd) {
		seatNumber.push(seatStart);
		seatStart++;
	}

	const HandleClickSeat = (seatNumber) => {
		setChoosenSeat([...choosenSeat, seatNumber]);
	};
	const planeSeat = (row) => (
		<div className="Plane-rows">
			<div className="Left-seat">
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} A`)}
					id="A"
				>
					<h3>{`${row} A`}</h3>
				</div>
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} B`)}
					id="B"
				>
					<h3>{`${row} B`}</h3>
				</div>
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} C`)}
					id="C"
				>
					<h3>{`${row} C`}</h3>
				</div>
			</div>
			<div className="Middle-seat">
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} D`)}
					id="D"
				>
					<h3>{`${row} D`}</h3>
				</div>
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} E`)}
					id="E"
				>
					<h3>{`${row} E`}</h3>
				</div>
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} F`)}
					id="F"
				>
					<h3>{`${row} F`}</h3>
				</div>
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} G`)}
					id="G"
				>
					<h3>{`${row} G`}</h3>
				</div>
			</div>
			<div className="Right-seat">
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} H`)}
					id="H"
				>
					<h3>{`${row} H`}</h3>
				</div>
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} I`)}
					id="I"
				>
					<h3>{`${row} I`}</h3>
				</div>
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} J`)}
					id="J"
				>
					<h3>{`${row} J`}</h3>
				</div>
			</div>
		</div>
	);
	return (
		<div className="Booking">
			<div className="Booking-plane-seats">
				<h1>Booking Seat Number</h1>
				{seatNumber.map((element) => planeSeat(element))}
			</div>

			{showBookReview && (
				<div className="Booking-review">
					<h2>Booking Review</h2>
					<div classname="Seat-review">
						{choosenSeat.map((element) => (
							<h3>{element}</h3>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default BookingPage;
