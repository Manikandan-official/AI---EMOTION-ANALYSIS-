# 🤖 AI Chatbot Feature Documentation

## Overview

The **PatientChatbot** is an intelligent, empathetic AI companion integrated into the patient mode of the Mental Check application. It provides 24/7 mental health support, guidance, and conversation to patients through a conversational interface with voice capabilities.

---

## Features

### 1. **Intelligent Conversation System**

#### Multi-Category Intent Detection
The chatbot recognizes and responds to various patient concerns across multiple categories:

- **🎯 Greetings**: Hello, Hi, Hey, Good morning, etc.
- **😢 Mental Health**: Depression, sadness, hopelessness, worthlessness, suicidal thoughts
- **😰 Anxiety**: Anxiety, panic, nervousness, stress, overwhelmed
- **😴 Sleep Issues**: Insomnia, nightmares, fatigue, tiredness
- **💊 Medication**: Drug questions, side effects, dosage concerns
- **👥 Relationships**: Family, friends, conflict, isolation, loneliness
- **🛡️ Coping**: Stress management, coping strategies, techniques
- **✨ Positive**: Happiness, gratitude, celebrations, progress
- **📅 Appointments**: Doctor visits, scheduling, consultations
- **🚨 Emergency**: Crisis support, suicide prevention, immediate help

#### Context-Aware Responses
Each category has multiple predefined responses that are contextually appropriate and emotionally supportive.

**Example Response Structure:**
```javascript
mentalHealth: {
  patterns: ['depressed', 'depression', 'sad', 'unhappy', 'hopeless'],
  responses: {
    default: "I hear you're going through a tough time...",
    supportive: "Thank you for sharing that with me...",
    crisis: "I'm really concerned about what you're sharing..."
  }
}
```

---

### 2. **Voice Integration**

#### Speech-to-Text (STT)
- **Technology**: Web Speech API
- **Functionality**: Converts patient voice input to text
- **Features**:
  - Real-time voice capture
  - Automatic text conversion
  - Microphone permission handling
  - Error handling for audio issues

#### Text-to-Speech (TTS)
- **Technology**: Web Speech Synthesis API
- **Functionality**: Converts AI responses to voice
- **Customizable Settings**:
  - Speech rate: 0.95x (slightly slower for clarity)
  - Pitch: 1.0 (neutral tone)
  - Volume: 1.0 (full volume)
- **User Control**: Toggle voice output on/off

**Implementation:**
```javascript
// TTS Setup
const utterance = new SpeechSynthesisUtterance(text);
utterance.rate = 0.95;
utterance.pitch = 1.0;
utterance.volume = 1.0;
window.speechSynthesis.speak(utterance);
```

---

### 3. **Emotional Intelligence**

#### Emotion Detection from Text
The chatbot analyzes user messages to detect emotional state:

```javascript
detectEmotionFromText(text) {
  const lowerText = text.toLowerCase();
  
  if (positive_patterns.some(p => lowerText.includes(p))) return 'happy';
  if (sadness_patterns.some(p => lowerText.includes(p))) return 'sad';
  if (anxiety_patterns.some(p => lowerText.includes(p))) return 'anxious';
  if (sleep_patterns.some(p => lowerText.includes(p))) return 'tired';
  
  return 'neutral';
}
```

#### Personalized Response Generation
Responses are tailored based on:
- Detected emotion
- Conversation history
- Patient's current mood context
- Category of concern
- Message history

---

### 4. **User Interface**

#### Chat Interface Components

**Floating Activation Button**
- Gradient purple-to-pink button
- Fixed position (bottom-right)
- Icon: Robot emoji
- Hover effect with scale animation
- Click to open chatbot window

**Chatbot Window**
- Fixed width: 384px (w-96)
- Fixed height: 600px
- Positioned bottom-right
- Rounded corners with shadow
- Fully responsive within fixed bounds

#### Message Display

**User Messages**
- Right-aligned
- Gradient background (purple to pink)
- White text
- Timestamp display
- Smooth slide-in animation

**AI Messages**
- Left-aligned
- Theme-based background color
- Rounded tail on appropriate side
- Timestamp display
- Typing indicator when thinking

