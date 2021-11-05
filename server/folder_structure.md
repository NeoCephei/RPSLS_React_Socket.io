.{src}
├── controller
│   ├── authController.js      # Handles authentication requests
│   ├── searchController.js    # Handles search queries
│   ├── userController.js      # Handles user profile operations
│   └── ...
├── database
│   ├── db.js                  # Initialize DB connection
│   └── ...
├── middlewares
│   ├── authenticated.js       # Decode and verify JWT token
│   ├── error.js               # Common Error Handler
│   ├── logger.js              # Control logging levels
│   └── ...
├── models
│   ├── roomsModels.js         # DB model for rooms
│   ├── usersModel.js          # DB model for users
│   └── ...
├── schema
│   ├── rooms.js               # DB Schema for rooms
│   ├── users.js               # DB Schema for users
│   └── ...
├── socker
│   ├── roomManager.js         # Socket listeners/emitters handle
│   ├── sockerController.js    # Control socket connections
│   └── ...
├── app.js                     # Entry file for the project
├── env.js                     # Store environment variables
├── routes.js                  # All routes initializer
└── ...