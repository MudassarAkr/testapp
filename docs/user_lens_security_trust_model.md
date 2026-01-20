# UserLens — Security & Trust Model

*(Companion Document to the UserLens PRD)*

---

## 1. Purpose

This document defines the **Security & Trust Model** for UserLens. It exists to ensure that **all system components are designed defensively**, assuming malicious actors, compromised tokens, and untrusted inputs.

This document is **mandatory reference material** for:
- Backend API design
- Authentication & authorization logic
- Payment and wallet handling
- AI-assisted code generation

---

## 2. Core Trust Assumptions (Non‑Negotiable)

The system MUST assume:

- Clients are **untrusted**
- Testers are **untrusted**
- Frontend requests are **untrusted**
- Network traffic is **untrusted**
- Uploaded content is **untrusted**
- Auth tokens **can be stolen**
- Users will **bypass the UI** if possible
- Requests can be **replayed or reordered**

> **Security Principle #1:** Nothing is trusted unless verified server‑side.

---

## 3. Threat Actors

| Actor | Description |
|------|-------------|
| Malicious Tester | Attempts to get paid without real work |
| Malicious Client | Attempts to get free feedback |
| Impersonator | Tries to act as another user |
| Bot | Automates fake accounts or submissions |
| Payment Abuser | Exploits payouts or chargebacks |
| Curious User | Tries APIs out of order |

---

## 4. Authentication Security Model

### 4.1 Token Trust Rules

- Tokens are bearer tokens and **not proof of authority**
- Tokens may be stolen or replayed
- Token presence ≠ permission

### Required Controls
- Short‑lived access tokens
- Role validation on every request
- Ownership checks on every resource
- Token revocation on:
  - Password change
  - Suspicious activity
  - Abuse detection

---

## 5. Authorization Model (Critical)

Authorization MUST verify **both**:

1. User role (Client / Tester / Admin)
2. Resource ownership or assignment

### Forbidden Assumptions
- UI hiding equals security ❌
- Logged‑in user equals authorized ❌

---

## 6. State Machine Enforcement

All major entities MUST follow strict server‑enforced state machines.

### 6.1 Test Lifecycle

```
DRAFT → PAID → LIVE → IN_PROGRESS → REVIEW → COMPLETED
```

### Rules
- Clients cannot skip payment
- Testers cannot submit unless assigned
- Payouts cannot occur unless completed
- States only move forward

> State transitions MUST be validated server‑side.

---

## 7. Payment & Wallet Security

### 7.1 Trust Assumptions

- Clients may attempt to avoid payment
- Testers may attempt early withdrawal
- Webhooks may be spoofed

### Required Controls
- Stripe webhook signature verification
- Wallet balances updated **only server‑side**
- Client payment required before test visibility
- Delayed payouts with dispute buffer

### Forbidden
- Frontend‑controlled balances ❌
- Manual payout triggers from client UI ❌

---

## 8. Attack Vectors & Mitigations

### Fake Tester Submissions
**Mitigations:**
- Minimum completion time
- Similarity detection
- Reputation scoring

---

### Client Rejects All Submissions
**Mitigations:**
- Mandatory rejection reason
- Auto‑approval timeout
- Admin override

---

### API Call Reordering
**Mitigations:**
- State validation on every endpoint
- Ownership verification

---

### Token Replay Attacks
**Mitigations:**
- Token rotation
- IP/device anomaly detection
- Re‑authentication for sensitive actions

---

### Multiple Tester Accounts
**Mitigations:**
- Phone number uniqueness
- Device fingerprinting
- One payout account per user

---

### Malicious Website Links
**Mitigations:**
- URL validation
- Safe browsing checks
- Manual admin review for flagged domains

---

## 9. Input Validation Rules

- All inputs validated server‑side
- URLs must resolve and return valid HTTP responses
- File uploads must be type‑restricted
- Text fields length‑limited
- IDs must be ownership‑checked

---

## 10. Privacy & Data Protection

- Clients cannot access tester personal data
- Testers cannot see client billing data
- Feedback visible only to test owner
- Admin access is logged

---

## 11. Admin Trust Model

### Admin Capabilities
- Resolve disputes
- Override approvals
- Ban or suspend users

### Controls
- Admin actions logged
- Elevated authentication required
- No public admin APIs

---

## 12. Logging & Auditing

The system MUST log:
- Payments
- State transitions
- Approvals and rejections
- Payouts
- Admin actions

Logs are append‑only and immutable.

---

## 13. Security Invariants

The following MUST always hold:

- Money cannot be created or destroyed
- Testers cannot be paid without valid work
- Clients cannot receive feedback without paying
- Users cannot act outside their role
- Frontend never controls authority

---

## 14. AI Agent Implementation Rules

Any AI generating code for UserLens MUST:

- Treat frontend as hostile
- Enforce role + ownership checks
- Validate state transitions
- Assume abuse is common
- Never trust client‑side values

---

## Final Note

This Security & Trust Model is essential for building UserLens as a **production‑grade, abuse‑resistant platform**. Without it, the system is vulnerable by design.

