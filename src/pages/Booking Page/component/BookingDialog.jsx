const BookingDialog = (choosenSeat) => {
	return (
		<div className="Booking-review">
			<h2>Booking Review</h2>
			<div className="Seat-review">
				{choosenSeat.map((element) => (
					<div>
						<h3>{element.class}</h3>
						<h3>{element.seat_number}</h3>
						<h3>{element.price}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default BookingDialog;
