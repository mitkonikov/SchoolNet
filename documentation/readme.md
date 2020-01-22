<style>
    .func { color: #00cc8f; font-weight: bold; }
</style>

## Getting Started

If you just want to get started developing SchoolNet, there is much more information in the main `readme.md` file. We are actively writing the documentation of this project.

---
## API Functions

### **Database Controller (databaseController.js)**

### Exports:
 - ## `Connect(databases) : function`
        @param databases - JSON object of all the database connections 

    Connects to the MySQL databases
    
 - ## `DB(database) : function`
        @param database - Select a database
    ---
    ### returns:
    - ## `network : obj`
        - ## <span class="func"> table (table) </span> `: function`
                @param table - Select a table
            --- 
            ### returns: 
            - ### <span class="func">getInfoMe </span> `: function`
            - ### <span class="func">getUserByNickname </span> `: function`
            - ### <span class="func">getInfoUser </span> `: function`
            - ### <span class="func">searchUsers </span> `: function`
            - ### <span class="func">getStatistics </span> `: function`
            - ### <span class="func">followUser </span> `: function`
            - ### `getCurrentGame : obj`
            - ### `Game : obj`
            - ### `getStudentIDs : obj`