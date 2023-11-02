
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import BookingRow from "./BookingRow";

const Bookings = () => {
    const { user, } = useContext(AuthContext)

    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email= ${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    
    const handleDelete = id =>{
        const proceed = confirm('Aer You sure you want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:"DELETE",
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data)
                if (data.deleltedCount > 0) {
                   alert('deleted Count succesfully') 
                   const remaining = bookings.filter(booking =>booking._id !==id)
                   setBookings(remaining)
                }
            })
        }
    }

    const handleBookingConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"PATCH",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount > 0) {
                // updated state
                const remaining = bookings.filter(booking=>booking._id !== id)
                const updated = bookings.find(booking=>booking._id === id)
                updated.status = 'confirm'
                const newBookings =[ updated,...remaining]
                setBookings(newBookings)
            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl">Your Booking:{bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id} booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;