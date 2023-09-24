"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const accessRequest_1 = require("../database/accessRequest");
const router = express_1.default.Router();
const AccessRequest = mongoose_1.default.model('AccessRequest', accessRequest_1.AccessRequestSchema);
router.post('/request-access', (req, res) => {
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
router.get('/admin/pending-requests', (req, res) => {
    // Fetch and return all pending access requests for admin users
    AccessRequest.find({ status: 'Pending' }, (err, requests) => {
        if (err)
            return res.status(500).send(err);
        return res.status(200).send(requests);
    });
});
exports.default = router;
