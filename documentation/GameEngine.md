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
  - [recordLines](#recordlines--demotable-logdata-callback-)
  - [getRecord](#getrecord--demotable-querydata-callback-)
  - [getAllRecords](#getallrecords--demotable-querydata-callback-)
  - [getRecordTime](#getrecordtime--demotable-querydata-callback-)
  - [updateRecord](#updaterecord--demotable-logdata-callback-)
  - [userJoins](#userjoins)
  - [userLeaves](#userleaves)
  - [updateLevel](#updatelevel)
  - [getCurrentLevel](#getcurrentlevel)
  - [GameOver](#gameover)

<br>

### **getTime ()**
Function that returns string compatible time for storage in the records. Mostly used for timestamping the records.

<br>

### **setUpGame ( socket, callback )**
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

### **record ( demoTable, logData, callback )**
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

### **recordLines ( demoTable, logData, callback )**
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

### **getRecord ( demoTable, queryData, callback )**
Function that gets just the record **Data** given a specific **Source** and **Command** in the **queryData** JSON object. *(**queryData** is the same as **logData**)*

Parameters:
 - **demoTable**
 - **queryData**
    ```javascript
        let queryData = {
            Source:     "",
            Command:    "",
        }
    ```
 - **callback**
    - `Data`       <span style="color: #239B56; font-family: Consolas, monospace; font-weight: bold;">\<string\><span>

<br>

### **getAllRecords ( demoTable, queryData, callback )**
Function that gets all the records mathing a certain criteria given in the queryData. *(**queryData** is the same as **logData**)*

Parameters:
 - **demoTable**
 - **queryData**
    ```javascript
        let queryData = {
            Source:     "", // (optional)
            Command:    "",
            Data:       ""  // (optional)
        }
    ```
 - **callback**
    - `rows`       <span style="color: #239B56; font-family: Consolas, monospace; font-weight: bold;">\<array/list\><span>

<br>

### **getRecordTime ( demoTable, queryData, callback )**
Function that gets **Time** and **Data** of a record given a specific **Source** and **Command** in the **queryData** JSON object. *(**queryData** is the same as **logData**)*

Parameters:
 - **demoTable**
 - **queryData**
    ```javascript
        let queryData = {
            Source:     "",
            Command:    "",
        }
    ```
 - **callback**
    - `JSON`       <span style="color: #239B56; font-family: Consolas, monospace; font-weight: bold;">\<json\><span>
        ```javascript
            let response = {
                Time: "",
                Data: ""
            }
        ```

<br>

### **updateRecord ( demoTable, logData, callback )**
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

### **userJoins**
Built-in way of recording when a user has joined the game.

Parameters:
 - **user**
 - **student**
 - **demoTable**
 - **callback**

<br>

### **userLeaves**
Built-in way of recording when a user has left the game.

Parameters:
 - **user**
 - **student**
 - **demoTable**
 - **callback**

<br>

### **updateLevel**

<br>

### **getCurrentLevel**

<br>

### **`GameOver`**

<br>

> Documentations in construction...