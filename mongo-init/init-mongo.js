db = db.getSiblingDB('your_db_name');  // Replace 'your_db_name' with the name of your database

db.users.insert({
    "userId": "auth0|6507b53ba8016ed26fb862a3",
    "email": "kdkarki@gmail.com",
    "roles": ["admin"],
    "__v": 0
});

db.accessrequests.insert({
    "userId": "auth0|6507b53ba8016ed26fb862a3",
    "email": "kdkarki@gmail.com",
    "requestedRole": "admin",
    "status": "Approved",
    "__v": 0,
    "approvedBy": "auth0|6507b53ba8016ed26fb862a3",
    "approvedDate": new Date("2023-10-12T01:39:37.694Z")
});
