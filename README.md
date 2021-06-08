# Eli's Sweet Treats

Run npm start from root to start server and application

must be configured with relevant connection string info to connect to a Postgres DB at `/api/config/dev.exs`

To create the necessary table and populate with data
- run the migration in `/api/priv/repo/migrations`
- run the seed in `/api/priv/repo/seeds`


Menu items may be added and removed from the UI
- click X to remove an item
- click on button on bottom of screen to bring up modal to add entries
