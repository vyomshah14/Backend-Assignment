const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Student Name: ", (studentName) => {

    rl.question("Enter College ID: ", (collegeId) => {

        rl.question("Enter Vehicle Number: ", (vehicleNumber) => {

            rl.question("Enter Vehicle Type (Bike/Scooter/Car): ", (vehicleType) => {

                rl.question("Enter Registration Date: ", (registrationDate) => {

                    const registration = {
                        studentName: studentName,
                        collegeId: collegeId,
                        vehicleNumber: vehicleNumber,
                        vehicleType: vehicleType,
                        registrationDate: registrationDate
                    };

                    const fileName = "rto_data.json";

                    let registrations = [];

                    if (fs.existsSync(fileName)) {

                        const data = fs.readFileSync(fileName, "utf8");

                        if (data.trim() !== "") {
                            registrations = JSON.parse(data);
                        }
                    }

                    registrations.push(registration);

                    fs.writeFileSync(
                        fileName,
                        JSON.stringify(registrations, null, 4)
                    );

                    console.log("\nVehicle registration saved successfully! ✅");
                    console.log(registration);

                    rl.close();
                });
            });
        });
    });
});