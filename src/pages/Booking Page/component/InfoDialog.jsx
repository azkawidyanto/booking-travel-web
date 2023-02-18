const InfoDialog = (choosenSeat) => {
	return (
		<div className="Booking-review">
			<h2>Booking Review</h2>
			<div className="Seat-review">
				{choosenSeat.map((element) => (
					<h3>{element}</h3>
				))}
			</div>
		</div>
	);
};

export default InfoDialog;
