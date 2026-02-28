# 🔗 NeoRCode

A modern, feature-rich QR code generator web application that creates customizable QR codes for multiple data types. Built with **React**, **Next.js**, **TypeScript** and **Tailwind CSS**, NeoRCode offers unlimited scans, high-resolution downloads, and extensive customization options—all completely free.

<img width="1851" height="952" alt="NeoRCode-showcase" src="https://github.com/user-attachments/assets/3b8e0f91-02d4-41bc-a226-1944fbfc14b4" />

Live Preview 👉 <a href="https://neorcode.vercel.app">View Website</a>

---

## 📋 Table of Contents

- [🔑 Key Features](#-key-features)
- [📱 Supported QR Code Types](#-supported-qr-code-types)
- [💻 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📂 Project Structure](#-project-structure)
- [💡 Usage Examples](#-usage-examples)
- [🎨 Customization Options](#-customization-options)
- [🌐 Browser Support](#-browser-support)
- [📞 Support](#-support)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 🔑 Key Features

### ✅ 7 QR Code Types
- Generate QR codes for URLs, text, email, phone, SMS, WiFi credentials, and Bitcoin addresses.

### ✅ Full Customization
- Customize colors, dots style, corner elements, and gradients to match your brand.

### ✅ Logo Support
- Add custom logos to the center of QR codes with smart error correction up to 30%.

### ✅ High-Resolution Downloads
- Export QR codes as PNG or SVG formats in print-quality resolution.

### ✅ Unlimited & Permanent
- All generated QR codes are static, never expire, and have no scan limits.

### ✅ Dark/Light Mode
- Built-in theme switcher for comfortable viewing in any environment.

### ✅ Fully Responsive
- Seamless experience across desktop, tablet, and mobile devices.

### ✅ Free for Commercial Use
- All generated QR codes are free for personal and commercial use without attribution.

---

## 📱 Supported QR Code Types

| Type | Description | Example Use Case |
|------|-------------|------------------|
| **🔗 URL** | Website links | Share your portfolio or landing page |
| **📝 Text** | Plain text content | Display messages or instructions |
| **✉️ Email** | Email with pre-filled subject/body | Quick contact with context |
| **📞 Phone** | Direct dial phone numbers | Enable one-tap calling |
| **💬 SMS** | Text messages with pre-filled content | Automated text responses |
| **📡 WiFi** | Network credentials (SSID, password) | Guest WiFi access |
| **₿ Bitcoin** | Cryptocurrency addresses with amount | Accept payments |

---

## 💻 Tech Stack

<table>
  <tr>
    <td>
      <b>Frontend:</b>
    </td>
    <td>
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
      <img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
      <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
      <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    </td>
  </tr>
  <tr>
    <td>
      <b>QR Libraries:</b>
    </td>
    <td>
      <img src="https://img.shields.io/badge/qr--code--styling-blue?style=for-the-badge" />
      <img src="https://img.shields.io/badge/qrcode.react-blue?style=for-the-badge" />
    </td>
  </tr>
  <tr>
    <td>
      <b>Backend:</b>
    </td>
    <td>
      <img src="https://img.shields.io/badge/Supabase-000000?style=for-the-badge&logo=supabase&logoColor=34B278" />
    </td>
  </tr>
  <tr>
    <td>
      <b>Deployment:</b>
    </td>
    <td>
      <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
    </td>
  </tr>
</table>

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.x or later
- **npm** 9.x or later

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ObsCure9277/NeoRCode.git
   cd NeoRCode
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

### Building for Production

```sh
npm run build
npm start
```

---

## 📂 Project Structure

```
NeoRCode/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout component
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   ├── section/       # Page sections
│   │   │   ├── About.tsx      # Features showcase
│   │   │   ├── FAQ.tsx        # Frequently asked questions
│   │   │   ├── Footer.tsx     # Footer component
│   │   │   ├── Header.tsx     # Navigation header
│   │   │   └── QRGenerate.tsx # Main QR generator
│   │   └── ui/            # Reusable UI components
│   │       ├── DarkMode.tsx          # Theme toggle
│   │       ├── QRConfiguration.tsx   # QR customization panel
│   │       ├── QRPreview.tsx         # QR code preview & download
│   │       └── QRTypeNav.tsx         # QR type selector
│   └── utils/
│       └── theme.ts       # Theme configuration
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md             # This file
```

---

## 💡 Usage Examples

### Generating a URL QR Code

1. Select **URL** from the type selector
2. Enter your website URL (e.g., `https://example.com`)
3. Customize colors, add a logo, adjust design
4. Click **Download** to save as PNG or SVG

### Creating a WiFi QR Code

1. Select **WiFi** from the type selector
2. Fill in the form:
   - **SSID:** Your network name
   - **Password:** Network password
   - **Encryption:** WPA/WEP/No encryption
3. Customize the design and download
4. Guests can scan to connect instantly

### Bitcoin Payment QR Code

1. Select **Bitcoin** from the type selector
2. Enter your Bitcoin address
3. Optionally specify an amount
4. Customize and download for payments

---

## 🎨 Customization Options

### Colors
- **Foreground Color:** Main QR code color (dots and corners)
- **Background Color:** QR code background
- **Individual Elements:** Separate colors for dots, corner squares, and corner dots

### Design Styles
- **Dots:** Square, rounded, dots, extra-rounded
- **Corner Squares:** Square, rounded, extra-rounded  
- **Corner Dots:** Square, rounded, dot

### Logo Configuration
- Upload custom brand logos (PNG, JPG, SVG)
- Adjustable logo size (10-50% of QR code)
- Error correction up to 30% ensures scannability

### Export Options
- **Formats:** PNG (raster), SVG (vector)
- **Size:** 300x300px to 2000x2000px
- **Margin:** Configurable quiet zone

---

## 🌐 Browser Support

NeoRCode supports all modern browsers:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer 11 (limited support)

Requires HTML5-capable browser with Canvas API support.

---

## 📞 Support

### Documentation

- **FAQ Section:** Visit the [FAQ](https://neorcode.vercel.app#faq) on the live site
- **About Section:** Learn more about features in the [About](https://neorcode.vercel.app#about) section

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

All generated QR codes are free to use for both personal and commercial purposes without attribution.

---

## 🙏 Acknowledgments

- [qr-code-styling](https://github.com/kozakdenys/qr-code-styling) by Denys Kozak for advanced QR customization
- [qrcode.react](https://github.com/zpao/qrcode.react) for React QR code integration
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://vercel.com/) for seamless deployment
- QR Code technology invented by Denso Wave in 1994

---

**Made with ❤️ by [ObsCure9277](https://github.com/ObsCure9277)**
