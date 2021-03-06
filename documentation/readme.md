## Getting Started

If you just want to get started developing SchoolNet, there is much more information in the main [readme.md](https://github.com/mitkonikov/SchoolNet/blob/master/readme.md) file. We are actively writing the documentation of this project.

---
### Source Folder Structure

The main entry points are:
  - index.ts
  - ZNAM.ts

Built-in sub-apps are:
  - ZBORAPI.ts
  - PILOTAPI.ts

The folder structure:
  - apps (sub-app logic) [1](#1)
  - play (module-app logic)
  - auth (authentication logic)
  - database (common database connectors)
  - deploy (pm2 setup)
  - entity & resolvers (for TypeORM and GraphQL)

Other Typescript Support Files are:
  - Dynamo.ts
  - types.ts

---
# API Functions

### **Back-end controllers passed in each game**:

Every game is supplied with the connection to the 
  - [Database Controller](#database-controller---databasecontrollerjs) - which provides an interface with the whole database, so the game can display some information about the user;
  - [Game Socket](#game-socket---serverplaygamesocketjs) - provides the game, the ability to communicate with the players in real time;
  - [Game Engine](#game-engine---serverplaygameenginejs) - provides build-in functions that many games can use without rewritting them
  - [Demo Logger](#demo-logger---serverplaydemologgerjs) - provides the logging capabilities in the demo file (pay attention: this only gets access to the demo file, not the records database) - *TODO: Take this off the API*

There are two types of logs:
  - [records](#records) - *(they are the same as states in React)* - low latency in-database logs that are also used to keep the state of the game. `Example: player-1 score 1000`
  - [demo](#demo-template) - file in the `./server/demos` directory that is used for storing the finished game log

### **Database Controller** - (databaseController.js)

This is deprecated. We changed the database handling to GraphQL.

    TODO: Deny access to some functions according to privilages.
 - `Connect(databases) : function` - *(off-limits)*
 - `DB(database) : function`
    - `network : obj`
        - `table: function`
            - `getInfoMe`
            - `getUserByNickname`
            - `getInfoUser`
            - `searchUsers`
            - `getStatistics`
            - `followUser`
            - `getCurrentGame`
                - `Info`
                    - `whereID`
                    - `whereDemoID`
                - `TeacherID`
                - `getClassID`
                - `getStartedGames`
                - `setPrivacy`
                - `setState`
            - `deleteCurrentGame`
            - `getStudentIDs`
                - `inClass`
            - `getDisplayName`
                - `in`
            - `getAllStudentRequests`
            - `getAvailableGames`
            - `playGame`
            - `saveGame`
            - `Game`
            - `getAvailableGames`
            - `Class`
                - `getAll`
                    - `whereTeacher`
                - `whereStudentID`
                - `add`
            - `Student`
                - `getOnlineStudents`
                - `studentsInfoInClass`
                - `bestStudentsInfoInClass`

### **Game Engine** - (server/play/GameEngine.js)
  - ### [Full Documentation](./GameEngine.md)
  - `getTime`
  - `setUpGame`
  - `record`
  - `recordLines`
  - `updateRecord`
  - `userJoins`
  - `userLeaves`

### **Game Socket** - (server/play/gameSocket.js)
  - `mainSocket`
  - `ioControl`
    - `of : function`

### **Demo Logger** - (server/play/demoLogger.js)
    NOTE: Still in contruction!
  - `setUpDemo`
  - `getDemoFile`
  - `finishLog`

## Records
---
Every current game gets its own **records table** in the *records database*. The table name is generated by the following code: 
```javascript
    Demo_ID = CURRENT_DATE_TIME_TRIMMED + "_" + UUID
```
This **Demo_ID** is stored in the **tbl_games_current** and is **read-only**. 

### How to read and write records

Each record consists of:
 - Timestamp
 - Source - this is the source of the records, it can be:
   - `"server"` - (default value)
   - `"teacher"` - the host of the game
   - `[any player ID]`
 - Command
 - Data

## Demo Template
---
### How to create a demo template for your game?
The following scheme should be used as a starting point when creating a demo template:
```json
  {
    "header"    : { ... },
    "settings"  : { ... },
    "levels"    : { ... },
    "log"       : { ... }
  }
```

---
#### 1

Sub-Apps we call the apps that are developed by our team. The Module-Apps are the apps that are developed by the users.