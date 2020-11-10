var db = require.main.require('./src/database')


var dbObject = {
    save: async function (key, value) {
        try {
            if (key && value) {
                const result = await db.setObject(key, value);
                return successResponse(result);
            }
        }
        catch (error) {
            return errorResponse(error)
        }
    },
    getObj: function(key) {
        try {
            if (key) {
                const result = await db.getObject(key);
                return successResponse(result);
            }
        }
        catch (error) {
            return errorResponse(error)
        }
    }
}

function successResponse(data) {
    return {
        status: 200,
        error: null,
        result: data,
        errorMessage: null
    }
}

function errorResponse(error) {
    return {
        status: 500,
        error: 'Internal Server Error',
        result: null,
        errorMessage: error.message
    }
}


module.exports= dbObject;