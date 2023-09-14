import { faker } from "@faker-js/faker";

function generateOrganization() {
    return {
        legal_name: faker.company.name(),
        email: faker.internet.email(),
        username: faker.internet.userName(),
        headquarter_location: faker.location.country(),
        name_of_ceo: faker.person.fullName(),
        phone_number: faker.phone.number(),
        website: faker.internet.url(),
        year_of_establishment: Math.floor(1970 + Math.random() * 50),
    };
}

const organizations = [];

async function generateOrganizations(count) {
    return await new Promise(async (resolve, reject) => {
        for (let i = 0; i < count; i++) {
            organizations.push(generateOrganization());
        }
        resolve(organizations);
    });
}

function queryOrganization(organization, query) {
    if (query.length === 0) return true;
    return (organization.legal_name + organization.name_of_ceo + organization.username).toLowerCase().includes(query.toLowerCase())
}

export async function fetchOrganizations({ query, page }) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (organizations.length === 0) {
                generateOrganizations(400).then(() => {
                    resolve(organizations.filter((organization) => queryOrganization(organization, query)).slice((page - 1) * 4, page * 4));
                });
            }
            resolve(organizations.filter((organization) => queryOrganization(organization, query)).slice((page - 1) * 4, page * 4));
        }, 3000);
    });
};
