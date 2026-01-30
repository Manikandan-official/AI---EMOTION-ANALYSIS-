# 🧠 AI-Powered Mental Health Tracker & Emotion Recognition System

## 📋 Project Overview

**Mental Check** is a comprehensive AI-driven mental health management platform designed to revolutionize patient care in hospital settings. It combines cutting-edge emotion recognition technology with intelligent recommendation engines to provide real-time mental health monitoring, emotional state analysis, and personalized treatment recommendations.

The system operates in two distinct modes:
- **Doctor Mode**: Clinical dashboard for healthcare professionals
- **Patient Mode**: Interactive interface for patient self-assessment and engagement

---

## 🎯 Core Features

### 👨‍⚕️ **Doctor Mode Features**

#### 1. **Secure Authentication & Access Control**
   - Role-based login system for medical professionals
   - JWT token-based authentication
   - Secure session management
   - Password encryption using bcryptjs

#### 2. **Patient Management Dashboard**
   - Comprehensive patient registry with detailed profiles
   - Patient search and filtering capabilities
   - Real-time patient status monitoring
   - Patient activity logs and history tracking
   - Quick access to patient records and medical history

#### 3. **Emotion & Mental Health Analytics**
   - Real-time emotion trend visualization with interactive charts
   - Multi-dimensional emotional analysis:
     - Depression levels tracking
     - Anxiety measurement
     - Aggression monitoring
   - Historical data comparison and trend analysis
   - Customizable date range selection for data visualization
   - Predictive insights based on emotional patterns

#### 4. **AI-Powered Medicine Recommendation System**
   - Intelligent medication suggestion engine
   - Data-driven prescription recommendations based on:
     - Patient emotional state
     - Current medication history
     - Previous treatment outcomes
     - Clinical symptoms and severity
   - Manual override capabilities for clinical judgment
   - Dosage recommendations with flexibility
   - Medication interaction checking

#### 5. **Prescription Management**
   - Digital prescription creation and management
   - Medication dosage tracking
   - Prescription history and audit trails
   - PDF prescription generation for patient records
   - Prescription notes and clinical observations
   - Drug interaction warnings and alerts

#### 6. **Clinical Reporting**
   - Detailed clinical reports generation
   - Patient progress summaries
   - Emotional state history reports
   - Treatment efficacy analysis
   - Data export capabilities (PDF/CSV)

#### 7. **Doctor Profile Management**
   - Doctor personal information management
   - Specialization tracking
   - Patient list under each doctor's care
   - Appointment scheduling and management

---

### 👤 **Patient Mode Features**

#### 1. **Daily Mood Tracking**
   - 5-level mood scale assessment:
     - Very Bad (😢)
     - Bad (😐)
     - Okay (🙂)
     - Good (😊)
     - Very Good (😄)
   - Emoji-based intuitive interface
   - Daily mood logging with timestamps
   - Personalized mood-based feedback messages
   - Contextual suggestions based on selected mood

#### 2. **Facial Emotion Recognition**
   - Real-time facial emotion detection using Face API
   - Webcam-based emotion capture
   - Countdown timer before capturing emotion state
   - Detected emotions:
     - Happy
     - Sad
     - Angry
     - Neutral
     - Surprised
     - Fearful
     - Disgusted
   - Emotion confidence scoring
   - Automatic logging of detected emotions

#### 3. **Voice Sentiment Analysis**
   - Real-time voice recording and analysis
   - Sentiment classification:
     - Positive
     - Negative
     - Neutral
   - Voice emotion tone detection
   - Audio pattern recognition
   - Voice-based mood assessment

#### 4. **Combined Check-In System**
   - Multi-modal emotion assessment combining:
     - Manual mood selection
     - Facial recognition
     - Voice sentiment analysis
   - Comprehensive emotional snapshot
   - Cross-validation of emotional states
   - Accuracy scoring for emotion detection

#### 5. **Interactive AI Chatbot**
   - **Conversational AI Companion**: Rule-based empathetic chatbot
   - **Natural Language Processing**: Understands patient emotions and concerns
   - **Voice-Enabled Interaction**:
     - Text-to-speech for AI responses
     - Speech recognition for patient input
     - Hands-free operation capability
   - **Emotional Intelligence**:
     - Recognizes emotional keywords and patterns
     - Provides contextual empathetic responses
     - Adapts tone based on patient mood
   - **Multi-Topic Support**:
     - Mental health concerns
     - Medication inquiries
     - Stress management
     - Sleep issues
     - Relationship advice
     - Professional help resources
   - **Chat History**: Persistent conversation logs for reference
   - **Response Customization**: Context-aware replies based on patient state

