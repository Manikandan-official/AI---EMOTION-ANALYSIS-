# 🔧 Technology Stack & Technical Flow

## Complete Tech Stack

### **Frontend Technologies**

#### Framework & Build
- **React 18.3.1** - Component-based UI framework
  - Hooks (useState, useEffect, useRef)
  - Context API for state management
  - Component composition
  
- **Vite 6.0.5** - Lightning-fast build tool
  - Hot Module Replacement (HMR)
  - Optimized production builds
  - ES module support

#### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
  - Responsive design (mobile-first)
  - Dark/Light theme support
  - Pre-built component classes
  
- **PostCSS 8.5.1** - CSS transformation
  - Autoprefixer (browser compatibility)
  - CSS optimization
  
- **Framer Motion 12.12.2** - Animation library
  - Smooth component transitions
  - Gesture animations
  - Spring physics

#### UI Components & Icons
- **ChatScope Chat UI Kit 2.0.3** - Pre-built chat interface
- **Lucide React 0.473.0** - Icon library
- **React Icons 5.5.0** - Icon sets
- **Headless UI 2.2.4** - Accessible components
- **Emotion/React 11.14.0** - CSS-in-JS styling

#### AI & Recognition
- **Face-API.js 0.22.2** - Facial emotion detection
  - Real-time face detection
  - 7 emotion classifications
  - Confidence scoring
  - Browser-based (no server needed)

#### Data Visualization
- **Recharts 2.15.3** - React charting library
  - Line charts (emotion trends)
  - Interactive tooltips
  - Responsive graphs

#### Routing
- **React Router DOM 7.6.0** - Client-side routing
  - URL-based navigation
  - Protected routes
  - Page transitions

---

### **Backend Technologies**

#### Runtime & Framework
- **Node.js** - JavaScript runtime
  - Server-side execution
  - V8 engine
  - NPM package management
  
- **Express.js 4.18.2** - Web server framework
  - HTTP routing
  - Middleware system
  - Request/response handling
  - Lightweight & fast

#### Database
- **MongoDB** - NoSQL document database
  - Cloud (MongoDB Atlas) or Local
  - Flexible schema
  - JSON-like documents
  - Scalable
  
- **Mongoose 7.5.0** - MongoDB ORM/ODM
  - Schema definition
  - Data validation
  - Query helpers
  - Relationship management

#### Authentication & Security
- **JWT (jsonwebtoken 9.0.2)** - Token-based auth
  - Stateless authentication
  - Token generation
  - Token verification
  - Secure session management
  
- **bcryptjs 2.4.3** - Password hashing
  - Secure password storage
  - Salt-based hashing
  - Brute-force protection

#### Middleware & Utilities
- **CORS 2.8.5** - Cross-Origin Resource Sharing
  - Allow frontend-backend communication
  - Security headers
  - Preflight requests

- **Body-Parser 1.20.2** - Request body parsing
  - JSON parsing
  - Form data parsing
  - Size limits

- **dotenv 16.3.1** - Environment variables
  - Configuration management
  - Secret storage
  - Environment-specific settings

- **UUID 13.0.0** - Unique ID generation
  - Unique identifiers
  - Collision prevention

- **PDFKit 0.13.0** - PDF generation
  - Prescription PDF creation
  - Report generation
  - Image embedding

- **Axios 1.9.0** - HTTP client
  - API calls to external services
  - Request/response handling

#### AI Integration (Optional)
- **Google Generative AI 0.24.1** - Advanced AI (optional)
  - Gemini API integration
  - Enhanced chatbot responses
  - Natural language understanding

#### Development Tools
- **Nodemon 3.1.10** - Auto-reload server
  - Monitor file changes
  - Restart on change
  - Development convenience

---

### **Browser APIs (No Installation)**

- **Web Speech API** - Voice features
  - Speech Recognition (input)
  - Speech Synthesis (output)
  - Microphone access
  - Speaker output

