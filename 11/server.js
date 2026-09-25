const http = require("http");
const fs = require("fs");

const PORT = 3001;
const FILE_NAME = "students.json";

const server = http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/students") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {

            try {

                const student = JSON.parse(body);

                student.registeredAt = new Date().toISOString();

                let students = [];

                if (fs.existsSync(FILE_NAME)) {

                    const data = fs.readFileSync(FILE_NAME, "utf8");

                    if (data.trim() !== "") {
                        students = JSON.parse(data);
                    }
                }

                students.push(student);

                fs.writeFileSync(
                    FILE_NAME,
                    JSON.stringify(students, null, 4)
                );

                res.writeHead(201, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    message: "Student registered successfully.",
                    student: student
                }));

            } catch (error) {

                res.writeHead(400, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    message: "Invalid JSON data."
                }));
            }
        });

        return;
    }

    res.writeHead(404, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        message: "Route not found."
    }));
});


server.listen(PORT, () => {
    console.log(`Student Registration Server running on http://localhost:${PORT}`);
});