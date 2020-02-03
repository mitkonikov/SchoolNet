## Getting Started

If you just want to get started developing SchoolNet, there is much more information in the main `readme.md` file. We are actively writing the documentation of this project.

---
# API Functions

### **Back-end controllers passed in each game**:

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

### **Demo Logger** - (server/demoLogger.js)
    NOTE: Still in contruction!
  - `setUpDemo`
  - `getDemoFile`
  - `log`
  - `finishLog`