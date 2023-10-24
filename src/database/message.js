import { faker } from "@faker-js/faker";
const messages = [];

function generateMessage() {
    return {
        content: faker.commerce.productDescription(),
        contact: "",
        timestamp: new Date(Date.now() - Math.random() * 100000000),
        read: Math.random() > 0.5 ? new Date() : null,
        type: Math.random() > 0.5 ? "incoming" : "outgoing",
    };
}

export function addMessages(setMessages) {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            setMessages((messages) => [...messages, generateMessage()]);
        }, Math.random() * 10000);
    }
}

function generateMessages() {
    for (let i = 0; i < 100; i++) {
        messages.push(generateMessage());
    }
};

generateMessages();

export async function asyncFetchMessages({ page }) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(syncFetchMessages(page));
        }, 3000);
    }
    );
}

function syncFetchMessages(page) {
    return messages.map((message, index) => (index)).slice(page * 10, (page + 1) * 10);
}

export async function fetchMessage(id) {
    return await new Promise((resolve, reject) => {
        resolve(messages[id]);
    }, Math.random() * 2);
};