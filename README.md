
# Welcome to Attendance System  

## Introduction  
Attendance System is an initiative by a group of students from the University of Benin. It was born out of the need to make attendance records meaningful and reliable. The system provides a dynamic and secure way for lecturers to manage attendance efficiently while reducing the chances of unauthorized sign-ins.  

## Key Features  
- **Dynamic Attendance Management:**  
  Lecturers have full control over attendance sessions, including starting, closing, and nullifying attendance.  

- **Secure Attendance Sign-In:**  
  The system supports QR code-based attendance verification and biometric data storage for secure record-keeping.  

- **Role-Based Access:**  
  Different roles with distinct permissions:
  - **Lecturers:** Ultimate control over attendance sessions.
  - **Course Reps:** Responsible for logging attendance records.
  - **Regular Students:** Sign in for attendance sessions.
  - **Temporary Attendance Takers:** Appointed by lecturers when necessary.  

- **Time-Limited Sessions:**  
  Lecturers can set time limits for attendance sessions. After the time expires, attendance becomes read-only.  

- **Notification System:**  
  Users receive real-time notifications for attendance requests and updates.  

- **Permanent Logins for Students:**  
  Students stay signed in after registration, reducing the need for repeated logins.  

- **Data Privacy:**  
  Sensitive information like biometric data is encrypted for enhanced security.  

## Installation  

### Prerequisites  
- Node.js  
- React Native CLI  
- PostgreSQL (for the database)  
- A mobile device or emulator  

### Getting Started  

1. Clone the repository:
   ```bash
   git clone https://github.com/Osalotioman/attendance_system_frontend.git
   cd attendance-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:  
   **SKIP**: *NOT YET AVAILABLE*

4. Run the application:
   ```bash
   npm run web
   ```

## Usage  
- Lecturers can request attendance, manage attendance records, and authorize temporary attendance takers.  
- Course reps and authorized users can take attendance by scanning QR codes.  
- Students can generate QR codes for attendance sign-in.  

## Project Structure  
**COMING SOON**

## Database Schema  
Refer to the [Database Schema](./docs/DatabaseSchema.md) for more details on the data structure.  

## The team
1. Ighalo Genesis Osasenaga - Computer Science [@daves-hub](https://github.com/daves-hub).
2. Osazuwa Emmanuel Osalotioman - Mathematics [@Osalotioman](https://github.com/Osalotioman).
3. Madehin Oluwadamilare Samuel - Computer Science [@Samuel101-crypto](https://github.com/Samuel101-crypto).
4. Samuel Godspraise Otitochukwu - Computer Science [@Sbog304](https://github.com/Sbog304)
5. Erewa Victor Oritsesholaye - Computer Science [@NeoVoidPlus](https://github.com/NeoVoidPlus)
6. Onwumaeze Wisdom Chijindu - Computer Science [@wisdomdaniel](https://github.com/wisdomdaniel)
## Contributions  
We welcome contributions to improve the project. Please follow the contribution guidelines in the `CONTRIBUTING.md` file.  

## License  
This project is licensed under the GNU General Public License (GPL v3).  

## Contact  
For any inquiries or feedback, please contact [ighalogenesis2007@gmail.com](ighalogenesis2007@gmail.com).


## For branching and pull request the following template can be helpful when working from the terminal
```
# 1. Check status
git status

# 2. Create and switch to a new branch
git checkout -b <new-branch-name>

# 3. Stage all changes
git add .

# 4. Commit the changes
git commit -m "Your commit message"

# 5. Push the new branch to GitHub
git push origin <new-branch-name>
```