# StockClinic

ระบบจัดการคลินิกและสต็อกสินค้าออนไลน์ ที่ใช้ React + Vite สำหรับส่วน Frontend และ Express.js สำหรับส่วน Backend

## 🚀 เทคโนโลยีที่ใช้

### Frontend
- **React** - JavaScript Library สำหรับสร้าง User Interface
- **Vite** - Build Tool ที่รวดเร็วสำหรับ Modern Web Projects
- **CSS/SCSS** - สำหรับการตกแต่งหน้าเว็บ

### Backend
- **Express.js** - Web Framework สำหรับ Node.js
- **Node.js** - JavaScript Runtime Environment

## 📋 ความต้องการของระบบ

ก่อนเริ่มติดตั้ง กรุณาตรวจสอบให้แน่ใจว่าคุณมีสิ่งต่อไปนี้ติดตั้งในเครื่องแล้ว:

- **Node.js** (เวอร์ชัน 16.0 หรือสูงกว่า)
- **npm** หรือ **yarn** (มาพร้อมกับ Node.js)
- **Git** (สำหรับ clone โปรเจค)

### ตรวจสอบเวอร์ชัน
```bash
node --version
npm --version
```

## ⚡ การติดตั้งและเรียกใช้งาน

### 1. Clone โปรเจค
```bash
git clone https://github.com/your-username/stockclinic.git
cd stockclinic
```

### 2. ติดตั้ง Dependencies

#### สำหรับ Backend (Express Server)
```bash
# เข้าไปยังโฟลเดอร์ backend
cd backend

# ติดตั้ง dependencies
npm install

# หรือใช้ yarn
yarn install
```

#### สำหรับ Frontend (React + Vite)
```bash
# เข้าไปยังโฟลเดอร์ frontend
cd frontend

# ติดตั้ง dependencies
npm install

# หรือใช้ yarn
yarn install
```

### 3. การตั้งค่าไฟล์ Environment

#### Backend (.env)
สร้างไฟล์ `.env` ในโฟลเดอร์ `backend/` และเพิ่มตัวแปรต่อไปนี้:

```env
PORT=5000
NODE_ENV=development
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret_key
```

#### Frontend (.env)
สร้างไฟล์ `.env` ในโฟลเดอร์ `frontend/` และเพิ่มตัวแปรต่อไปนี้:

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=StockClinic
```

### 4. เรียกใช้งานโปรเจค

#### เริ่ม Backend Server
```bash
# ในโฟลเดอร์ backend/
npm run dev

# หรือ
npm start
```

Server จะทำงานที่: `http://localhost:5000`

#### เริ่ม Frontend Development Server
```bash
# ในโฟลเดอร์ frontend/
npm run dev
```

Frontend จะทำงานที่: `http://localhost:5173`

### 5. เรียกใช้งานทั้งสองส่วนพร้อมกัน

หากต้องการเรียกใช้งานทั้ง Frontend และ Backend พร้อมกัน สามารถใช้ terminal หลายหน้าต่าง หรือติดตั้ง `concurrently`:

```bash
# ติดตั้ง concurrently (ในโฟลเดอร์หลัก)
npm install -g concurrently

# สร้าง script ในไฟล์ package.json หลัก
npm run dev
```

## 📁 โครงสร้างโปรเจค

```
stockclinic/
├── frontend/                 # React + Vite Frontend
│   ├── public/              # Static files
│   ├── src/                 # Source code
│   │   ├── components/      # React Components
│   │   ├── pages/          # หน้าต่างๆ ของเว็บ
│   │   ├── hooks/          # Custom React Hooks
│   │   ├── utils/          # Utility functions
│   │   ├── styles/         # CSS/SCSS files
│   │   └── App.jsx         # Main App component
│   ├── index.html          # HTML template
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
├── backend/                 # Express.js Backend
│   ├── controllers/        # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── config/           # Configuration files
│   ├── app.js            # Express app setup
│   ├── server.js         # Server entry point
│   └── package.json      # Backend dependencies
└── README.md             # ไฟล์นี้
```

## 🛠️ คำสั่งที่สำคัญ

### Frontend (React + Vite)
```bash
npm run dev          # เริ่ม development server
npm run build        # สร้าง production build
npm run preview      # ดูตัวอย่าง production build
npm run lint         # ตรวจสอบ code quality
```

### Backend (Express)
```bash
npm start            # เริ่ม production server
npm run dev          # เริ่ม development server พร้อม nodemon
npm test             # รัน unit tests
```

## 🔧 การตั้งค่าเพิ่มเติม

### การติดตั้ง Database
ระบบนี้รองรับการเชื่อมต่อกับฐานข้อมูลต่างๆ เช่น:
- MongoDB
- PostgreSQL
- MySQL

กรุณาติดตั้งและตั้งค่าฐานข้อมูลตามที่ต้องการ และอัพเดท `DATABASE_URL` ในไฟล์ `.env`

### การตั้งค่า CORS
หากต้องการให้ Frontend และ Backend ทำงานบน domain ที่แตกต่างกัน ให้ตั้งค่า CORS ในไฟล์ `backend/app.js`

## 📚 คำแนะนำการใช้งาน

1. **Development Mode**: ใช้ `npm run dev` สำหรับการพัฒนา
2. **Production Build**: ใช้ `npm run build` เมื่อต้องการ deploy
3. **Code Quality**: ควรใช้ ESLint และ Prettier เพื่อรักษาคุณภาพของโค้ด
4. **Testing**: เขียน unit tests และ integration tests อย่างสม่ำเสมอ

## 🚨 การแก้ไขปัญหาที่พบบ่อย

### ปัญหา Port ซ้ำ
```bash
# หา process ที่ใช้ port
lsof -i :5000
lsof -i :5173

# ปิด process
kill -9 <PID>
```

### ปัญหา Node Modules
```bash
# ลบ node_modules และติดตั้งใหม่
rm -rf node_modules package-lock.json
npm install
```

### ปัญหา CORS
ตรวจสอบการตั้งค่า CORS ใน backend และ environment variables

## 🤝 การมีส่วนร่วมในโปรเจค

1. Fork โปรเจค
2. สร้าง feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add some AmazingFeature'`)
4. Push ไปยัง branch (`git push origin feature/AmazingFeature`)
5. เปิด Pull Request

## 📄 License

โปรเจคนี้อยู่ภายใต้ MIT License - ดูรายละเอียดในไฟล์ [LICENSE](LICENSE)

## 📞 ติดต่อ

หากมีคำถามหรือปัญหา กรุณาติดต่อ:
- Email: your-email@example.com
- GitHub Issues: [Create an issue](https://github.com/your-username/stockclinic/issues)

---

**หมายเหตุ**: กรุณาอ่านเอกสารนี้อย่างละเอียดก่อนเริ่มใช้งาน และอย่าลืมอัพเดท environment variables ให้เหมาะสมกับการใช้งานของคุณ