- **MediaDevices API** - Device access
  - Webcam access
  - Microphone access
  - Permissions handling

- **Canvas API** - Image processing
  - Image capture from video
  - Emotion detection prep

- **localStorage** - Client-side storage
  - Token storage
  - User preferences
  - Theme settings

---

### **Database Collections (MongoDB)**

```
Database Structure:
├── Users (authentication)
├── Patients (patient profiles)
├── Doctors (doctor profiles)
├── Emotions (emotion logs)
├── Medications (prescriptions)
├── Bookings (appointments)
├── Sessions (consultations)
└── MemoryVaults (journal entries)
```

---

## 🔄 Technical Data Flow

### 1. **User Authentication Flow**

```
┌─ FRONTEND ─────────────────────────────────┐
│                                             │
│  User enters email & password               │
│         ↓                                   │
│  Click "Login" button                       │
│         ↓                                   │
│  Validate input (client-side)               │
│         ↓                                   │
│  POST /api/auth/login                       │
│                                             │
└─────────────────────────────────────────────┘
                      ↕ (HTTPS)
┌─ BACKEND (Express) ────────────────────────┐
│                                             │
│  Receive login request                      │
│         ↓                                   │
│  Query MongoDB User collection              │
│         ↓                                   │
│  Compare password with bcryptjs             │
│         ↓                                   │
│  If valid:                                  │
│    • Generate JWT token                     │
│    • Set 24-hour expiration                 │
│    • Return token + user info               │
│                                             │
│  If invalid:                                │
│    • Return 401 error                       │
│                                             │
└─────────────────────────────────────────────┘
                      ↕
┌─ FRONTEND ─────────────────────────────────┐
│                                             │
│  Receive JWT token                          │
│         ↓                                   │
│  Store in localStorage                      │
│         ↓                                   │
│  Set Authorization header for future calls  │
│         ↓                                   │
│  Redirect to dashboard                      │
│                                             │
└─────────────────────────────────────────────┘
```

### 2. **Emotion Detection & Analysis Flow**

```
┌─ PATIENT FRONTEND ─────────────────────────┐
│                                             │
│  Patient clicks check-in                    │
│         ↓                                   │
│  THREE OPTIONS:                             │
│                                             │
│  Option A: Manual Mood (EMOJI)              │
│    └─ Select 1-5 emoji scale               │
│                                             │
│  Option B: Facial Recognition               │
│    └─ Access webcam                         │
│    └─ Face-API detects emotion              │
│    └─ 3-second countdown                    │
│    └─ Capture face frame                    │
│    └─ Get emotion + confidence              │
│                                             │
│  Option C: Voice Analysis                   │
│    └─ Access microphone                     │
│    └─ Record 10-30 seconds                  │
│    └─ Analyze pitch, tempo, volume          │
│    └─ Classify as pos/neg/neutral           │
│                                             │
│  All methods → POST /api/emotion/log        │
│                                             │
└─────────────────────────────────────────────┘
                      ↕ (JSON)
┌─ BACKEND (Express + MongoDB) ──────────────┐
│                                             │
│  Receive emotion data                       │
│         ↓                                   │
│  Validate input                             │
│         ↓                                   │
│  Save to Emotions collection                │
│         ↓                                   │
│  Generate recommendations                   │
│    • Rule-based system                      │
│    • Based on emotion severity              │
│    • Contextual suggestions                 │
│         ↓                                   │
│  Return response with:                      │
│    • Emotion summary                        │
│    • Recommendations                        │
│    • Chatbot context                        │
│                                             │
└─────────────────────────────────────────────┘
                      ↕
┌─ PATIENT FRONTEND ─────────────────────────┐
│                                             │
│  Display results                            │
│         ↓                                   │
│  Show supportive message                    │
│         ↓                                   │
│  Suggest actions (chat, journal, etc)       │
│         ↓                                   │
│  Update dashboard                           │
│                                             │
└─────────────────────────────────────────────┘
```

### 3. **AI Chatbot Flow**

