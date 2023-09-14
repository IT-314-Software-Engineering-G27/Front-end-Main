import { faker } from "@faker-js/faker";

function generateIndividual() {
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
    };
}

const individuals = [];

async function generateIndividuals(count) {
    return await new Promise(async (resolve, reject) => {
        for (let i = 0; i < count; i++) {
            individuals.push(generateIndividual());
        }
        resolve(individuals);
    });
}

function queryIndividual(individual, query) {
    if (query.length === 0) return true;
    return (individual.first_name + individual.last_name + individual.username).toLowerCase().includes(query.toLowerCase());
}

export async function fetchIndividuals({ query, page }) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (individuals.length === 0) {
                generateIndividuals(400).then(() => {
                    resolve(individuals.filter((individual) => queryIndividual(individual, query)).slice((page - 1) * 4, page * 4));
                });
            }
            resolve(individuals.filter((individual) => queryIndividual(individual, query)).slice((page - 1) * 4, page * 4));
        }, 3000);
    });
}