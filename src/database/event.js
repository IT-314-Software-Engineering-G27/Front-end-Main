import { faker } from "@faker-js/faker";

const EventsData = (() => {

    function generateEvent() {
        return {
            name: faker.company.name(),
            types: faker.helpers.arrayElement(['yearly', 'weekly', 'monthly']),
            date: faker.date.past(),
            last_registration_date: faker.date.past(),
            organized_by: faker.company.name(),
            location: faker.location.city(),
            description: faker.lorem.paragraph(),
            logo: faker.image.avatar(),
            img: faker.image.url(),
            registration_fees: faker.number.int(10000, 1000000),
        };
    }

    const Events = [];



    async function generateEvents(count) {
        return await new Promise(async (resolve, reject) => {
            for (let i = 0; i < count; i++) {
                Events.push(generateEvent());
            }
            resolve(Events);
        });
    }
    generateEvents(400);

    function queryEvent(Event, query) {
        if (query.length === 0) return true;
        return (Event.name + Event.organized_by + Event.date + Event.location).toLowerCase().includes(query.toLowerCase());
    }

    async function asyncFetchEvents({ query, page }) {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(syncFetchEvents(query, page));
            }, 3000);
        }
        );
    }

    function syncFetchEvents(query, page) {
        return Events.filter((Event) => queryEvent(Event, query)).map((item, index) => index).slice((page - 1) * 10, page * 10);
    }

    async function fetchEvent(id) {
        console.log(Events.length);
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Events[id]);
            }, Math.random() * 2);
        });
    };
    return {
        asyncFetchEvents,
        fetchEvent
    }
})();

export default EventsData;