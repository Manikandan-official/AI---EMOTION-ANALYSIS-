# 🧠 Mental Check - Complete Features Guide

## Project Overview
**Mental Check** is an AI-powered mental health tracking and management system for hospitals. It helps doctors monitor and treat patients with depression, anxiety, and psychotic disorders using facial recognition, voice analysis, and AI chatbot support.

---

## 👨‍⚕️ Doctor Mode Features

### 1. **Secure Authentication & Login**
- Doctor email/password login
- JWT token-based authentication
- Password encryption (bcryptjs)
- Session management
- Logout functionality

### 2. **Patient Management Dashboard**
- View all assigned patients
- Search and filter patients by name/ID
- Patient profile cards with details:
  - Name, age, gender
  - Medical diagnosis
  - Current medications
  - Concern level (Low/Medium/High)
- Quick access to patient records

### 3. **Emotion Analytics & Trends**
- Visual charts showing emotion patterns
- Track 3 key metrics over time:
  - Depression levels (0-1 scale)
  - Anxiety levels (0-1 scale)
  - Aggression levels (0-1 scale)
- Interactive line charts with date filters
- Historical data comparison
- Identify emotional trends

### 4. **AI Medicine Recommendation System**
- Automatic medication suggestions based on:
  - Patient's emotional state
  - Current medications
  - Medical history
  - Symptom severity
- Dosage recommendations
- Check drug interactions
- Manual override option for doctor judgment

### 5. **Digital Prescription Management**
- Create and issue digital prescriptions
- Specify:
  - Medicine name
  - Dosage (e.g., 20mg)
  - Frequency (daily, twice daily, etc.)
  - Duration
  - Prescribed for (condition)
- Generate PDF prescriptions
- Prescription history tracking
- Patient notification system

### 6. **Clinical Reporting**
- Generate detailed patient reports
- Include:
  - Patient medical history
  - Emotion trend analysis
  - Medication effectiveness
  - Doctor notes
  - Treatment recommendations
- Export as PDF
- Print reports

### 7. **Doctor Profile Management**
- View/edit personal information
- Specialization field
- License number tracking
- Patient list management
- Availability scheduling

---

## 👤 Patient Mode Features

### 1. **Daily Mood Tracking**
- **5-level mood scale:**
  - 😢 Very Bad (score: 1)
  - 😐 Bad (score: 2)
  - 🙂 Okay (score: 3)
  - 😊 Good (score: 4)
  - 😄 Very Good (score: 5)
- Quick emoji-based selection
- Add optional notes
- Timestamp tracking
- Mood history display

### 2. **Facial Emotion Recognition**
- Real-time webcam emotion detection
- Detects 7 emotions:
  - Happy 😊
  - Sad 😢
  - Angry 😠
  - Neutral 😐
  - Surprised 😲
  - Fearful 😨
  - Disgusted 🤢
- 3-second countdown before capture
- Confidence percentage for each emotion
- Automatically logs detected emotion

### 3. **Voice Sentiment Analysis**
- Record voice message (10-30 seconds)
- Analyzes speech patterns:
  - Tone (pitch, frequency)
  - Tempo (speed, pauses)
  - Volume intensity
- Classifies as:
  - Positive (upbeat, energetic)
  - Negative (depressed, distressed)
  - Neutral (calm, stable)
- Shows confidence score

### 4. **Combined Check-In**
- Multi-modal emotion assessment
- Combines:
  - Manual mood selection
  - Facial emotion detection
  - Voice sentiment analysis
- Cross-validates all 3 methods
- Gives overall emotional snapshot
- AI generates personalized recommendations

### 5. **🆕 AI Chatbot (NEW!)**
**Conversational AI Companion**
- **10 Intent Categories:**
  1. **Greetings** - "Hi, Hello, Hey"
  2. **Mental Health** - "Depressed, Sad, Hopeless"
  3. **Anxiety** - "Anxious, Panicking, Stressed"
  4. **Sleep** - "Insomnia, Can't sleep, Tired"
  5. **Medication** - "Pills, Side effects, Dosage"
  6. **Relationships** - "Family, Friends, Lonely"
  7. **Coping** - "Help manage, Strategies"
  8. **Positive** - "Happy, Grateful, Good"
  9. **Appointments** - "Doctor visit, Schedule"
  10. **Emergency** - "Suicide, Hurt, Help"

