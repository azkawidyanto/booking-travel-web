const InfoDialog = (props) => {
	console.log(props?.choosenSeat);
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
			<button onClick={props.handleClose}>Close</button>
		</div>
	);
};

export default InfoDialog;
