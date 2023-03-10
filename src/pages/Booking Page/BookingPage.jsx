import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeSeats } from "../../redux/reducer";
import { supabase } from "../../supabaseClient";
import "./BookingPage.css";
import BookingDialog from "./component/BookingDialog";
import InfoDialog from "./component/InfoDialog";

const BookingPage = () => {
	const dispatch = useDispatch();
	const seatsState = useSelector((state) => state?.seat?.seat);
	const [choosenSeat, setChoosenSeat] = useState([]);
	const [showInfoDialog, setShowInfoDialog] = useState(false);
	const [showBookDialog, setShowBookDialog] = useState(false);
	const getSeats = async () => {
		const seats = await supabase.from("seats").select();
		dispatch(storeSeats(seats));
		return seats;
	};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const seatsData = useMemo(() => getSeats().then(), []);

	seatsData.then((element) => console.log(element));

	const HandleClickSeat = (seatData) => {
		setChoosenSeat(seatData);
	};

	const backgroundSeatColor = (data) => {
		if (data?.occupied === true) {
			return { backgroundColor: "#FF5733" };
		}
	};

	const handleBooking = async (data) => {
		await supabase
			.from("seats")
			.update({ occupied: true })
			.eq("seat_number", data?.seat_number);
		seatsData.then((element) => element);
	};

	useEffect(() => {
		if (choosenSeat.length !== 0) {
			if (choosenSeat?.occupied === true) {
				setShowInfoDialog(true);
				setShowBookDialog(false);
			} else {
				setShowInfoDialog(false);
				setShowBookDialog(true);
			}
		}
	}, [choosenSeat, seatsData]);
	const planeSeat = (data) => (
		<div className="Plane-rows">
			<div
				className="Plane-seat"
				onClick={() => HandleClickSeat(data)}
				style={backgroundSeatColor(data)}
			>
				<h3>{data?.seat_number}</h3>
				<h3>{data?.class}</h3>
			</div>
		</div>
	);
	const handleClose = () => {
		window.close();
		setShowInfoDialog(false);
		setShowBookDialog(false);
	};
	return (
		<div className="Booking">
			<h1>Booking Seat Number</h1>
			<div className="Booking-plane-seats">
				{seatsState?.data?.map((element) => planeSeat(element))}
			</div>
			{showBookDialog && (
				<BookingDialog
					choosenSeat={choosenSeat}
					handleBooking={handleBooking}
					handleClose={handleClose}
				/>
			)}
			{showInfoDialog && (
				<InfoDialog choosenSeat={choosenSeat} handleClose={handleClose} />
			)}
		</div>
	);
};

export default BookingPage;
