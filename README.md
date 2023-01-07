# Comic-Can API

This app is the back-end server for the Comic-Can Stretch project

## Getting started

### Installation

### Usage



### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:8080/api/v1/comicData` | GET | not needed | Array of all existing comics: `[{id: <Number> , title: <String>, year: <String>, issue: <String>, grade: <String>, image_path: <String>, verified: <String>, note: <String>, created_at: <String>, updated_at: <String>}]` |
| `http://localhost:8080/api/v1/comicData/:id` | GET | not needed | Array of the requested comic: `[{id: <Number> , title: <String>, year: <String>, issue: <String>, grade: <String>, image_path: <String>, verified: <String>, note: <String>, created_at: <String>, updated_at: <String>}]` |
| `http://localhost:8080/api/v1/comicData` | POST | `{title: <String>, year: <String>, issue: <String>, grade: <String>, image_path: <String>, verified: <String>, note: <String>}.` | Created object: `{id: <Number> , title: <String>, year: <String>, issue: <String>, grade: <String>, image_path: <String>, verified: <String>, note: <String>}.` |
| `http://localhost:8080/api/v1/comicData:id` | DELETE | not needed |  `Comic with id:<Number> was deleted` |
| `http://localhost:8080/api/v1/comicData:id` | PUT | `{id: <Number> , title: <String>, year: <String>, issue: <String>, grade: <String>, image_path: <String>, verified: <String>, note: <String>}.`| The updated object: `{id: <Number> , title: <String>, year: <String>, issue: <String>, grade: <String>, image_path: <String>, verified: <String>, note: <String>}.`

