# Al-Rawda Mosque Donation Website

A beautiful and responsive donation website for Al-Rawda Mosque, featuring gender-based content access, donation methods, and religious content.

## Features

- Gender-based video content access
- Multiple donation methods (Vodafone Cash, InstaPay)
- Beautiful Islamic design elements
- Responsive layout for all devices
- Arabic and English typography
- Parallax scrolling effects
- Accessibility features

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd mosque
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── DonationSection.tsx
│   │   └── ReligiousContent.tsx
│   ├── videos/
│   │   └── [gender]/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── public/
    └── islamic-pattern.svg
```

## Customization

- Update the Vodafone Cash number in `DonationSection.tsx`
- Add your InstaPay QR code
- Replace video content in the `videos` object
- Modify colors in `globals.css`
- Add more religious content in `ReligiousContent.tsx`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 