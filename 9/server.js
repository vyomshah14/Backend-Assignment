const http = require("http");

const validateUser = require("./validator");

const server = http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/users") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {

            try {

                const user = JSON.parse(body);

                const result = validateUser(user);

                res.writeHead(
                    result.valid ? 200 : 400,
                    {
                        "Content-Type": "application/json"
                    }
                );

                res.end(JSON.stringify(result));

            } catch (error) {

                res.writeHead(400, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    valid: false,
                    message: "Invalid JSON payload."
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


server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});