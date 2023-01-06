# Comic-Can API

This app is the back-end server for the Comic-Can Stretch project

## Getting started

### Installation

### Usage



### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:8080/api/v1/comicData` | GET | not needed | Array of all existing comics: `[{id: 1, title: "Amazing Fantasy", year: "1962", issue: "15", grade: "9.6", image_path: "https://assets-global.website-files.com/5e9fa1c7e4ed1f5e242e2313/6193e5a113d2b7978adc2472_ZCi0CiIQ-Lmvvn6hUNV6j773Z_IQgMmuapFfCUUQXtUWDhqdL3ds_miY2q_Hw0dEX3ZhS6CdaCwzi3037ddvX_ea7XS4n1OGPEFHajAEtofPllmeqhcZPgkRkTTa5iulBXqR20aZ.png", verified: "true", note: "Marvel's Amazing Fantasy #15, the issue that first introduced the world to Peter Parker's Spider-Man, sold at auction for a record-breaking $3.6 million.", created_at: "2023-01-04T03:36:11.726Z", updated_at: "2023-01-04T03:36:11.726Z"}]` |
| `http://localhost:8080/api/v1/comicData` | POST | `{id: <Number> , title: <String>, year: <String>, issue: <String>, grade: <String>, image_path: <String>, verified: <String>, note: <String>}.` |
| `http://localhost:8080/api/v1/comicData:id` | DELETE | not needed |  `Comic with id:${request.params.id} was deleted` |


Note: All of these endpoints will return semantic errors if something is wrong with the request.
