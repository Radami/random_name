# Random name generator

If you are looking to open a new restaurant/food selling establishment, but don't have a catchy name yet, you have come to the right place. You can use the Random Name Generator to get the perfect name for the eatery of your dreams. Inspired by the "London Bagel Museum" in Seoul.

The app consists of a Django backend and a React frontend. It can be run locally, using the built in development servers of each framework (including the Djanog built in SQL Lite). It can also be run through Docker locally or deployed on a local network for friends and family (while using PostrgreSQL) to test/

# Instructions

## Docker
If you have Docker installed, you just need to the following command in the root folder

```
docker compose up 
```

## Locally
### Django
To run the application locally, for development, you need to start both the backend and the frontend. Both of them require dependencies to be installed. For the Django backend, it is recommended to install a **virtual environment** (venv) so you keep the dependencies separated for system packages. Once that is completed, use **pip** to install all the packages in the _requirements.txt_ file by running in the _backend_ folder

```
pip install -r requirements.txt
```

Once the python dependencies are installed, you need to create the tables in the database required for the application to run. The default local configuration uses the included sqllite. This is done to ease the transition when moving to deploy it but for faster iteration, consider using the built in SQLLite. To create the tables and load the data, run the following commands

```
python manage.py makemigrations
python manage.py migrate
python manage.py loaddata ./api/fixtures/data.json
```

This should also load the data into the tables. If you want to add or change some of the entries, you need to create a super user. The parameters are mock variables coming from the .env file

```
python manage.py createsuperuser \
    --noinput \
    --username $DJANGO_SUPERUSER_USERNAME \
    --passsword $DJANGO_SUPERUSER_PASSWORD \
    --email $DJANGO_SUPERUSER_EMAIL
```

### React
For the React backend, you need to do the same thing, except the virtualenv. The node modules are installed automatically in the project folder. Navigate to the _frontend_ folder and run:

```
npm install
```

Once all of the dependencies are installed, you can run the application by invoking the following commands. I use 2 terminal windows open so I can see the errors in each part.

```
# in the backend folder
python manage.py runserver
# in the frontend folder
npm run start:local
```

## Env variables
The project makes use of environment variables to configure various settings, especially when running in Docker. A mock environment file provided in _.env_. **Do not committ this file to your public repository with anything secret in there (like passwords or secret keys). Even if it is committed and removed, it will still be part of the git history!**

## Usage
You can access the main app at http://localhost:3001. If you are running this on a local network, replace **localhost** with the host's IP or domain name. 

The admin panel can be found at http://localhost:8000/admin. Use the username and password for your django superuser to make changes.