# NASA Sakhi MVP - Frontend Development Plan
## Developer: Sunitha (Frontend Lead - 45% of Work)
## Timeline: February 3-7, 2026

---

## 📋 Table of Contents

1. [Project Background](#project-background)
2. [Your Role in the Team](#your-role-in-the-team)
3. [Team Structure & Collaboration](#team-structure--collaboration)
4. [Technical Architecture](#technical-architecture)
5. [Your Development Stages (16 Stages)](#your-development-stages-16-stages)
6. [Component Design Guidelines](#component-design-guidelines)
7. [Validation Rules Reference](#validation-rules-reference)
8. [Integration Process](#integration-process)
9. [Resources & Documentation](#resources--documentation)
10. [Success Criteria](#success-criteria)

---

## 🌟 Project Background

### What is NASA Sakhi?

NASA Sakhi is a comprehensive web-based organization registration portal designed to empower women and vulnerable children across India through accessible support services. The platform enables NGOs, support organizations, and service providers to self-register their services, undergo admin vetting, and make their offerings discoverable through a mobile app ecosystem.

**Mission:** Democratize access to support services for women and children across India by creating a centralized, multilingual, and accessible registry of organizations.

### Current State

- **Legacy System:** 121 existing organizations need to be migrated
- **New System:** Modern Next.js + PostgreSQL architecture
- **Your Task:** Build the user-facing registration form that makes it easy for organizations to register

### User Experience Goals

Our target users are **NGO administrators** - often busy social workers with limited tech literacy. Your UI needs to be:

✅ **Simple:** Clear labels, intuitive flow
✅ **Forgiving:** Draft save, validation feedback, error recovery
✅ **Fast:** Complete registration in <20 minutes
✅ **Accessible:** Mobile-responsive, high contrast, keyboard navigation

### Key Statistics

- **7-step registration form** (multi-step wizard)
- **30 languages** to support (English + 29 Indian languages)
- **14 service categories** with 76 specific resources
- **Target:** >70% form completion rate
- **Goal:** <20 minutes to complete registration

### Success Metrics

Your form will be judged on:
- **Completion Rate:** % of users who start and finish
- **Time to Complete:** Median time from start to submit
- **Error Rate:** % of fields with validation errors
- **Mobile Usability:** Works perfectly on 375px viewport

---

## 👤 Your Role in the Team

### Frontend Lead (45% of Total Effort)

You are responsible for building the complete user-facing registration experience. Your work is what users see and interact with - it's the face of NASA Sakhi.

**Your Core Responsibilities:**

1. **Component Library**
   - Build reusable form components (inputs, dropdowns, checkboxes)
   - Implement consistent styling using Tailwind CSS
   - Create validation states (default, focus, error, success)

2. **7-Step Registration Form**
   - Step 1: Organization Details
   - Step 2: Contact Information
   - Step 3: Service Categories & Resources
   - Step 4: Branch Locations (dynamic, add/remove)
   - Step 5: Language Preferences
   - Step 6: Document Uploads
   - Step 7: Review & Submit

3. **Form Validation**
   - Client-side validation using Zod schemas
   - Real-time feedback (on blur, on change)
   - Clear, actionable error messages

4. **Draft Save/Resume**
   - Auto-save every 2 minutes
   - Manual "Save Draft" button
   - Resume draft on return

5. **Multi-Step Navigation**
   - Progress indicator (Step X of 7)
   - Back/Next buttons
   - Prevent skipping steps
   - URL routing for each step

6. **Mobile Responsiveness**
   - Test on 375px viewport (iPhone SE)
   - Touch-friendly buttons (44x44px minimum)
   - Readable text, proper spacing

### Why Your Work is Critical

- **First Impression:** Your form is the first interaction organizations have with NASA Sakhi
- **Completion Rate:** If the form is confusing, users will abandon it
- **Data Quality:** Good validation prevents bad data from reaching the backend
- **User Trust:** Professional UI builds confidence in the platform

---

## 🤝 Team Structure & Collaboration

### Team Composition

```
┌─────────────────────────────────────────────────────┐
│                  NASA Sakhi MVP                      │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌──────────────────┐         ┌──────────────────┐ │
│  │    SUNITHA       │   API   │     SHASHI       │ │
│  │  (YOU) Frontend  │◄────────┤    Backend       │ │
│  │     (45%)        │ Contract│     (45%)        │ │
│  │                  │         │                  │ │
│  │ - Form UI        │         │ - Database       │ │
│  │ - Validation     │         │ - API Routes     │ │
│  │ - Components     │         │ - Migration      │ │
│  └──────────────────┘         └──────────────────┘ │
│         │                          │                │
│         │       ┌──────────┐       │                │
│         └───────┤  TANUJ   ├───────┘                │
│                 │ UI Lead  │                        │
│                 │  (10%)   │                        │
│                 │          │                        │
│                 │ - Design │                        │
│                 │ - QA     │                        │
│                 │ - Demo   │                        │
│                 └──────────┘                        │
└─────────────────────────────────────────────────────┘
```

### How You'll Work Together

**Independent Phase (Feb 4-5):**
- You work independently with **mock data**
- Shashi works independently testing with **Postman**
- No dependencies between you

**Integration Phase (Feb 6):**
- Shashi merges his backend first
- You switch from mocks to his real API
- You work together to fix any integration issues

**QA Phase (Feb 7):**
- Tanuj tests the complete application
- You fix any frontend bugs he finds
- Final polish for customer demo

### Communication

**Daily Standup:** 10 AM (15 minutes)
- What you completed yesterday
- What you're working on today
- Any blockers

**Communication Channels:**
- `#nasa-sakhi-dev` - General updates
- `#nasa-sakhi-bugs` - Bug reports
- Tag teammates when blocked

**When to Reach Out Immediately:**
- API response format doesn't match expectations (coordinate with Shashi)
- Blocker preventing progress
- Design decision needed (ask Tanuj)
- Integration failure on Feb 6

**Review Checkpoints with Tanuj:**
- Feb 4 PM: Component library review
- Feb 5 AM: Steps 1-3 review
- Feb 5 PM: Steps 4-7 review
- Feb 6 AM: Mobile responsiveness check
- Feb 6 AM: Error handling review

---

## 🏗️ Technical Architecture

### Technology Stack

**Frontend:**
- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form
- **Validation:** Zod
- **HTTP Client:** Fetch API (native)
- **State Management:** React Context (for form state)

**Development Environment:**
- **Branch:** `feature/registration-form`
- **Development Server:** `localhost:3000`
- **Node Version:** 18+
- **Package Manager:** npm

### Project Structure

```
nasa_sakhi/
├── src/
│   ├── app/
│   │   ├── register/
│   │   │   ├── step1/page.tsx    # You create: Organization Details
│   │   │   ├── step2/page.tsx    # You create: Contact Info
│   │   │   ├── step3/page.tsx    # You create: Services
│   │   │   ├── step4/page.tsx    # You create: Branches
│   │   │   ├── step5/page.tsx    # You create: Languages
│   │   │   ├── step6/page.tsx    # You create: Documents
│   │   │   ├── step7/page.tsx    # You create: Review & Submit
│   │   │   └── layout.tsx        # You create: Shared layout with progress indicator
│   ├── components/
│   │   ├── form/                 # You create: Reusable form components
│   │   │   ├── TextInput.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── FileUpload.tsx
│   │   │   └── ...
│   │   ├── layout/               # You create: Layout components
│   │   │   ├── ProgressIndicator.tsx
│   │   │   ├── FormNavigation.tsx
│   │   │   └── FormHeader.tsx
│   │   └── ui/                   # You create: Generic UI components
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Modal.tsx
│   ├── lib/
│   │   ├── validation/           # You create: Zod schemas
│   │   │   ├── organizationSchema.ts
│   │   │   ├── contactSchema.ts
│   │   │   └── ...
│   │   ├── api/                  # You create: API client functions
│   │   │   ├── client.ts
│   │   │   └── mock.ts
│   │   └── hooks/                # You create: Custom React hooks
│   │       ├── useFormState.ts
│   │       └── useDraftSave.ts
│   ├── mocks/                    # You create: Mock API data
│   │   └── api.json
│   └── types/
│       └── api.ts                # Shared TypeScript interfaces (Tanuj creates)
└── public/
    └── uploads/                  # File uploads stored here
```

---

## 🚀 Your Development Stages (16 Stages)

### Timeline Overview

- **Feb 3 PM:** Environment Setup
- **Feb 4 AM:** Component library
- **Feb 4 PM:** Steps 1-3
- **Feb 5 AM:** Steps 4-6
- **Feb 5 PM:** Step 7, draft save, navigation
- **Feb 6 AM:** API integration, error handling
- **Feb 6 PM:** Merge, staging deployment
- **Feb 7:** Mobile testing, bug fixes, polish

---

### Stage 1: Environment Setup
**Date:** Feb 3 PM (2 hours)

**Important:** This project is cross-platform (Windows, macOS, Linux). See [CROSS-PLATFORM.md](../CROSS-PLATFORM.md) for platform-specific guidance.

**Tasks:**

#### 1. Clone Repository and Install Dependencies

```bash
git clone https://github.com/tangy83/NaSaSakhi.git
cd nasa_sakhi
```

#### 2. Platform-Specific Setup

**Choose your platform:**

**🪟 Windows Users:**
- See [WINDOWS-SETUP.md](../WINDOWS-SETUP.md) for detailed Windows guide
- **Recommended:** Use WSL2 for best compatibility
- **Alternative:** Native Windows setup works too

**🍎 macOS / 🐧 Linux Users:**
- Follow standard Unix setup
- See [README.md](../README.md) for general instructions

#### 3. Run Cross-Platform Setup

```bash
# Automated setup script (works on all platforms)
npm run setup

# Generate secure secrets
npm run generate-secrets
```

This will:
- Check prerequisites (Node.js 18+, npm)
- Create environment files
- Install all dependencies

#### 4. Create Feature Branch

```bash
git checkout -b feature/registration-form
```

#### 5. Wait for Tanuj's Foundational Files

Before proceeding, you need these files from Tanuj:

- ✅ `/src/types/api.ts` - API contract (TypeScript interfaces)
- ✅ `/src/mocks/api.json` - Mock data for independent development
- ✅ `/docs/DESIGN_SYSTEM.md` - Design guidelines (colors, typography, spacing)

**Tanuj will create these on Feb 3 and commit to main branch.**

Once ready, pull the latest:

```bash
git pull origin main
git merge main  # Merge into your feature branch
```

#### 6. Create Mock Data Structure

If Tanuj hasn't created `/src/mocks/api.json` yet, create it yourself:

**Create `/src/mocks/api.json`:**

```json
{
  "categories": [
    {
      "id": "1",
      "name": "Education Support",
      "targetGroup": "children",
      "displayOrder": 1
    },
    {
      "id": "2",
      "name": "Child Protection",
      "targetGroup": "children",
      "displayOrder": 2
    },
    {
      "id": "3",
      "name": "Women's Healthcare",
      "targetGroup": "women",
      "displayOrder": 8
    }
  ],
  "resources": [
    {
      "id": "1",
      "categoryId": "1",
      "name": "After-school tutoring",
      "description": ""
    },
    {
      "id": "2",
      "categoryId": "1",
      "name": "Scholarship programs",
      "description": ""
    },
    {
      "id": "3",
      "categoryId": "3",
      "name": "Maternal health services",
      "description": ""
    }
  ],
  "languages": [
    {
      "id": "1",
      "name": "Hindi",
      "code": "hi",
      "isActive": true
    },
    {
      "id": "2",
      "name": "English",
      "code": "en",
      "isActive": true
    },
    {
      "id": "3",
      "name": "Bengali",
      "code": "bn",
      "isActive": true
    }
  ],
  "cities": [
    {
      "id": "1",
      "name": "Bangalore",
      "stateId": "1",
      "stateName": "Karnataka"
    },
    {
      "id": "2",
      "name": "Mumbai",
      "stateId": "2",
      "stateName": "Maharashtra"
    },
    {
      "id": "3",
      "name": "Delhi",
      "stateId": "3",
      "stateName": "Delhi"
    }
  ],
  "states": [
    {
      "id": "1",
      "name": "Karnataka",
      "code": "KA"
    },
    {
      "id": "2",
      "name": "Maharashtra",
      "code": "MH"
    },
    {
      "id": "3",
      "name": "Delhi",
      "code": "DL"
    }
  ]
}
```

#### 7. Create Mock API Client

**Create `/src/lib/api/mock.ts`:**

```typescript
import mockData from '@/mocks/api.json';
import { ServiceCategory, ServiceResource, Language, City, State } from '@/types/api';

export async function fetchCategoriesMock(): Promise<ServiceCategory[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockData.categories as ServiceCategory[];
}

export async function fetchResourcesMock(categoryId?: string): Promise<ServiceResource[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  if (categoryId) {
    return mockData.resources.filter((r) => r.categoryId === categoryId) as ServiceResource[];
  }
  return mockData.resources as ServiceResource[];
}

export async function fetchLanguagesMock(): Promise<Language[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockData.languages as Language[];
}

export async function fetchCitiesMock(search?: string): Promise<City[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  if (search) {
    return mockData.cities.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    ) as City[];
  }
  return mockData.cities as City[];
}

export async function fetchStatesMock(): Promise<State[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockData.states as State[];
}

export async function saveDraftMock(data: any): Promise<{ token: string }> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  // Store in localStorage for testing
  const token = `draft-${Date.now()}`;
  localStorage.setItem(token, JSON.stringify(data));
  return { token };
}

export async function loadDraftMock(token: string): Promise<any> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const data = localStorage.getItem(token);
  if (!data) throw new Error('Draft not found');
  return JSON.parse(data);
}

export async function submitRegistrationMock(data: any): Promise<{ organizationId: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('Mock submission:', data);
  return { organizationId: `org-${Date.now()}` };
}
```

#### 8. Test Next.js Dev Server

```bash
npm run dev
```

Open http://localhost:3000 - you should see the homepage.

#### 9. Platform-Specific Troubleshooting

**Windows Issues:**
- Line ending errors: See [WINDOWS-SETUP.md](../WINDOWS-SETUP.md#common-windows-issues)
- `npm run dev` not working: Try using separate terminals for frontend/backend
- Port conflicts: Use `netstat -ano | findstr :3000`

**macOS/Linux Issues:**
- Port conflicts: Use `lsof -i :3000`
- Permission denied: Check file permissions

**All Platforms:**
- See [CROSS-PLATFORM.md](../CROSS-PLATFORM.md#-common-cross-platform-issues) for common issues

#### 10. DC Deploy Staging Access (Needed on Feb 6)

**Important:** You don't need staging access until Feb 6 (integration day). Use mock data for Feb 4-5 development.

**When You Need It:**
- ✅ Feb 6 AM: Test frontend with Shashi's real API
- ✅ Feb 6 PM: Deploy frontend to staging, integration testing
- ✅ Feb 7: Final QA and mobile testing

**What You Need from Infrastructure Team:**

Before Feb 6, request from Tanuj or infrastructure team:

1. **SSH Access to NaSaSakhiFEStg Server**
   ```bash
   # Server hostname or IP address
   NaSaSakhiFEStg_HOST="<IP address or hostname>"

   # SSH username
   SSH_USER="<your-username>"

   # SSH key (if using key-based auth)
   # Add your public key to server's ~/.ssh/authorized_keys
   ```

2. **Staging Environment URLs**
   ```bash
   # Frontend application URL
   STAGING_APP_URL="http://<NaSaSakhiFEStg_IP>"
   # or
   STAGING_APP_URL="https://staging.nasasakhi.org"

   # API base URL (usually same as app)
   STAGING_API_URL="http://<NaSaSakhiFEStg_IP>/api"
   ```

3. **Firewall/VPN Access (if required)**
   ```bash
   # If servers are behind firewall, you may need:
   # - VPN credentials
   # - IP whitelisting (provide your IP)
   # - Bastion/jump host access
   ```

**How to Connect:**

**A. Test Staging API from Your Browser:**

Once Shashi deploys backend on Feb 6 AM:

```bash
# Open in browser or use curl
curl http://<NaSaSakhiFEStg_IP>/api/reference/categories
curl http://<NaSaSakhiFEStg_IP>/api/health

# Should return JSON response
```

**B. Update Your Local Frontend to Use Staging API:**

On Feb 6 AM, switch from mocks to real API:

```typescript
// Create .env.local for staging API
NEXT_PUBLIC_API_URL="http://<NaSaSakhiFEStg_IP>/api"
# or use localhost if Shashi's running locally
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

Update your API client:

```typescript
// Before (mocks):
import { fetchCategoriesMock } from '@/lib/api/mock';

// After (real API):
const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api';

export async function fetchCategories() {
  const response = await fetch(`${API_BASE}/reference/categories`);
  const json = await response.json();
  if (!json.success) throw new Error(json.error);
  return json.data;
}
```

**C. SSH into NaSaSakhiFEStg Server (for deployment):**

```bash
# First time: Add server to known hosts
ssh <SSH_USER>@<NaSaSakhiFEStg_HOST>

# Example (once you have actual details):
# ssh deploy@192.168.1.100
# or
# ssh deploy@nasasakhi-staging.dcDeploy.com

# You should see Ubuntu server prompt
```

**D. Deploy Your Frontend to Staging:**

Once SSH'd into NaSaSakhiFEStg:

```bash
# Navigate to app directory
cd /var/www/nasa_sakhi  # or wherever app is deployed

# Pull latest code
git pull origin integration/mvp

# Install dependencies
npm install

# Build frontend
npm run build

# Restart PM2
pm2 reload all
# or
pm2 restart nasa-sakhi

# Verify deployment
pm2 status
pm2 logs nasa-sakhi --lines 50
```

**E. Test Deployed Application:**

```bash
# From your local browser
http://<NaSaSakhiFEStg_IP>

# Should see your registration form
# Test all 7 steps end-to-end
```

**Testing Workflow (Feb 6):**

**Morning - Local Integration Testing:**

1. Shashi deploys backend to staging
2. You update `.env.local` to point to staging API
3. Run your frontend locally: `npm run dev`
4. Test registration flow with real API
5. Fix any API contract mismatches
6. Communicate with Shashi to adjust if needed

**Afternoon - Staging Deployment:**

1. Merge your code to `integration/mvp` branch:
   ```bash
   git checkout integration/mvp
   git merge feature/registration-form
   git push origin integration/mvp
   ```

2. SSH into NaSaSakhiFEStg and deploy (see steps above)

3. Test on staging from browser:
   ```
   http://<NaSaSakhiFEStg_IP>/register/step1
   ```

4. Mobile testing:
   - Open Chrome DevTools
   - Toggle device toolbar (Ctrl+Shift+M or Cmd+Shift+M)
   - Test on iPhone SE (375px), iPhone 12 Pro (390px), iPad (768px)
   - Or test on actual mobile device (connect to same network)

**Troubleshooting:**

**Issue: Can't access staging URL from browser**
```bash
# Check if server is reachable
ping <NaSaSakhiFEStg_IP>

# Check if port 80 is open
telnet <NaSaSakhiFEStg_IP> 80

# May need VPN if server is behind firewall
# Contact infrastructure team
```

**Issue: API calls failing with CORS errors**
```bash
# Check browser console for errors
# API should allow your frontend domain
# Shashi may need to configure CORS headers
```

**Issue: Can't SSH into server**
```bash
# Check if you can ping the server
ping <NaSaSakhiFEStg_IP>

# Check if SSH port is open
telnet <NaSaSakhiFEStg_IP> 22

# If using SSH key, ensure correct permissions
chmod 600 ~/.ssh/id_rsa
ssh -i ~/.ssh/id_rsa <SSH_USER>@<NaSaSakhiFEStg_HOST>
```

**Issue: npm run build fails on server**
```bash
# Check Node.js version
node --version  # Should be 18+

# Check disk space
df -h

# Check memory
free -m

# View full error logs
pm2 logs --err --lines 100
```

**Pre-Feb 6 Checklist:**

Before integration day (Feb 6), ensure you have:

- [ ] Staging application URL from infrastructure team
- [ ] SSH access to NaSaSakhiFEStg server (if you'll deploy directly)
- [ ] Tested SSH connection successfully
- [ ] Know where app is deployed (`/var/www/nasa_sakhi` or similar)
- [ ] Understand PM2 commands (restart, logs, status)
- [ ] Reviewed [deployment/DEPLOYMENT-GUIDE.md](../deployment/DEPLOYMENT-GUIDE.md)
- [ ] Contacted Tanuj if any credentials missing
- [ ] Frontend built and tested locally with mocks
- [ ] Ready to switch from mocks to real API

**Alternative: Shashi Deploys for You**

If you're not comfortable with server deployment, Shashi can deploy the integrated application:

1. You merge your code to `integration/mvp`
2. Shashi pulls and deploys
3. You test the deployed application from browser
4. Report any bugs to Shashi

**Deliverable:** ✅ Working dev environment with mock data ready

**Time Check:** If stuck for >30 minutes, reach out to Tanuj immediately.

**Next:** Wait for Tanuj's design system, then proceed to Stage 2 (Component Library)

---

### Stage 2: Component Library - Form Inputs
**Date:** Feb 4 AM (4 hours)

**Task:** Build reusable form input components

Tanuj will provide design system guidelines (colors, spacing, typography). Follow them closely.

**1. TextInput Component**

Create `/src/components/form/TextInput.tsx`:

```typescript
'use client';

import { forwardRef, InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>

        <input
          ref={ref}
          className={`
            w-full px-4 py-3 border rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-500
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        />

        {error && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <span>⚠️</span>
            {error}
          </p>
        )}

        {helperText && !error && (
          <p className="text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
```

**2. Dropdown Component**

Create `/src/components/form/Dropdown.tsx`:

```typescript
'use client';

import { forwardRef, SelectHTMLAttributes } from 'react';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: string;
  helperText?: string;
  placeholder?: string;
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ label, options, error, helperText, placeholder, className = '', ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>

        <select
          ref={ref}
          className={`
            w-full px-4 py-3 border rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-500
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${className}
          `}
          {...props}
        >
          {placeholder && (
            <option value="">{placeholder}</option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && (
          <p className="text-sm text-red-500 flex items-center gap-1">
            <span>⚠️</span>
            {error}
          </p>
        )}

        {helperText && !error && (
          <p className="text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';
```

**3. Checkbox Component**

Create `/src/components/form/Checkbox.tsx`:

```typescript
'use client';

import { forwardRef, InputHTMLAttributes } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  description?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, className = '', ...props }, ref) => {
    return (
      <div className="flex items-start gap-3">
        <input
          ref={ref}
          type="checkbox"
          className={`
            mt-1 w-5 h-5 rounded border-gray-300
            text-blue-600 focus:ring-2 focus:ring-blue-500
            ${className}
          `}
          {...props}
        />

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 cursor-pointer">
            {label}
          </label>
          {description && (
            <p className="text-sm text-gray-500 mt-0.5">{description}</p>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
```

**4. Other Components**

Similarly create:
- `EmailInput.tsx` (extends TextInput with email type)
- `PhoneInput.tsx` (with auto-formatting logic)
- `NumberInput.tsx` (for year)
- `RadioButton.tsx` and `RadioGroup.tsx`
- `CheckboxGroup.tsx` (for multi-select)

**Deliverable:** ✅ Reusable, styled form component library

**Review Checkpoint:** Show components to Tanuj for design approval

---

### Stage 3: Component Library - Form Layout
**Date:** Feb 4 AM (2 hours)

**Task:** Build layout components for multi-step form

**1. Progress Indicator**

Create `/src/components/layout/ProgressIndicator.tsx`:

```typescript
'use client';

interface Step {
  number: number;
  title: string;
  path: string;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export function ProgressIndicator({ steps, currentStep }: ProgressIndicatorProps) {
  return (
    <div className="w-full py-6 bg-white border-b">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    font-semibold text-sm transition-colors
                    ${
                      step.number < currentStep
                        ? 'bg-green-500 text-white' // Completed
                        : step.number === currentStep
                        ? 'bg-blue-600 text-white' // Active
                        : 'bg-gray-200 text-gray-500' // Inactive
                    }
                  `}
                >
                  {step.number < currentStep ? '✓' : step.number}
                </div>

                <p className="text-xs mt-2 text-gray-600 text-center">
                  {step.title}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`
                    flex-1 h-1 mx-2 transition-colors
                    ${step.number < currentStep ? 'bg-green-500' : 'bg-gray-200'}
                  `}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Step {currentStep} of {steps.length}
          </p>
        </div>
      </div>
    </div>
  );
}
```

**2. Form Navigation**

Create `/src/components/layout/FormNavigation.tsx`:

```typescript
'use client';

interface FormNavigationProps {
  onBack?: () => void;
  onNext?: () => void;
  onSaveDraft?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  isSubmitting?: boolean;
  nextLabel?: string;
}

export function FormNavigation({
  onBack,
  onNext,
  onSaveDraft,
  isFirstStep,
  isLastStep,
  isSubmitting,
  nextLabel = 'Next',
}: FormNavigationProps) {
  return (
    <div className="flex items-center justify-between pt-6 border-t">
      <div>
        {!isFirstStep && onBack && (
          <button
            type="button"
            onClick={onBack}
            disabled={isSubmitting}
            className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
          >
            ← Back
          </button>
        )}
      </div>

      <div className="flex items-center gap-4">
        {onSaveDraft && (
          <button
            type="button"
            onClick={onSaveDraft}
            disabled={isSubmitting}
            className="px-6 py-2 text-gray-700 hover:text-gray-900 disabled:opacity-50"
          >
            Save Draft
          </button>
        )}

        {onNext && (
          <button
            type="button"
            onClick={onNext}
            disabled={isSubmitting}
            className="px-8 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Loading...' : isLastStep ? 'Submit' : nextLabel} →
          </button>
        )}
      </div>
    </div>
  );
}
```

**3. Form Header**

Create `/src/components/layout/FormHeader.tsx`:

```typescript
interface FormHeaderProps {
  title: string;
  subtitle?: string;
  helpText?: string;
}

export function FormHeader({ title, subtitle, helpText }: FormHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>

      {subtitle && (
        <p className="text-gray-600 mt-2">{subtitle}</p>
      )}

      {helpText && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-sm text-blue-800">{helpText}</p>
        </div>
      )}
    </div>
  );
}
```

**Deliverable:** ✅ Layout system for multi-step form

---

### Stage 4: Validation Schema with Zod
**Date:** Feb 4 PM (3 hours)

**Task:** Create Zod validation schemas for all 7 steps

**Create `/src/lib/validation/organizationSchema.ts`:**

```typescript
import { z } from 'zod';

export const organizationSchema = z.object({
  organizationName: z
    .string()
    .min(3, 'Organization name must be at least 3 characters')
    .max(100, 'Organization name cannot exceed 100 characters'),

  registrationType: z.enum(['NGO', 'TRUST', 'GOVERNMENT', 'PRIVATE', 'OTHER'], {
    required_error: 'Please select a registration type',
  }),

  registrationNumber: z
    .string()
    .min(1, 'Registration number is required')
    .max(50, 'Registration number cannot exceed 50 characters'),

  yearEstablished: z
    .number({
      required_error: 'Year of establishment is required',
      invalid_type_error: 'Year must be a number',
    })
    .int()
    .min(1800, 'Year must be 1800 or later')
    .max(new Date().getFullYear(), 'Year cannot be in the future'),

  faithId: z.string().optional(),

  socialCategoryIds: z.array(z.string()).optional(),
});

export type OrganizationFormData = z.infer<typeof organizationSchema>;
```

Similarly create schemas for:
- `contactSchema.ts` (Step 2)
- `servicesSchema.ts` (Step 3)
- `branchesSchema.ts` (Step 4)
- `languagesSchema.ts` (Step 5)
- `documentsSchema.ts` (Step 6)

**Deliverable:** ✅ Complete validation schemas with error messages

---

### Stages 5-16: Implementation Details

Due to space constraints, I'll provide high-level guidance for remaining stages. The pattern is:

1. **Create page component** (e.g., `/src/app/register/step1/page.tsx`)
2. **Use React Hook Form** with Zod schema
3. **Use mock API** for data fetching
4. **Implement validation** on blur and on submit
5. **Add navigation** (Back/Next buttons)
6. **Test thoroughly** before moving to next stage

**Key Files You'll Create:**

- **Step 1:** Organization details form
- **Step 2:** Contact information form
- **Step 3:** Categories/resources with dynamic filtering
- **Step 4:** Dynamic branch list (add/remove)
- **Step 5:** Language multi-select with search
- **Step 6:** File upload with drag-and-drop
- **Step 7:** Read-only summary with edit buttons

**Integration (Stage 13):**

Replace mock API calls with real API:

```typescript
// Before (using mocks):
import { fetchCategoriesMock } from '@/lib/api/mock';
const categories = await fetchCategoriesMock();

// After (using real API):
import { fetchCategories } from '@/lib/api/client';
const categories = await fetchCategories();
```

---

## 🎨 Component Design Guidelines

### Design System (Provided by Tanuj)

**Colors:**
- Primary: `#2563EB` (blue-600)
- Success: `#10B981` (green-500)
- Error: `#EF4444` (red-500)
- Gray: `#6B7280` (gray-500)

**Typography:**
- Font: Inter (already configured in Tailwind)
- Headings: `font-semibold`
- Body: `font-normal`
- Labels: `font-medium text-sm`

**Spacing:**
- Small: `space-y-4`
- Medium: `space-y-6`
- Large: `space-y-8`

**Components:**
- Border radius: `rounded-md` (0.375rem)
- Input padding: `px-4 py-3`
- Button padding: `px-6 py-2`

### Accessibility

- All inputs have `<label>` with `htmlFor`
- Error messages have role="alert"
- Focus indicators visible (ring-2)
- Color contrast ratio >4.5:1
- Touch targets ≥44x44px on mobile

---

## ✅ Validation Rules Reference

Key validation rules from PRD:

| Field | Min | Max | Format | Required |
|-------|-----|-----|--------|----------|
| Organization Name | 3 chars | 100 chars | Text | Yes |
| Email | - | 100 chars | email@domain.com | Yes |
| Phone | 10 digits | 10 digits | 6/7/8/9XXXXXXXXX | Yes |
| PIN Code | 6 digits | 6 digits | Numeric | Yes |
| Year | 1800 | Current year | Integer | Yes |

**Error Messages:**
- Clear, actionable, non-technical
- Example: "Email address is required" (not "Field cannot be empty")
- Example: "Phone number must be 10 digits" (not "Invalid format")

---

## 🔗 Integration Process

### How Your Work Connects to Shashi's

**Phase 1: Independent (Feb 4-5)**
- You build UI with mock data
- Shashi builds API with Postman
- No coordination needed

**Phase 2: Integration (Feb 6 AM)**
- Shashi merges backend first
- You switch from mocks to real API
- Test together locally
- Fix any mismatches

**Phase 3: Staging (Feb 6 PM)**
- You merge your frontend
- Full app deployed to staging
- End-to-end testing
- Bug fixes

**Integration Checklist:**
- [ ] All API calls use correct endpoints
- [ ] Request payloads match API expectations
- [ ] Response data parsing works correctly
- [ ] Error handling works for API errors
- [ ] Loading states shown during API calls
- [ ] File uploads work with real backend

---

## 📚 Resources & Documentation

**Reference Documents:**
1. **PRD.md** - Product requirements (sections 4, 7, 8)
2. **PRD-DataEntry-Validation.md** - All validation rules
3. **Design System** - `/docs/DESIGN_SYSTEM.md` (Tanuj creates)

**Technical Docs:**
- React Hook Form: https://react-hook-form.com
- Zod: https://zod.dev
- Tailwind CSS: https://tailwindcss.com
- Next.js App Router: https://nextjs.org/docs/app

---

## ✅ Success Criteria

By **Feb 7 evening**, you must have:

### Must-Have (P0):
- ✅ All 7 steps functional with proper navigation
- ✅ Client-side validation working (Zod)
- ✅ File upload UI working
- ✅ Draft save/resume working
- ✅ Mobile responsive (375px+)
- ✅ Integrated with Shashi's backend
- ✅ Polished for customer demo

### Should-Have (P1):
- ✅ Loading states during API calls
- ✅ Error notifications
- ✅ Success confirmations
- ✅ Keyboard navigation

**Good luck! You're building the front door to a platform that will help thousands of organizations serve women and children. Make it welcoming! 🚀**
