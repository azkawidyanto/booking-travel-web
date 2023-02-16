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
					<h2>{`${row} A`}</h2>
				</div>
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} B`)}
					id="B"
				>
					<h2>{`${row} B`}</h2>
				</div>
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} C`)}
					id="C"
				>
					<h2>{`${row} C`}</h2>
				</div>
			</div>
			<div className="Middle-seat">
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} D`)}
					id="D"
				>
					<h2>{`${row} D`}</h2>
				</div>
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} E`)}
					id="E"
				>
					<h2>{`${row} E`}</h2>
				</div>
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} F`)}
					id="F"
				>
					<h2>{`${row} F`}</h2>
				</div>
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} G`)}
					id="G"
				>
					<h2>{`${row} G`}</h2>
				</div>
			</div>
			<div className="Right-seat">
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} H`)}
					id="H"
				>
					<h2>{`${row} H`}</h2>
				</div>
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} I`)}
					id="I"
				>
					<h2>{`${row} I`}</h2>
				</div>
				<div
					className="Plane-seat"
					onClick={() => HandleClickSeat(`${row} J`)}
					id="J"
				>
					<h2>{`${row} J`}</h2>
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
					{choosenSeat.map((element) => (
						<h3>{element}</h3>
					))}
				</div>
			)}
		</div>
	);
};

export default BookingPage;
