import axios from "axios";
import {ref} from "vue";

const loggedUser = ref(false);

export function getLogged()
{
    return loggedUser.value;
}

export function setLogged()
{
    loggedUser.value = true;
}

const triggerLead = ref(false);

export function getTrigger()
{
    return triggerLead.value;
}

export function setTrigger()
{
    triggerLead.value = true;
}

function randomNumber()
{
    return Math.floor(Math.random() * 100) + 1;
}

export async function getPosts()
{
    let users = await getUsers();
    let res = [];
    users.forEach(el => {
        res.push({
            username: el.username,
            posts: randomNumber()
        });
    });
    return res;
}

async function getUsers() {
    let res = [];
    await axios('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
            res = response.data;
        });
    return res;
}

export async function signInWithEmail(email)
{
    let users = await getUsers();
    return users.some(el => el.email === email);
}
