# Documentation for our Game Engine

The Game Engine is simple a small module that has deals with the records (states) of the games currently playing and it has some useful built-in functions.

## Required Function Calls
 - [setUpGame](#setupgame--socket-callback-)
 - [GameOver](#gameover)

<br>

## Overview
  - [getTime](#gettime-)
  - [setUpGame](#setupgame--socket-callback-)
  - [record](#record--demotable-logdata-callback-)
  - `recordLines`
  - `updateRecord`
  - `userJoins`
  - `userLeaves`
  - [GameOver](#gameover)

<br>

### **`getTime ()`**
Function that returns string compatible time for storage in the records. Mostly used for timestamping the records.

<br>

### **`setUpGame ( socket, callback )`**
> Required Function

Required function that sets up a lot of initial parameters about the game such as the demo table.

 - **socket** - `< gameSocket.on("connection", (socket) => {}) >`
 - **callback**
    - `Demo_ID`       <span style="color: #239B56; font-family: Consolas, monospace; font-weight: bold;">\<string\><span>
    - `firstTime`     <span style="color: #239B56; font-family: Consolas, monospace; font-weight: bold;">\<boolean\><span>

Example usage: 
```javascript
GameEngine.setUpGame(socket, (Demo_ID, firstTime) => { ... });
```

<br>

### **`record ( demoTable, logData, callback )`**
Remember some state in the database. The record/state is clearly defined as a json format of object, consisting of 3 Containers:
 - **Source** - To whom this record relates?
 - **Command** - What is the command, purpose or name of this record?
 - **Data** - Some additional data.

Parameters:
 - **demoTable**
 - **logData**
    ```javascript
        let logData = {
            Source:     "",
            Command:    "",
            Data:       ""
        }
    ```
 - **callback**

<br>

### **`recordLines ( demoTable, logData, callback )`**
The same function as [`record()`](#record--demotable-logdata-callback-), only with multiple lines of log data.

Parameters:
 - **demoTable**
 - **logData**
    ```javascript
        let logData = {
            { 
                Source:     "",
                Command:    "",
                Data:       ""
            },
            { 
                Source:     "",
                Command:    "",
                Data:       ""
            },
            ...
        }
    ```
 - **callback**


<br>

### **`updateRecord ( demoTable, logData, callback )`**
Function to update certain record's data.

Parameters:
 - **demoTable**
 - **logData**
    ```javascript
        let logData = {
            Source:     "",
            Command:    "",
            Data:       ""
        }
    ```
 - **callback**
    - `success` <span style="color: #239B56; font-family: Consolas, monospace; font-weight: bold;">\<boolean\><span>

<br>

### **`userJoins`**
Built-in way of recording when a user has joined the game.

Parameters:
 - **user**
 - **student**
 - **demoTable**
 - **callback**

<br>

### **`userLeaves`**
Built-in way of recording when a user has left the game.

Parameters:
 - **user**
 - **student**
 - **demoTable**
 - **callback**

<br>

### **`GameOver`**

<br>

> Documentations in construction...