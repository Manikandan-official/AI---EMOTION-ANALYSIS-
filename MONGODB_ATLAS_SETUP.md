# 🚀 MongoDB Atlas Setup Instructions

## Your Current Setup
- Cluster Name: `moodtracker3` (from your .env)
- Region: AWS (confirmed in screenshot)
- Provider: AWS Mumbai region ✅

## Quick Setup Checklist

### 1️⃣ MongoDB Atlas Dashboard
```
Go to: https://cloud.mongodb.com/
Login with your MongoDB account
```

### 2️⃣ Create New Cluster (if not exists)
- Provider: AWS ✅
- Region: Mumbai (ap-south-1) ✅ 
- Cluster Name: `moodanalysis`
- Click "Create Cluster"
- Wait 3-5 minutes ⏳

### 3️⃣ Set Up Security
**Network Access:**
- Go to: Database → Network Access
- Click: "Add IP Address"
- Select: "Allow Access from Anywhere" (0.0.0.0/0)
- Click: "Confirm"

**Database User:**
- Go to: Database → Database Access
- Click: "Add New Database User"
- Fill:
  - Username: `moodtracker`
  - Password: `StrongPassword123!` (create your own)
  - Built-in Role: `Atlas admin`
- Click: "Add User"

### 4️⃣ Get Connection String
- Go to: Database → Clusters
- Click: "Connect" on your cluster
- Choose: "Drivers" → "Node.js"
- Copy the connection string

### 5️⃣ Update .env File
Replace in `d:\mood_tracker_3\mood_tracker_3\backend\.env`:

```
MONGODB_URI=mongodb+srv://moodtracker:YOUR_PASSWORD@moodanalysis.mongodb.net/moodtracker?retryWrites=true&w=majority
```

**Replace:**
- `YOUR_PASSWORD` → Your actual password
- `moodanalysis` → Your cluster name

### 6️⃣ Restart Server
```powershell
cd "d:\mood_tracker_3\mood_tracker_3\backend"
npm start
```

---

## ✅ Success Indicators

You should see in terminal:
```
MongoDB connected successfully
✓ Connected to MongoDB Atlas
Server running on port 5002
```

Not:
```
Primary MongoDB connection failed
Running in offline mode
```

---

## 🔧 Troubleshooting

### Connection fails after setup?

1. **Check IP Whitelist**
   - Go to: Network Access
   - Verify your IP is added (or 0.0.0.0/0)

2. **Check Credentials**
   - Username and password correct?
   - No special characters needing escape?

3. **Check Connection String Format**
   - Copy directly from MongoDB Atlas
   - Don't modify the URL

4. **Verify Cluster is Ready**
   - Go to Database → Clusters
   - Check status (should be green ✅)

---

## 📝 Next Steps

After setup:
1. Restart Express: `npm start`
2. Should see "MongoDB connected successfully"
3. Test emotion detection again
4. Data will be saved to MongoDB!

---

**Ready? Do the setup and report back!** 🎯