#### 6. **Medication Management**
   - Medication reminders and scheduling
   - Current medication list display
   - Dosage instructions and guidelines
   - Medication feedback collection
   - Side effect reporting
   - Drug interaction information
   - Medication history tracking

#### 7. **Memory Vault**
   - Personal journal and notes storage
   - Secure memory preservation
   - Thought and feeling documentation
   - Progress tracking through personal records
   - Reflective writing prompts
   - Private, encrypted storage
   - Historical memory access and review

#### 8. **Personalized Recommendations**
   - AI-generated mood improvement suggestions
   - Contextual wellness tips based on emotion state
   - Coping strategy recommendations
   - Activity suggestions:
     - Relaxation techniques
     - Physical exercises
     - Mindfulness practices
   - Resources and helpline information

#### 9. **Live Doctor Consultation**
   - Real-time messaging with assigned doctor
   - Appointment booking system
   - Consultation scheduling
   - Direct communication channel
   - Message notifications
   - Consultation history

#### 10. **Badge & Reward System**
   - Achievement badges for:
     - Daily check-ins
     - Consistent mood tracking
     - Using chatbot assistance
     - Reading recommendations
   - Reward points accumulation
   - Gamification elements to encourage engagement
   - Progress milestones
   - Motivational feedback

#### 11. **Personal Health Dashboard**
   - Mood trend visualization over time
   - Emotional statistics and analytics
   - Medication adherence tracking
   - Activity logs
   - Achievement display
   - Quick health metrics summary

#### 12. **Appointment Management**
   - Book doctor appointments
   - View scheduled consultations
   - Appointment reminders
   - Consultation rescheduling
   - Appointment history

#### 13. **Profile Management**
   - Personal information management
   - Health history documentation
   - Emergency contact information
   - Medical conditions tracking
   - Allergies documentation
   - Current medications list

---

## 🏗️ System Architecture Overview

### Frontend Stack
- **Framework**: React 18+ with JSX
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS + PostCSS + Autoprefixer
- **Animations**: Framer Motion for smooth UI transitions
- **State Management**: React Context API (ThemeContext)
- **Icons & UI**: Lucide React, React Icons, Headless UI
- **Chat Interface**: ChatScope Chat UI Kit
- **Data Visualization**: Recharts for analytics charts
- **Face Recognition**: Face API (face-api.js)
- **Build Tool**: Vite for fast development and optimized builds

### Backend Stack
- **Runtime**: Node.js
- **Framework**: Express.js for REST API
- **Database**: MongoDB with Mongoose ODM
- **AI/ML**: Google Generative AI (Gemini API) for chatbot
- **Authentication**: JWT (jsonwebtoken) + bcryptjs for security
- **API Client**: Axios for external API calls
- **PDF Generation**: PDFKit for prescription/report generation
- **Utilities**: UUID for unique ID generation
- **Development**: Nodemon for hot-reload

### AI & ML Services
- **Emotion Detection**: Face API for facial emotion recognition
- **Voice Analysis**: Web Speech API for voice input and sentiment
- **Chatbot Intelligence**: Google Generative AI (Gemini) integration
- **Medicine Recommendation**: Custom rule-based engine with AI enhancement

### Database Models
- **User**: Authentication and role management
- **Patient**: Patient profile and medical information
- **Doctor**: Healthcare professional profiles
- **Session**: Appointment and consultation sessions
- **Medication**: Medicine information and prescriptions
- **MemoryVault**: Patient journal and notes
- **Emotion**: Emotion tracking and analysis records
- **Booking**: Appointment bookings

---

## 🔄 Key Workflows & Logic

### 1. **Patient Mood Check-In Flow**
```
Patient Login → 
Select Mood (Manual/Facial/Voice) → 
Emotion Detection & Analysis → 
AI Analysis (Chatbot & Recommendations) → 
Store Data in MongoDB → 
Display Feedback & Suggestions
```

### 2. **Doctor Prescription Workflow**
```
Doctor Login → 
Select Patient → 
Review Emotional Data & History → 
AI Recommends Medication → 
Doctor Approves/Modifies → 
Generate Digital Prescription → 
Send to Patient & Store in Database
```

### 3. **Chatbot Interaction Flow**
```
Patient Message Input (Text/Voice) → 
NLP Processing & Intent Detection → 
Rule-Based Response Generation → 
Google Generative AI Enhancement → 
Text-to-Speech Response → 
Store in Conversation History
```

