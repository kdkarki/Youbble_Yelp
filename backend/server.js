"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 8080;
const AccessRequestSchema = new mongoose_1.default.Schema({
    userId: String,
    requestedRole: String,
    status: String
});
const AccessRequest = mongoose_1.default.model('AccessRequest', AccessRequestSchema);
// Connect to MongoDB
mongoose_1.default.connect('mongodb://mymongo_instance:27017/mydatabase');
app.use(express_1.default.json());
app.post('/request-access', (req, res) => {
    // Store the user's access request in MongoDB
    const accessRequest = new AccessRequest({
        userId: req.body.userId,
        requestedRole: req.body.requestedRole,
        status: 'Pending'
    });
    /* accessRequest.save(() => {
        //if (err) return res.status(500).send(err);
        return res.status(200).send({ message: 'Access request saved successfully!' });
    }); */
});
app.get('/admin/pending-requests', (req, res) => {
    // Fetch and return all pending access requests for admin users
    AccessRequest.find({ status: 'Pending' }, (err, requests) => {
        if (err)
            return res.status(500).send(err);
        return res.status(200).send(requests);
    });
});
// ... More routes
app.listen(port, () => console.log(`Backend server started on port ${port}`));
