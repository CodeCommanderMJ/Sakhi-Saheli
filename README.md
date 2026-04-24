# Sakhi Saheli – IoT-Based Women Safety System

Sakhi Saheli is a real-time IoT-based safety device designed to provide instant emergency assistance to women. The system integrates embedded hardware, communication modules, and cloud connectivity to ensure reliable SOS alert delivery even in low-network conditions.

---

## 🚨 Key Features

- **Multi-Trigger SOS System**
  - Panic button activation
  - Fall detection using MPU6050
  - Abnormal pulse/health trigger

- **Dual Communication Mode**
  - GSM (SIM800L) for SMS + call (offline reliability)
  - Internet-based alerts via Firebase + mobile app

- **Real-Time GPS Tracking**
  - Live location fetched using Neo-6M GPS module
  - Google Maps link shared via SMS

- **Edge + Cloud Hybrid Architecture**
  - ESP32 handles real-time decision making
  - Firebase enables live tracking and notifications

---

## ⚙️ System Architecture
Woman wearing the device is in danger
            ↓
   Button pressed / Fall detected / Abnormal pulse
            ↓
   ESP32 fetches GPS coordinates
            ↓
       Two parallel paths:

  [No internet]              [Internet available]
  SIM800L sends SMS     +    Firebase gets location update
  + auto-calls contact       App shows live location
                             FCM sends push notification
                             to emergency contacts' phones
            ↓
  Emergency contacts receive:
  - SMS with Google Maps link
  - Phone call
  - App notification (if they have the app)
            ↓
  Contacts can track live location on app
  until the woman marks herself safe



---

## 🔁 End-to-End Workflow

1. Emergency triggered (button / fall / abnormal health)
2. ESP32 reads GPS coordinates
3. Parallel execution:
   - GSM sends SMS + auto-call
   - Firebase updates live location
4. Contacts receive:
   - SMS with Google Maps link
   - Phone call
   - App notification
5. Live tracking continues until safe status is updated

---

## 🛠️ Hardware Components

- ESP32 Microcontroller  
- Neo-6M GPS Module  
- SIM800L GSM Module  
- MPU6050 Accelerometer (Fall Detection)  
- Pulse Sensor (Health Monitoring)  
- Panic Button  
- 3.7V Li-ion Battery + Power Module  

---

## 💻 Software Stack

- Arduino IDE (Embedded Programming)
- C/C++ (ESP32 Firmware)
- Firebase (Realtime Database + FCM)
- Mobile App / Web Dashboard (for tracking)

---

## 🔧 Key Engineering Highlights

- Implemented **fail-safe communication** using GSM when internet is unavailable  
- Designed **real-time interrupt-based SOS trigger system**  
- Optimized power usage for **portable wearable deployment**  
- Achieved **parallel alert system (SMS + Cloud)** for redundancy  

---

## 🚀 Setup Instructions

1. Connect ESP32 with GPS, GSM, and sensors  
2. Upload firmware using Arduino IDE  
3. Configure emergency contacts and Firebase credentials  
4. Power using Li-ion battery  

---

## 📈 Future Enhancements

- AI-based threat detection using sensor patterns  
- Voice activation SOS system  
- Miniaturized PCB for wearable design  

---

## 🏆 Highlights

- Real-time safety system with dual communication reliability  
- Designed for low-connectivity environments  
- Scalable for smart city and public safety integration  

---

## 📌 Impact

Sakhi Saheli provides a **low-cost, reliable, and scalable safety solution**, ensuring women can access immediate help in critical situations.


<img width="1407" height="767" alt="image" src="https://github.com/user-attachments/assets/7f034360-bd89-45dc-9049-163c783cdf2b" />
<img width="1536" height="1024" alt="WhatsApp Image 2026-04-24 at 2 05 33 PM" src="https://github.com/user-attachments/assets/ceb200ea-aade-4894-b105-499829c65f84" />
<img width="1600" height="900" alt="WhatsApp Image 2026-04-24 at 4 02 39 PM (1)" src="https://github.com/user-attachments/assets/24d52dbd-b1ef-4f70-894e-0e351c96be30" />

<img width="1023" height="1536" alt="image" src="https://github.com/user-attachments/assets/6aafcdab-2b43-4edc-bda8-b9f2c78c6550" />
