import { API_BASE_URL_ASBE, API_KEY } from '@env';

export async function signIn(formData) {
    const fd = new FormData();
    const action = "sign_in";
    //fd.append('API_KEY', API_KEY);
    fd.append('email', formData['email']);
    fd.append('password', formData['password']);
  
    try {
      const response = await fetch(`${API_BASE_URL_ASBE}/${action}`, {
        method: 'POST',
        //credentials: "include",
        body: fd, 
      });
      const data = await response.json();
      alert(data.message);
      console.log(data);
      return data;
    } catch (error) {
      console.error('Sign-in error:', error);
      throw error;
    }
};
//Dummy functions still in use
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
            resolve({
                timetable: [
                    {
                        day: 'Monday',
                        classes: [
                            { subject: 'Mathematics', time: '08:00 AM', duration: 45 },
                            { subject: 'English', time: '10:00 AM', duration: 50 },
                            { subject: 'French', time: '12:00 PM', duration: 40 },
                            { subject: 'Yoruba', time: '02:00 PM', duration: 55 },
                            { subject: 'Hausa', time: '04:00 PM', duration: 45 },
                        ]
                    },
                    {
                        day: 'Tuesday',
                        classes: [
                            { subject: 'Biology', time: '09:00 AM', duration: 40 },
                            { subject: 'Chemistry', time: '11:00 AM', duration: 55 }
                        ]
                    },
                    {
                        day: 'Wednesday',
                        classes: [
                            { subject: 'History', time: '08:00 AM', duration: 40 },
                            { subject: 'Art', time: '10:00 AM', duration: 45 }
                        ]
                    },
                    {
                        day: 'Thursday',
                        classes: [
                            { subject: 'Geography', time: '09:00 AM', duration: 50 },
                            { subject: 'Physics', time: '11:00 AM', duration: 60 }
                        ]
                    },
                    {
                        day: 'Friday',
                        classes: [
                            { subject: 'Computer Science', time: '08:00 AM', duration: 55 },
                            { subject: 'Economics', time: '10:00 AM', duration: 45 }
                        ]
                    },
                    {
                        day: 'Saturday',
                        classes: [
                            { subject: 'Music', time: '09:00 AM', duration: 40 },
                            { subject: 'Drama', time: '11:00 AM', duration: 50 }
                        ]
                    },
                    {
                        day: 'Sunday',
                        classes: [
                            { subject: 'Physical Education', time: '08:00 AM', duration: 60 },
                            { subject: 'Health', time: '10:00 AM', duration: 45 }
                        ]
                    }
                ],
                events: [
                    {
                        id: '1',
                        title: 'Mathematics Quiz',
                        description: 'A quiz on basic mathematics',
                        location: 'School Hall',
                        date: '2021-09-29'
                    },
                    {
                        id: '2',
                        title: 'Science Fair',
                        description: 'An exhibition of scientific projects',
                        location: 'School Field',
                        date: '2021-10-15'
                    },
                    {
                        id: '3',
                        title: 'Inter-House Sports',
                        description: 'A sports competition between houses',
                        location: 'School Sports Complex',
                        date: '2021-11-20'
                    },
                    {
                        id: '4',
                        title: 'End of Term Party',
                        description: 'A party to mark the end of the term',
                        location: 'School Hall',
                        date: '2021-12-10'
                    }
                ]
            });
        }, 0);
    });
}

//Dummy function no longer in use
export async function signIn1(data) {
    // Simulate a dummy API call with a delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({"status": "success", "message": "Sign in successful"});
        }, 1000);
    });
}