**Features:**
- ✅ **Text Chat** - Type messages, get instant AI responses
- ✅ **Voice Input** - Click 🎤 to speak (speech-to-text)
- ✅ **Voice Output** - Click 🔊 to hear responses (text-to-speech)
- ✅ **50+ Responses** - Smart replies based on what you say
- ✅ **Emotion Detection** - Understands your emotional state
- ✅ **Emergency Help** - Provides 988 crisis hotline when needed
- ✅ **Quick Buttons** - Pre-made messages for common concerns
- ✅ **Chat History** - Keeps conversation during session
- ✅ **Mobile Friendly** - Works on phones and tablets

**Example Conversations:**
```
User: "I'm feeling anxious"
AI: "Anxiety can be challenging. Let's work through this together. 
     Would some breathing exercises help?"

User: "I can't sleep"
AI: "Sleep is crucial for mental health. Here are some tips:
     - Keep a consistent schedule
     - Avoid screens 1 hour before bed
     - Try meditation
     - Keep your room cool and dark"

User: "I want to hurt myself"
AI: "🚨 YOUR SAFETY IS MY PRIORITY 🚨
     Call 988 (Suicide & Crisis Lifeline)
     Text 'HELLO' to 741741
     Go to nearest emergency room
     You matter. Help is available."
```

### 6. **Medication Management**
- View current medications
- Medication reminders
- Dosage instructions
- Track medication adherence
- Report side effects
- Check drug interactions
- Medication history log

### 7. **Memory Vault (Personal Journal)**
- Write private journal entries
- Encrypt for privacy
- Add mood tags
- Search previous entries
- Reflective writing prompts
- Personal thought storage
- Secured storage (only patient access)

### 8. **Personalized Health Recommendations**
- Mood-based suggestions
- Tips based on emotional state:
  - If sad → Relaxation techniques
  - If anxious → Breathing exercises
  - If tired → Sleep hygiene tips
  - If positive → Celebrate & maintain
- Activity recommendations
- Wellness resources
- Helpline information

### 9. **Live Doctor Consultation**
- Real-time messaging with assigned doctor
- Schedule appointments
- View appointment history
- Appointment reminders
- Message notifications
- Direct communication channel

### 10. **Appointment Booking**
- Search available doctors
- View time slots
- Book appointments
- Reschedule or cancel
- Get appointment reminders
- See appointment history

### 11. **Badge & Reward System**
- Earn badges for:
  - Daily check-ins ✓
  - 7-day streaks 🔥
  - Using chatbot 🤖
  - Reading recommendations 📖
  - Medication adherence 💊
- Accumulate reward points
- Redeem for achievements
- Motivational milestones

### 12. **Personal Health Dashboard**
- Mood trends chart
- Emotion statistics
- Medication list display
- Upcoming appointments
- Recent achievements
- Quick health summary
- Progress tracking

### 13. **Patient Profile**
- Personal information
- Medical history
- Allergies documentation
- Current medications
- Emergency contacts
- Doctor assignment
- Edit profile details

---

## 🎯 System Workflow

### Patient Daily Workflow
```
1. Patient logs in
2. Performs check-in (mood + facial + voice OR just mood)
3. Gets personalized recommendations
4. Can chat with AI chatbot for support
5. Reviews medication reminders
6. Optionally writes in memory vault
7. Schedules/views doctor appointments
```

### Doctor Workflow
```
1. Doctor logs in
2. Views patient list with concern levels
3. Selects a patient
4. Reviews emotion trend charts
5. Sees AI medication recommendations
6. Approves/modifies prescription
7. Issues digital prescription
8. Generates clinical report
9. Sends to patient & saves to records
```

---

## 💡 Key Benefits

### For Patients
✅ **24/7 Support** - AI chatbot always available
✅ **Easy Tracking** - Just emoji selections (no complex forms)
✅ **Privacy** - Personal journal for thoughts
✅ **Gamification** - Badges and rewards motivate engagement
✅ **Professional Help** - Easy doctor communication
✅ **Medication Support** - Reminders and tracking
✅ **Personalized** - Recommendations based on YOUR mood

### For Doctors
✅ **Real-time Data** - See patient trends instantly
✅ **AI Assistance** - Medicine suggestions (with override)
✅ **Better Decisions** - Data-driven treatment planning
✅ **Efficiency** - Digital prescriptions (no paper)
✅ **Patient Engagement** - Higher check-in rates
✅ **Analytics** - Treatment effectiveness tracking
✅ **Documentation** - Automatic report generation

### For Hospitals
✅ **Scalable** - Manages unlimited patients
✅ **Affordable** - Reduces manual work
✅ **Effective** - Better treatment outcomes
✅ **Compliant** - HIPAA-ready design
✅ **Data-Driven** - Analytics for improvement
✅ **Modern** - Latest AI technology
✅ **Safe** - Automatic emergency detection

---

## 🔒 Security & Privacy

