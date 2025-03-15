# JobConnect

![Project Screenshot](./Screenshots/Screenshot%20(250).png)

## Overview
JobConnect is a **Job Matching System** that allows users to:
- Post jobs with details like title, company, location, and required skills.
- Search for jobs based on specific skills.
- View all available jobs stored in the database.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL

## Features
- **Post a Job**: Users can post new jobs to the database.
- **Search Jobs**: Users can search for jobs by entering specific skills.
- **View Jobs**: Users can see a list of all available jobs.

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- PostgreSQL installed and running

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/JobConnect.git
   ```
2. Navigate to the backend folder:
   ```bash
   cd JobConnect/backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the database:
   - Create a database named `job_db` in PostgreSQL.
   - Run the following SQL script to create the `jobs` table:
     ```sql
     CREATE TABLE jobs (
         id SERIAL PRIMARY KEY,
         title VARCHAR(255) NOT NULL,
         company VARCHAR(255) NOT NULL,
         location VARCHAR(255) NOT NULL,
         skills TEXT[] NOT NULL
     );
     ```
5. Start the server:
   ```bash
   node server.js
   ```

### Frontend Setup
1. Open the `index.html` file in your browser.
2. Use the interface to post, search, and view jobs.

## Screenshots
- ![Screenshot 1](./Screenshots/Screenshot%202025-03-15%20153609.png)
- ![Screenshot 2](./Screenshots/Screenshot%202025-03-15%20153621.png)
- ![Screenshot 3](./Screenshots/Screenshot%202025-03-15%20153731.png)
- ![Screenshot 4](./Screenshots/Screenshot%202025-03-15%20153741.png)

## Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.

## License
This project is licensed under the MIT License.

---
