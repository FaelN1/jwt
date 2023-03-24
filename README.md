# <strong>JWT-AUTHENTICATION - NodeJs/TypeScript Authentication API</strong>

This project is a `Node.js` API developed in `Typescript` that provides `JSON Web Token (JWT)` authentication. The API enables user registration, login and access control to protected routes.

## <strong>About the project</strong>

A API permite o envio de mensagens, imagens e localizações, além de um menu em forma de lista, com o objetivo de facilitar o desenvolvimento de chatbots. O projeto foi desenvolvido inicialmente com o uso do puppeteer, porém, por se tratar de uma solução mais pesada, pretende-se migrar para uma opção mais leve.

## <strong>How to use</strong>

### To run the API, just clone or download the repository and follow the steps below

#

### <strong>API Register</strong>

  Endpoint: <strong>/api/register</strong>

  Method: <strong>`POST`</strong>

  Description: Creates a new user account.

  Request Body:

  >- <strong>`name`</strong> (string, required): The user's name.
  >- <strong>`email`</strong> (string, required): The user's email address.
  >- <strong>`password`</strong> (string, required): The user's password.

Responses:

  >- <strong>`201`</strong> Created: If the user is created successfully.
  >- <strong>`400`</strong> Bad Request: If the name, email, or password fields are missing or empty.
  >- <strong>`401`</strong> Bad Request: If the email is already in use.
  >- <strong>`500`</strong> Internal Server Error: If an unexpected error occurs.

### <strong>API Login</strong>

  Endpoint: <strong>/api/login</strong>

Method: <strong>`POST`</strong>

Description: Authenticates a user and returns a JWT token.

Request Body:

  >- <strong>`email`</strong> (string, required): The user's email address.
  >- <strong>`password`</strong> (string, required): The user's password.

Responses:

>- <strong>`200`</strong> OK: `If the email and password are correct, returns a token that is needed for authentication in all other requests. The token is sent as a bearer token`.
>- <strong>`400`</strong> Unauthorized: If the user does not exist.
>- <strong>`401`</strong> Bad Request: If the email or password is incorrect.
>- <strong>`500`</strong> Internal Server Error: If an unexpected error occurs.

### <strong>API Edit</strong>

Endpoint: <strong>/api/edit/:id</strong>

Method: <strong>PATCH</strong>

Description: Edit the name of an existing user.

Request Parameters:

>- <strong>`id`</strong> (string, required): The ID of the user to edit.

Request Body:

>- <strong>`name`</strong> (string, required): The new name of the user.

Request Headers:

>- <strong>`Authorization`</strong> (string, required): The JWT token received from the login endpoint. Sent as a bearer token.

Responses:

>- <strong>`400`</strong> Bad Request: If the user does not exist.
>- <strong>`2011`</strong> Created: If the user is edited successfully.
>- <strong>`500`</strong> Internal Server Error: If an unexpected error occurs.

## Contact

[Linkedin](https://www.linkedin.com/in/rafael-nicolas-7119b91b7/) or [WhatsApp](https://wa.me/5511958621210).
