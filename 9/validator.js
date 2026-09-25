const validateUser = (user) => {

    if (typeof user.name !== "string") {
        return {
            valid: false,
            message: "Name must be a string."
        };
    }

    if (typeof user.age !== "number" || user.age <= 18) {
        return {
            valid: false,
            message: "Age must be a number greater than 18."
        };
    }

    if (typeof user.email !== "string" || !user.email.includes("@")) {
        return {
            valid: false,
            message: "Email must contain @."
        };
    }

    return {
        valid: true,
        message: "User payload is valid."
    };
};

module.exports = validateUser;