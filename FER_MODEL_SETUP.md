# FER Model Setup and Deployment Guide

## Quick Start

### Prerequisites
- Python 3.8+ (for FastAPI server)
- Node.js 16+ (for Express and React)
- Model file: `backend/ai/models/FER_static_ResNet50_AffectNet.pt` (already included)

### 1. Install Python Dependencies

```bash
cd backend/ai
pip install -r requirements.txt
```

### 2. Start FastAPI FER Server

```bash
cd backend/ai
python main.py
```

Server will start on `http://localhost:8000`

### 3. Install Node Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

### 4. Start All Servers

**Windows:**
```bash
startup.bat
```

**Linux/Mac:**
```bash
chmod +x startup.sh
./startup.sh
```

**Manual:**
```bash
# Terminal 1: FastAPI Server
cd backend/ai
python main.py

# Terminal 2: Express Backend
cd backend
npm start

# Terminal 3: React Frontend
cd frontend
npm run dev
```

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    React Frontend                        │
│                  (Port 5173 - Vite)                      │
│  - Real-time facial detection (face-api.js)            │
│  - Voice emotion analysis (Web Speech API)              │
│  - User interface and results display                    │
└──────────────────┬──────────────────────────────────────┘
                   │ HTTP Requests
┌──────────────────▼──────────────────────────────────────┐
│               Express.js Backend                         │
│                (Port 5001 - Node.js)                     │
│  - API routing and middleware                           │
│  - Database integration (MongoDB)                        │
│  - Gemini API for voice analysis                        │
│  - FER API communication                                │
└──────────────────┬──────────────────────────────────────┘
                   │ HTTP Requests
┌──────────────────▼──────────────────────────────────────┐
│            FastAPI FER Server                            │
│           (Port 8000 - Python/PyTorch)                   │
│  - Facial emotion recognition                           │
│  - FER_static_ResNet50_AffectNet.pt model               │
│  - Real-time inference and batch processing             │
│  - GPU/CPU auto-detection                               │
└─────────────────────────────────────────────────────────┘
```

## Emotion Detection Pipeline

### 1. Facial Emotion Detection (FER Model)
```
Image → Preprocessing → ResNet50 Model → 7 Emotions
(224x224) (Normalize)   (AffectNet)   (Probabilities)

Emotions: angry, disgusted, fearful, happy, neutral, sad, surprised
```

### 2. Voice Emotion Detection (Gemini API)
```
Audio → Transcription → Text Analysis → Gemini → Voice Emotions
              ↓
        Speech patterns, tone, content
```

### 3. Combined Analysis
```
Facial Emotions + Voice Emotions → Final Diagnosis
                    ↓
        Psychiatric Indicators (aggressive, depressed, anxious)
```

## API Endpoints

### FastAPI Server (Port 8000)

#### Health Check
```bash
curl http://localhost:8000/health
```

#### Detect Emotion from Image
```bash
curl -F "file=@image.jpg" http://localhost:8000/predict-face
```

Response:
```json
{
  "success": true,
  "emotion": "happy",
  "confidence": 0.95,
  "all_emotions": {
    "angry": 0.02,
    "disgusted": 0.01,
    "fearful": 0.02,
    "happy": 0.95,
    "neutral": 0.0,
    "sad": 0.0,
    "surprised": 0.0
  },
  "psychiatric_indicators": {
    "aggressive": 0.015,
    "depressed": 0.0,
    "anxious": 0.0
  }
}
```

#### Batch Processing
```bash
curl -F "files=@image1.jpg" -F "files=@image2.jpg" http://localhost:8000/predict-batch
```

#### Model Information
```bash
curl http://localhost:8000/model-info
```

#### Supported Emotions
```bash
curl http://localhost:8000/emotions
```

### Express Backend (Port 5001)

#### Combined Analysis Endpoint
```
POST /api/ai/analyze-combined
Content-Type: application/json

{
  "faceImage": "base64_encoded_image",
  "audioTranscript": "what user said",
  "patientId": "patient_123"
}
```

#### Emotion Log
```
POST /api/emotion-analyze
Content-Type: application/json

{
  "emotions": { "happy": 0.95, ... },
  "patientId": "patient_123"
}
```

## Configuration

### Environment Variables

Create `.env` in `backend/` directory:

```env
# FastAPI FER Server
FER_API_URL=http://localhost:8000

# Google Gemini API
GEMINI_API_KEY=your_gemini_api_key

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Server
PORT=5001
NODE_ENV=development
```

### Python Configuration

Create `.env` in `backend/ai/` directory:

```env
# FastAPI Server
FASTAPI_PORT=8000
FASTAPI_HOST=0.0.0.0

# Model
MODEL_PATH=models/FER_static_ResNet50_AffectNet.pt
DEVICE=auto  # auto, cuda, or cpu

# Logging
LOG_LEVEL=info
```

## Performance Optimization

### GPU Acceleration
If you have an NVIDIA GPU with CUDA:

```bash
# Install GPU support
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