```
┌─ PATIENT FRONTEND ─────────────────────────┐
│                                             │
│  Patient clicks robot button (🤖)          │
│  Chatbot window opens                       │
│         ↓                                   │
│  User inputs message (text or voice)        │
│         ↓                                   │
│  IF VOICE:                                  │
│    • Web Speech API starts listening        │
│    • Speech → Text conversion               │
│    • Automatic transcript input             │
│         ↓                                   │
│  IF TEXT:                                   │
│    • User types message                     │
│         ↓                                   │
│  Local NLP Processing:                      │
│    • Extract keywords                       │
│    • Detect emotion from text               │
│    • Match against 10 categories            │
│    • Select response rule                   │
│         ↓                                   │
│  Generate Response:                         │
│    • Rule-based response (50+ options)      │
│    • OR Google AI (if configured)           │
│    • Personalize based on emotion           │
│         ↓                                   │
│  Output:                                    │
│    • Display text response                  │
│    • IF voice enabled: Text-to-Speech       │
│    • Play audio to patient                  │
│    • Save to chat history                   │
│         ↓                                   │
│  Chat continues...                          │
│                                             │
└─────────────────────────────────────────────┘

NO BACKEND NEEDED FOR BASE CHATBOT
All processing happens in browser!
Optional: Send chat logs to backend for storage
```

### 4. **Doctor Prescription Flow**

```
┌─ DOCTOR FRONTEND ──────────────────────────┐
│                                             │
│  Doctor views patient dashboard             │
│  Sees emotion trend chart                   │
│  Reviews patient history                    │
│         ↓                                   │
│  GET /api/emotion/:patientId                │
│  (retrieves emotion data & trends)          │
│         ↓                                   │
│  GET /api/dosage/recommend                  │
│  (AI suggests medicines)                    │
│         ↓                                   │
│  Doctor reviews suggestions                 │
│  Can approve or modify                      │
│         ↓                                   │
│  Enter prescription details:                │
│    • Medicine name                          │
│    • Dosage (mg)                            │
│    • Frequency (daily, twice daily)         │
│    • Duration (days/weeks)                  │
│    • Prescribe for (condition)              │
│         ↓                                   │
│  POST /api/dosage/create                    │
│                                             │
└─────────────────────────────────────────────┘
                      ↕
┌─ BACKEND (Express + MongoDB) ──────────────┐
│                                             │
│  Validate prescription                      │
│  Check drug interactions                    │
│  Save to Medications collection             │
│  Generate PDF prescription                  │
│  Create audit log entry                     │
│  Return confirmation                        │
│                                             │
└─────────────────────────────────────────────┘
                      ↕
┌─ PATIENT FRONTEND ─────────────────────────┐
│                                             │
│  Notification: New prescription!            │
│  Can view prescription details              │
│  Get PDF download link                      │
│  Medication reminders start                 │
│  Medication added to tracking               │
│                                             │
└─────────────────────────────────────────────┘
```

### 5. **Real-Time Doctor Analytics Flow**

```
┌─ PATIENT LOGS EMOTIONS ────────────────────┐
│  Multiple times per day/week                │
│         ↓                                   │
│  POST /api/emotion/log                      │
│         ↓                                   │
│  Saved to MongoDB Emotions collection       │
│                                             │
└─────────────────────────────────────────────┘
                      ↕
┌─ DOCTOR OPENS DASHBOARD ───────────────────┐
│                                             │
│  GET /api/emotion/:patientId                │
│         ↓                                   │
│  Backend queries last 30 emotion logs       │
│  Calculates statistics:                     │
│    • Average depression level               │
│    • Anxiety trend                          │
│    • Aggression pattern                     │
│  Formats for charting                       │
│         ↓                                   │
│  Returns JSON with:                         │
│  [{date: "5/1", depression: 0.2, ...}, ... ]
│         ↓                                   │
│  Frontend renders using Recharts            │
│  Interactive line chart displayed           │
│  Doctor can hover for details               │
│  Can filter by date range                   │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🏗️ System Architecture

```
┌────────────────────────────────────────────┐
│         CLIENT LAYER (Browser)              │
│                                             │
│  React Components                           │
│    ├─ PatientView (dashboard)               │
│    ├─ DoctorDashboard (analytics)           │
│    ├─ PatientChatbot (AI chat)              │
│    ├─ EmotionDetector (facial recognition) │
│    └─ MoodTracker (mood logging)            │
│                                             │
│  State Management:                          │
│    └─ React Context API (themes, user)      │
│                                             │
│  Browser APIs:                              │
│    ├─ Web Speech API (voice)                │
│    ├─ Face-API.js (emotion detection)       │
│    └─ Canvas API (image processing)         │
│                                             │
└────────────────────────────────────────────┘
              ↕ (HTTPS/REST)
