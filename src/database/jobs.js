import { faker } from "@faker-js/faker";

const JobsData = (() => {

    function generateJob() {
        return {
            company: faker.company.name(),
            company_logo: faker.image.avatar(),
            title: faker.person.jobTitle(),
            duration: faker.helpers.arrayElement(['full-time', 'internship', 'part-time']),
            salary: faker.number.int(10000, 1000000),
            location: faker.location.city(),

            posted_on_time: faker.date.past(),
            job_description: faker.lorem.paragraph(),
            qualifications_paragraph: faker.lorem.paragraph(),
            number_of_seats: faker.number.int(1, 10),
            last_date_to_apply: faker.number.int(20, 30)

        };
    }

    const jobs = [];



    async function generateJobs(count) {
        return await new Promise(async (resolve, reject) => {
            for (let i = 0; i < count; i++) {
                jobs.push(generateJob());
            }
            resolve(jobs);
        });
    }
    generateJobs(400);

    function queryJob(job, query) {
        if (query.length === 0) return true;
        return (job.company + job.title + job.duration + job.location + job.posted_on_time).toLowerCase().includes(query.toLowerCase());
    }

    async function asyncFetchJobs({ query, page }) {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(syncFetchJobs(query, page));
            }, 3000);
        }
        );
    }

    function syncFetchJobs(query, page) {
        return jobs.filter((job) => queryJob(job, query)).map((item, index) => index).slice((page - 1) * 10, page * 10);
    }

    async function fetchJob(id) {
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(jobs[id]);
            }, Math.random() * 2);
        });
    };
    return {
        asyncFetchJobs,
        fetchJob
    }
})();

export default JobsData;