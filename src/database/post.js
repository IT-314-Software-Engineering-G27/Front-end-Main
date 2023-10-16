import { faker } from "@faker-js/faker";

const PostsData = (() => {

    function generatePost() {
        return {
            last_name: faker.person.lastName(),
            first_name: faker.person.firstName(),
            logo: faker.image.avatar(),
            posted_on: faker.date.past(),
            img: faker.image.url(),
            description: faker.lorem.paragraph(),

            ap: faker.helpers.arrayElement(['P.M', 'A.M']),
            min: faker.number.int(0, 60),
            hour: faker.number.int(1, 12),
            long_description: faker.lorem.paragraphs(),
        };
    }

    const Posts = [];



    async function generatePosts(count) {
        return await new Promise(async (resolve, reject) => {
            for (let i = 0; i < count; i++) {
                Posts.push(generatePost());
            }
            resolve(Posts);
        });
    }
    generatePosts(400);

    function queryPost(post, query) {
        if (query.length === 0) return true;
        return (post.username + post.posted_on + post.img).toLowerCase().includes(query.toLowerCase());
    }

    async function asyncFetchPosts({ query, page }) {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(syncFetchPosts(query, page));
            }, 3000);
        }
        );
    }

    function syncFetchPosts(query, page) {
        return Posts.filter((Post) => queryPost(Post, query)).map((item, index) => index).slice((page - 1) * 10, page * 10);
    }

    async function fetchPost(id) {
        console.log(Posts.length);
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Posts[id]);
            }, Math.random() * 2);
        });
    };
    return {
        asyncFetchPosts,
        fetchPost
    }
})();

export default PostsData;