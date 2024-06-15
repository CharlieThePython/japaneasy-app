from fastapi import FastAPI
from typing import Union
from routers import users

# Initialising the API
app = FastAPI()

# Routers
app.include_router(users.router)

@app.get("/")
def read_root():
    return {"Hello": "World"}


