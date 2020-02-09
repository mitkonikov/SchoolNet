# Documentation for our Game Engine

The Game Engine is simple a small module that has deals with the records (states) of the games currently playing and it has some useful built-in functions.

## Required Function Calls
 - [setUpGame](#setUpGame)
 - [GameOver](#GameOver)

### **`getTime ()`**
Function that returns string compatible time for storage in the records. Mostly used for timestamping the records.

### **`setUpGame ( socket, callback )`**
> Required Function

Required function that sets up a lot of initial parameters about the game such as the demo table.

 - **socket** - < `gameSocket.on("connection", (socket) => {})` >
 - **callback**
    - `Demo_ID       <String>`
    - `firstTime     <Bool>`

Example usage: 
```javascript
GameEngine.setUpGame(socket, (Demo_ID, firstTime) => { ... });
```

### **`record ( demoTable, logData, callback )`**

### **`recordLines`**

### **`updateRecord`**

### **`userJoins`**

### **`userLeaves`**

### **`GameOver`**

> Documentations in construction...