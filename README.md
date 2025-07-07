# Ribaru Mobile App

A React Native mobile application for inventory and sales management, built with Expo.

## Features

- **Dashboard**: Overview of sales, stock, and key metrics
- **Sales Management**: Add sales, select items, and checkout
- **Stock Management**: Add and manage inventory items
- **Product Details**: View and edit product information
- **User Management**: Manage team members and roles
- **Settings**: Configure app preferences and business settings

## Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **React Navigation** for navigation
- **Lucide React Native** for icons
- **React Native Safe Area Context** for safe area handling

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- iOS Simulator (for iOS development)
- Android Studio/Emulator (for Android development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ribaru-mobile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── screens/            # Screen components
├── navigation/         # Navigation configuration
├── hooks/             # Custom React hooks
├── services/          # API services
├── types/             # TypeScript type definitions
└── utils/             # Utility functions and constants
```

## Key Screens

### Home Screen
- Welcome message with user avatar
- Today's sales statistics
- Quick action buttons for adding sales and stock
- Stats grid showing key metrics

### Sales Flow
1. **Add Sale**: Form to create a new sale
2. **Select Item**: Choose products from inventory
3. **Checkout**: Review and confirm sale details

### Stock Management
- **Stock Dashboard**: Overview of inventory levels
- **Add Stock**: Form to add new products
- **Product Detail**: View and edit product information

### Settings
- Account and business settings
- User management
- POS configuration

## API Integration

The app uses a mock API service (`src/services/api.ts`) that can be easily replaced with your actual backend endpoints. Update the `API_BASE_URL` and implement proper authentication as needed.

## Customization

### Colors and Theming
Update the color scheme in `src/utils/constants.ts`:

```typescript
export const COLORS = {
  primary: '#0A1FDA',        // Main brand color
  primaryLight: '#E9EBFF',   // Light background
  // ... other colors
};
```

### Navigation
Modify navigation structure in `src/navigation/`:
- `AppNavigator.tsx`: Main stack navigator
- `TabNavigator.tsx`: Bottom tab navigation

## Development

### Adding New Screens
1. Create screen component in `src/screens/`
2. Add route to navigation
3. Update TypeScript types for navigation params

### State Management
The app uses React hooks for state management:
- `useSales()`: Sales data and operations
- `useStock()`: Inventory management
- Custom hooks in `src/hooks/`

### Mock Data
Mock data is used for development. Replace with actual API calls in production.

## Building for Production

### iOS
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.