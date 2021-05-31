class ErrorResponse extends Error {

    constructor( message, statusCode ) {
        console.log(message.red);

        super(message);
        this.statusCode = statusCode;

    }

}

module.exports = ErrorResponse;