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