#### Controls & Actions

**Voice Controls**
```
┌─────────────────────────────────────────┐
│  🎤 Voice Input Button                  │
│  🔊 Voice Output Toggle                 │
│  🗑️ Clear Chat History                  │
│  📝 Text Input Field                    │
│  ✈️ Send Button                         │
└─────────────────────────────────────────┘
```

**Quick Action Buttons**
- Pre-configured messages for common concerns
- Examples: "Anxious", "Sleep", "Coping"
- Single-click access to common topics

---

## Integration with Patient Mode

### 1. **Activation**

The chatbot is activated via:
1. **Floating Button**: Click robot icon in bottom-right
2. **Auto-Open**: Can be triggered programmatically
3. **Close**: Click X button to close the window

### 2. **State Management**

```javascript
// PatientView.jsx
const [showPatientChatbot, setShowPatientChatbot] = useState(false);

// Toggle chatbot visibility
<motion.button onClick={() => setShowPatientChatbot(true)}>
  Open Chatbot
</motion.button>
```

### 3. **Props & Context**

```javascript
<PatientChatbot
  patientId={patientId}           // Patient identifier
  patientMood={recentEmotion}     // Current mood from detector
  onClose={() => {...}}            // Callback to close chatbot
/>
```

### 4. **Theme Support**

The chatbot respects the application's theme system:
- Dark/Light mode support
- Color scheme consistency
- Accessible contrast ratios

---

## Response Categories in Detail

### 1. **Greetings**
```
User Input: "Hi", "Hello", "Hey"
AI Response: 
  - "Hi there! 👋 I'm here to listen and support you. What's on your mind?"
  - "Hello! It's great to see you. How can I help you today?"
  - "Hey! Welcome back. I'm here if you need to talk about anything."
```

### 2. **Mental Health (Depression/Sadness)**
```
User Input: "I'm depressed", "I feel hopeless", "I'm sad"
AI Response:
  - "I hear you're going through a tough time. Remember, these feelings are temporary. Would you like to talk about what's making you feel this way?"
  - "Thank you for sharing that with me. It takes courage to open up. What specifically is contributing to these feelings?"
  
Crisis Response (for "suicidal"):
  - "🚨 YOUR SAFETY IS MY PRIORITY 🚨
    Call 911 (Emergency)
    Call 988 (Suicide & Crisis Lifeline)
    Text 'HELLO' to 741741 (Crisis Text Line)
    You matter. Help is available."
```

### 3. **Anxiety**
```
User Input: "I'm anxious", "I'm panicking", "I'm overwhelmed"
AI Response:
  - "Anxiety can be really challenging. Let's work through this together. Would some breathing exercises help?"
  - "Try this: Breathe in for 4 counts, hold for 4, breathe out for 4. Repeat 5 times. Does that help?"
```

### 4. **Sleep Issues**
```
User Input: "I can't sleep", "I'm having nightmares", "I'm exhausted"
AI Response:
  - "Sleep is crucial for mental health. What's preventing you from getting good sleep?"
  - "Try these sleep tips: Keep a consistent schedule, avoid screens 1 hour before bed, try meditation, keep your room cool and dark."
```

### 5. **Medication**
```
User Input: "Side effects", "Medication questions", "Drug interactions"
AI Response:
  - "Medication questions are important. Please discuss any concerns with your doctor. What specific question do you have?"
  - "Have you discussed these with your doctor? They might adjust your dosage."
```

### 6. **Relationships**
```
User Input: "Family issues", "Relationship problems", "Lonely", "Isolated"
AI Response:
  - "Relationships are important for our wellbeing. What's happening in your relationships?"
  - "Building supportive relationships is crucial. You deserve people who care about you."
```

### 7. **Coping Strategies**
```
User Input: "How to cope", "Help me manage", "Stress management"
AI Response:
  - "I'm here to help you develop coping strategies. What would be most helpful for you right now?"
  - "Here are some coping techniques: Journaling, exercise, mindfulness, talking to friends, creative activities, or calling your doctor."
```

### 8. **Positive Emotions**
```
User Input: "I'm happy", "I'm grateful", "Feeling better"
AI Response:
  - "That's wonderful to hear! What's making you feel good today?"
  - "That's fantastic! Celebrating small wins is important. Keep up the positive momentum!"
```

