# Lexical Density Service

# To Use:
Pre-requisites: Installed Nodejs(v12.x), running MongoDB on local machine, and postman installed

1.  Clone repository
2. Run command "cd lexical-density-service && npm install"
3. Run command "npm run seed"- (assuming that MongoDB is already running on your local machine)
4. Run command "npm start"
5. Import collection by provided URL in postman (https://www.getpostman.com/collections/a094a66265add2ef9cab)

# Endpoints :
1.  Endpoint: http://localhost:3000/api/complexity/
    Method: POST
    Query params: mode, value should be verbose.
    headers: content-type: application/json

with a body key "text". This endpoint calculates Lexical Density by considering value as a single sentence. e.g. "Kim loves going to the cinema. He is also a very jolly kind of person". This endpoint both as a single sentence and calculates the lexical density of overall.
"?mode=verbose" if mode append and with value "verbose" then it breaks this input "Kim loves going to the cinema. He is also a very jolly kind of person" into two separate lines and response for each row separately

2.  Endpoint: http://localhost:3000/api/complexity/verbose 
    Method: POST
    headers: content-type: application/json

   This endpoint handles paragraph inputs. e.g. if a user pass, "Kim loves going to the cinema. He is also a very jolly kind of person" this endpoint breaks into separate lines and calculates their Lexical density separately and also overall.

3.  Endpoint: http://localhost:3000/api/words/
    Method: GET
    headers: content-type: application/json
   
   This endpoint returns all the non-lexical words from the database with their id,name,created_at

4.  Endpoint: http://localhost:3000/api/words/{id}
    Method: GET
    headers: content-type: application/json
   
   This endpoint returns single word from the list of  non-lexical words from the database with their id,name,created_at

5.  Endpoint: http://localhost:3000/api/words/{id}
    Method: DELETE
    headers: content-type: application/json
   
   This endpoint delete the single wordfrom the database



## Project Requirements: 
Route / complexity calculates complexity of a string
- output: {"data": {
    overall_ld: 0.42
    }
    }

Route /complexity?mode=verbose returns multiple sentences and an overall lexical density:
- output: {
    data: {
        sentance_ld: [0.23, 0.1, 1.0, 0.0],
        overall_ld: 0.42
    }
}

ERRORS: 100 words maximum or 1000 characters are valid inputs

## Plan: 2 hour time target
1. Create a function that calculates Lexical Density.
- Prep: A string needs to be split into words, remove numbers since they are not words.
- Record the total number of words
- Filter the array of words against the list "non-lexical words" as provided.
- Divide remaining array length against the original word Count.

2. Create a MongoDB instance containing all the words in the "non-lexical" list.
- Create routing paths for Create, Read, Delete.
- create a seed file for non-lexical words provided.

3. Integrate an express API that pulls words from the database and then applies user post requests into the calculation of Lexical Density Calculator.

4. Test Case: 
"Kim loves going to the cinema" = 67% density( to and the are non-lexical)
