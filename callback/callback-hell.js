const getFirstName = (callback) => {
    // Hit Api User
    setTimeout(() => {
        callback('elon');
    }, 2000);
};

const getMiddleName = (callback) => {
    // Hit Api User
    setTimeout(() => {
        callback('steven');
    }, 3000);
};

const getlastName = (callback) => {
    // Hit Api User
    setTimeout(() => {
        callback('musk');
    }, 1000);
};

getFirstName((result) => {
    getMiddleName((result2) => {
        getlastName((result3) => {
            const firstName = result;
            const middleName = result2;
            const lastName = result3;
            const fullName = `${firstName} ${middleName} ${lastName}`;
            console.log(fullName);
        });
    });
});