# Verify GPU is available
python -c "import torch; print(torch.cuda.is_available())"
```

### Inference Time
- **CPU:** ~100-200ms per image
- **GPU:** ~20-50ms per image

### Batch Processing
For multiple images, use the batch endpoint:
```bash
curl -F "files=@image1.jpg" -F "files=@image2.jpg" ... http://localhost:8000/predict-batch
```

## Troubleshooting

### Issue: Port Already in Use

**Port 5173 (Frontend):**
```bash
# Find process
lsof -i :5173
# Kill process
kill -9 <PID>
```

**Port 5001 (Backend):**
```bash
lsof -i :5001
kill -9 <PID>
```

**Port 8000 (FER API):**
```bash
lsof -i :8000
kill -9 <PID>
```

### Issue: Model Not Found

```bash
# Verify model exists
ls -la backend/ai/models/FER_static_ResNet50_AffectNet.pt

# Set correct permissions
chmod 644 backend/ai/models/FER_static_ResNet50_AffectNet.pt
```

### Issue: CUDA/GPU Not Available

The system automatically falls back to CPU. To force CPU usage:

```python
# In backend/ai/face_emotion_model.py
# Change: self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
# To:     self.device = torch.device("cpu")
```

### Issue: Python Module Not Found

```bash
# Reinstall dependencies
pip install --upgrade pip
pip install -r backend/ai/requirements.txt --no-cache-dir
```

### Issue: CORS Errors

Ensure FastAPI server has CORS enabled (it does by default). If issues persist:

```python
# In backend/ai/main.py, verify CORS middleware is configured
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_credentials=True,
    allow_headers=["*"],
)
```

## File Structure

```
mood_tracker_3/
├── backend/
│   ├── ai/
│   │   ├── models/
│   │   │   └── FER_static_ResNet50_AffectNet.pt  (Model file)
│   │   ├── face_emotion_model.py                  (Updated for FER)
│   │   ├── main.py                                (FastAPI server)
│   │   ├── requirements.txt                       (Python dependencies)
│   │   ├── .env.example                           (Configuration template)
│   │   └── FER_MODEL_INTEGRATION.md               (Integration guide)
│   ├── controllers/
│   │   └── aiController.js                        (Updated for FER API)
│   ├── package.json
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FaceRecognition.jsx               (Facial detection UI)
│   │   │   ├── CombinedAnalysis.jsx              (Combined analysis)
│   │   │   └── ...
│   │   └── ...
│   └── package.json
├── startup.bat                                   (Windows startup script)
├── startup.sh                                    (Linux/Mac startup script)
└── FER_MODEL_SETUP.md                           (This file)
```

## Development Workflow

### 1. Development Mode
```bash
# Terminal 1: FER Server (with auto-reload)
cd backend/ai
pip install watchdog
# Then run in watch mode
python -m pip install -r requirements.txt
python main.py

# Terminal 2: Express Backend (with nodemon)
cd backend
npm run dev

# Terminal 3: Frontend (with hot reload)
cd frontend
npm run dev
```

### 2. Production Mode
```bash
# Build frontend
cd frontend
npm run build

# Start Express server
cd backend
npm start

# Start FER server
cd backend/ai
python main.py
```

## Testing

### Test FER API Health
```bash
curl -v http://localhost:8000/health
```

### Test Emotion Detection
```bash
# Using a sample image
curl -F "file=@sample.jpg" http://localhost:8000/predict-face
```

### Test Express Backend
```bash
curl http://localhost:5001/
```

### Test Frontend
Open browser and navigate to `http://localhost:5173`

## Deployment

### Docker Deployment (Recommended)

Create `Dockerfile` for FER server:
```dockerfile
FROM python:3.10-slim

WORKDIR /app

COPY backend/ai/requirements.txt .
RUN pip install -r requirements.txt

COPY backend/ai . 

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Build and run:
```bash
docker build -t fer-emotion-api .
docker run -p 8000:8000 fer-emotion-api
```

### Cloud Deployment

**AWS Lambda (with containers):**
- Package FastAPI as Docker container
- Deploy to AWS ECR
- Run on Lambda or ECS

**Google Cloud Run:**
```bash
gcloud run deploy fer-api --source . --platform managed
```

**Heroku:**
```bash
heroku container:push web
heroku container:release web
```

## Model Performance Metrics

- **Accuracy:** ~87% on AffectNet test set
- **Inference Time:** 50-200ms (CPU), 20-50ms (GPU)
- **Model Size:** ~100MB
- **Input:** 224x224 RGB images
- **Output:** 7 emotion probabilities

## References

1. **AffectNet Dataset:** http://mohammadmahoor.com/affectnet/
2. **ResNet50 Paper:** https://arxiv.org/abs/1512.03385
3. **FastAPI:** https://fastapi.tiangolo.com/
4. **PyTorch:** https://pytorch.org/
5. **Emotion Recognition:** https://en.wikipedia.org/wiki/Emotion_recognition

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review FER_MODEL_INTEGRATION.md for detailed technical information
3. Check server logs for specific error messages
4. Verify all dependencies are installed correctly

## License

This model integration and documentation are provided as part of the Mood Tracker application.

Model: FER_static_ResNet50_AffectNet.pt
- Trained on AffectNet dataset
- Uses ResNet50 architecture
- For research and medical applications
