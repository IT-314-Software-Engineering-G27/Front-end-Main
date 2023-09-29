import { faker } from "@faker-js/faker";

function generateJobSeeker() {
    return {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        phone_number: faker.phone.number(),
        college: faker.company.name(),
        country: faker.location.country(),
        age: Math.floor(18 + Math.random() * 50),
        highest_qualification: faker.person.jobTitle(),
        skills: Array.from({ length: Math.floor(1 + Math.random() * 4) }, () => faker.commerce.product()),
    };
}

const job_seekers = [];

async function generateJobSeekers(count) {
    return await new Promise(async (resolve, reject) => {
        for (let i = 0; i < count; i++) {
            job_seekers.push(generateJobSeeker());
        }
        resolve(job_seekers);
    });
}

function queryJobSeeker(job_seeker, query) {
    if (query.length === 0) return true;
    return (job_seeker.first_name + job_seeker.last_name + job_seeker.username).toLowerCase().includes(query.toLowerCase());
}

export async function asyncFetchJobSeekers({ query, page }) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (job_seekers.length === 0) {
                generateJobSeekers(400).then(() => {
                    resolve(syncFetchJobSeekers(query, page));
                });
            }
            resolve(syncFetchJobSeekers(query, page));
        }, 3000);
    });
}

function syncFetchJobSeekers(query, page) {
    return job_seekers.filter((job_seeker) => queryJobSeeker(job_seeker, query)).map((item, index) => index).slice((page - 1) * 4, page * 4);
}

export async function fetchJobSeeker(id) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(job_seekers[id]);
        }, Math.random() * 4);
    });
};


