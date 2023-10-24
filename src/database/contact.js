
import { generateIndividual } from "./individual";
function generateContact() {
    return {
        individual: generateIndividual(),
        last_seen: new Date(),
        messages: [],
    };
}


const contacts = [];

async function generateContacts(count) {
    return await new Promise(async (resolve, reject) => {
        for (let i = 0; i < count; i++)
            contacts.push(generateContact());
        resolve(contacts);
    });
}
generateContacts(100);


export async function asyncFetchContacts({ page }) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(syncFetchContacts(page));
        }, 3000);
    }
    );
}

function syncFetchContacts(page) {
    return contacts.slice((page - 1) * 10, page * 10).map((contact, index) => (index));
}

export async function fetchContact(id) {
    return await new Promise((resolve, reject) => {
        resolve(contacts[id]);
    }, Math.random() * 2);
};
