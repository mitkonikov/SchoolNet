## Getting Started

If you just want to get started developing SchoolNet, there is much more information in the main `readme.md` file. We are actively writing the documentation of this project.

---
# API Functions

### **Back-end controllers passed in each game**:

Every game is supplied with the connection to the 
  - `Database Controller` - which provides an interface with the whole database, so the game can display some information about the user;
  - `Game Socket` - provides the game, the ability to communicate with the players in real time;
  - `Game Engine` - provides build-in functions that many games can use without rewritting them
  - `Demo Logger` - provides the logging capabilities

There are two types of logs:
  - `records` - *(they are the same as states in React)* - low latency in-database logs that are also used to keep the state of the game; ex: `player-1 score 1000`
  - `demo` - file in the `./server/demos` directory that is used for storing the finished game log

### **Database Controller** - (databaseController.js)
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

### **Game Socket** - (server/play/gameSocket.js)
  - `mainSocket`
  - `ioControl`
    - `of : function`

### **Demo Logger** - (server/play/demoLogger.js)
    NOTE: Still in contruction!
  - `setUpDemo`
  - `getDemoFile`
  - `getLevelInfo`
  - `log`
  - `finishLog`