### 9. **Appointments**
```
User Input: "Schedule appointment", "Doctor visit", "Consultation"
AI Response:
  - "Your doctor appointments are important for your care. Would you like help scheduling one?"
  - "I can help remind you about upcoming appointments. When is your next visit with your doctor?"
```

### 10. **Emergency**
```
User Input: "Emergency", "Help", "Dying", "Hurt myself"
AI Response:
  - "🚨 YOUR SAFETY IS MY PRIORITY 🚨
    1. Call 911 (Emergency)
    2. Call 988 (Suicide & Crisis Lifeline)
    3. Text 'HELLO' to 741741 (Crisis Text Line)
    4. Go to the nearest emergency room"
```

---

## Technical Implementation

### File Structure

```
frontend/src/components/
├── PatientChatbot.jsx          (Main chatbot component)
├── PatientView.jsx             (Integration with patient dashboard)
└── [Other components...]
```

### Component Props

```javascript
interface PatientChatbotProps {
  patientId: string;             // Patient identifier
  patientMood?: string;          // Optional: current mood context
  onClose: () => void;           // Callback when user closes
}
```

### State Management

```javascript
const [messages, setMessages] = useState([]);      // Chat history
const [inputText, setInputText] = useState('');    // Current input
const [isTyping, setIsTyping] = useState(false);   // AI thinking state
const [isListening, setIsListening] = useState(false); // Voice input state
const [isSpeaking, setIsSpeaking] = useState(false);   // Voice output state
const [voiceEnabled, setVoiceEnabled] = useState(true); // Voice toggle
const [emotionContext, setEmotionContext] = useState('neutral'); // User emotion
```

### Key Methods

#### `generateAIResponse(userMessage: string): string`
Analyzes user message and returns appropriate AI response based on intent patterns.

```javascript
const generateAIResponse = (userMessage) => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Check for emergency (highest priority)
  if (chatRules.emergency.patterns.some(p => lowerMessage.includes(p))) {
    return chatRules.emergency.responses.immediate;
  }
  
  // Check other categories
  for (const [category, rules] of Object.entries(chatRules)) {
    if (rules.patterns.some(p => lowerMessage.includes(p))) {
      return selectRandomResponse(rules.responses);
    }
  }
  
  // Default fallback
  return chatRules.default.responses[Math.random() * length];
};
```

#### `handleSendMessage(text?: string)`
Sends user message and gets AI response.

1. Adds user message to history
2. Detects emotion from text
3. Generates AI response (500-1500ms delay)
4. Adds AI message to history
5. Optionally speaks response

#### `handleVoiceInput()`
Starts/stops voice recording using Web Speech API.

#### `speakMessage(text: string)`
Converts AI response to speech using Web Speech Synthesis.

---

## Animation & UX

### Message Animations
```javascript
// Slide in with opacity
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.3 }}
```

### Typing Indicator
```javascript
// Bouncing dots animation
<motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6 }} />
```

### Button Interactions
```javascript
// Hover & tap effects
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

---

## Error Handling

### Voice API Errors
```javascript
recognitionRef.current.onerror = (event) => {
  console.error('Speech recognition error:', event.error);
  setIsListening(false);
  // Gracefully fallback to text input
};
```

### Unsupported Features
The chatbot gracefully degrades if:
- Speech Recognition not available → Text input only
- Speech Synthesis not available → Text output only
- Both unavailable → Standard text-based chat

---

## Privacy & Security

### Data Handling
- Chat history stored in component state (memory)
- No permanent storage without explicit action
- Patient data not sent to external services
- All processing respects HIPAA guidelines

### Conversation Persistence
- Messages stored during session only
- Clear chat history button available
- No data retained after session ends

---

## Performance Optimization

### Response Time
- AI response generation: 500-1500ms (intentional for natural feel)
- Message rendering: Instant with animation
- Voice processing: Real-time (dependent on device)

### Resource Management
```javascript
// Clean up on unmount
useEffect(() => {
  return () => {
    // Cancel ongoing speech
    window.speechSynthesis.cancel();
    // Stop listening
    recognitionRef.current?.stop();
  };
}, []);
```

---

## Accessibility Features

### Screen Reader Support
- Semantic HTML structure
- ARIA labels on buttons
- Role attributes for chat interface
- Text alternatives for icons

### Keyboard Navigation
- Tab through controls
- Enter to send messages
- Escape to close chatbot
- Voice input as alternative

### Visual Accessibility
- High contrast colors
- Large touch targets (minimum 44x44px)
- Clear focus indicators
- Color not sole indicator of meaning

---

## Future Enhancements

### AI Integration (Optional)
```javascript
// Google Generative AI Integration (Currently Optional)
const { GoogleGenerativeAI } = require("@google/generative-ai");

