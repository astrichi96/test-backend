
This project started with Node.Js.

Below you will find information on how to perform common tasks.
You can find the most recent version of this guide here.


Preparing the API
==============================================

In the project directory to install project dependencies, you must run:
npm install


To start or execute the project
------------------------------------
In the project directory, to start or execute the project:
npm start

Run the server in development mode.
-----------------------------------
Open http: // localhost: 3000 to view it in the browser.



Queries available for the model through the API
===============================================

Consultations for providers
==================================

GET: 'URL_BASE/provider'  ---> List of Provider

GET: 'URL_BASE/provider/:providerId'  ---> List of providers by identification

POST:'URL_BASE/provider/provider'   ---> Add providers

PUT: 'URL_BASE/provider/:providerId' ---> Modify providers by Identification

DELETE: 'URL_BASE/provider/:providerId'  ---> Remove providers by Identification


Consultations for specialties
=================================

GET: 'URL_BASE/specialties' ---> List Specialties

GET: 'URL_BASE/specialties/:specialtieId' ---> List specialties by identification

POST:'URL_BASE/specialties'  ---> Add specialties

PUT: 'URL_BASE/specialties/:specialtieId' ---> Modify specialties by identification

DELETE: 'URL_BASE/specialties/:specialtieId' ---> Remove specialties by identification