### 4. **Real-Time Analytics**
```
Emotion Data Collection → 
Data Aggregation & Processing → 
Trend Analysis → 
Visualization on Charts → 
Doctor Dashboard Display
```

---

## 📊 Data Flow

### Emotion Analysis Pipeline
1. **Input Sources**: Facial recognition, voice analysis, manual selection
2. **Processing**: Emotion detection algorithms and NLP
3. **Validation**: Cross-check multiple emotion sources
4. **Scoring**: Confidence percentage for each emotion
5. **Storage**: Save to MongoDB with timestamp
6. **Analytics**: Generate insights and trends
7. **Recommendation**: AI suggests interventions based on data

### User Authentication Flow
1. User enters credentials
2. Backend validates against MongoDB
3. Password verification via bcryptjs
4. JWT token generation
5. Token sent to frontend
6. Frontend stores token for subsequent API calls
7. Token verification on protected routes

---

## 🔐 Security Features

- **Password Encryption**: bcryptjs hashing for secure password storage
- **JWT Authentication**: Token-based stateless authentication
- **CORS Protection**: Cross-Origin Resource Sharing configured for safe API access
- **Body Parser**: Safe JSON parsing with size limits
- **Role-Based Access Control**: Separate access for doctors and patients
- **Secure API Endpoints**: Protected routes requiring valid JWT tokens
- **Data Validation**: Input validation on all API endpoints
- **Error Handling**: Comprehensive error messages without exposing sensitive data

---

## 🎨 User Interface Features

- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark/Light Theme**: Customizable color scheme (ThemeContext)
- **Smooth Animations**: Framer Motion for fluid transitions
- **Intuitive Navigation**: React Router for easy page navigation
- **Visual Feedback**: Loading states, success messages, error alerts
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Mobile-Optimized**: Touch-friendly buttons and interfaces

---

## 📈 Metrics & Analytics

- **Mood Trend Analysis**: Track emotion patterns over days/weeks/months
- **Medication Effectiveness**: Correlate mood changes with prescriptions
- **Patient Engagement**: Track check-in frequency and consistency
- **Chatbot Utilization**: Monitor chatbot interaction patterns
- **Doctor Performance**: Track prescription efficacy and patient outcomes
- **System Health**: Monitor API response times and error rates

---

## 🚀 Technology Highlights

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Frontend Build** | Vite | Fast HMR and optimized production builds |
| **Styling** | Tailwind CSS | Utility-first CSS for rapid UI development |
| **State Management** | Context API | Lightweight state management for themes |
| **Animations** | Framer Motion | Smooth and responsive animations |
| **Facial Recognition** | Face API | Real-time emotion detection from camera |
| **Voice Processing** | Web Speech API | Speech recognition and text-to-speech |
| **AI Chatbot** | Google Generative AI | Advanced NLP for intelligent conversations |
| **Data Persistence** | MongoDB | NoSQL database for flexible data storage |
| **Backend API** | Express + Node.js | Scalable REST API server |
| **Authentication** | JWT + bcryptjs | Secure user authentication |

---

## 📱 Supported Browsers

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Android)

---

## 🎯 Benefits

### For Patients
✅ Continuous mental health monitoring
✅ AI-powered emotional support through chatbot
✅ Personalized recommendations based on mood
✅ Easy communication with doctors
✅ Medication reminders and tracking
✅ Private journal for reflection
✅ Gamification through badges and rewards
✅ Accessible from anywhere, anytime

### For Healthcare Providers
✅ Real-time patient monitoring
✅ Data-driven prescription recommendations
✅ Comprehensive patient analytics
✅ Improved treatment outcomes tracking
✅ Reduced prescription errors
✅ Better patient engagement
✅ Digital record keeping
✅ Clinical decision support system

### For Healthcare Organizations
✅ Scalable mental health solution
✅ Improved patient outcomes
✅ Reduced healthcare costs
✅ Better resource allocation
✅ Compliance with medical records standards
✅ Automated reporting and analytics
✅ Integration-ready architecture

---

## 🔜 Future Enhancements

- Multi-language support
- Video consultation capabilities
- Advanced predictive analytics
- Integration with wearable devices
- Extended medication database
- Insurance integration
- Telemedicine video calls
- Social support community features
- Mobile app for iOS/Android
- API marketplace for third-party integrations

---

## 📞 Support & Contribution

This is an active development project focused on improving mental health care through technology. For questions or contributions, please reach out to the development team.

---

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Status**: Active Development
