const InfoDialog = (props) => {
	return (
		<div className="Booking-review" style={{ backgroundColor: "white" }}>
			<h2>Info Seat Review</h2>
			<div className="Seat-review">
				<div>
					<h3>{props.choosenSeat.class}</h3>
					<h3>{props.choosenSeat.seat_number}</h3>
					<h3>{props.choosenSeat.price}</h3>
				</div>
			</div>
			<button
				style={{ height: "2vw", width: "3vw" }}
				onClick={props.handleClose}
			>
				Close
			</button>
		</div>
	);
};

export default InfoDialog;
