# Comic-Can API

This app is the back-end server for the Comic-Can Stretch project

## Getting started
**Warning**: Use of this API & backend server will require the user to download PostgreSQL and PG Admin 4. Creating a matching database `stretch_project` and data table `comicData` will also be required.

Clone down this repo, and cd into it.

### Installation
Run
- `npm install` to download all dependencies
- `npm run dev`

### Usage
Once deployed, this API and database can be used to work with the front end of this project [`Comic-Can`](https://github.com/Speekins/stretch-project). User will have full ability to send all HTTP requests listed below.

### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:8080/api/v1/comicData` | GET | not needed | An array containing all existing comics |
| `http://localhost:8080/api/v1/comicData/:id` | GET | not needed | Array of the requested comic: `[{id: <Number> , title: <String>, year: <String>, issue: <String>, grade: <String>, image_path: <String>, verified: <String>, note: <String>, created_at: <String>, updated_at: <String>}]` |
| `http://localhost:8080/api/v1/comicData` | POST | `{title: <String>, year: <String>, issue: <String>, grade: <String>, image_path: <String>, verified: <String>, note: <String>}.` | Created object: `{id: <Number> , title: <String>, year: <String>, issue: <String>, grade: <String>, image_path: <String>, verified: <String>, note: <String>}.` |
| `http://localhost:8080/api/v1/comicData:id` | DELETE | not needed |  "`Comic with id:<Number> was deleted`" |
| `http://localhost:8080/api/v1/comicData:id` | PUT | `{id: <Number> , title: <String>, year: <String>, issue: <String>, grade: <String>, image_path: <String>, verified: <String>, note: <String>}.`| The updated object: `{id: <Number> , title: <String>, year: <String>, issue: <String>, grade: <String>, image_path: <String>, verified: <String>, note: <String>}.`

