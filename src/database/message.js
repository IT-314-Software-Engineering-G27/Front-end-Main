
const messages = [];

function generateMessage() {
    return {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec amet tincidunt tincidunt, justo est vulputate nisi, non alique",
        contact: "",
        timestamp: new Date(Date.now() - Math.random() * 100000000),
        read: Math.random() > 0.5 ? new Date() : null,
        type: Math.random() > 0.5 ? "incoming" : "outgoing",
    };
}

export function addMessages(contact) {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            contact.incoming.push(generateMessage());
        }, Math.random() * 10000);
    }
}

export async function asyncFetchMessages({ page }) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(syncFetchMessages(page));
        }, 3000);
    }
    );
}

function syncFetchMessages(page) {
    return messages.slice((page - 1) * 10, page * 10).map((message, index) => (index));
}

export async function fetchMessage(id) {
    return await new Promise((resolve, reject) => {
        resolve(messages[id]);
    }, Math.random() * 2);
};