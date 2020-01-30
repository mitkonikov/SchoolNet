## Getting Started

If you just want to get started developing SchoolNet, there is much more information in the main `readme.md` file. We are actively writing the documentation of this project.

---
## API Functions

### **Database Controller (databaseController.js)**
 - `Connect(databases) : function`
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
            - `saveGame`
            - `Game`
            - `Class`
                - `getAll`
                    - `whereTeacher`
                - `add`
            - `Student`
                - `getOnlineStudents`
                - `studentsInfoInClass`
                - `bestStudentsInfoInClass`