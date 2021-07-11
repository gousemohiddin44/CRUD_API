import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;

    const userId = uuidv4();

    const usersWithId = {...user, id: userId }

    users.push(usersWithId);

    res.send("New user added");

};

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id); //find is loop similar to foreach,map,filter

    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`user with id : ${id} deleted`);

};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const userToUpadate = users.find((user) => user.id === id);

    if (firstName) {
        userToUpadate.firstName = firstName;
    }

    if (lastName) {
        userToUpadate.lastName = lastName;
    }
    if (age) {
        userToUpadate.age = age;
    }

    console.log("user Updated");
};


//similarly can be done to all routes