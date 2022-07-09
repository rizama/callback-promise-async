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

const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
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

createPost(newPost, getPosts);

// Dengan callback ini kita bisa menghandle sifat javascript yang asynchronous
// secara kelihatan memang menjadi saling menunggu kode sebelumnya, tapi sebetulnya yang terjadi dibelakang adalah proses Asynchronous sehingga kode tersebut tidak memblok keseluruhan aplikasi nodejs.
