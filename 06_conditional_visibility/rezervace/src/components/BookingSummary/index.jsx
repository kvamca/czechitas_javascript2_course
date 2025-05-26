import "./style.css";
import { SummaryHead } from "./SummaryHead";
import { SummaryDetail } from "./SummaryDetail";
import { SummaryServices } from "./SummaryServices";
import { SummaryCancel } from "./SummaryCancel";

const sourceObject = {
  title: "Booking Summary",
  photo: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960",
  name: "Hotel Lesní Zátiší",
  address: "Malohradské skály 347/21",
  city: "Malohradská ves",
  rating: "4.65",
  roomName: "Pokoj 2",
  roomType: "Dvoulůžkový s dětskou přistýlkou",
  roomPrice: "1 800 Kč / noc"
};

export const BookingSummary = () => {
  return (
    <div className="summary">
      <SummaryHead 
        title={sourceObject.title}
        photo={sourceObject.photo}
        name={sourceObject.name}  
        address={sourceObject.address}
        city={sourceObject.city}
        rating={sourceObject.rating}
        roomName={sourceObject.roomName}
        roomType={sourceObject.roomType}
        roomPrice={sourceObject.roomPrice}
        isBooked={true}
      />
      <SummaryDetail />
      <SummaryServices />
      <SummaryCancel />
    </div>
  );
};