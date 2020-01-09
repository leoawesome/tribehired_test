## Build a REST API


1. Refer to the below endpoints, and return the top posts with most number of comments. 
	- comments endpoint – https://jsonplaceholder.typicode.com/comments
	-  View Single Post endpoint – https://jsonplaceholder.typicode.com/posts/{post_id}
	-  View All Posts endpoint – https://jsonplaceholder.typicode.com/posts
	- The API response should have the following fields: 
		- post_id 
		- post_title
		- post_body 
		- total_number_of_comments


2. Search API 
Create an endpoint that allows a user to filter the comments based on all the available fields. Your solution needs to be scalable. 
	- comments endpoint – https://jsonplaceholder.typicode.com/comments

## How to run

1. npm install
2. npm run start
3. npm run test (optional)

## How to use

1. localhost:3000/api/top
\nIt show the top post with the most comments.

2. localhost:3000/api/top/{number}
\nIt show the {number} of top post with the most comments.

3. localhost:3000/api/search?postId=99&id=491&name=odio&email=Maxwell@adeline.me&body=natus
\nYou can change the route query in order to search the comments based on the criterias below:
    - postId (exactly)
    - id (exactly)
    - name (part of name)
    - email (exactly, not case sensitive)
    - body (part of body)