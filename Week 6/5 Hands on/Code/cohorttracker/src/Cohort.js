class Cohort {
    constructor(cohortCode,
        startDate,
        technology,
        trainerName,
        coachName,
        currentStatus) {
        this.cohortCode = cohortCode;
        this.coachName = coachName;
        this.trainerName = trainerName;
        this.technology = technology;
        this.startDate = startDate;
        this.currentStatus = currentStatus;
    }
}
const CohortsData =[
    new Cohort('I1','22-Feb-2025', 'Python FSD', 'Hp','Abinesh', 'Scheduled'),
    new Cohort('I2','10-Sep-2024', 'Java FSD', 'Hp','Abi', 'Ongoing'),
    new Cohort('I3','24-Dec-2024', 'Java FSD', 'Hp','Abinaya', 'Ongoing'),
    new Cohort('I4','22-Feb-2025', 'Java FSD', 'To Be Assigned','Abitha', 'Scheduled'),
    new Cohort('I5','24-Dec-2024', 'Java FSD', 'To Be Assigned','Abin', 'Ongoing'),
    new Cohort('I6','22-Feb-2025', 'Dataware Housing', 'Hp','Abirami', 'Scheduled'),
    new Cohort('I7','10-Sep-2024', 'Python FSD', 'Hp','Abi Abi', 'Ongoing'),
];
export {Cohort, CohortsData};