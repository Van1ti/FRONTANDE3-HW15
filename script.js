const users = [
    {
        name: "Moore Hensley",
        balance: 2500,
        friends: ["John"],
        skills: ["lorem", "ipsum"]
    },
    {
        name: "Sharlene Bush",
        balance: 3100,
        friends: ["Briana Decker", "John"],
        skills: ["amet", "elit", "commodo"]
    },
    {
        name: "Elma Head",
        balance: 2800,
        friends: ["Goldie Gentry", "Kate", "Mike"],
        skills: ["anim", "culpa", "tempor"]
    },
    {
        name: "Carey Barr",
        balance: 3200,
        friends: ["Kate", "Mike", "John", "Alex"],
        skills: ["laborum", "veniam", "nulla"]
    },
    {
        name: "Blackburn Dotson",
        balance: 2900,
        friends: ["John", "Kate", "Mike", "Alex", "Tom"],
        skills: ["mollit", "nostrud", "non"]
    },
    {
        name: "Sheree Anthony",
        balance: 3300,
        friends: [
            "Briana Decker",
            "Goldie Gentry",
            "John",
            "Kate",
            "Mike",
            "Alex"
        ],
        skills: ["adipisicing", "ex", "proident"]
    },
    {
        name: "Ross Vazquez",
        balance: 3116,
        friends: [
            "John",
            "Kate",
            "Mike",
            "Alex",
            "Tom",
            "Bob",
            "Sam"
        ],
        skills: ["irure", "velit", "lorem"]
    }
];

// 1
// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => total + user.balance, 0)
// }

// console.log(calculateTotalBalance(users))


// 2

// const getUsersWithFriend = (users, friendName) => {
//     return users
//         .filter(user => user.friends.includes(friendName))
//         .map(user => user.name)
// };

// console.log(getUsersWithFriend(users, 'Briana Decker'))


// console.log(getUsersWithFriend(users, 'Goldie Gentry'))



//   3

// const getNamesSortedByFriendsCount = users => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name)
// }

// console.log(getNamesSortedByFriendsCount(users))



//  4

const getSortedUniqueSkills = users => {
    return users
        .reduce((skills, user) => {
            user.skills.forEach(skill => {
                if (!skills.includes(skill)) {
                    skills.push(skill)
                }
            })
            return skills
        }, [])
        .sort()
}

console.log(getSortedUniqueSkills(users))