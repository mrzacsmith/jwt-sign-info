## Dos

- httpOnly cookie
- React state (browser memory)
- keep secretKey in server (sign and verify tokens on the backend)
- get user info/payload from sign-in or have an endpoint using token auth
- keep token payload small
- use https only

## Don'ts

- store token in localStorage
- keep secretKey in browser
- decode the token in the client (OAuth does not allow decoding)
