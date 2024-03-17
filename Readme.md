This is a book record management API server / Backend for the library systum or management of record books or manuals

Fine system:
user : 15/03/2024 - 06/06/2024

07/06/2024 => 50 per day after the due date/ validation over

3months subscription ( Bacis ) 
6months subscription ( Standard )
12months subscription ( Premium )

If the subscription type is standard && if the Subscription date is 15/03/2024 => then subscription valid till 15/09/2024

within subscription date >> if user miss the renewal >> 50/- Day
subscription date is also been missed >> and also missed the renewal >> 100 + 50/- Day


>> book1
>> basic
>> 15/03/2024 -> subscription
>> 07/03/2024 -> issued a book from library
>> book renewal date is on 28/03/2024
>> after the 28/03/2024 the fine will be 50/- Day
 


missed by renewal date >> 50/- day
missed by subsription date >> 100/- day
missed by renewal and subsription date >> 150/- day


# Routs and Encpoints

## /users

POST : create a new user
GET  : Get all the user info here

## /users/{id}
GET    : Get a user id 
PUT    : Update a user by their ID
DELETE : Delete a user by ID(cheak if he/she still have a issued book) & 
(is any fine to be paid ) this condition need to cheak before delete the user from server

## /users/subscription-details/{id}
GET : Get subscription details
      >> Date of the SUBSCRIPTION
      >> valid till
      >> Is there any fine

## /books
GET : All the books
POST : Create / Add a new book

## /books/{id}
GET  : Get book by id
PUT  : Update a book by id

## /books/issued
GET : Get all issued books

## /books/issued/withfine
GET : Get all books with their fine



## npm init
## npm i nodemon --save-dev

