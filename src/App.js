import { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import "./index.css";

function App() {
  let [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400" /> Your Appointments
      </h1>
      <Search />
      <AddAppointment />

      <ul className="divide-y divide-gray-400 ">
        {appointmentList.map((appointment) => (
          <AppointmentInfo appointment={appointment} />
        ))}
      </ul>
    </div>
  );
}

export default App;