- **Encrypted Passwords** - bcryptjs hashing
- **JWT Authentication** - Secure token system
- **Role-Based Access** - Different access for doctors/patients
- **Data Privacy** - Patient data only for assigned doctor
- **Secure Storage** - MongoDB encryption at rest
- **Emergency Protocol** - Crisis hotlines auto-shown
- **HIPAA Ready** - Compliant design

---

## 📊 Data Collection & Analysis

### What System Tracks
- Mood scores (daily)
- Facial emotions (optional)
- Voice sentiment (optional)
- Medication adherence
- Doctor interactions
- Appointment attendance
- Chat interactions (with AI)

### Analytics Generated
- Emotion trends over time
- Medication effectiveness
- Treatment outcomes
- Patient engagement metrics
- Doctor performance data
- Hospital statistics

---

## 🎨 User Interface

### Patient Dashboard
- Header with greeting ("Hello, Patient Name")
- Current status badge
- Patient info cards (meds, doctor, appointments)
- Tab navigation:
  - Mood Tracker
  - Chat Assistant
  - Voice Assistant
  - Combined Analysis
  - Rewards
- Floating AI chatbot button (🤖)
- Dark/Light theme toggle
- Mobile responsive

### Doctor Dashboard
- Patient list with search
- Emotion trend charts
- Prescription editor
- Clinical report generator
- Patient detail view
- Analytics section

---

## 🚀 How It Actually Works

### Emotion Detection Pipeline
```
1. Patient initiates check-in
2. System captures input:
   - Manual mood selection (emoji)
   - Facial emotion (if enabled)
   - Voice sentiment (if enabled)
3. Data is analyzed & scored
4. AI generates recommendations
5. Results shown to patient
6. Data saved to database
7. Doctor sees updated trends
```

### Chatbot Intelligence
```
1. Patient types or speaks message
2. System detects keywords
3. Matches against 10 categories
4. Selects appropriate response
5. Personalizes based on emotion
6. Speaks response (if voice enabled)
7. Saves to chat history
```

### Prescription Generation
```
1. Doctor views patient emotion data
2. AI suggests medication
3. Doctor reviews & approves/modifies
4. Digital prescription created
5. PDF generated
6. Patient notified
7. Stored in database
8. Available as patient record
```

---

## 📱 Technology at a Glance

### Frontend
- React (interactive UI)
- Web Speech API (voice)
- Face-API (emotion detection)
- Tailwind CSS (styling)
- Framer Motion (animations)

### Backend
- Node.js + Express (server)
- MongoDB (database)
- JWT (authentication)
- Google AI (optional chatbot enhancement)

### Mobile
- Fully responsive
- Works on all devices
- Touch-optimized buttons
- Mobile-friendly design

---

## 📈 Success Metrics

**Patient Engagement:**
- Daily check-in rate
- Chatbot usage frequency
- Medication adherence rate
- Appointment attendance

**Clinical Outcomes:**
- Mood improvement over time
- Treatment effectiveness
- Crisis prevention
- Patient satisfaction

**System Performance:**
- API response time (<200ms)
- Uptime (99.9%)
- Zero critical errors
- Accessibility compliance

---

## 🔄 Integration Points

The system integrates:
- ✅ Mood tracking with chatbot context
- ✅ Emotion data with doctor recommendations
- ✅ Medication management with reminders
- ✅ Appointments with doctor messaging
- ✅ Emergency detection with hotlines
- ✅ Patient profiles with medical history

---

## ✨ Unique Features

### 1. **Multi-Modal Emotion Detection**
Combines facial recognition, voice analysis, and manual selection for accuracy

### 2. **AI Chatbot with Voice**
Talk to AI companion - both text and voice interaction

### 3. **Automatic Emergency Detection**
System recognizes crisis keywords and provides 988 hotline

### 4. **Digital Prescription System**
Paperless prescriptions with PDF generation

### 5. **Personalized Recommendations**
AI suggests actions based on YOUR emotional state

### 6. **Real-Time Doctor Analytics**
Doctors see instant patient emotion trends

### 7. **Gamification**
Badges and rewards motivate patients to engage

---

## 🎓 College Project Highlights

✅ **Full-Stack Application** - Frontend + Backend + Database
✅ **AI/ML Integration** - Emotion recognition + NLP chatbot
✅ **Real-World Problem** - Mental health is critical
✅ **Modern Tech Stack** - React, Node.js, MongoDB
✅ **Professional Features** - Security, accessibility, responsive
✅ **Scalable Design** - Can handle thousands of patients
✅ **Production-Ready Code** - Error handling, validation
✅ **Comprehensive Documentation** - Complete feature guide

---

**This is a complete, working mental health management system ready for hospital deployment!**
