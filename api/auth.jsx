import { API_URL, API_KEY } from '@env';

//console.log(API_URL);

export async function getAttendanceData() {
    // Simulate a dummy API call with a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: '1',
                    name: 'CSC403',
                    duration: 15,
                    status: 'Ongoing'
                },
                {
                    id: '2',
                    name: 'MTH404',
                    duration: 30,
                    status: 'Upcoming'
                },
                {
                    id: '3',
                    name: 'PHY503',
                    duration: 20,
                    status: 'Upcoming'
                }
            ]);
        }, 1000);
    });
}

export async function getTimetableData() {
    // Simulate a dummy API call with a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    day: 'Monday',
                    classes: [
                        { subject: 'Mathematics', time: '08:00 AM', duration: 45 },
                        { subject: 'English', time: '10:00 AM', duration: 50 }
                    ]
                },
                {
                    day: 'Tuesday',
                    classes: [
                        { subject: 'Biology', time: '09:00 AM', duration: 40 },
                        { subject: 'Chemistry', time: '11:00 AM', duration: 55 }
                    ]
                }
            ]);
        }, 1000);
    });
}

export async function getTimetableData1() {
    // Simulate a dummy API call with a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: '1',
                    subject: 'Mathematics',
                    day: 'Monday',
                    time: '08:00 - 09:30',
                    lecturer: 'Prof. Johnson'
                },
                {
                    id: '2',
                    subject: 'Physics',
                    day: 'Tuesday',
                    time: '10:00 - 11:30',
                    lecturer: 'Dr. Smith'
                },
                {
                    id: '3',
                    subject: 'Chemistry',
                    day: 'Wednesday',
                    time: '12:00 - 13:30',
                    lecturer: 'Dr. Williams'
                },
                {
                    id: '4',
                    subject: 'Biology',
                    day: 'Thursday',
                    time: '14:00 - 15:30',
                    lecturer: 'Dr. Brown'
                },
                {
                    id: '5',
                    subject: 'Computer Science',
                    day: 'Friday',
                    time: '09:00 - 10:30',
                    lecturer: 'Prof. Davis'
                }
            ]);
        }, 1000);
    });
}
