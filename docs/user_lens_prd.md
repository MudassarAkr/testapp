# Product Requirements Document (PRD)

## Product Name
**UserLens** – Real User UX Testing Platform

## Document Purpose
This PRD defines the complete functional, non-functional, and system requirements for **UserLens**. It is written so that a **human developer or AI agent** can use it as a single source of truth to design, implement, and evaluate the product.

---

## 1. Product Overview

### 1.1 Problem Statement
Product owners, startups, and developers struggle to understand how real users experience their websites or applications. Existing UX testing tools are often:
- Expensive
- Complex to configure
- Overkill for early-stage teams

There is a need for a **simple, affordable, and fast** platform that connects real users with product owners for structured UX feedback.

### 1.2 Solution
UserLens is a **two-sided UX testing marketplace** where:
- Clients create UX tests for their websites/apps
- Verified users (testers) complete tasks and provide feedback
- Payments are handled securely with platform-controlled release

---

## 2. Goals & Objectives

### 2.1 Business Goals
- Enable fast UX feedback for digital products
- Monetize via per-test platform fees
- Build trust through verification and escrow-style payments

### 2.2 User Goals
**Clients**:
- Quickly validate usability
- Get honest human feedback
- Pay only for completed tests

**Testers**:
- Earn money for completing UX tests
- Access fair and transparent payouts

---

## 3. User Roles & Permissions

### 3.1 Roles
1. **Client** – Creates tests and reviews feedback
2. **Tester** – Completes tests and earns money
3. **Admin** – Moderates platform activity

### 3.2 Role Constraints
- A single account can only have one role
- Role is selected at signup and cannot be changed without admin approval

---

## 4. User Journeys & Workflows

### 4.1 Authentication Flow

#### Signup Options
- Email + Password
- Google OAuth

#### Constraints
- Email verification required
- Google OAuth auto-verifies email
- Testers must also verify phone number via OTP

---

### 4.2 Client Workflow

#### Step 1: Account Setup
- Enter name and company (optional)
- Add billing information

#### Step 2: Create Test
Client provides:
- Test title
- Website/App URL
- Short description

System validations:
- URL must resolve and return valid HTTP response
- Unsafe URLs are rejected

#### Step 3: Define Tasks
- Task list (max configurable)
- Instructions per task

#### Step 4: Define Feedback Questions
Supported types:
- Multiple choice
- Rating scale
- Open text

Constraints:
- Minimum number of questions required

#### Step 5: Select Testers
- Number of testers
- Target demographics (country, device)

#### Step 6: Payment
- Client pays full amount upfront
- Payment held by platform
- Test published only after successful payment

#### Step 7: Review Submissions
- Approve or reject submissions
- Rate testers
- No action within review window → auto-approval

---

### 4.3 Tester Workflow

#### Step 1: Account Verification
- Email verified
- Phone OTP verified

#### Step 2: Browse Tests
- Only eligible tests shown

#### Step 3: Apply for Test
- System checks tester level and availability

#### Step 4: Complete Test
- Follow tasks
- Answer questions
- Upload optional screenshots or recordings

Constraints:
- Minimum completion time enforced
- One submission per test

#### Step 5: Submission Review
- Status: Pending → Approved / Rejected

#### Step 6: Earnings & Withdrawal
- Wallet system
- Minimum withdrawal threshold
- Weekly payouts

---

## 5. Payments & Financial Logic

### 5.1 Client Payments
- Handled via Stripe
- Platform fee deducted automatically
- Funds held until submission resolution

### 5.2 Tester Payouts
- Funds released after approval or auto-approval
- Delayed payout buffer to handle disputes

### 5.3 Edge Cases
- Client chargeback → payouts temporarily frozen
- Client abuse → account suspension

---

## 6. Trust, Ratings & Abuse Prevention

### 6.1 Ratings
- Clients rate testers
- Testers rate clients

### 6.2 Abuse Prevention
- CAPTCHA on signup & submissions
- Device/IP checks
- Duplicate response detection
- Manual admin review

---

## 7. Admin Panel Requirements

### Admin Capabilities
- View all users and tests
- Suspend or ban accounts
- Resolve disputes
- Override approvals
- View platform analytics

---

## 8. Notifications & Communication

### Email Notifications
- Signup verification
- Test approval
- Submission status
- Payment events

### In-App Notifications
- Test assignments
- Review results
- Wallet updates

---

## 9. Non-Functional Requirements

### Performance
- Support concurrent test submissions
- Page load < 2 seconds

### Security
- HTTPS only
- Secure token handling
- No sensitive data stored client-side

### Scalability
- Modular architecture
- Support future mobile app integration

---

## 10. Technical Stack (Suggested)

- Frontend: Next.js
- Backend: Node.js / NestJS
- Database: PostgreSQL (Supabase)
- Auth: Supabase Auth or Firebase Auth
- Storage: Firebase Storage / Cloudinary
- Payments: Stripe
- Emails: Resend
- Hosting: Vercel

---

## 11. MVP Scope

### Included in MVP
- Auth & role separation
- Test creation & submission
- Payments & wallet
- Ratings
- Admin moderation

### Post-MVP
- AI feedback summaries
- Screen recording
- Mobile app
- Advanced analytics

---

## 12. Success Metrics

- Test completion rate
- Repeat clients
- Tester approval rate
- Revenue per test

---

## 13. Risks & Mitigations

| Risk | Mitigation |
|-----|-----------|
| Fraudulent testers | Phone verification + ratings |
| Client abuse | Prepaid model + admin review |
| Low-quality feedback | Minimum time + moderation |

---

## 14. Final Notes
UserLens is designed to be a **trust-first, human-centric UX testing platform**. All decisions prioritize fairness, transparency, and usability.

