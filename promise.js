const wait = (seconds) =>
{
    return new Promise(function(resolve, reject)
    {
        setTimeout(function()
        {
            resolve('You will see this after ' + seconds + ' seconds')
        }, seconds * 1000)
    });
};
wait(3).then(function(value)
{
    console.log(value)
})



// const wait = delay => new Promise((resolve, reject) => setTimeout(resolve, delay))




const API_TOKEN = '';

const fetchOptions =
    {
        headers: {'Authorization' : `token ${API_TOKEN}`}
    }

const checkResponseForErrors = response =>
{
    console.group('checkResponseForErrors')
    console.log(response)
    console.groupEnd()
    if(response.status !== 200)
    {
        return Promise.reject(response);
    }
    return Promise.resolve(response);
}

const parseResponseAsJson = response =>
{
    console.group('parseResponseAsJson')
    console.log(response);
    console.groupEnd();
    const jsonResponse = response.json();
    return jsonResponse;
}

const getSecondElement = ([first, second, third]) => second ;

function getId(gitHubApiObject)
{
    console.group('getId');
    console.log(gitHubApiObject);
    console.groupEnd();
    return gitHubApiObject;
}

function logData(data)
{
    console.group('logData');
    console.log(data);
    console.log(`username: ${data.actor.display_login} last commit: ${data.created_at}`)
    console.groupEnd()
}

function fetchJson(username)
{
    return fetch(`https://api.github.com/users/${username}/events`, fetchOptions)
        .then(checkResponseForErrors)
        .then(parseResponseAsJson)
}

fetchJson('ShawnArnold1')
// console.log('Getting second Element')
    .then(getSecondElement)
    // console.log('Getting ID')
    // .then(getId)
    // console.log('Getting Log Data')
    .then(logData)