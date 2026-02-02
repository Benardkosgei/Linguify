# 🔥 Firebase Setup for Content Import

## 🚨 **IMPORTANT: Update Security Rules First!**

Before importing content, you need to temporarily allow write access to Firestore.

### **Step 1: Update Firestore Rules**

1. **Go to Firebase Console**: https://console.firebase.google.com
2. **Select your project**: `linguify-b6ce4`
3. **Navigate to**: Firestore Database → Rules
4. **Replace current rules with**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if true;  // ← Temporarily allow writes for import
    }
  }
}
```

5. **Click "Publish"**

### **Step 2: Import Content**
- Now you can run the import scripts
- Collections will be created automatically
- Documents will be added automatically

### **Step 3: Secure Rules Again (After Import)**

After successful import, update rules to be more secure:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all content
    match /{document=**} {
      allow read: if true;
    }
    
    // Only allow writes to specific collections if needed
    match /user_data/{userId} {
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Block writes to content collections (read-only)
    match /kiswahili_{category}/{document} {
      allow write: if false;  // Content is read-only after import
    }
  }
}
```

## 📋 **What Gets Created Automatically:**

### **Collections (14 total):**
```
kiswahili_basic_words/
kiswahili_greetings/
kiswahili_numbers/
kiswahili_family/
kiswahili_colors/
kiswahili_animals/
kiswahili_food/
kiswahili_body_parts/
kiswahili_nature/
kiswahili_occupations/
kiswahili_months/
kiswahili_names/
kiswahili_proverbs/
kiswahili_cultural_practices/
```

### **Documents (300+ total):**
Each document will have fields like:
```javascript
{
  id: "kiswahili_basic_words_1",
  word: "Habari",
  meaning: "News/How are you",
  pronunciation: "ha-BA-ri",
  category: "greeting",
  language: "kiswahili",
  created_at: "2024-01-30T...",
  source: "sample"
}
```

## 🔍 **Verification Steps:**

### **Before Import:**
1. ✅ Check Firebase connection (run Firebase test)
2. ✅ Update security rules to allow writes
3. ✅ Ensure app can connect to Firestore

### **During Import:**
1. 📊 Watch console logs for progress
2. 🔄 Wait for completion (may take 2-3 minutes)
3. ⚠️ Don't close app during import

### **After Import:**
1. 🔍 Check Firebase Console for new collections
2. 📱 Test content loading in app
3. 🔒 Update security rules to be more restrictive
4. 🎉 Celebrate successful import!

## 🚨 **Troubleshooting:**

### **"Permission Denied" Error:**
- **Cause**: Security rules still blocking writes
- **Solution**: Double-check rules update and publish

### **"Network Error":**
- **Cause**: Internet connection or Firebase service issue
- **Solution**: Check connection, retry import

### **"Collection Already Exists":**
- **Cause**: Previous import attempt
- **Solution**: Check existing data, clear if needed, or skip duplicates

### **"Import Timeout":**
- **Cause**: Large dataset, slow connection
- **Solution**: Import categories individually instead of all at once

## 📞 **Need Help?**

If you encounter issues:
1. Check console logs for detailed error messages
2. Verify Firebase connection with test tools
3. Ensure security rules are properly updated
4. Try importing one category at a time

---

**Ready to import? Update those security rules first, then hit the import button! 🚀**