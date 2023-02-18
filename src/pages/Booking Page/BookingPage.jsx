import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeSeats } from "../../redux/reducer";
import { supabase } from "../../supabaseClient";
import "./BookingPage.css";
import BookingDialog from "./component/BookingDialog";

const BookingPage = () => {
	const dispatch = useDispatch();
	const seatsState = useSelector((state) => state?.seat?.seat);
	const [choosenSeat, setChoosenSeat] = useState([]);
	const [showBookReview, setShowBookReview] = useState(false);
	const getSeats = async () => {
		const seats = await supabase.from("seats").select();
		dispatch(storeSeats(seats));
		return seats;
	};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const seatsData = useMemo(() => getSeats().then(), []);

	seatsData.then((element) => console.log(element));

	useEffect(() => {
		if (choosenSeat.length !== 0) {
			setShowBookReview(true);
		}
	}, [choosenSeat]);

	const HandleClickSeat = (seatNumber) => {
		setChoosenSeat([...choosenSeat, seatNumber]);
	};
	const planeSeat = (data) => (
		<div className="Plane-rows">
			<div
				className="Plane-seat"
				onClick={() => HandleClickSeat(data?.seat_number)}
			>
				<h3>{data?.seat_number}</h3>
				<h3>{data?.class}</h3>
			</div>
		</div>
	);
	return (
		<div className="Booking">
			<h1>Booking Seat Number</h1>
			<div className="Booking-plane-seats">
				{seatsState?.data.map((element) => planeSeat(element))}
			</div>

			{showBookReview && <BookingDialog choosenSeat={seatsData?.data} />}
		</div>
	);
};

export default BookingPage;
