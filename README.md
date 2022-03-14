# SARA Tree

- [A submission to 36-hour hackathon, HACKVCIS](https://devpost.com/software/saratree).

## Inspiration

Our **SARA** tree was inspired by achievements in video games. By acquiring necessary skills, players can addictively go to the next level and receive awards. Moreover, learning videos in each topic have interactive choices leading to different explanation videos, which was inspired from decision-based games.

## What it does

- **SARA** tree helps students to keep track of your lesson progress with the tree-like graph and motivates students as if they are trying to complete each achievement in the game. Besides, it allows students to explore new lessons with confidence that they will learn from the most basic knowledge.

- Moreover, **SARA** tree also provides interactive lessons with quizzes that will help students to understand. Each choice that the students chose will lead to a unique explanation video. If the choice is incorrect, the students are allowed to choose the other choices.

## How we built it

- We used Next.js to create a responsive website, and react-flow library to visualize the tree graph. The website styling is based on Tailwind CSS.

- Moreover, we utilized C++ and Python to create a graph database. In acquiring the data, we fetch mathematical topics in algebra from Khan Academy websites using Beautiful soup python library, then we label prerequisites for each topic and store them in a .json file.

## Challenges we ran into

- There is no open source database for courses and their prerequisites.
- The database will be extraordinarily large as we add more subjects to our own database, but the graph interface will still keep our app visually pleasing and easy-to-follow.
- Using unfamiliar react library takes time to understand.

## Accomplishments that we're proud of

- **SARA** helped us to keep track of our lessons.
- Creating **SARA** will surely be an inspiration for future learning platforms.

## What we learned

- Gaming concepts are also useful in educational basis.
- Use Python and C++ to generate database effectively.
- Using react-flow, framer-motion library.
- Using typescript.

## What's next for SaraTree

- We plan to extend our database to include other topics in Mathematics and Science.

- We plan to partner up with existing platforms such as Coursera or EdX to incorporate the knowledge tree and the interactive content to make online learning more manageable and enjoyable for a larger audience.
