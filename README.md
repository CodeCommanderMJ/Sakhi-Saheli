# Sakhi Saheli– Smart Safety Device for Women

**Sakhi** is a smart safety device designed to ensure women’s personal security by sending real-time SOS alerts during emergencies. Using **Arduino, GPS, GSM, and motion sensors**, Sakhi allows users to instantly notify trusted contacts and authorities with their location, providing peace of mind and quick assistance.

## Features
- **Instant SOS Alerts:** One-button emergency alerts to pre-defined contacts.
- **Real-time Location Tracking:** GPS-enabled location sent via GSM.
- **Motion Detection:** Detects unusual movement or falls for added safety.
- **Reliable Communication:** Immediate notification to trusted contacts and authorities.
  
##How the full system works end-to-end
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


## Tech Stack
- **Hardware:** Arduino Uno, GPS Module (Neo-6M), GSM Module (SIM800L), MPU6050 Motion Sensor, Panic Button, Li-ion Battery.
- **Software:** Arduino IDE, C/C++ for microcontroller programming.
- **Connectivity:** GSM for SMS alerts, GPS for location tracking.

## How It Works
1. The user presses the **panic button** in an emergency.
2. The device reads the **GPS location**.
3. Sends an **SMS alert** with the user’s location to trusted contacts.
4. Optional **motion detection** triggers alerts in case of falls or unusual activity.

## Hackathon Highlights
- **Portable & Affordable:** Compact design, low-cost components.
- **Real-time Alerts:** Immediate communication with minimal delay.
- **User Privacy:** Alerts only go to trusted contacts, no unnecessary data sharing.
- **Scalable:** Can integrate with mobile apps or community safety networks.

## Setup Instructions
1. Connect the hardware modules (Arduino, GPS, GSM, motion sensor, panic button).
2. Upload the Arduino code via Arduino IDE.
3. Configure emergency contact numbers in the code.
4. Power the device with a 3.7V Li-ion battery.

## Future Enhancements
- Mobile app integration for remote monitoring.
- Cloud-based alert storage and analytics.
- AI-powered anomaly detection for enhanced safety.

---

**Sakhi** empowers women with **real-time safety**, **reliable communication**, and **peace of mind**—a must-have for personal security.  

<img width="1407" height="767" alt="image" src="https://github.com/user-attachments/assets/7f034360-bd89-45dc-9049-163c783cdf2b" />
<img width="1536" height="1024" alt="WhatsApp Image 2026-04-24 at 2 05 33 PM" src="https://github.com/user-attachments/assets/ceb200ea-aade-4894-b105-499829c65f84" />
<img width="1600" height="900" alt="WhatsApp Image 2026-04-24 at 4 02 39 PM (1)" src="https://github.com/user-attachments/assets/24d52dbd-b1ef-4f70-894e-0e351c96be30" />
