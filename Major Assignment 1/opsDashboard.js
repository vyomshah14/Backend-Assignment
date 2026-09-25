/*
  RailConnect Live Ops Dashboard
  Train: 12951 Mumbai Rajdhani Express
*/

// Passenger data
const passengers = [
    {
        pnr: "PNR001",
        passengerName: "Rahul Sharma",
        age: 28,
        gender: "Male",
        coachClass: "1A",
        fare: 4500,
        status: "Confirmed",
        seatNo: "A1-1",
        boardingStation: "Mumbai Central",
        destinationStation: "New Delhi"
    },
    {
        pnr: "PNR002",
        passengerName: "Priya Mehta",
        age: 67,
        gender: "Female",
        coachClass: "2A",
        fare: 3200,
        status: "Confirmed",
        seatNo: "B1-2",
        boardingStation: "Mumbai Central",
        destinationStation: "Vadodara"
    },
    {
        pnr: "PNR003",
        passengerName: "Amit Verma",
        age: 35,
        gender: "Male",
        coachClass: "3A",
        fare: 2100,
        status: "Confirmed",
        seatNo: "C1-3",
        boardingStation: "Surat",
        destinationStation: "New Delhi"
    },
    {
        pnr: "PNR004",
        passengerName: "Sneha Patil",
        age: 72,
        gender: "Female",
        coachClass: "2A",
        fare: 3200,
        status: "Confirmed",
        seatNo: "B1-4",
        boardingStation: "Vadodara",
        destinationStation: "New Delhi"
    },
    {
        pnr: "PNR005",
        passengerName: "Karan Shah",
        age: 24,
        gender: "Male",
        coachClass: "3A",
        fare: 2100,
        status: "Waitlisted",
        seatNo: null,
        boardingStation: "Ratlam",
        destinationStation: "New Delhi"
    },
    {
        pnr: "PNR006",
        passengerName: "Neha Joshi",
        age: 31,
        gender: "Female",
        coachClass: "1A",
        fare: 4500,
        status: "Confirmed",
        seatNo: "A1-5",
        boardingStation: "Kota",
        destinationStation: "New Delhi"
    },
    {
        pnr: "PNR007",
        passengerName: "Ramesh Kumar",
        age: 69,
        gender: "Male",
        coachClass: "3A",
        fare: 2100,
        status: "Confirmed",
        seatNo: "C1-6",
        boardingStation: "Delhi",
        destinationStation: "New Delhi"
    },
    {
        pnr: "PNR008",
        passengerName: "Anjali Singh",
        age: 26,
        gender: "Female",
        coachClass: "2A",
        fare: 3200,
        status: "Waitlisted",
        seatNo: null,
        boardingStation: "Kota",
        destinationStation: "New Delhi"
    }
];


// 1. Occupancy Summary
const getOccupancySummary = (passengers) => {

    const confirmedPassengers = passengers.filter(
        passenger => passenger.status === "Confirmed"
    );

    const waitlistedPassengers = passengers.filter(
        passenger => passenger.status === "Waitlisted"
    );

    return {
        totalPassengers: passengers.length,
        confirmedPassengers: confirmedPassengers.length,
        waitlistedPassengers: waitlistedPassengers.length
    };
};


// 2. Revenue Breakdown
const getRevenueBreakdown = (passengers) => {

    const confirmedRevenue = passengers
        .filter(passenger => passenger.status === "Confirmed")
        .reduce((total, passenger) => total + passenger.fare, 0);

    const waitlistedRevenue = passengers
        .filter(passenger => passenger.status === "Waitlisted")
        .reduce((total, passenger) => total + passenger.fare, 0);

    return {
        confirmedRevenue,
        waitlistedRevenue,
        totalRevenue: confirmedRevenue + waitlistedRevenue
    };
};


// 3. Station Load
const getStationLoad = (passengers) => {

    return passengers.reduce((stationLoad, passenger) => {

        const boardingStation = passenger.boardingStation;

        if (!stationLoad[boardingStation]) {
            stationLoad[boardingStation] = 0;
        }

        stationLoad[boardingStation]++;

        return stationLoad;

    }, {});
};


// 4. Vulnerable Passengers
const getVulnerablePassengers = (passengers) => {

    return passengers.filter(
        passenger => passenger.age >= 60
    );
};


// 5. Waitlist Clearance Plan
const getWaitlistClearancePlan = (passengers) => {

    const waitlistedPassengers = passengers.filter(
        passenger => passenger.status === "Waitlisted"
    );

    return waitlistedPassengers.map((passenger, index) => ({
        priority: index + 1,
        pnr: passenger.pnr,
        passengerName: passenger.passengerName,
        coachClass: passenger.coachClass,
        boardingStation: passenger.boardingStation,
        destinationStation: passenger.destinationStation
    }));
};


// 6. Generate Full Dashboard
const generateFullDashboard = (passengers) => {

    const dashboard = {
        trainNumber: "12951",
        trainName: "Mumbai Rajdhani Express",

        occupancySummary: getOccupancySummary(passengers),

        revenueBreakdown: getRevenueBreakdown(passengers),

        stationLoad: getStationLoad(passengers),

        vulnerablePassengers: getVulnerablePassengers(passengers),

        waitlistClearancePlan: getWaitlistClearancePlan(passengers)
    };

    return dashboard;
};


// Generate dashboard
const dashboard = generateFullDashboard(passengers);


// Display final dashboard
console.log("======================================");
console.log("     RAILCONNECT LIVE OPS DASHBOARD");
console.log("======================================");

console.log("Train Number:", dashboard.trainNumber);
console.log("Train Name:", dashboard.trainName);

console.log("\n--- Occupancy Summary ---");
console.log(dashboard.occupancySummary);

console.log("\n--- Revenue Breakdown ---");
console.log(dashboard.revenueBreakdown);

console.log("\n--- Station Load ---");
console.log(dashboard.stationLoad);

console.log("\n--- Vulnerable Passengers ---");
console.log(dashboard.vulnerablePassengers);

console.log("\n--- Waitlist Clearance Plan ---");
console.log(dashboard.waitlistClearancePlan);