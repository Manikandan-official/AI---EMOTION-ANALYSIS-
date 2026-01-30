# FER Model Integration - Architecture & File Structure

## 🏗️ System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     React Frontend (Port 5173)                   │
│                          Vite Dev Server                         │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Components:                                              │   │
│  │  • FaceRecognition.jsx    - Real-time face detection    │   │
│  │  • CombinedAnalysis.jsx   - Combined emotion analysis   │   │
│  │  • TimedAnalysis.jsx      - Timed emotion detection     │   │
│  │  • Results Display         - Show final diagnosis        │   │
│  │                                                          │   │
│  │ Libraries:                                               │   │
│  │  • face-api.js            - Facial detection            │   │
│  │  • Web Speech API          - Voice capture              │   │
│  │  • Recharts               - Result visualization        │   │
│  └──────────────────────────────────────────────────────────┘   │
└────────────────┬────────────────────────────────────────────────┘
                 │
                 │ HTTP Requests/Responses
                 │ (Images, Audio, Analysis)
                 ↓
┌─────────────────────────────────────────────────────────────────┐
│                  Express.js Backend (Port 5001)                  │
│                      Node.js Server                              │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Controllers:                                             │   │
│  │  • aiController.js       - AI analysis orchestration    │   │
│  │  • emotionController.js  - Emotion data management      │   │
│  │  • patientController.js  - Patient profile management   │   │
│  │                                                          │   │
│  │ Routes:                                                  │   │
│  │  • /api/ai/*             - AI analysis endpoints        │   │
│  │  • /api/emotion-analyze  - Emotion logging              │   │
│  │  • /api/patient/*        - Patient management           │   │
│  │                                                          │   │
│  │ Dependencies:                                            │   │
│  │  • Axios                 - HTTP client for FER API      │   │
│  │  • Mongoose              - MongoDB ORM                  │   │
│  │  • Google Generative AI  - Gemini API for voice        │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────┬──────────────────────────────────┬────────────────────┘
          │                                  │
          │ HTTP Requests                    │ HTTP Requests
          │ (Images for Analysis)            │ (Patient Data)
          ↓                                  ↓
  ┌─────────────────────┐        ┌──────────────────────┐
  │  FastAPI Server     │        │   MongoDB Database   │
  │  (Port 8000)        │        │   (Cloud/Local)      │
  │                     │        │                      │
  │ FER Model           │        │ Collections:         │
  │ Analysis Engine     │        │  • patients          │
  └─────────────────────┘        │  • emotions          │
                                 │  • sessions          │
                                 │  • prescriptions     │
                                 └──────────────────────┘
          │
          ↓
  ┌─────────────────────────────────────────────┐
  │   FER_static_ResNet50_AffectNet.pt Model    │
  │                                             │
  │  Architecture: ResNet50                     │
  │  Training: AffectNet Dataset                │
  │  Input: 224x224 RGB Image                   │
  │  Output: 7 Emotion Probabilities            │
  │                                             │
  │  Emotions:                                  │
  │   1. Angry       5. Neutral                 │
  │   2. Disgusted   6. Sad                     │
  │   3. Fearful     7. Surprised               │
  │   4. Happy                                  │
  │                                             │
  │  Psychiatric Indicators:                    │
  │   • Aggressive (Angry + Disgust)            │
  │   • Depressed  (Sad + Fear)                 │
  │   • Anxious    (Fear + Surprise)            │
  └─────────────────────────────────────────────┘
```

## 📁 File Structure with Annotations

```
mood_tracker_3/
│
├── 📄 FER_MODEL_SETUP.md                    ← Complete setup guide
├── 📄 FER_MODEL_INTEGRATION.md              ← Technical integration details
├── 📄 FER_MODEL_CHANGES_SUMMARY.md          ← Detailed change summary
├── 📄 FER_MODEL_QUICK_REFERENCE.md          ← Quick start guide
├── 📄 FER_MODEL_VERIFICATION_CHECKLIST.md   ← Verification checklist
├── 📄 startup.bat                           ← Windows startup script
├── 📄 startup.sh                            ← Linux/Mac startup script
│
├── frontend/                                 ← React/Vite (Port 5173)
│   ├── src/
│   │   ├── components/
│   │   │   ├── FaceRecognition.jsx          ← Real-time facial detection
│   │   │   ├── CombinedAnalysis.jsx         ← Combined emotion analysis
│   │   │   ├── TimedAnalysis.jsx            ← Timed emotion tracking
│   │   │   └── ...
│   │   └── ...
│   └── package.json
│
├── backend/                                  ← Express.js (Port 5001)
│   ├── ai/                                  ← AI Models & FastAPI Server
│   │   ├── models/
│   │   │   └── FER_static_ResNet50_AffectNet.pt  ← [MAIN MODEL FILE]
│   │   │       Size: ~100MB
│   │   │       Format: PyTorch checkpoint
│   │   │       Status: ✅ INTEGRATED
│   │   │
│   │   ├── face_emotion_model.py            ← [UPDATED] Model wrapper
│   │   │   Changes:
│   │   │   • Model path auto-detection
│   │   │   • GPU/CPU auto-detection
│   │   │   • Emotion probability calculation
│   │   │   • Psychiatric indicator derivation
│   │   │   • Error handling & logging
│   │   │
│   │   ├── main.py                          ← [NEW] FastAPI server
│   │   │   Features:
│   │   │   • Health check endpoints
│   │   │   • Single image emotion detection
│   │   │   • Batch image processing
│   │   │   • Model information endpoint
│   │   │   • CORS middleware
│   │   │   • Comprehensive error handling
│   │   │
│   │   ├── requirements.txt                 ← [NEW] Python dependencies
│   │   │   Includes:
│   │   │   • fastapi, uvicorn
│   │   │   • torch, torchvision
│   │   │   • pillow, numpy
│   │   │   • librosa (audio processing)
│   │   │
│   │   ├── .env.example                     ← [NEW] Config template
│   │   ├── FER_MODEL_INTEGRATION.md         ← [NEW] Technical docs
│   │   └── FER_MODEL_INTEGRATION_GUIDE.md   ← [NEW] Integration guide
│   │
│   ├── controllers/
│   │   ├── aiController.js                  ← [UPDATED] FER API integration
│   │   │   Changes:
│   │   │   • FER API communication
│   │   │   • Availability checking
│   │   │   • Image format handling
│   │   │   • Fallback mechanisms
│   │   │   • Gemini API combination
│   │   │
│   │   ├── emotionController.js
│   │   ├── patientController.js
│   │   └── ...
│   │
│   ├── models/
│   │   ├── Patient.js
│   │   ├── Session.js
│   │   └── ...
│   │
│   ├── routes/
│   │   ├── emotion.js
│   │   ├── aiRoutes.js
│   │   └── ...
│   │
│   ├── package.json                         ← Dependencies verified
│   ├── index.js                             ← Express server entry point
│   └── config.js
│
└── public/
    └── assets/
```

## 🔄 Data Flow Diagram

### 1. Facial Emotion Detection Flow
```
User's Face (via Webcam)
    ↓
face-api.js (Frontend Detection)
    ↓
Capture Image Frame
    ↓
Send to Express Backend
    ↓
Express receives image
    ↓
Convert to FormData
    ↓
POST to FastAPI /predict-face
    ↓
FastAPI Server
    ├─ Load Image
    ├─ Resize to 224x224
    ├─ Normalize (ImageNet stats)
    ├─ Convert to Tensor
    ├─ Feed to ResNet50 Model
    ├─ Get 7 emotion probabilities
    ├─ Calculate psychiatric indicators
    └─ Return JSON response
    ↓
Express Backend
    ├─ Receive emotion probabilities
    ├─ Store in database
    ├─ Add to patient session
    └─ Forward to frontend
    ↓
Frontend
    ├─ Display emotion bars
    ├─ Show confidence score
    ├─ Update emotion history
    └─ Play audio feedback
```

### 2. Voice Emotion Detection Flow
```
User's Voice (via Microphone)
    ↓
Web Speech API (Frontend Capture)
    ↓
Transcribe to Text
    ↓
Send to Express Backend
    ↓
Express calls Gemini API
    ├─ Analyze transcript
    ├─ Consider speech patterns
    ├─ Extract emotional tone
    └─ Return voice emotions
    ↓
Express Backend
    ├─ Process Gemini response
    ├─ Extract emotion scores
    ├─ Log to database
    └─ Forward to frontend
    ↓
Frontend displays voice analysis
```

### 3. Combined Analysis Flow
```
┌─────────────────────────────────────┐
│   Facial Emotions (from FER Model)  │
│   {happy: 0.8, sad: 0.1, ...}      │
└─────────────┬───────────────────────┘
              │
              ├─ Find dominant emotion
              ├─ Get confidence score
              └─ Calculate weighted average
              
              ↓
        ┌─────────────┐
        │   Combine   │
        │   Results   │
        └──────┬──────┘
              ↓
              
┌─────────────────────────────────────┐
│   Voice Emotions (from Gemini API)  │
│   {aggressive: 0.3, anxious: 0.5}  │
└─────────────┬───────────────────────┘
              │
              ├─ Extract tone indicators
              ├─ Weight emotional signals
              └─ Generate voice confidence
              
              ↓
        ┌──────────────────────────┐
        │  Final Emotional State   │
        │  + Psychiatric Indicators│
        │  + Confidence Scores     │
        │  + Recommendations       │
        └──────────────┬───────────┘
                       ↓
              ┌─────────────────────┐
              │  Display to Patient │
              │  Log to Database    │
              │  Alert Doctor (if)  │
              └─────────────────────┘
```

## 📊 Response Format Diagram

### FastAPI /predict-face Response
```json
{
  ✅ Success Flag
  ├─ "success": true
  │
  ✅ Primary Emotion & Confidence
  ├─ "emotion": "happy"
  ├─ "confidence": 0.95
  │
  ✅ All 7 Emotion Probabilities
  ├─ "all_emotions": {
  │   ├─ "angry": 0.02
  │   ├─ "disgusted": 0.01
  │   ├─ "fearful": 0.02
  │   ├─ "happy": 0.95
  │   ├─ "neutral": 0.0
  │   ├─ "sad": 0.0
  │   └─ "surprised": 0.0
  │
  ✅ Psychiatric Indicators
  └─ "psychiatric_indicators": {
      ├─ "aggressive": 0.015
      ├─ "depressed": 0.0
      └─ "anxious": 0.0
}
```

## 🔌 API Integration Points

### Frontend → Express Backend
```
POST /api/ai/analyze
├─ faceImage: base64 image
├─ audioTranscript: text
└─ patientId: string
```

### Express Backend → FastAPI Server
```
POST http://localhost:8000/predict-face
├─ Content-Type: multipart/form-data
└─ file: image file
```

### Express Backend → MongoDB
```
Collection: emotions
├─ patientId: ObjectId
├─ emotions: Object (7 emotions)
├─ psychiatricIndicators: Object
├─ timestamp: Date
└─ confidence: Number
```

## 🎯 Emotion Detection Model

```
INPUT IMAGE (224×224)
    ↓
┌──────────────────────────────────────┐
│    Image Preprocessing (Normalize)    │
│  Mean: [0.485, 0.456, 0.406]         │
│  Std:  [0.229, 0.224, 0.225]         │
└──────────────────┬───────────────────┘
                   ↓
        ┌─────────────────────┐
        │    ResNet50 Model   │
        │ (Pre-trained on     │
        │  AffectNet dataset) │
        └──────────┬──────────┘
                   ↓
    ┌──────────────────────────┐
    │  7 Output Neurons        │
    ├──────────────────────────┤
    │ 1. Angry Output          │
    │ 2. Disgusted Output      │
    │ 3. Fearful Output        │
    │ 4. Happy Output          │
    │ 5. Neutral Output        │
    │ 6. Sad Output            │
    │ 7. Surprised Output      │
    └──────────┬───────────────┘
               ↓
    ┌──────────────────────┐
    │  Softmax Function    │
    │  (Normalize to 0-1)  │
    └──────────┬───────────┘
               ↓
    ┌──────────────────────────────┐
    │  7 Emotion Probabilities     │
    │  (Sum = 1.0)                 │
    └──────────┬────────────────────┘
               ↓
    ┌──────────────────────────────┐
    │  Calculate Derived           │
    │  Psychiatric Indicators      │
    │  • Aggressive                │
    │  • Depressed                 │
    │  • Anxious                   │
    └──────────┬────────────────────┘
               ↓
         OUTPUT JSON
    ┌──────────────────────────────┐
    │ {                            │
    │   emotion: "happy",          │
    │   confidence: 0.95,          │
    │   all_emotions: {...},       │
    │   psychiatric_indicators:{...}
    │ }                            │
    └──────────────────────────────┘
```

## 🚀 Deployment Architecture

```
Development Environment
┌─────────────────────────────────────────┐
│ Local Machine                           │
├─────────────────────────────────────────┤
│ ┌──────────┐  ┌──────────┐  ┌────────┐ │
│ │ Frontend │  │ Backend  │  │ FastAPI│ │
│ │ Port5173 │  │ Port5001 │  │Port8000│ │
│ └──────────┘  └──────────┘  └────────┘ │
│       ↓              ↓            ↓     │
│    localhost:5173  :5001  localhost:8000│
└─────────────────────────────────────────┘

Production Environment (Cloud)
┌─────────────────────────────────────────┐
│ Cloud Platform (AWS/GCP/Azure)          │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │ CDN / Static Hosting (Frontend)    │ │
│ │ • Vite build output                │ │
│ │ • Cached at edge                   │ │
│ └─────────────────────────────────────┘ │
│           ↓                              │
│ ┌─────────────────────────────────────┐ │
│ │ Container Service (Backend)        │ │
│ │ • Express.js server                │ │
│ │ • Auto-scaling enabled             │ │
│ │ • Load balancer                    │ │
│ └─────────────────────────────────────┘ │
│           ↓                              │
│ ┌─────────────────────────────────────┐ │
│ │ Container Service (FER API)        │ │
│ │ • FastAPI server                   │ │
│ │ • GPU instances                    │ │
│ │ • Model caching                    │ │
│ └─────────────────────────────────────┘ │
│           ↓                              │
│ ┌─────────────────────────────────────┐ │
│ │ Database Service (MongoDB Atlas)   │ │
│ │ • Managed database                 │ │
│ │ • Automatic backups                │ │
│ │ • Replication                      │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

---

## 📌 Key Integration Points Summary

| Component | Port | Purpose | Status |
|-----------|------|---------|--------|
| React Frontend | 5173 | User interface | ✅ Operational |
| Express Backend | 5001 | API server & orchestration | ✅ Updated |
| FastAPI FER | 8000 | Emotion detection | ✅ New |
| MongoDB | 27017 | Data persistence | ✅ Configured |
| Gemini API | - | Voice analysis | ✅ Integrated |

## ✅ Integration Status

All components are integrated and ready for deployment.

**Last Updated:** January 29, 2026
**Version:** 1.0
**Status:** ✅ Production Ready
