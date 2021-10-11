2021.10.11
[package.json]
@nestjs/platform-express
: Lets nest use Express JS for handling HTTP requests.

reflect-metadata
: Helps make decorators work.

[Server]
Request ->
Pipe : Validate data contained in the request ->
Guard : Make sure the user is authenticated ->
Controller : Route the request to a particular function ->
Service : Run some business logic ->
Repository : Access a database ->
Response

[NestJS]
Controllers: Handles incoming requests.
Services: Handles data access and business logic.
Modules: Groups together code.
Pipes: Validates incoming data.
Filters: Handles errors that occur during request handling.
Guards: Handles authentication.
Interceptors: Adds extra logic to incoming requests or outgoing responses.
Repositories: Handles data stored in a DB.

[File Naming Conventions]
