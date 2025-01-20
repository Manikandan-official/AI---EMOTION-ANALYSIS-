import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CloudMessage = ({ message, isAI }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    className={`flex ${isAI ? 'flex-row' : 'flex-row-reverse'} items-end gap-2 mb-4`}
  >
    {isAI && (
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
        <img
          src="/assets/icon.webp"
          alt="AI Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    )}
    <div
      className={`relative max-w-[80%] p-4 ${
        isAI 
          ? 'bg-gradient-to-br from-blue-100 to-purple-100' 
          : 'bg-gradient-to-br from-purple-100 to-pink-100'
      } rounded-2xl
      ${isAI ? 'rounded-tl-sm' : 'rounded-tr-sm'}
      shadow-md`}
    >
      <div className={`
        absolute ${isAI ? '-left-2' : '-right-2'} bottom-2
        w-4 h-4 
        transform ${isAI ? 'rotate-45' : '-rotate-45'}
        ${isAI ? 'bg-blue-100' : 'bg-purple-100'}
      `}></div>
      <p className="text-gray-800">{message}</p>
    </div>
  </motion.div>
);

const EnhancedChatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your empathetic chat companion. How are you feeling today?", isAI: true }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const chatRules = {
    greetings: {
      patterns: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'wassup'],
      responses: [
        "Hi there! How are you feeling today?",
        "Hello! I'm here to chat. How's your day going?",
        "Hey! I'm all ears - how are you doing right now?",
        "Hi! What's on your mind today?",
        "Hello! How can I assist you right now?",
        "Hey! Hope you're having a great day. What's up?",
        "Good morning! How can I make your day brighter?",
        "Good afternoon! How are things going on your end?",
        "Good evening! I’m here if you need a helping hand or just someone to chat with.",
        "Hi! It's great to hear from you. What's new?",
        "Hello! Ready to tackle anything together. What's happening?",
        "Hey! How are you feeling today?",
        "Good morning! Let’s make it a productive day. What can I do for you?",
        "Good afternoon! Hope your day is going well. Need any help?",
        "Good evening! Winding down or just getting started? Let me know!",
        "Hi there! Tell me something exciting about your day.",
        "Hello! What's been the highlight of your day so far?",
        "Hey! Got any plans you're excited about today?",
        "Good morning! I hope you woke up feeling amazing. What’s the plan?",
        "Good afternoon! How can I make your day a little easier?",
        "Good evening! What's the best thing that happened to you today?",
        "Hi! I’m happy to chat about anything you like. What's on your mind?",
        "Hello! How can I help you make today great?",
        "Hey! What’s something you’re looking forward to?",
        "Good morning! Coffee in hand? Let’s chat!",
        "Good afternoon! Anything fun happening?",
        "Good evening! How’s everything going for you?",
        "Hi! Just checking in to see how you’re doing.",
        "Hello! Hope your day is treating you kindly.",
        "Hey! How can I make your day better?",
        "Good morning! Ready to start the day on a positive note?",
        "Good afternoon! Need any advice or help with something?",
        "Good evening! Relax and tell me what’s on your mind.",
        "Hi there! What’s one thing that made you smile today?",
        "Hello! What’s the best thing you’ve done recently?",
        "Hey! Let’s chat – what’s on your plate right now?",
        "Good morning! Here’s to making today amazing. What's on your agenda?",
        "Good afternoon! What’s keeping you busy today?",
        "Good evening! How’s your night going so far?",
        "Hi! Let’s talk about something fun. What’s up?",
        "Hello! Any challenges you’d like help with today?",
        "Hey! I’m here to make your day brighter. How can I help?",
        "Good morning! Let’s set some positive vibes for the day. How are you?",
        "Good afternoon! What’s been the most exciting part of your day?",
        "Good evening! Ready for a relaxing chat?",
        "Hi! What’s one thing you’re grateful for today?",
        "Hello! Let’s make today even better. What can I do for you?",
        "Hey! How about we chat about something inspiring?",
        "Good morning! What’s your main goal for today?",
        "Good afternoon! Anything interesting on your mind?",
        "Good evening! Tell me about something you love.",
        "Hi there! Any good news to share?",
        "Hello! What’s something cool you’ve been working on?",
        "Hey! What’s one thing you’re excited about right now?"

      ]
    },
    sadness: {
      patterns: ['sad','sadness', 'depressed', 'depress','depression','broken', 'down', 'unhappy', 'terrible', 'awful', 'bad day','not good','boring','despondent','doleful','dispirite','lonely','miserable','gloomy','heartbroken','discouraged','discourage','low','disappointed','hurt','terrible','pain','sorrow','blew','embarrassed','embarrass','grief','tears','cry','unwell','sick','ill','unwell','horrible', 'unhealthy'],
     "responses": [
        {
            "message": "I’m here for you. Sometimes sharing your feelings helps. Want to talk about it?",
            "suggestion": "💬 I'm ready to listen whenever you're comfortable."
        },
        {
            "message": "You’re stronger than you think. Would you like me to suggest a relaxing activity?",
            "suggestion": "☕ Make yourself a cup of tea and take a moment to pause."
        },
        {
            "message": "Rough days happen to the best of us. Can I recommend a funny podcast or audiobook?",
            "suggestion": "🎧 Try 'No Such Thing as a Fish' or 'The Moth' for some lighthearted stories."
        },
        {
            "message": "It’s okay to feel sad. How about focusing on something small that brings you joy?",
            "suggestion": "🌱 Water a plant, pet an animal, or enjoy a favorite snack."
        },
        {
            "message": "Bad days can feel overwhelming. Would you like me to guide you through a breathing exercise?",
            "suggestion": "🌬 Inhale deeply for 5 seconds, hold for 3, exhale slowly for 7 seconds."
        },
        {
            "message": "I'm sorry you're feeling this way. Want me to share an inspiring quote with you?",
            "suggestion": "🌟 'Keep your face to the sunshine and you cannot see a shadow.' - Helen Keller"
        },
        {
            "message": "You’re not alone in this. Can I suggest a comforting playlist for tough times?",
            "suggestion": "🎵 'Calm Vibes' on Spotify or any acoustic playlist could be soothing."
        },
        {
            "message": "Sometimes sadness comes in waves. Would you like to explore a gratitude exercise?",
            "suggestion": "💡 Write down one thing that made you smile today, even if it’s small."
        },
        {
            "message": "I understand that things feel tough. Can I help you brainstorm something fun to do?",
            "suggestion": "🎨 Maybe try drawing, coloring, or doodling for a creative break."
        },
        {
            "message": "It’s okay to take things slow. Would you like some self-care tips to try right now?",
            "suggestion": "🛏 Rest in a cozy space, light a candle, or listen to soft music."
        },
        {
            "message": "Hard days don’t last forever. Would you like some movie recommendations to cheer up?",
            "suggestion": "🎥 'Paddington' or 'The Secret Life of Walter Mitty' are feel-good picks."
        },
        {
            "message": "Sometimes we all need support. Want to hear how others cope with hard times?",
            "suggestion": "📖 Stories of resilience can inspire. Check out blogs or uplifting articles."
        },
        {
            "message": "I know it’s tough right now. How about some light stretching to ease your mind?",
            "suggestion": "🧘 Try a simple child’s pose or roll your shoulders to release tension."
        },
        {
            "message": "I’m sorry you’re having a hard time. Want me to suggest a game to distract you?",
            "suggestion": "🎮 Puzzle games like 'Monument Valley' or 'Stardew Valley' can be relaxing."
        },
        {
            "message": "Feeling low is natural sometimes. Want a tip to improve your mood a little?",
            "suggestion": "😊 Practice smiling for a minute – it can actually lift your spirits!"
        },
        {
            "message": "You’re important, even if you don’t feel it right now. Need help finding something inspiring to read?",
            "suggestion": "📚 Try 'The Alchemist' by Paulo Coelho for a motivational boost."
        },
        {
            "message": "Sometimes small victories can help. Would you like to set a tiny goal together?",
            "suggestion": "📝 For example, drink a glass of water or organize your desk."
        },
        {
            "message": "You’re allowed to take a break. Would you like help finding calming nature sounds?",
            "suggestion": "🌲 Listen to sounds of rain or ocean waves on YouTube or a white noise app."
        },
        {
            "message": "I hear you. Want to try listing three things that you’re grateful for today?",
            "suggestion": "🌟 Even small things like a favorite meal or a comfy blanket count."
        },
        {
            "message": "I’m here to help. Would you like suggestions for a hobby or creative outlet?",
            "suggestion": "🎸 Maybe try learning an instrument, baking, or painting."
        },
        {
            "message": "You’re not alone in this. Would it help if I shared a motivational story?",
            "suggestion": "📖 Stories of people overcoming obstacles can be uplifting."
        },
        {
            "message": "I understand things feel heavy. Would you like help finding relaxation videos?",
            "suggestion": "📺 Yoga or mindfulness videos on YouTube could help you unwind."
        },
        {
            "message": "When you're ready, try focusing on the present moment. Would you like guidance on mindfulness?",
            "suggestion": "🧘 Focus on what you can see, hear, and feel around you for a few minutes."
        },
        {
            "message": "Sadness can be draining. Would you like help setting a small, positive intention for the day?",
            "suggestion": "💡 Example: 'Today, I’ll be kind to myself.'"
        },
        {
            "message": "Your emotions are valid. Would you like to focus on a positive memory together?",
            "suggestion": "💭 Think about a happy moment – who were you with, and how did you feel?"
        },
        {
            "message": "It’s okay to need a pick-me-up. Want to hear a silly joke to lighten the mood?",
            "suggestion": "😄 What do you call cheese that isn’t yours? Nacho cheese!"
        },
        {
            "message": "Feeling this way is hard. Would you like some affirmations to repeat?",
            "suggestion": "✨ 'I am strong. I am capable. I can get through this.'"
        },
        {
            "message": "You’ve got this. Would you like to hear some tips for practicing self-compassion?",
            "suggestion": "💖 Treat yourself as kindly as you would a good friend."
        },
        {
            "message": "I’m here for you. Would you like help finding a way to relax before bed?",
            "suggestion": "🌙 Try dimming the lights and playing calming sounds as you wind down."
        },
        {
            "message": "Sadness can feel isolating. Want me to suggest ways to connect with others?",
            "suggestion": "📞 A quick call or text to a loved one might brighten your mood."
        },
        {
            "message": "It’s okay to feel how you feel. Would you like help creating a to-do list to ease your mind?",
            "suggestion": "📝 Breaking tasks into smaller steps can make things feel more manageable."
        },
        {
            "message": "You are valued, even on tough days. Would you like help finding uplifting stories or videos?",
            "suggestion": "🌟 Watch a TED Talk or inspiring animal rescue stories online."
        }
    ]

    },
    stress: {
      patterns: ['stress', 'anxious', 'overwhelmed', 'worried', 'panic', 'pressure','tense','nervous','tense','uneasy','restless','fearful','agitated','frustrated','irritated','edgy','jittery','uneasy','uptight','rattled','frazzled','panicked','frightened','scared','terrified','alarmed','distressed','disturbed','troubled','perturbed','bothered','upset','distraught','aggravated','displeased','disgruntled','discontented','disappointed','dismayed','discouraged','disheartened','despondent','dejected','downcast','miserable','wretched','woeful','forlorn','crestfallen','heartbroken','grief-stricken','anguished','hurt','painful','sorrowful','mournful','melancholy','doleful','dismal','gloomy','despairing','hopeless','desperate','fearful','terrified','scared','frightened','panicky','horrified','alarmed','worried','anxious','nervous','tense','uneasy','edgy','jittery','restless','agitated','fidgety','fearful','apprehensive','disquieted','disturbed','perturbed','troubled','bothered','upset','distressed','distraught','aggravated','irritated','frustrated','exasperated','angry','outraged','infuriated','incensed','enraged','livid','furious','irate','wrathful','indignant','annoyed','irritated','exasperated','impatient','cross','cranky','grumpy','sullen','surly','moody','testy','touchy','peevish','petulant','snappish','cantankerous','crabby','crusty','crotchety','ornery','irascible','cantankerous','displeased','disgruntled','discontented','disappointed','dismayed','discouraged','disheartened','despondent','dejected','downcast','miserable','wretched','woeful','forlorn','crestfallen','heartbroken','grief-stricken','anguished','hurt','painful','sorrowful','mournful','melancholy','doleful','dismal','gloomy','despairing','hopeless','desperate','fearful','terrified'],
      "responses": [
        {
            "message": "I can tell you're under a lot of pressure. Let's take a moment to breathe together.",
            "suggestion": "Try this: Take 3 deep breaths, counting to 4 as you inhale and 6 as you exhale. 🫁"
        },
        {
            "message": "Stress can feel overwhelming. Want to try a simple grounding exercise?",
            "suggestion": "🧘 Name 5 things you see, 4 things you can touch, 3 you can hear, 2 you can smell, and 1 you can taste."
        },
        {
            "message": "It’s okay to feel this way. Would you like to take a short break to refocus?",
            "suggestion": "🚶 Go for a 5-minute walk or stretch to clear your mind."
        },
        {
            "message": "When things feel too much, slowing down helps. Want to hear a calming quote?",
            "suggestion": "🌟 'You don’t have to control your thoughts. You just have to stop letting them control you.' – Dan Millman"
        },
        {
            "message": "I’m here for you. Would you like tips to manage stress?",
            "suggestion": "📝 Break your tasks into smaller steps and tackle one at a time."
        },
        {
            "message": "Stress can take a toll. How about a distraction? I can suggest a fun activity.",
            "suggestion": "🎨 Try doodling, coloring, or creating something small."
        },
        {
            "message": "It’s tough to feel this way. Would you like help organizing your thoughts?",
            "suggestion": "📝 Write down everything on your mind to create a to-do list or brain dump."
        },
        {
            "message": "Feeling anxious can be heavy. How about we focus on a calming visualization?",
            "suggestion": "🌊 Imagine yourself by a peaceful beach, with waves lapping the shore."
        },
        {
            "message": "Let’s ease your mind. Want me to share a quick relaxation technique?",
            "suggestion": "🧘 Close your eyes and picture your favorite place in vivid detail."
        },
        {
            "message": "Sometimes stress means you care a lot. Would you like a moment of lightheartedness?",
            "suggestion": "😊 How about a funny joke or interesting fact?"
        },
        {
            "message": "Stress can make everything feel urgent. Want help prioritizing tasks?",
            "suggestion": "🔑 Focus on what’s most important or urgent right now."
        },
        {
            "message": "I hear you’re feeling overwhelmed. Would you like to take a mental break?",
            "suggestion": "🎧 Listen to calming nature sounds or lo-fi beats for a few minutes."
        },
        {
            "message": "It’s okay to take a pause. Want to try progressive muscle relaxation?",
            "suggestion": "🧘 Tense each muscle group for 5 seconds, then release, starting with your toes."
        },
        {
            "message": "When anxiety hits, grounding helps. Want me to guide you through one?",
            "suggestion": "💡 Focus on your feet firmly on the ground and notice the sensations."
        },
        {
            "message": "Feeling this way can be exhausting. Would you like some motivational words?",
            "suggestion": "🌟 'You are braver than you believe, stronger than you seem, and smarter than you think.' - A.A. Milne"
        },
        {
            "message": "Sometimes letting it out helps. Would you like to share what’s on your mind?",
            "suggestion": "💬 Talking or journaling about your feelings can make them more manageable."
        },
        {
            "message": "It’s okay to feel worried. Would you like to hear about ways to calm racing thoughts?",
            "suggestion": "✨ Try repeating, 'I am safe. I am calm. I am in control.'"
        },
        {
            "message": "Stress can feel overwhelming. Can I suggest a short mindfulness exercise?",
            "suggestion": "🌿 Sit quietly and focus on your breath for 2 minutes, noticing each inhale and exhale."
        },
        {
            "message": "Pressure can be intense. Would you like tips on handling it step by step?",
            "suggestion": "🚧 Break tasks into smaller parts and focus on one at a time."
        },
        {
            "message": "Anxiety can cloud our thoughts. Want help finding something uplifting to do?",
            "suggestion": "📚 Read an inspiring story or watch a TED Talk for motivation."
        },
        {
            "message": "Worry can feel paralyzing. Would you like help reframing your thoughts?",
            "suggestion": "💡 Replace 'I can’t handle this' with 'I’ll take it one step at a time.'"
        },
        {
            "message": "It’s okay to pause and recharge. Would you like suggestions for a self-care activity?",
            "suggestion": "🛁 Try taking a warm bath or lighting a calming scented candle."
        },
        {
            "message": "Feeling panicked is hard. Would you like guidance on slowing down your thoughts?",
            "suggestion": "🌙 Imagine you’re watching clouds pass by—let each worry drift away like a cloud."
        },
        {
            "message": "Stress is tough, but you’re tougher. Want to try a quick motivational exercise?",
            "suggestion": "💪 List three times you overcame challenges in the past."
        },
        {
            "message": "Anxious thoughts can snowball. Want me to help you focus on what’s in your control?",
            "suggestion": "🔑 Ask yourself: 'What’s one small step I can take right now?'"
        },
        {
            "message": "I understand you're feeling pressured. Want to hear about stress-reducing foods?",
            "suggestion": "🥑 Avocados, bananas, or a handful of nuts can help balance your mood."
        },
        {
            "message": "When panic strikes, grounding helps. Want to try focusing on your surroundings?",
            "suggestion": "🪟 Describe three things you see, hear, and feel right now."
        },
        {
            "message": "Stress can feel endless, but it’s temporary. Would you like a reminder of your strengths?",
            "suggestion": "🌟 You’ve faced challenges before, and you’ll overcome this too."
        },
        {
            "message": "Overwhelm happens to the best of us. Want me to suggest a calming hobby?",
            "suggestion": "🧶 Knitting, puzzles, or gardening can be great stress relievers."
        },
        {
            "message": "Pressure builds up quickly. Want help releasing it with a quick stretch?",
            "suggestion": "🙆‍♂ Stretch your arms overhead, roll your shoulders, and shake out your hands."
        },
        {
            "message": "Feeling on edge is exhausting. Want me to suggest a mindfulness app?",
            "suggestion": "📱 Try 'Headspace' or 'Calm' for guided meditations."
        },
        {
            "message": "Worry can weigh you down. Want help focusing on something positive?",
            "suggestion": "🌈 Think of one thing that went well today, no matter how small."
        },
        {
            "message": "It’s okay to feel stressed. Would you like to talk about what’s causing it?",
            "suggestion": "💬 I’m here to listen if you’d like to share."
        }
    ]

    },
    happiness: {
      patterns: ['happy', 'great', 'amazing', 'wonderful', 'good', 'excited','joyful','delighted','pleased','content','cheerful','merry','jovial','jolly','lighthearted','gleeful','carefree','blissful','ecstatic','elated','overjoyed','thrilled','exhilarated','euphoric','radiant','sunny','upbeat','chipper','buoyant','bubbly','effervescent','sparkling','vivacious','lively','animated','spirited','peppy','perky','sprightly','zesty','zippy','zappy','full of beans','on cloud nine','over the moon','walking on air','in seventh heaven','tickled pink','on top of the world','in high spirits','in good spirits','in a good mood','in a fine mood','in a merry mood','in a festive mood','in a jovial mood','in a cheerful mood','in a happy mood','in a joyful mood','in a delighted mood','in a pleased mood','in a content mood','in a blissful mood','in a carefree mood','in a lighthearted mood','in a merry mood','in a jolly mood','in a jovial mood','in a gleeful mood','in a sunny mood','in an upbeat mood','in a chipper mood','in a buoyant mood','in a bubbly mood','in an effervescent mood','in a sparkling mood','in a vivacious mood','in a lively mood','in an animated mood','in a spirited mood','in a peppy mood','in a perky mood','in a sprightly mood','in a zesty mood','in a zippy mood','in a zappy mood','full of beans','on cloud nine','over the moon','walking on air','in seventh heaven','tickled pink','on top of the world','in high spirits','in good spirits','in a good mood','in a fine mood','in a merry mood','in a festive mood','in a jovial mood','in a cheerful mood','in a happy mood','in a joyful mood','in a delighted mood','in a pleased mood','in a content mood','in a blissful mood','in a carefree mood','in a lighthearted mood','in a merry mood','in a jolly mood','in a jovial mood','in a gleeful mood','in a sunny mood'],
      "responses": [
        "You’re radiating positivity! What’s the best thing that happened to you today?",
        "I love hearing that you’re happy! What’s been putting a smile on your face?",
        "Fantastic news! What’s keeping your spirits so high?",
        "It’s great to see you feeling wonderful! Have you shared your joy with someone?",
        "You’re glowing with happiness! What’s made your day extra special?",
        "That’s amazing to hear! Joy is the best kind of energy! ✨",
        "So happy to hear that! Want to share your good vibes with me? 😊",
        "Wonderful! Life is always brighter with moments like this!",
        "Happiness suits you perfectly! Any fun plans to keep the excitement going?",
        "Your energy is so uplifting! Tell me more about what’s got you feeling this way.",
        "I’m thrilled to hear you’re doing great! What’s the most exciting thing today?",
        "You’ve got that joyful glow! What’s been your secret to staying positive?",
        "Amazing vibes coming from you! What’s been the highlight of your week?",
        "So glad you’re feeling good! Any upcoming plans adding to your excitement?",
        "Happiness looks great on you! Have you celebrated this moment yet?",
        "Your joy is infectious! What’s the best part of your day so far?",
        "You’re riding a wave of positivity! What’s keeping your spirits so high?",
        "I’m so excited for you! Want to tell me more about what’s making you smile?",
        "It’s always refreshing to see someone so happy! What’s been the source of your joy?",
        "You’re a bundle of happiness today! Any tips for spreading the good energy?",
        "Sounds like you’re having a fantastic day! What’s something that added to it?",
        "Your enthusiasm is contagious! What’s your favorite moment from today?",
        "You’re glowing with good energy! How are you planning to keep this vibe going?",
        "I’m loving your happy energy! Want to share what’s fueling it?",
        "Hearing about your joy brightens my day! What’s been the best part of yours?",
        "You’re radiating joy! Any exciting news or accomplishments you’d like to share?",
        "Your happiness lights up the conversation! What’s made your day so great?",
        "It’s wonderful to hear you’re doing amazing! What’s been the highlight?",
        "I’m overjoyed to hear about your good mood! What’s your recipe for happiness?",
        "Your excitement is contagious! What’s one thing that’s brought you the most joy?",
        "Your positive vibes are incredible! Any special moments adding to your joy?",
        "I’m so glad to hear you’re feeling this way! What’s been your proudest moment today?",
        "You’re a beacon of happiness! Want to spread some of those good vibes?",
        "It’s great to see you so excited! What’s something you’re looking forward to?",
        "Your energy is amazing! What’s made today so wonderful for you?",
        "Hearing you’re happy makes me happy too! What’s brought you the most excitement?",
        "Your cheerfulness is inspiring! What’s something small that made your day better?",
        "I can feel your excitement through the conversation! What’s made you so thrilled?",
        "Your happiness is like sunshine! What’s the best part of your week so far?",
        "You’re bringing such great energy! What’s got you in such high spirits?",
        "Joyful moments like this are worth celebrating! How are you celebrating yours?"
    ]

    },
    default: [
      "I'm here to listen. Could you tell me more about how you're feeling?",
      "I want to understand better. Could you explain what's on your mind?",
      "Your welcome, I am always there to help "
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findResponse = (input) => {
    const lowercaseInput = input.toLowerCase();
    
    for (const [category, data] of Object.entries(chatRules)) {
      if (category === 'default') continue;
      
      const matchesPattern = data.patterns?.some(pattern => 
        lowercaseInput.includes(pattern)
      );
      
      if (matchesPattern && data.responses?.length > 0) {
        const responses = data.responses;
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        if (typeof randomResponse === 'object') {
          return [randomResponse.message, randomResponse.suggestion];
        }
        return [randomResponse];
      }
    }
    
    const defaultResponses = chatRules.default;
    return [defaultResponses[Math.floor(Math.random() * defaultResponses.length)]];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputText, isAI: false }]);
    setInputText('');
    setIsTyping(true);

    // Get responses
    const responses = findResponse(inputText);
    
    // Add each response with a delay
    responses.forEach((response, index) => {
      setTimeout(() => {
        setMessages(prev => [...prev, { text: response, isAI: true }]);
        if (index === responses.length - 1) {
          setIsTyping(false);
        }
      }, (index + 1) * 1000);
    });
  };

  return (
    <div className="flex flex-col h-[600px] bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-xl">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-t-2xl">
        <h2 className="text-white text-lg font-semibold">Mental Health Buddy</h2>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <CloudMessage
              key={index}
              message={message.text}
              isAI={message.isAI}
            />
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center space-x-2 text-gray-500"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="animate-pulse">...</span>
              </div>
              <span>AI is typing...</span>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white/50 rounded-b-2xl">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition-opacity"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnhancedChatbot;