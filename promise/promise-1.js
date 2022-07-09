const getFirstName = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve('elon');
            }, 2000);
        } catch (e) {
            reject(e);
        }
    });
};

const getMiddleName = (firstName) => {
    return new Promise((resolve, reject) => {
        try {
            const middleName = 'steven';
            setTimeout(() => {
                resolve(`${firstName} ${middleName}`);
            }, 3000);
        } catch (e) {
            reject(e);
        }
    });
};

const getLastName = (firstMiddleName) => {
    return new Promise((resolve, reject) => {
        try {
            const lastName = 'musk';
            setTimeout(() => {
                resolve(`${firstMiddleName} ${lastName}`);
            }, 1000);
        } catch (e) {
            reject(e);
        }
    });
};

// How to call
getFirstName()
    .then((firstName) => getMiddleName(firstName))
    .then((middelName) => getLastName(middelName))
    .then((fullname) => {
        console.log(fullname);
    })
    .catch((error) => console.log(error));
