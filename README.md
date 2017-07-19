# Playlists WebService

This is a simplistic NodeJS/Express web service that provides a basic index home page and an '/api/playlists' endpoint that returns a JSON object with fake playlist/song data.

## Running

Follow these steps to clone the code and run the project.

### Setup

```bash
# Clone the repository and install dependencies
git clone https://gitlab.com/paulo-rdbm/playlists-webservice.git
cd playlists-webservice
npm install
```

### Run the code locally (<http://localhost:8080/>)

```bash
# Build the Typescript files
npm run grunt
# Run the code in your localhost
npm run dev
```

Now you can access <http://localhost:8080/> to see the home page, or <http://localhost:8080/api/playlists> to retrieve a JSON with fake data.
