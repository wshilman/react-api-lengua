const urlApi = process.env.REACT_APP_URL || "http://localhost:8000/";
//console.log("url",urlApi);

const urlWebServices = {
    createUser:urlApi +"api/users/create",
    findUser:urlApi +"api/users/find",
    listUsers:urlApi +"api/users/list"
}

export default urlWebServices;