┌────────────────────────────────────────────┐
│    API GATEWAY (Express.js Server)          │
│    Port: 5001                               │
│                                             │
│  Routes:                                    │
│    ├─ /api/auth (login, register)           │
│    ├─ /api/emotion (mood logging, analytics)│
│    ├─ /api/dosage (prescriptions)           │
│    ├─ /api/patient (patient data)           │
│    ├─ /api/doctor (doctor data)             │
│    ├─ /api/booking (appointments)           │
│    └─ /api/session (consultations)          │
│                                             │
│  Middleware:                                │
│    ├─ CORS (cross-origin)                   │
│    ├─ Body Parser (JSON)                    │
│    ├─ Auth Validator (JWT)                  │
│    └─ Error Handler (exceptions)            │
│                                             │
└────────────────────────────────────────────┘
              ↕ (MongoDB Protocol)
┌────────────────────────────────────────────┐
│      DATA LAYER (MongoDB Database)          │
│                                             │
│  Collections:                               │
│    ├─ Users (login credentials)             │
│    ├─ Patients (profiles, history)          │
│    ├─ Doctors (profiles, specialization)    │
│    ├─ Emotions (mood logs, analysis)        │
│    ├─ Medications (prescriptions)           │
│    ├─ Bookings (appointments)               │
│    ├─ Sessions (consultations)              │
│    └─ MemoryVaults (journals)               │
│                                             │
│  Features:                                  │
│    ├─ Mongoose Schema Validation            │
│    ├─ Indexes for Performance               │
│    ├─ Encryption at Rest                    │
│    └─ Automated Backups                     │
│                                             │
└────────────────────────────────────────────┘
```

---

## 📡 API Endpoints

### Authentication
```
POST   /api/auth/register      - Create new user
POST   /api/auth/login         - User login (returns JWT)
POST   /api/auth/logout        - User logout
GET    /api/auth/verify        - Verify token validity
```

### Emotions
```
POST   /api/emotion/log        - Log new emotion entry
GET    /api/emotion/:id        - Get patient emotions
GET    /api/emotion/:id/stats  - Get emotion statistics
POST   /api/emotion/analyze    - Analyze emotion trend
```

### Medications
```
POST   /api/dosage/create      - Create prescription
GET    /api/dosage/:id         - Get prescriptions
PUT    /api/dosage/:id         - Update prescription
DELETE /api/dosage/:id         - Delete prescription
GET    /api/dosage/recommend   - Get AI recommendations
```

### Patients
```
GET    /api/patient/:id        - Get patient profile
PUT    /api/patient/:id        - Update patient info
GET    /api/patient/search     - Search patients
GET    /api/patient/:id/emotions - Emotion history
```

### Doctors
```
GET    /api/doctor/:id         - Get doctor profile
PUT    /api/doctor/:id         - Update doctor info
GET    /api/doctor/:id/patients - Get assigned patients
```

### Bookings
```
POST   /api/booking/create     - Create appointment
GET    /api/booking/:id        - Get bookings
PUT    /api/booking/:id        - Update booking
DELETE /api/booking/:id        - Cancel booking
```

---

## 🔐 Security Implementation

### Authentication
- JWT tokens with 24-hour expiration
- Refresh token mechanism
- Secure token storage in localStorage

### Password Security
- bcryptjs hashing (10 salt rounds)
- Never store plain passwords
- Compare with hash on login

### Data Security
- CORS headers for allowed origins
- Input validation on all endpoints
- SQL/NoSQL injection prevention
- XSS protection

### Access Control
- Role-based access (doctor vs patient)
- Patient can only see own data
- Doctor can only access assigned patients
- Admin override capabilities

---

## 🚀 Deployment Architecture

### Development
```
Frontend: npm run dev (Vite dev server on port 3000)
Backend:  npm run dev (Nodemon on port 5001)
Database: MongoDB Atlas (cloud) or local instance
```

### Production
```
Frontend: Built with 'npm run build'
          Deployed to CDN (Vercel/Netlify)
          
