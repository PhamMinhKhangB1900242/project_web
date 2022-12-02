const express = require("express");
const cors = require("cors");
const app = express();
const contactsRouter = require("./app/routes/contact.route");
const contactsRouterGV = require("./app/routes/contact.routegv");
const ApiError = require("./app/api-error");


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome "});
});
app.use("/api/Sinhvien", contactsRouter);
app.use("/api/Giaovien", contactsRouterGV);


app.use((req, res, next) => {
   
    return next(new ApiError(404, "Resource not found"));
});


app.use((ApiError, req, res, next) => {
   
    return res.status(ApiError.statusCode || 500).json({
        message: ApiError.message || "Internal Server Error",
    });
});

module.exports = app;


















