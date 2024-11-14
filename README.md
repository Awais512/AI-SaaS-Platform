# 🚀 5-Tool AI SaaS Platform

A comprehensive AI SaaS platform built with Next.js 13 App Router, featuring multiple AI tools and subscription-based access.

![Next JS](https://img.shields.io/badge/Next.js%2013-black?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=flat&logo=stripe&logoColor=white)

## ✨ Features

### 🤖 AI Tools
1. **Conversation AI**
   - Natural language processing
   - Context-aware responses
   - Conversation history

2. **Code Generation**
   - Multiple language support
   - Code explanation
   - Syntax highlighting

3. **Image Generation**
   - Text-to-image
   - Style customization
   - Resolution options

4. **Music Generation**
   - Various genres
   - Custom duration
   - Different instruments

5. **Video Generation**
   - Text-to-video
   - Style transfer
   - Resolution control

### 💳 Subscription System
- **Stripe Integration**
  - Multiple pricing tiers
  - Usage-based billing
  - Automatic invoicing
  - Payment processing

### 🔐 Authentication
- **Clerk Integration**
  - Social logins
  - Email verification
  - Two-factor authentication
  - User management

## 🛠️ Tech Stack

```typescript
const techStack = {
  frontend: {
    framework: "Next.js 13",
    lib: "React",
    styling: "TailwindCSS",
    ui: "Shadcn UI"
  },
  backend: {
    runtime: "Next.js App Router",
    database: "MySQL",
    orm: "Prisma",
    auth: "Clerk"
  },
  payments: "Stripe",
  hosting: "Vercel"
};
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- MySQL database
- Clerk account
- Stripe account
- AI API keys

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ai-saas-platform.git
cd ai-saas-platform
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
# .env.local
# Core
DATABASE_URL="mysql://..."
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# AI Services
OPENAI_API_KEY=
REPLICATE_API_KEY=
```

4. **Initialize the database**
```bash
npx prisma db push
```

5. **Start development server**
```bash
npm run dev
```

## 💎 Core Features Implementation

### 🤖 AI Tool Integration

```typescript
// Example of conversation AI implementation
export async function generateConversation(
  prompt: string,
  history: Message[]
) {
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      ...history,
      { role: "user", content: prompt }
    ],
    temperature: 0.7,
    max_tokens: 500
  });

  return response.choices[0].message;
}
```

### 💳 Stripe Subscription

```typescript
// Stripe subscription setup
export async function createSubscription(
  userId: string,
  priceId: string
) {
  const customer = await stripe.customers.create({
    metadata: {
      userId
    }
  });

  const subscription = await stripe.subscriptions.create({
    customer: customer.id,
    items: [{ price: priceId }],
    payment_behavior: 'default_incomplete',
    payment_settings: {
      save_default_payment_method: 'on_subscription'
    },
    expand: ['latest_invoice.payment_intent']
  });

  return subscription;
}
```

### 🔐 Protected Routes

```typescript
// Middleware for protected routes
export default authMiddleware({
  publicRoutes: ["/", "/api/webhook"],
  ignoredRoutes: ["/api/webhook"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

## 📊 Usage Tracking

```typescript
// Track API usage
export async function trackApiUsage(
  userId: string,
  tool: string
) {
  const today = new Date().toISOString().split('T')[0];
  
  await prisma.apiUsage.upsert({
    where: {
      userId_tool_date: {
        userId,
        tool,
        date: today
      }
    },
    update: {
      count: {
        increment: 1
      }
    },
    create: {
      userId,
      tool,
      date: today,
      count: 1
    }
  });
}
```

## 🎯 API Rate Limiting

```typescript
export const rateLimiter = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '1 m'),
  analytics: true
});
```

## 🔒 Security Features

- **Authentication**
  - Clerk authentication
  - Protected routes
  - API route protection
  - CORS configuration

- **Data Protection**
  - Input validation
  - XSS prevention
  - CSRF protection
  - Rate limiting

## 🚀 Deployment

1. **Database Setup**
```bash
# Push database schema
npx prisma db push
```

2. **Configure Vercel**
```bash
# Set environment variables
vercel env pull
```

3. **Deploy**
```bash
vercel deploy
```

## ⚡ Performance Optimizations

- Route caching
- Image optimization
- API response caching
- Code splitting
- Lazy loading

## 📈 Monitoring

- API usage tracking
- Error logging
- Performance monitoring
- User analytics

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Clerk](https://clerk.dev/)
- [Stripe](https://stripe.com/)
- [OpenAI](https://openai.com/)
- [Replicate](https://replicate.com/)

---

Built with ❤️ by Awais Raza
