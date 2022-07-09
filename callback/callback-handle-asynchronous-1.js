// Without Async Simulation
// const getFirstName = () => {
//     setTimeout(() => {
//         return 'elon';
//     }, 2000);
// };

// const firstName = 'elon';
// const middleName = 'steven';
// const lastName = 'musk';

// const fullName = `${firstName} ${middleName} ${lastName}`;
// console.log(fullName);

// With Async Simulation
const getFirstName = (callback) => {
    setTimeout(() => {
        callback('elon');
    }, 2000);
};

getFirstName((result) => {
    const firstName = result;
    const middleName = 'steven';
    const lastName = 'musk';

    const fullName = `${firstName} ${middleName} ${lastName}`;
    console.log(fullName);
});
