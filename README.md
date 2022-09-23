# The League

[See Live Demo of The League](https://drt-next-js-template.netlify.app/)

[The League Walkthrough Video Part 1](https://www.loom.com/share/a111e93599af45d999626309936ec3c3)

[The League Walkthrough Video Part 2](https://www.loom.com/share/41b19435116349b08bf704d377ff9d64)

## Topics
- [Welcome to The League](#welcome-to-the-league)
- [MVP](#mvp)
- [Stretch Features](#stretch-features)
- [Try The League Out For Yourself](#try-the-league-out-for-yourself)
- [How Has The League Sharpened My Skills?](#how-has-the-league-sharpened-my-skills)
- [Tech Stacks Used](#tech-stacks)
___

## Welcome to The League
## MVP
The League is a new iteration of a previous project called "Team Roster". To see The League's MVP code, [click here](https://github.com/scamp925/team-roster) to be taken to Team Roster on Github.

## Stretch Features
<em>Note: Everything that The League does is a stretch feature of Team Roster, the original project</em>

Create a Team

![create-team](https://user-images.githubusercontent.com/98675776/192060018-64f1ef7b-47ef-48e7-b43c-0a3f2a02ee52.png)

Read Team Cards Associated to the Authenticated User

![read-team](https://user-images.githubusercontent.com/98675776/192060385-dfe85530-bcb2-4ab8-ad9f-e520a58b8226.png)

Public vs Private Teams

- Users are able to mark a team private or public 
Update Team

Delete Team and All Associated Players


View Public Teams
- Two different card views for whether the team belongs to the signed in user created or belong to another user of The League. If the team was not created by the signed in user, then they can ONLY edit and delete their team cards.

![public-teams](https://user-images.githubusercontent.com/98675776/192060649-5ffc8539-6971-4f7c-bde2-00581117c11a.png)

Favorite a Player
 - User can choose to favorite a player either on first creation of that player or with an update. All favorited players are rendered on the landing page once user signs in.

![fav-player-the-league](https://user-images.githubusercontent.com/98675776/192057101-502e09e3-b4d6-4ba3-8b45-bc0b81d28aaf.png)

## Try The League Out For Yourself
1. Create a [Firebase](https://firebase.google.com/) project and set up authentication

2. Clone The League to your local server
``` bash
git@github.com:scamp925/the-league.git
```
3. Once in The League's code, create a .env file at the root of the project
4. Copy the environmental variables from Firebase and Paste them as the properties of the keys found in your newly created .env file
5. Import sample data found in data folder in The League to Realtime Database in your Firebase project

![The-League-Sample-Data](https://user-images.githubusercontent.com/98675776/192056219-ca742a83-8e74-4a9a-aa6e-ad8d89df5c26.png)

6. Be in the root directory and from your command line, run
``` bash
npm install or npm i
```
7. Now from your command line, run
``` bash
npm run prepare
```
8. To start The League, run
``` bash
npm run dev
```
9. Open http://localhost:3000 with your browser and enjoy The League!

## How Has The League Sharpened My Skills?

## Tech Stacks
<div align="center">  
<a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /></a>  
<a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/>
<a href="https://firebase.google.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/firebase.png" alt="Firebase" height="50" /></a> 
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  
<a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" /></a>  
<a href="https://www.figma.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/figma-icon.svg" alt="Figma" height="50" /></a>  
</div>
