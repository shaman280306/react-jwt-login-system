# 🔐 React Login System — JWT Authentication & Protected UI

<p align="center">
  <strong>Full Stack Development / MST Practical</strong>
</p>

<p align="center">
  A professional React-based Login and Authentication System demonstrating<br>
  Authentication, Simulated JWT, Token Generation, Token Storage, Role Display, and Protected UI.
</p>

---

## 📚 Practical Information

| Detail | Information |
|---|---|
| **Practical** | MST Practical |
| **Subject** | Full Stack Development |
| **Submitted To** | Shivam Sir |
| **Submitted By** | Shaman Sharma |
| **UID** | 24BAI70974 |
| **Section** | 24 AML 4 B |
| **Technology** | React.js + Vite |
| **Project Type** | Authentication & Protected UI |

---

# 🎯 Practical Objective

Create a simple React Login System that:

- Contains username and password fields.
- Provides a Login button.
- Performs authentication using demo credentials.
- Generates a simulated JWT/token after successful login.
- Includes `userId` and `role` in the token payload.
- Stores the generated token.
- Displays the authenticated user's role.
- Shows a protected Dashboard only when the user is logged in.
- Provides logout functionality.
- Maintains authentication state after page refresh.

---

# 🚀 Features

### 🔑 Authentication
- Username and password login.
- Input validation.
- Invalid credential handling.
- Successful authentication flow.

### 🪪 Simulated JWT
- Generates a JWT-like token after successful login.
- Demonstrates the conceptual JWT structure:

```text
Header.Payload.Signature
Token payload contains:
userId
username
role
iat
💾 Token Storage
Authentication token is stored in browser localStorage.
User authentication data is also persisted.
Authentication state can be restored after page refresh.
🛡️ Protected UI
Dashboard is rendered only when the authentication state is available.
Unauthenticated users remain on the Login page.
Protected content is displayed after successful authentication.
👤 Role Display

The authenticated user's role is displayed directly on the Dashboard.

🚪 Logout
Removes stored authentication data.
Clears React authentication state.
Returns the user to the Login page.
🎨 Professional UI
Modern dark interface.
Responsive layout.
Authentication status indicator.
Dashboard cards.
Token visualization.
Authentication flow section.
🛠️ Technologies Used
React.js
Vite
JavaScript (ES6+)
CSS3
HTML5
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
┌──────────────────────┐
│    Login Interface   │
│ Username + Password  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Credential Validation│
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Generate Simulated   │
│      JWT Token       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    Store Token in    │
│     localStorage     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Update Authentication│
│        State         │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Protected Dashboard │
│  + User Role + Token │
└──────────────────────┘
🧩 JWT Concept

A standard JWT consists of three parts:

HEADER.PAYLOAD.SIGNATURE
Header

Contains information about the token type and algorithm.

Example:

{
  "alg": "HS256",
  "typ": "JWT"
}
Payload

Contains user-related claims.

Example:

{
  "userId": "USR001",
  "username": "shaman",
  "role": "Admin",
  "iat": 1750000000
}
Signature

In this practical, the signature is simulated for demonstration purposes.

simulated-signature
🔑 Demo Credentials

Use the following credentials to test the application:

Username: shaman
Password: 123456

After successful authentication:

User ID: USR001
Role: Admin
Authentication: JWT Token
💾 Token Storage

After successful login, the application stores the authentication information in browser localStorage.

Example keys:

authToken
authUser

The token can be inspected through:

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

The Dashboard is displayed only when the authentication state is available.

Conceptually:

user && token

If the condition is true:

Dashboard

Otherwise:

Login Page

This demonstrates the concept of Protected UI.

🔄 Session Persistence

When the application is refreshed:

The stored token is retrieved.
The stored user information is retrieved.
React authentication state is restored.
The protected Dashboard remains accessible.

This demonstrates persistence of the authentication session across page refreshes.

🚪 Logout Flow

When the user clicks Logout:

Logout
   ↓
Remove authToken
   ↓
Remove authUser
   ↓
Clear React authentication state
   ↓
Return to Login
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

Open it in your browser.

🧪 Testing Checklist
Test	Expected Result
Empty username/password	Validation message
Incorrect credentials	Invalid login message
Correct credentials	Dashboard opens
Successful login	JWT/token generated
Token storage	Token saved in localStorage
Role display	Admin displayed
Page refresh	Authentication restored
Protected Dashboard	Accessible only after login
Logout	Session cleared and Login page shown
📌 Concepts Demonstrated

This practical demonstrates the following Full Stack Development concepts:

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
⚠️ Educational / Security Note

This project is an educational demonstration of authentication and JWT concepts for the MST practical.

The JWT generation in this project is intentionally simulated on the frontend.

In a production application:

Authentication should be handled by a secure backend.
JWTs should be cryptographically signed by the server.
Passwords should never be stored in frontend code.
Proper authorization checks should be performed on the server.
Secure token-storage strategies should be selected according to the application's security requirements.
HTTPS should be used for communication.

Therefore, this project demonstrates the concept and workflow of JWT-based authentication rather than production-grade authentication security.

👨‍💻 Submitted By
Shaman Sharma

UID: 24BAI70974
Section: 24 AML 4 B

MST Practical

Submitted To: Shivam Sir

<p align="center">
🔐 React Authentication System

Authentication • JWT • Token Storage • Protected UI

</p> <p align="center"> Built with React + Vite </p> ```
Then run these commands

After saving README.md:

git add README.md
git commit -m "docs: add professional MST practical README"
git push
