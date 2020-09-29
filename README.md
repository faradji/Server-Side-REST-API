# Server-Side-REST-API

## Intialization :   
npm install  

## To create the database :  
npm run-script createdb  

## To drop the database :  
npm run-script dropdb  

## To create table :  
npm run-script migratedb  

## To populate the table with dummy values :  
npm run-script seeddb :  

## To start the server :  
npm start  

## To run the unit tests  
npm test  

# Endpoints to run  

# list  
## GET  
http://localhost:3000/cars?limit=2&offset=1&fields=name,color&year=1234  
http://localhost:3000/cars/1  
 
# create  
## POST  
{"name":"Maruti","color": "red", "category": "hatchpack", "model": "swift", year: 2018}  
http://localhost:3000/cars  

# update  
## PUT  
{"name":"Maruti","color": "blue", "category": "hatchpack", "model": "swift", year: 2017}  
http://localhost:3000/cars/1"  
# delete  
## delete  
http://localhost:3000/cars/1  
