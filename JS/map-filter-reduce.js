const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const multipleLanguages = users.filter(item  => item.languages.length > 2);








const userEmails = users.map((email) =>
{
    return email.email
});







const averageYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);


const totalYearsOfExperience = users.reduce((total, user) =>
{
    return total
}, 0)











const lngstEmail = users.reduce(function(email, users)
{
    if(email.length < users.email.length)
    {
        return users.email;
    }
        return email
}, '');



const instructorNames = users.reduce((stringMessage, user) =>
{
    return stringMessage + user.name

}, 'Your instructors are: ')




console.log(userEmails)

console.log(multipleLanguages)

console.log(averageYears / users.length)

console.log('_-------________-----')

console.log(lngstEmail)

console.log(instructorNames)





const usersWithThreeLanguages = users.filter((user) =>  user.languages.length > 2

const userEmails = users.map((user) => user.email)



//codePen code

// const users = [
//     {
//         id: 1,
//         name: 'ryan',
//         email: 'ryan@codeup.com',
//         languages: ['clojure', 'javascript'],
//         yearsOfExperience: 5
//     },
//     {
//         id: 2,
//         name: 'luis',
//         email: 'luis@codeup.com',
//         languages: ['java', 'scala', 'php'],
//         yearsOfExperience: 6
//     },
//     {
//         id: 3,
//         name: 'zach',
//         email: 'zach@codeup.com',
//         languages: ['javascript', 'bash'],
//         yearsOfExperience: 7
//     },
//     {
//         id: 4,
//         name: 'fernando',
//         email: 'fernando@codeup.com',
//         languages: ['java', 'php', 'sql'],
//         yearsOfExperience: 8
//     },
//     {
//         id: 5,
//         name: 'justin',
//         email: 'justin@codeup.com',
//         languages: ['html', 'css', 'javascript', 'php'],
//         yearsOfExperience: 9
//     }
// ];
//
// const multipleLanguages = users.filter(item  => item.languages.length > 2);
//
// const userEmails = users.map((email) =>
// {
//     return email.email
// });
//
// const averageYears = users.reduce((total, user) => total + user.yearsOfExperience, 0);
//
// const lngstEmail = users.reduce(function(email, users)
// {
//     if(email.length < users.email.length)
//     {
//         return users.email;
//     }
//     return email
// }, '');
//
//
// const instructorNames = users.reduce((stringMessage, user, index) =>
// {
//     if(index === users.length -1)
//     {
//         return `${stringMessage}${user.name}.`
//     }
//     return `${stringMessage} ${user.name},`
//
// }, 'Your instructors are: ')




console.log(userEmails)

console.log(multipleLanguages)

console.log(averageYears / users.length)

console.log('_-------________-----')

console.log(lngstEmail)

console.log(instructorNames)










