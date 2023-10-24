import { faker } from "@faker-js/faker";

export function generateIndividual(id) {
    return {
        id: id,
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        phone_number: faker.phone.number(),
        college: faker.company.name(),
        country: faker.location.country(),
        age: Math.floor(18 + Math.random() * 50),
        highest_qualification: faker.person.jobTitle(),
    };
}

const individuals = [];

generateIndividuals(400);

async function generateIndividuals(count) {
    return await new Promise(async (resolve, reject) => {
        for (let i = 0; i < count; i++) {
            individuals.push(generateIndividual(count));
        }
        resolve(individuals);
    });
}

function queryIndividual(individual, query) {
    if (query.length === 0) return true;
    return (individual.first_name + individual.last_name + individual.username).toLowerCase().includes(query.toLowerCase());
}

export async function asyncFetchIndividuals({ query, page }) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(syncFetchIndividuals(query, page));
        }, 3000);
    }
    );
}

function syncFetchIndividuals(query, page) {
    return individuals.filter((individual) => queryIndividual(individual, query)).map((item, index) => index).slice((page - 1) * 10, page * 10);
}

export async function fetchIndividual(id) {
    console.log(individuals.length);
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(individuals[id]);
        }, Math.random() * 2);
    });
};
