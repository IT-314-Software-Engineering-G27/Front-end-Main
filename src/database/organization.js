import { faker } from "@faker-js/faker";

const organizationData = (() => {
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

    generateOrganizations(400);

    function queryOrganization(organization, query) {
        if (query.length === 0) return true;
        return String(organization.legal_name + organization.name_of_ceo + organization.username).toLowerCase().includes(query.toLowerCase())
    }

    async function asyncFetchOrganizations({ query, page }) {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(syncFetchOrganizations(query, page));
            }, 3000);
        });
    }

    function syncFetchOrganizations(query, page) {
        return organizations.filter((organization) => queryOrganization(organization, query)).map((item, index) => index).slice((page - 1) * 10, page * 10);
    }

    async function fetchOrganization(id) {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(generateOrganization());
            }, Math.random() * 2);
        });
    };
    return {
        asyncFetchOrganizations,
        fetchOrganization
    };
})();

export default organizationData;