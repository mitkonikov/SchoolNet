# ZNAM

ZNAM is a platform of SchoolNet designed for quizzes. It's build using React and Create-React-App. <br>
ZNAM doesn't yet use Socket.IO. We believe that Socket.IO timings are not worth the performance penalty. <br>
ZNAM uses Material UI (Material Design for React).

<br>

## Game Logic

We implemented *Dense Ranking* according to Scores, but still yet to implement ELO Rating. <br>
There are two different types of ranking:
  * ranking according to a score in a specific subject
    - this ranking is stored in the `tbl_scoreboard`
  * ranking according to the sum of all scores from every subject
    - this ranking is stored in the `tbl_leaderboard`

<br>

## Database construction

We still haven't provided a working example database, because of the many recent developments and changes.

* `tbl_activities` - Table used to track all the recent activities of a student
* `tbl_current_games` - Table used to track the games played in the moment
* `tbl_leaderboard` - Table with the Scores and Ranks of each user summed up from all of the subjects
* `tbl_questions` - Table containing all the questions
* `tbl_questions_played` - Table containing relationships between a user and a question
* `tbl_scoreboard` - Table containing the Scores and Ranks of each user but according to a specific subject

<br>

## Contribute

All contributions are welcomed! The same rules that apply to the main SchoolNet platform apply to ZNAM too. <br>
For more info read the main [readme.md file](https://github.com/mitkonikov/SchoolNet). <br>
If you have a problem running the ZNAM start and build scripts because of the different versions of webpack,
you can use the .env variable `SKIP_PREFLIGHT_CHECK = true` in the `ZNAM .env`.

#### .env
```
PORT = 3006
SKIP_PREFLIGHT_CHECK = true
```