Backend:  Node.js server
          Deployed to cloud (AWS/Google/Azure)
          Environment variables configured
          
Database: MongoDB Atlas
          Connection pooling enabled
          Automated backups
          Replica sets for redundancy
          
Monitoring: Server logs, error tracking, performance metrics
```

---

## ⚡ Performance Optimization

### Frontend
- Code splitting (lazy loading)
- Image optimization
- Caching strategies
- Minification
- Tree-shaking

### Backend
- Database indexing
- Query optimization
- Connection pooling
- Caching (Redis optional)
- Load balancing

### Network
- Gzip compression
- HTTPS/TLS
- API response caching
- Pagination for large datasets

---

## 📊 Database Schema Examples

### User Document
```javascript
{
  _id: ObjectId,
  email: "patient@example.com",
  password: "hashed_with_bcryptjs",
  role: "patient", // or "doctor"
  name: "John Doe",
  createdAt: Date,
  updatedAt: Date
}
```

### Emotion Document
```javascript
{
  _id: ObjectId,
  patientId: ObjectId,
  moodScore: 3, // 1-5
  facialEmotion: "happy",
  voiceSentiment: "positive",
  confidence: 0.85,
  notes: "Feeling better today",
  timestamp: Date,
  createdAt: Date
}
```

### Medication Document
```javascript
{
  _id: ObjectId,
  patientId: ObjectId,
  prescribedBy: ObjectId,
  medicineName: "Fluoxetine",
  dosage: "20mg",
  frequency: "daily",
  startDate: Date,
  endDate: Date,
  prescribedFor: "Depression",
  createdAt: Date
}
```

---

## 🔌 External Integrations

### Optional: Google Generative AI
```
const { GoogleGenerativeAI } = require("@google/generative-ai");

For advanced chatbot responses:
- Initialize with API key
- Send user message to Gemini
- Get enhanced AI response
- Return to patient
```

### No Other External APIs Required
- Face detection: Built-in (Face-API.js)
- Voice processing: Built-in (Web Speech API)
- Prescriptions: Generated locally (PDFKit)

---

## 📈 Scalability

### Horizontal Scaling
- Load balancer for multiple backend instances
- Stateless API design
- Database connection pooling
- Redis for session management

### Vertical Scaling
- Increase server resources
- Optimize database queries
- Implement caching
- Use CDN for static files

### Database Scaling
- MongoDB sharding
- Read replicas
- Index optimization
- Archived old data

---

## 🎯 Tech Highlights

✅ **Modern Stack** - React 18, Node.js, MongoDB
✅ **Real-time Features** - Voice input/output, live charts
✅ **AI Integration** - Facial recognition, NLP chatbot
✅ **Responsive** - Mobile-first design with Tailwind
✅ **Secure** - JWT, bcryptjs, CORS, input validation
✅ **Scalable** - Microservices-ready architecture
✅ **Professional** - Error handling, logging, monitoring
✅ **Accessible** - WCAG 2.1 compliance

---

**This is a complete, production-ready full-stack application!**
