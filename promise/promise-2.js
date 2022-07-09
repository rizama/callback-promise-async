const posts = [
    {
        title: 'Post one',
        body: 'This is post one',
    },
    {
        title: 'Post two',
        body: 'This is post two',
    },
];

const createPost = (post) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const postBeforeAdd = posts.length;
            posts.push(post);
            const postAfterAdd = posts.length;

            if (postBeforeAdd === postAfterAdd) {
                reject('Failed to add new post');
            } else {
                resolve('Success to add new post');
            }
        }, 2000);

    });
};

const getPosts = () => {
    setTimeout(() => {
        posts.forEach((post) => {
            console.log(post);
        });
    }, 1000);
};

const newPost = {
    title: 'Post three',
    body: 'This is post three',
};

createPost(newPost)
    .then((result) => {
        console.log(result);
        getPosts()
    })
    .catch(error => console.log(`Error: ${error}`));
