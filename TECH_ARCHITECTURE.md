# 🏗️ Technical Architecture & Technology Flow

## Table of Contents
1. [System Architecture](#system-architecture)
2. [Technology Stack](#technology-stack)
3. [Data Flow & Logic](#data-flow--logic)
4. [API Architecture](#api-architecture)
5. [Frontend Architecture](#frontend-architecture)
6. [Backend Architecture](#backend-architecture)
7. [Database Schema](#database-schema)
8. [Authentication & Security](#authentication--security)
9. [AI/ML Integration](#aiml-integration)
10. [Deployment Architecture](#deployment-architecture)

---

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     CLIENT LAYER (Frontend)                      │
├─────────────────────────────────────────────────────────────────┤
│  React 18+ | Vite | Tailwind CSS | Framer Motion | Face API    │
│  ┌──────────────────┐        ┌──────────────────┐               │
│  │  Doctor Portal   │        │  Patient Portal  │               │
│  │  - Dashboard     │        │  - Check-in      │               │
│  │  - Analytics     │        │  - Chatbot       │               │
│  │  - Prescriptions │        │  - Tracking      │               │
│  └──────────────────┘        └──────────────────┘               │
└─────────────────────────────────────────────────────────────────┘
                              ↕ (HTTP/REST)
┌─────────────────────────────────────────────────────────────────┐
│                   API GATEWAY LAYER (Backend)                    │
├─────────────────────────────────────────────────────────────────┤
│  Express.js | Node.js | Port 5001 | CORS Enabled               │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  Route Handler → Controller → Service → Database         │   │
│  │  /api/auth       /api/emotion   /api/dosage             │   │
│  │  /api/booking    /api/patient   /api/doctor             │   │
│  │  /api/medication /api/session   /api/memoryvault        │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↕ (MongoDB Protocol)
┌─────────────────────────────────────────────────────────────────┐
│                   DATA PERSISTENCE LAYER                         │
├─────────────────────────────────────────────────────────────────┤
│  MongoDB Atlas / Local MongoDB | Mongoose ODM                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Collections:                                           │   │
│  │  - Users (Auth)      - Patients      - Doctors         │   │
│  │  - Sessions          - Medications   - Emotions        │   │
│  │  - Bookings          - MemoryVaults                    │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              ↕
┌─────────────────────────────────────────────────────────────────┐
│                   EXTERNAL SERVICES                              │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────────┐  ┌──────────────────┐ ┌─────────────────┐│
│  │  Google AI API   │  │  Face API.js     │ │  Web Speech API ││
│  │  (Gemini)        │  │  (Emotion Detect)│ │  (Voice)        ││
│  └──────────────────┘  └──────────────────┘ └─────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## Technology Stack

### 🖥️ **Frontend Technologies**

#### Core Framework
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | ^18.3.1 | Component-based UI framework |
| **React Router DOM** | ^7.6.0 | Client-side routing and navigation |
| **Vite** | ^6.0.5 | Next-gen frontend build tool with HMR |

#### Styling & UI
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Tailwind CSS** | ^3.4.17 | Utility-first CSS framework |
| **PostCSS** | ^8.5.1 | CSS transformation and optimization |
| **Autoprefixer** | ^10.4.20 | Vendor prefix automation |
| **Framer Motion** | ^12.12.2 | Advanced animation library |
| **Lucide React** | ^0.473.0 | Modern icon library |
| **React Icons** | ^5.5.0 | Icon sets library |
| **Emotion/React** | ^11.14.0 | CSS-in-JS styling solution |
| **Headless UI** | ^2.2.4 | Unstyled, accessible components |

#### Chat & Analytics
| Technology | Version | Purpose |
|-----------|---------|---------|
| **ChatScope Chat UI Kit** | ^2.0.3 | Pre-built chat interface components |
| **Recharts** | ^2.15.3 | React charting library for analytics |

#### AI & ML
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Face-API.js** | ^0.22.2 | Face detection & emotion recognition |

---

### 🔧 **Backend Technologies**

#### Server & Framework
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | Latest LTS | JavaScript runtime |
| **Express.js** | ^4.18.2 | Minimalist web framework |
| **Nodemon** | ^3.1.10 | Development: auto-restart on file changes |

#### Database & ORM
| Technology | Version | Purpose |
|-----------|---------|---------|
| **MongoDB** | Cloud/Local | NoSQL document database |
| **Mongoose** | ^7.5.0 | MongoDB object modeling and validation |

#### Authentication & Security
| Technology | Version | Purpose |
|-----------|---------|---------|
| **JWT** | ^9.0.2 | Stateless token-based authentication |
| **bcryptjs** | ^2.4.3 | Password hashing and encryption |
| **CORS** | ^2.8.5 | Cross-Origin Resource Sharing |

#### AI Integration
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Google Generative AI** | ^0.24.1 | AI chatbot & content generation |
| **Axios** | ^1.9.0 | HTTP client for API calls |

#### Utilities
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Body-Parser** | ^1.20.2 | Parse incoming request bodies |
| **dotenv** | ^16.3.1 | Environment variable management |
| **PDFKit** | ^0.13.0 | PDF document generation |
| **UUID** | ^13.0.0 | Unique identifier generation |

---

## Data Flow & Logic

### 1. **User Authentication Flow**

```
┌─────────────────────────────────────────────────────────────┐
│ Patient/Doctor Enters Credentials                            │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│ Frontend validates input (client-side)                       │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│ POST /api/auth/login with credentials                       │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│ Backend: authController validates against User model        │
│ - Query MongoDB for user                                     │
│ - Compare password with bcryptjs                             │
│ - If invalid → return 401 Unauthorized                       │
└──────────────────────┬──────────────────────────────────────┘
                       ↓ (Valid)
┌─────────────────────────────────────────────────────────────┐
│ Generate JWT Token with user ID & role                      │
│ Token expires in 24 hours (configurable)                    │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│ Return token to frontend with user info                      │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│ Frontend stores token in localStorage/SessionStorage         │
│ Sets Authorization header for future requests                │
└──────────────────────┬──────────────────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────────────────┐
│ User authenticated - Redirect to dashboard                   │
└─────────────────────────────────────────────────────────────┘
```

---

### 2. **Emotion Detection & Analysis Pipeline**

```
STEP 1: EMOTION DATA CAPTURE
┌──────────────────────┐
│ Manual Mood Select   │ (1-5 scale with emoji)
└──────┬───────────────┘
       │
       ├──────────────────────┐
       │                      │
┌──────▼──────────┐  ┌────────▼────────────┐
│ Facial Analysis │  │ Voice Analysis      │
│ - Webcam stream│  │ - Microphone input  │
│ - Face-API.js  │  │ - Web Speech API    │
│ - Emotion score│  │ - Sentiment score   │
└──────┬──────────┘  └────────┬────────────┘
       │                      │
       └──────────┬───────────┘
                  ↓
STEP 2: DATA AGGREGATION
┌────────────────────────────────────┐
│ Combine all emotion sources        │
│ - Cross-validate results           │
│ - Calculate confidence score       │
│ - Create emotion snapshot          │
└──────────┬─────────────────────────┘
           ↓
STEP 3: AI PROCESSING
┌────────────────────────────────────┐
│ Backend processes emotion data     │
│ - Store in MongoDB Emotion model   │
│ - Link to patient record           │
│ - Add timestamp                    │
└──────────┬─────────────────────────┘
           ↓
STEP 4: RECOMMENDATION ENGINE
┌────────────────────────────────────┐
│ Rule-based recommendation system   │
│ - Analyze emotion severity         │
│ - Check medication history         │
│ - Generate health suggestions      │
│ - Trigger chatbot responses        │
└──────────┬─────────────────────────┘
           ↓
STEP 5: FEEDBACK & LOGGING
┌────────────────────────────────────┐
│ Return to patient:                 │
│ - Supportive message               │
│ - Personalized suggestions         │
│ - Recommended actions              │
│ - Doctor notification (if needed)  │
└────────────────────────────────────┘
```

---

### 3. **Chatbot Interaction Flow**

```
STEP 1: USER INPUT
┌─────────────────────────┐
│ Patient message:        │
│ Text or Voice (STT)     │
└────────┬────────────────┘
         ↓
STEP 2: INTENT DETECTION
┌──────────────────────────────────────┐
│ Frontend NLP Analysis:               │
│ - Extract keywords                   │
│ - Detect intent/category             │
│ - Check emotion indicators           │
│ - Rule-based pattern matching        │
└────────┬─────────────────────────────┘
         ↓
STEP 3: RESPONSE GENERATION
┌──────────────────────────────────────┐
│ Option A: Rule-based Response        │
│ (Predefined rules for common topics) │
│                                      │
│ Option B: Google Generative AI       │
│ (Gemini API for complex queries)     │
└────────┬─────────────────────────────┘
         ↓
STEP 4: PERSONALIZATION
┌──────────────────────────────────────┐
│ Enhance response based on:           │
│ - Patient mood/emotional state       │
│ - Conversation history               │
│ - Medical context                    │
│ - Previous interactions              │
└────────┬─────────────────────────────┘
         ↓
STEP 5: OUTPUT DELIVERY
┌──────────────────────────────────────┐
│ Frontend:                            │
│ - Display text response              │
│ - Text-to-Speech (TTS) synthesis     │
│ - Save to conversation history       │
│ - Log interaction in database        │
└──────────────────────────────────────┘
```

---

### 4. **Prescription Workflow**

```
STEP 1: PATIENT ANALYSIS
┌──────────────────────────────┐
│ Doctor reviews patient:      │
│ - Emotional state data       │
│ - Mood trends                │
│ - Current medications        │
│ - Medical history            │
└────────┬─────────────────────┘
         ↓
STEP 2: AI RECOMMENDATION
┌──────────────────────────────┐
│ Medicine Recommendation      │
│ Engine generates suggestions │
│ - Matches symptoms to drugs  │
│ - Checks interactions        │
│ - Recommends dosage          │
│ - Considers alternatives     │
└────────┬─────────────────────┘
         ↓
STEP 3: DOCTOR REVIEW
┌──────────────────────────────┐
│ Doctor decision:             │
│ - Accept AI recommendation   │
│ - Modify dosage              │
│ - Select alternative drug    │
│ - Add clinical notes         │
│ - Add prescribing reason     │
└────────┬─────────────────────┘
         ↓
STEP 4: PRESCRIPTION GENERATION
┌──────────────────────────────┐
│ POST /api/dosage/create      │
│ - Create Medication document │
│ - Link to Patient record     │
│ - Generate prescription ID   │
│ - Store in MongoDB           │
└────────┬─────────────────────┘
         ↓
STEP 5: DELIVERY & STORAGE
┌──────────────────────────────┐
│ - Generate PDF prescription  │
│ - Notify patient             │
│ - Update patient medication  │
│ - Create audit log           │
│ - Archive prescription       │
└──────────────────────────────┘
```

---

## API Architecture

### REST API Endpoints Overview

```
Authentication Routes
├── POST   /api/auth/register          - Create new user
├── POST   /api/auth/login             - User login
├── POST   /api/auth/logout            - User logout
└── GET    /api/auth/verify            - Verify JWT token

Patient Routes
├── GET    /api/patient/:id            - Get patient profile
├── PUT    /api/patient/:id            - Update patient info
├── GET    /api/patient/:id/history    - Get patient emotion history
└── GET    /api/patient/search/:query  - Search patients

Emotion Routes
├── POST   /api/emotion/log            - Log new emotion entry
├── GET    /api/emotion/:patientId     - Get emotions for patient
├── GET    /api/emotion/:patientId/stats - Get emotion statistics
└── POST   /api/emotion/:id/analyze    - Analyze emotion data

Medication Routes (Dosage)
├── POST   /api/dosage/create          - Create prescription
├── GET    /api/dosage/:patientId      - Get patient medications
├── PUT    /api/dosage/:id             - Update prescription
├── DELETE /api/dosage/:id             - Remove prescription
└── GET    /api/dosage/:id/recommend   - Get AI recommendations

Booking Routes
├── POST   /api/booking/create         - Create appointment
├── GET    /api/booking/:patientId     - Get patient bookings
├── PUT    /api/booking/:id            - Update booking
└── DELETE /api/booking/:id            - Cancel booking

Session Routes
├── GET    /api/session/:patientId     - Get sessions
├── POST   /api/session/create         - Create consultation session
└── GET    /api/session/:id/notes      - Get session notes

Doctor Routes
├── GET    /api/doctor/:id             - Get doctor profile
├── GET    /api/doctor/:id/patients    - Get doctor's patients
└── PUT    /api/doctor/:id             - Update doctor profile

Memory Vault Routes
├── POST   /api/memoryvault/create     - Save memory/journal
├── GET    /api/memoryvault/:patientId - Get patient memories
├── PUT    /api/memoryvault/:id        - Update memory
└── DELETE /api/memoryvault/:id        - Delete memory
```

---

## Frontend Architecture

### Component Structure

```
src/
├── App.jsx                    (Main router)
├── ThemeContext.jsx           (Global theme state)
├── index.css                  (Global styles)
├── main.jsx                   (Entry point)
│
├── pages/
│   ├── Home.jsx              (Landing page)
│   ├── PatientLogin.jsx       (Patient login)
│   ├── PatientDashboard.jsx   (Patient main dashboard)
│   ├── PatientProfilePage.jsx (Patient profile)
│   └── DoctorDashboard.jsx    (Doctor portal)
│
├── components/
│   ├── Authentication
│   │   └── (Login/Register components)
│   │
│   ├── Patient Mode
│   │   ├── PatientView.jsx          (Main patient interface)
│   │   ├── MoodTracker.jsx          (Mood selection)
│   │   ├── EmotionDetector.jsx      (Facial emotion)
│   │   ├── VoiceBot.jsx             (Voice sentiment)
│   │   ├── CombinedCheckIn.jsx      (Multi-modal check-in)
│   │   ├── Chatbot.jsx              (AI chat companion)
│   │   ├── MedicationRecommendation.jsx
│   │   ├── MoodSuggestions.jsx      (Contextual suggestions)
│   │   ├── MemoryVault.jsx          (Journal/Notes)
│   │   ├── BadgeSystem.jsx          (Achievements)
│   │   ├── RewardSystem.jsx         (Gamification)
│   │   └── MyBookings.jsx           (Appointments)
│   │
│   ├── Doctor Mode
│   │   ├── DoctorDashboard.jsx      (Doctor portal)
│   │   ├── PatientList.jsx          (Patient registry)
│   │   ├── PatientProfile.jsx       (Patient details)
│   │   ├── EmotionAnalytics.jsx     (Emotion charts)
│   │   ├── MedicalPrescription.jsx  (Prescription UI)
│   │   └── DoctorProfile.jsx        (Doctor info)
│   │
│   ├── Shared Components
│   │   ├── AnimatedMascot.jsx       (Mascot character)
│   │   ├── LiveDoctor.jsx           (Real-time messaging)
│   │   ├── BookingModal.jsx         (Appointment modal)
│   │   ├── ContactPatientModal.jsx  (Communication)
│   │   ├── Health.jsx               (Health dashboard)
│   │   └── AnalysisPage.jsx         (Data analysis)
│   │
│   └── UI/Utilities
│       ├── ThemedInput.jsx
│       └── (Other utility components)
│
├── services/
│   ├── api.js                (API communication)
│   └── (Other services)
│
└── utils/
    └── (Helper functions)
```

### State Management (Context API)

```
ThemeContext
├── currentTheme: 'light' | 'dark'
├── themes: { light: {...}, dark: {...} }
├── setCurrentTheme()
└── useTheme() hook

Component-Level State
├── User authentication state
├── Patient mood/emotion data
├── Chat messages
├── Form inputs
└── UI modals/drawers
```

---

## Backend Architecture

### Route Handler Pattern

```
Request
  ↓
Router (/api/emotion)
  ↓
Middleware (auth, cors, body-parser)
  ↓
Controller (emotionController)
  ├── Validate input
  ├── Call service/model
  ├── Handle errors
  └── Return response
  ↓
Model (Mongoose Emotion schema)
  ├── Validate data
  ├── Query MongoDB
  └── Return formatted data
  ↓
Response (JSON)
```

### Controller Structure

```
emotionController.js
├── logEmotion()          - Save new emotion entry
├── getEmotions()         - Fetch emotion history
├── analyzeEmotion()      - AI analysis
├── getStatistics()       - Generate insights
└── deleteEmotion()       - Remove entry

aiController.js
├── generateRecommendation()
├── getChatbotResponse()
├── analyzeSentiment()
└── generateInsights()

bookingController.js
├── createBooking()
├── getBookings()
├── updateBooking()
└── cancelBooking()

dosageController.js
├── createPrescription()
├── updateDosage()
├── getRecommendations()
└── checkInteractions()
```

---

## Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  role: 'patient' | 'doctor',
  name: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Patient Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  medicalHistory: String,
  allergies: [String],
  currentMedications: [String],
  assignedDoctor: ObjectId (ref: Doctor),
  emergencyContact: {
    name: String,
    phone: String,
    relationship: String
  },
  avatar: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Doctor Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  specialization: String,
  licenseNumber: String,
  patients: [ObjectId] (ref: Patient),
  availability: [{
    day: String,
    startTime: String,
    endTime: String
  }],
  createdAt: Date,
  updatedAt: Date
}
```

### Emotion Collection
```javascript
{
  _id: ObjectId,
  patientId: ObjectId (ref: Patient),
  moodScore: Number (1-5),
  facialEmotion: String,
  voiceSentiment: String,
  confidence: Number,
  notes: String,
  suggestions: [String],
  timestamp: Date,
  createdAt: Date
}
```

### Medication Collection
```javascript
{
  _id: ObjectId,
  patientId: ObjectId (ref: Patient),
  prescribedBy: ObjectId (ref: Doctor),
  medicineName: String,
  dosage: String,
  frequency: String,
  startDate: Date,
  endDate: Date,
  prescribedFor: String,
  sideEffects: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Booking Collection
```javascript
{
  _id: ObjectId,
  patientId: ObjectId (ref: Patient),
  doctorId: ObjectId (ref: Doctor),
  appointmentDate: Date,
  appointmentTime: String,
  reason: String,
  status: 'scheduled' | 'completed' | 'cancelled',
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

### MemoryVault Collection
```javascript
{
  _id: ObjectId,
  patientId: ObjectId (ref: Patient),
  title: String,
  content: String,
  mood: String,
  tags: [String],
  isPrivate: Boolean,
  attachments: [String],
  createdAt: Date,
  updatedAt: Date
}
```

### Session Collection
```javascript
{
  _id: ObjectId,
  patientId: ObjectId (ref: Patient),
  doctorId: ObjectId (ref: Doctor),
  sessionDate: Date,
  sessionTime: String,
  duration: Number,
  notes: String,
  recommendations: [String],
  status: 'scheduled' | 'completed' | 'cancelled',
  createdAt: Date,
  updatedAt: Date
}
```

---

## Authentication & Security

### JWT Token Structure
```javascript
Header:
{
  "alg": "HS256",
  "typ": "JWT"
}

Payload:
{
  "userId": "64a1b2c3d4e5f6g7h8i9j0",
  "role": "patient",
  "email": "patient@example.com",
  "iat": 1704637200,
  "exp": 1704723600  // 24 hours
}

Signature:
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  your-secret-key
)
```

### Password Hashing (bcryptjs)
```javascript
// Register
password → bcrypt.hash(password, 10) → stored in MongoDB

// Login
inputPassword → bcrypt.compare(inputPassword, storedHash) → true/false
```

### Middleware Stack
```
Request
  ↓
CORS Middleware (Allow cross-origin)
  ↓
Body-Parser Middleware (Parse JSON)
  ↓
Authentication Middleware (Verify JWT)
  ↓
Route Handler
  ↓
Error Handler Middleware
  ↓
Response
```

---

## AI/ML Integration

### 1. **Facial Emotion Recognition (Face-API.js)**

```javascript
// Frontend Implementation
1. Load pre-trained models
   - Face detection model
   - Face landmarks model
   - Face expression model

2. Capture from webcam
   - Get video stream
   - Extract frames

3. Detect & Analyze
   - Detect face in frame
   - Extract facial expressions
   - Map to 7 emotions:
     * Happy
     * Sad
     * Angry
     * Fearful
     * Surprised
     * Disgusted
     * Neutral

4. Get Confidence Scores
   - Each emotion: 0-1 confidence
   - Select highest confidence emotion

5. Send to Backend
   - POST /api/emotion/log
   - Include emotion type & confidence
```

### 2. **Voice Sentiment Analysis (Web Speech API)**

```javascript
// Frontend Implementation
1. Initialize Speech Recognition
   - navigator.mediaDevices.getUserMedia()
   - Get microphone access

2. Record Audio
   - Start recording
   - Process audio stream

3. Sentiment Detection
   - Analyze audio features:
     * Tone (pitch, frequency)
     * Tempo (speed, pauses)
     * Volume intensity
   - Rule-based classification:
     * Positive: higher pitch, faster tempo
     * Negative: lower pitch, slower tempo
     * Neutral: moderate values

4. Return Sentiment Score
   - Confidence level: 0-1
   - Sentiment type: positive/negative/neutral
```

### 3. **Google Generative AI (Gemini)**

```javascript
// Backend Implementation
const { GoogleGenerativeAI } = require("@google/generative-ai");

1. Initialize API
   - const genAI = new GoogleGenerativeAI(API_KEY)
   - const model = genAI.getGenerativeModel({ model: "gemini-pro" })

2. Prepare Prompt
   - User message
   - System context (patient mood, medical history)
   - Conversation history
   - Safety guidelines

3. Generate Response
   - await model.generateContent(prompt)
   - Stream response for real-time display

4. Post-Process
   - Validate response safety
   - Add personalization
   - Store in conversation history
```

### 4. **Rule-Based Chatbot System**

```javascript
Chatbot Logic Flow:
1. Extract Keywords
   - Split message into words
   - Remove stopwords
   - Identify key terms

2. Intent Detection
   - Match against predefined patterns
   - Categories:
     * Greetings
     * Mental health concerns
     * Medication questions
     * Stress management
     * Emergency support
     * Scheduling

3. Context Analysis
   - Check patient's current mood
   - Review conversation history
   - Consider time of day

4. Response Selection
   - If exact match found: Use predefined response
   - If complex query: Route to Google Generative AI
   - Apply personalization filters

5. Voice Synthesis (Optional)
   - Use Web Speech API
   - Text-to-speech conversion
   - Play audio to user
```

---

## Deployment Architecture

### Development Environment
```
Local Machine
├── Frontend: npm run dev (Vite dev server - port 3000)
├── Backend: npm run dev (Nodemon - port 5001)
├── Database: MongoDB Atlas (cloud) or Local MongoDB
└── AI Services: External APIs (Google AI, Face-API CDN)
```

### Production Deployment

```
┌─────────────────────────────────────────┐
│         CDN / Static Hosting            │
│      (Vercel / Netlify / AWS S3)       │
│  - Vite build output                   │
│  - Static assets & images              │
│  - Global distribution                 │
└──────────────┬──────────────────────────┘
               ↓
┌──────────────────────────────────────────┐
│      Cloud Provider (AWS/Google/Azure)   │
├──────────────────────────────────────────┤
│  Node.js Backend                         │
│  - Express.js on port 5001              │
│  - Environment variables via .env       │
│  - Load balancer for scalability        │
│  - Auto-scaling groups                  │
└──────────────┬───────────────────────────┘
               ↓
┌──────────────────────────────────────────┐
│      MongoDB Atlas (Cloud Database)      │
│  - Replica sets for redundancy          │
│  - Automated backups                    │
│  - Connection pooling                   │
│  - IP whitelisting for security         │
└──────────────────────────────────────────┘
```

### CI/CD Pipeline
```
Git Push (GitHub/GitLab)
  ↓
GitHub Actions / GitLab CI
  ├── Run Tests
  ├── Build Frontend (npm run build)
  ├── Build Backend (npm run build)
  ├── Code Quality Checks (ESLint)
  └── Security Scans
  ↓
Deploy to Production
  ├── Deploy Frontend to CDN
  ├── Deploy Backend to Cloud
  └── Update Database Schema (if needed)
  ↓
Health Checks & Monitoring
```

---

## Performance Optimization

### Frontend Optimization
- Code splitting with React.lazy()
- Image optimization (WebP format)
- Caching with Service Workers
- Minification and compression
- Tree-shaking unused code

### Backend Optimization
- Database indexing on frequently queried fields
- Connection pooling with MongoDB
- API response caching (Redis - optional)
- Pagination for large datasets
- Compression middleware (gzip)

### Database Optimization
- Indexes on patientId, userId, timestamp
- Query optimization with lean()
- Aggregation pipelines for analytics
- Connection timeout management

---

## Monitoring & Logging

### Application Logging
```javascript
// Backend logging structure
├── Info: API requests, database operations
├── Warn: Invalid inputs, slow queries
├── Error: Exceptions, API failures
└── Debug: Detailed execution flow
```

### Monitoring Metrics
- API response time (target: <200ms)
- Database query time (target: <50ms)
- Error rate (target: <0.1%)
- User engagement metrics
- System resource usage

---

## API Response Format

### Success Response
```json
{
  "success": true,
  "statusCode": 200,
  "data": {
    // Response data
  },
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "statusCode": 400,
  "error": {
    "code": "INVALID_INPUT",
    "message": "User-friendly error message"
  }
}
```

---

## Security Best Practices

1. **Input Validation**
   - Validate all user inputs
   - Sanitize database queries
   - Prevent SQL/NoSQL injection

2. **Output Encoding**
   - HTML encode API responses
   - JSON encoding for data transfer

3. **Authentication**
   - JWT with expiration
   - HTTPS only
   - Secure cookie flags

4. **Authorization**
   - Role-based access control (RBAC)
   - Doctor can only access their patients
   - Patients can only access their own data

5. **Data Protection**
   - Encrypt sensitive data at rest
   - HTTPS for data in transit
   - Regular security audits

---

## Scalability Considerations

1. **Horizontal Scaling**
   - Load balancer for multiple backend instances
   - Stateless API design
   - Distributed sessions (Redis)

2. **Vertical Scaling**
   - Increase server resources
   - Optimize database queries
   - Cache frequently accessed data

3. **Database Scaling**
   - MongoDB Atlas sharding
   - Read replicas
   - Connection pooling

4. **Frontend Scaling**
   - CDN distribution
   - Lazy loading
   - Code splitting

---

**Last Updated**: January 2026  
**Architecture Version**: 1.0.0  
**Status**: Production Ready
