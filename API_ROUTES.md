# Folesia API Routes

## Author

| Method | Route | Description |  
| --- | ----------- | -------- |
| GET | '/author/:pid' | Fetch single author |
| GET | '/author/:pid/poems' | Fetch author's poem list |

## Authentication / Registration

| Method | Route | Description |  
| --- | ----------- | -------- |
| POST | '/signup' | Signup |
| POST | '/login' | Login |
| GET | '/logout' | Logout |

## Poems

| Method | Route | Description |  
| --- | ----------- | -------- |
| GET | '/poems/trending' | Fetch trending poems |
| GET | '/poems/:pid' | Fetch single poem |
| GET | '/poems' | Fetch list of poems |
| POST | '/poems' | Create poem |
| PUT | '/poems/:pid' | Update poem |
| DELETE | '/poems/:pid' | Delete poem |

## Hearts

| Method | Route | Description |  
| --- | ----------- | -------- |
| POST | '/hearts/:pid' | Create hart |
| GET | '/author/:pid/hearts' | Fetch list of hearts by author |
| DELETE | '/hearts/:pid' | Delete heart |
| DELETE | '/poems/:pid/hearts' | Delete hearts for specific poem |




