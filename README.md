
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
   ```bash
    # 1. Copy the example environment file to create your own .env file
    cp .example.env .env

    # 2. Open the .env file and fill in the required fields
    # (e.g., API_URL, API_KEY, etc.)

    # 3. Install project dependencies
    npm install
   ```

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
7. Ireoluwa Wisdom Olukayode - Mechatronics Engineering [IreoluwaWisdom](https://github.com/ireoluwawisdom)
8. Dada Moyosoreoluwa Mary - Computer Science [osawese-ninja27](https://github.com/osawese-ninja27)
   
## Contributions  
We welcome contributions to improve the project. Please follow the contribution guidelines in the `CONTRIBUTING.md` file.  

## License  
This project is licensed under the GNU General Public License (GPL v3).  

## Contact  
For any inquiries or feedback, please contact [ighalogenesis2007@gmail.com](ighalogenesis2007@gmail.com).


# **How to Push Changes to a Protected `main` Branch**

When the `main` branch is protected, you cannot push directly to it. Instead, follow these steps to create a new branch, push your changes, and create a pull request (PR).

---

## **Step 1: Create a New Branch**

1. **Switch to the `main` branch** (if you’re not already on it):
   ```bash
   git checkout main
   ```

2. **Pull the latest changes** from the remote `main` branch:
   ```bash
   git pull origin main
   ```

3. **Create a new branch** for your changes:
   ```bash
   git checkout -b your-branch-name
   ```
   Replace `your-branch-name` with a descriptive name (e.g., `feature/add-login` or `bugfix/fix-typo`).

---

## **Step 2: Make and Commit Your Changes**

1. Make your changes to the code in the new branch.

2. **Stage your changes**:
   ```bash
   git add .
   ```
   Or stage specific files:
   ```bash
   git add file1.txt file2.txt
   ```

3. **Commit your changes** with a clear message:
   ```bash
   git commit -m "Your commit message"
   ```

---

## **Step 3: Push Your Branch to GitHub**

1. Push your new branch to the remote repository:
   ```bash
   git push origin your-branch-name
   ```

---

## **Step 4: Create a Pull Request**

1. Go to your repository on GitHub.

2. You’ll see a notification at the top of the repository page suggesting you create a pull request for the branch you just pushed. Click **"Compare & pull request"**.

3. Fill in the PR details:
   - **Title**: Summarize the changes.
   - **Description**: Provide details about what the changes do and why they’re necessary.

4. Click **"Create pull request"**.

---

## **Step 5: Wait for Review and Merge**

- If your repository has branch protection rules (e.g., requiring reviews or passing CI checks), your PR will need to meet those requirements before it can be merged.
- Once the PR is approved and all checks pass, a repository maintainer can merge your changes into the `main` branch.

---

## **Pro Tips**

- **Branch Naming**: Use descriptive names for your branches (e.g., `feature/add-login`, `bugfix/fix-typo`, `docs/update-readme`).
- **Frequent Updates**: If the `main` branch changes while you’re working on your branch, sync your branch with `main`:
  ```bash
  git checkout main
  git pull origin main
  git checkout your-branch-name
  git merge main
  ```
- **Small PRs**: Keep your pull requests small and focused. This makes them easier to review and merge.

---

By following this algorithm, you can safely push changes to a new branch and create a pull request, even when the `main` branch is protected. 🚀
