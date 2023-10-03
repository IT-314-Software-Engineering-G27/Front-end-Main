import { faker } from "@faker-js/faker";

const EventsData = (() => {

    function generateEvent() {
        return {

            event_name : faker.company.name(),
            event_types : faker.helpers.arrayElement(['yearly', 'weekly', 'monthly']),
            event_date: faker.date.past(),
            event_last_registration_date : faker.date.past(),
            event_organized_by : faker.company.name(),
            event_location : faker.address.city(),

            event_description : faker.lorem.paragraph(),
            event_logo : faker.image.avatar(),
           
            event_img : faker.image.url(),
            event_registration_fees : faker.number.int(10000, 1000000),
           
           
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
        return (Event.event_name + Event.event_organized_by + Event.event_date + Event.event_location ).toLowerCase().includes(query.toLowerCase());
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