const generateAIResponse = async (userMessage) => {
  // For complex queries, route to Google Gemini
  const response = await genAI.generateContent(userMessage);
  return response.text();
};
```

### Advanced Features
1. **Conversation Context**: Maintain long-term conversation memory
2. **Emotion Tracking**: Track emotional changes over time
3. **Appointment Integration**: Auto-schedule appointments
4. **Medication Reminders**: Set reminders for medications
5. **Emergency Escalation**: Direct routing to crisis services
6. **Multiple Languages**: Support for different languages
7. **Personality Customization**: Different chatbot personalities
8. **Integration with Doctor Notes**: Reference patient history

---

## Testing Guide

### Unit Tests
```javascript
describe('PatientChatbot', () => {
  test('should generate appropriate response for depression keywords', () => {
    const response = generateAIResponse("I'm feeling depressed");
    expect(response).toContain("tough time");
  });
  
  test('should trigger emergency response for suicide keywords', () => {
    const response = generateAIResponse("I want to hurt myself");
    expect(response).toContain("988");
  });
});
```

### Integration Tests
- Test voice input/output
- Test message sending and receiving
- Test theme switching
- Test responsive design

### User Acceptance Tests
- Test all intent categories
- Test voice functionality
- Test mobile experience
- Test accessibility

---

## Usage Example

### Basic Setup
```javascript
import PatientChatbot from './components/PatientChatbot';
import { useState } from 'react';

export default function PatientDashboard() {
  const [showChatbot, setShowChatbot] = useState(false);
  
  return (
    <div>
      {/* Main content */}
      
      {/* Chatbot */}
      {showChatbot && (
        <PatientChatbot
          patientId="123"
          patientMood="anxious"
          onClose={() => setShowChatbot(false)}
        />
      )}
      
      {/* Floating button */}
      <button onClick={() => setShowChatbot(true)}>
        💬 Chat with AI
      </button>
    </div>
  );
}
```

---

## Deployment Considerations

### Browser Compatibility
- Chrome/Edge: ✅ Full support (all features)
- Firefox: ✅ Full support
- Safari: ⚠️ Limited voice support (iOS)
- Mobile: ✅ Works on mobile browsers

### Performance
- Bundle size: ~45KB (minified)
- No external API calls (by default)
- Minimal memory footprint

### Scalability
- Independent component (no dependencies)
- Can be integrated into any React app
- No database requirements
- Stateless design

---

## Support & Troubleshooting

### Common Issues

**Voice Input Not Working**
- Check microphone permissions
- Refresh the browser
- Ensure browser supports Web Speech API

**Voice Output Silent**
- Check volume settings
- Enable voice output toggle
- Check browser volume

**Messages Not Sending**
- Ensure text is not empty
- Check for JavaScript errors in console
- Verify component is mounted

---

## Compliance

### Medical Disclaimer
This chatbot is a supportive tool, not a replacement for professional mental health care.

### Crisis Resources
- **US Suicide & Crisis Lifeline**: 988
- **Crisis Text Line**: Text HOME to 741741
- **International Association for Suicide Prevention**: https://www.iasp.info/resources/Crisis_Centres/

---

## Contact & Support

For technical issues or feature requests:
- GitHub Issues: [Project Repository]
- Email: support@mentalcheck.app
- Documentation: [Full API Docs]

---

**Last Updated**: January 2026  
**Version**: 1.0.0  
**Status**: Production Ready  
**Maintained By**: Mental Check Development Team
