🔐 React Login System — JWT Authentication & Protected UI
<p align="center"> <strong>Full Stack Development — MST Practical</strong> </p> <p align="center"> A professional React-based authentication system demonstrating<br> Authentication, Simulated JWT, Token Generation, Token Storage, Role Display, and Protected UI. </p>
📚 Practical Information
Detail	Information
Practical	MST Practical
Subject	Full Stack Development
Submitted To	Shivam Sir
Submitted By	Shaman Sharma
UID	24BAI70974
Section	24 AML 4 B
Technology	React.js + Vite
Project Type	Authentication & Protected UI
🎯 Practical Objective

Create a simple React Login System that:

Contains username and password fields.
Provides a Login button.
Authenticates the user using demo credentials.
Generates a simulated JWT/token after successful login.
Includes userId and role in the token payload.
Stores the generated token.
Displays the authenticated user's role.
Shows a protected Dashboard only when the user is logged in.
Provides logout functionality.
Maintains the authentication session after page refresh.
🚀 Features
🔑 Authentication
Username and password login
Credential validation
Invalid login handling
Successful authentication flow
Logout functionality
🪪 Simulated JWT
Generates a JWT-like token after successful authentication
Demonstrates the standard JWT structure:

Header.Payload.Signature

Token payload contains:
userId
username
role
iat
💾 Token Storage
Authentication token is stored using browser localStorage
User authentication information is persisted
Authentication state can be restored after page refresh
🛡️ Protected UI
Dashboard is displayed only after successful authentication
Unauthenticated users remain on the Login page
Protected content is accessible only when a valid authentication session exists
👤 Role Display

The authenticated user's role is displayed on the Dashboard.

🚪 Logout
Removes the stored authentication token
Clears authentication state
Returns the user to the Login page
🎨 Professional UI
Modern dark-themed interface
Responsive layout
Authentication status indicator
Dashboard information cards
Token visualization
Authentication flow section
🛠️ Technologies Used
React.js
Vite
JavaScript (ES6+)
HTML5
CSS3
Browser localStorage
📂 Project Structure
react-jwt-login-system/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   └── Login.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
🔄 Authentication Flow
┌─────────────────────────┐
│     Login Interface     │
│  Username + Password    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   Credential Validation │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Generate Simulated JWT  │
│         Token           │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│    Store Token in       │
│     localStorage        │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  Update Authentication  │
│          State          │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   Protected Dashboard   │
│  User Role + Token Info │
└─────────────────────────┘
🧩 JWT Concept

A standard JSON Web Token (JWT) consists of three parts:

HEADER.PAYLOAD.SIGNATURE
Header

Contains information about the token type and signing algorithm.

{
  "alg": "HS256",
  "typ": "JWT"
}
Payload

Contains user-related claims.

{
  "userId": "USR001",
  "username": "shaman",
  "role": "Admin",
  "iat": 1750000000
}
Signature

The signature represents the verification component of a JWT.

For this MST practical, the token and signature are simulated on the frontend for educational demonstration.

🔑 Demo Credentials

Use the following credentials to test the application:

Field	Value
Username	shaman
Password	123456
User ID	USR001
Role	Admin

After successful authentication, the protected Dashboard displays the authenticated user's information and JWT/token status.

💾 Token Storage

After successful login, the application stores authentication information in the browser's localStorage.

Example storage keys:

authToken
authUser

The stored token can be inspected through:

Browser
   ↓
Developer Tools
   ↓
Application
   ↓
Local Storage
   ↓
localhost:5173
🛡️ Protected Dashboard

The Dashboard is conditionally rendered based on the authentication state.

Conceptually:

User + Token
     │
     ├── Available ──→ Protected Dashboard
     │
     └── Missing ────→ Login Page

This demonstrates the concept of Protected UI, where authenticated content is not displayed to an unauthenticated user.

🔄 Session Persistence

When the application is refreshed:

The stored authentication token is retrieved.
The stored user information is retrieved.
The React authentication state is restored.
The protected Dashboard remains accessible.

This demonstrates authentication-state persistence using browser storage.

🚪 Logout Flow

When the user clicks Logout:

Logout
   ↓
Remove authToken
   ↓
Remove authUser
   ↓
Clear Authentication State
   ↓
Return to Login Page
▶️ How to Run the Project
1. Clone the Repository
git clone https://github.com/shaman280306/react-jwt-login-system.git
2. Navigate to the Project
cd react-jwt-login-system
3. Install Dependencies
npm install
4. Start the Development Server
npm run dev
5. Open the Application

Vite will provide a local development URL similar to:

http://localhost:5173/

Open the URL in a web browser to use the application.

🧪 Testing Checklist
Test Case	Expected Result
Empty username/password	Validation message
Incorrect credentials	Login failure message
Correct credentials	Dashboard opens
Successful login	Simulated JWT/token generated
Token storage	Token saved in localStorage
User ID	USR001 displayed
Role display	Admin displayed
Page refresh	Authentication session restored
Protected Dashboard	Visible only after authentication
Logout	Token removed and Login page displayed
📌 Concepts Demonstrated
Authentication
      ↓
Credential Validation
      ↓
JWT / Token Generation
      ↓
Token Storage
      ↓
Authentication State
      ↓
Protected UI
      ↓
Role Display
      ↓
Logout

The practical demonstrates the relationship between authentication, token-based identity, client-side storage, and conditional rendering of protected content in React.

⚠️ Educational / Security Note

This project is an educational implementation for the MST Practical and demonstrates the workflow and concepts of JWT-based authentication.

The JWT generation in this project is intentionally simulated on the frontend.

In a production application:

Authentication should be handled by a secure backend.
JWTs should be cryptographically signed by the server.
Passwords should never be hard-coded or stored in frontend source code.
Authorization should be enforced on the server.
Token-storage strategies should be selected according to the application's security requirements.
HTTPS should be used for secure communication.

Therefore, this project demonstrates the authentication concept and workflow, rather than production-grade authentication security.

👨‍💻 Submitted By
Shaman Sharma

UID: 24BAI70974
Section: 24 AML 4 B

MST Practical

Submitted To: Shivam Sir

<p align="center"> <strong>🔐 React Authentication System</strong> </p> <p align="center"> Authentication • JWT • Token Storage • Protected UI </p> <p align="center"> Built with React + Vite </p>
